import { genAI } from './geminiService';

export async function getCropPriceDetails(formData) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = `You are an agricultural market expert. Provide detailed price information and market insights for ${formData.crop} in ${formData.district}, ${formData.state}. Include actual numerical data and specific details in the following format:

1. CURRENT MARKET PRICE:
- Current Price Range: [EXACT price range in ₹/quintal]
- Price Trend: [SPECIFY if increasing/decreasing with percentage]
- Monthly Change: [EXACT percentage or amount change]
- Yearly Change: [EXACT percentage or amount change]

2. BEST SELLING LOCATIONS:
A. Local Markets:
- [Market Name 1]: [Location, Price range, Market days]
- [Market Name 2]: [Location, Price range, Market days]
- [Market Name 3]: [Location, Price range, Market days]

B. Trading Hubs:
- [Hub Name 1]: [Location, Wholesale price, Storage facilities]
- [Hub Name 2]: [Location, Wholesale price, Storage facilities]
- [Hub Name 3]: [Location, Wholesale price, Storage facilities]

3. PRICE FORECAST:
- Next Month Trend: [EXACT expected price range]
- Seasonal Variations: [Month-wise price expectations]
- Price Factors:
  * [Factor 1 with impact]
  * [Factor 2 with impact]
  * [Factor 3 with impact]
- Risk Factors:
  * [Risk 1 with potential impact]
  * [Risk 2 with potential impact]
  * [Risk 3 with potential impact]

Please ensure all prices are in ₹/quintal and provide specific numerical data wherever possible.`;

    console.log('Sending request with prompt:', prompt);
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log('Received API response:', text);

    // Split the response into sections
    const sections = text.split(/\d+\.\s+/);
    
    // Parse each section
    const currentMarketPrice = parseCurrentMarketPrice(sections[1] || '');
    const bestSellingLocations = parseBestSellingLocations(sections[2] || '');
    const priceForecast = parsePriceForecast(sections[3] || '');

    return {
      currentMarketPrice,
      bestSellingLocations,
      priceForecast
    };
  } catch (error) {
    console.error('Error in getCropPriceDetails:', error);
    throw error;
  }
}

function parseCurrentMarketPrice(text) {
  if (!text) return {};
  
  // Extract price range (looking for ₹ symbol and numbers)
  const priceRangeMatch = text.match(/(?:Price Range|price range|price):?\s*(₹?\s*[\d,]+-[\d,]+|₹?\s*[\d,]+(?:\s*per\s*quintal)?)/i);
  
  // Extract trend (looking for percentage and trend words)
  const trendMatch = text.match(/(?:trend|trending):?\s*(increasing|decreasing|stable)[^.]*?(\d+(?:\.\d+)?%)?/i);
  
  // Extract monthly change (looking for month and percentage)
  const monthlyMatch = text.match(/(?:monthly|month|last month)[^.]*?(\d+(?:\.\d+)?%|₹\s*[\d,]+)/i);
  
  // Extract yearly change (looking for year and percentage)
  const yearlyMatch = text.match(/(?:yearly|year|last year)[^.]*?(\d+(?:\.\d+)?%|₹\s*[\d,]+)/i);

  return {
    priceRange: priceRangeMatch ? priceRangeMatch[1].trim() : '',
    priceTrend: trendMatch ? `${trendMatch[1]}${trendMatch[2] ? ` by ${trendMatch[2]}` : ''}` : '',
    monthComparison: monthlyMatch ? monthlyMatch[1] : '',
    yearComparison: yearlyMatch ? yearlyMatch[1] : ''
  };
}

function parseBestSellingLocations(text) {
  if (!text) return { localMarkets: [], tradingHubs: [] };

  const [localSection = '', hubSection = ''] = text.split(/[A-Z]\.\s*(?:Local Markets|Trading Hubs):/i);

  function parseMarketList(section) {
    const markets = [];
    const lines = section.split('\n').filter(line => line.trim());
    let currentMarket = null;

    for (const line of lines) {
      if (line.trim().startsWith('-')) {
        if (currentMarket) {
          markets.push(currentMarket);
        }
        currentMarket = {
          name: line.replace(/^-\s*/, '').split(':')[0].trim(),
          details: []
        };
        const details = line.split(':')[1];
        if (details) {
          currentMarket.details.push(details.trim());
        }
      } else if (currentMarket && line.trim()) {
        currentMarket.details.push(line.trim());
      }
    }

    if (currentMarket) {
      markets.push(currentMarket);
    }

    return markets;
  }

  return {
    localMarkets: parseMarketList(localSection),
    tradingHubs: parseMarketList(hubSection)
  };
}

function parsePriceForecast(text) {
  if (!text) return {};

  // Extract next month trend
  const trendMatch = text.match(/Next Month Trend:?\s*([^\\n]+)/i);
  
  // Extract seasonal variations
  const variationsMatch = text.match(/Seasonal Variations:?\s*([^\\n]+)/i);
  
  // Extract factors
  const factors = [];
  const risks = [];
  
  // Split into lines and process each
  const lines = text.split('\n').filter(line => line.trim());
  let collectingFactors = false;
  let collectingRisks = false;
  
  for (const line of lines) {
    if (line.toLowerCase().includes('price factors:')) {
      collectingFactors = true;
      collectingRisks = false;
      continue;
    } else if (line.toLowerCase().includes('risk factors:')) {
      collectingFactors = false;
      collectingRisks = true;
      continue;
    }
    
    if (line.trim().startsWith('*') || line.trim().startsWith('-')) {
      const item = line.replace(/^[*-]\s*/, '').trim();
      if (collectingFactors) {
        factors.push(item);
      } else if (collectingRisks) {
        risks.push(item);
      }
    }
  }

  return {
    nextMonthTrend: trendMatch ? trendMatch[1].trim() : '',
    seasonalVariations: variationsMatch ? variationsMatch[1].trim() : '',
    factors: factors.length > 0 ? factors : [],
    risks: risks.length > 0 ? risks : []
  };
}

import { GoogleGenerativeAI } from '@google/generative-ai';

const API_KEY = 'AIzaSyBnmj4UfDcxRNQbSoiV1xhblEi6bvKoyGE';
const genAI = new GoogleGenerativeAI(API_KEY);

export { genAI };

export async function getFarmingRecommendations(formData) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = `As an expert agricultural advisor, provide comprehensive farming recommendations based on the following information:

Input Parameters:
- Desired Crop: ${formData.crop}
- Land Area: ${formData.landArea} acres
- Soil Type: ${formData.soilType}
- Water Availability: ${formData.waterAvailability}
- Budget: ₹${formData.budget}
- Location: ${formData.location}
- Special Preferences: ${Object.entries(formData.preferences)
  .filter(([_, value]) => value)
  .map(([key]) => key)
  .join(', ')}

Provide a detailed response in the following format. Include SPECIFIC numbers, costs, and practical details for EACH section:

SUMMARY:
[3-4 sentences explaining why the recommendations are suitable, expected profitability, and key challenges]

1. PRIMARY CROP RECOMMENDATIONS:
Main Recommended Crop: [Crop Name]
- Expected Yield: [Specific yield in tons/acre]
- Market Price: [Current price in ₹/quintal]
- Cultivation Period: [Months from planting to harvest]
- Water Requirements: [Amount in mm/season]
- Fertilizer Requirements: [NPK ratio and kg/acre]

Why This Is Your Best Option:
- Soil Suitability: [Explain compatibility]
- Climate Compatibility: [Explain for location]
- Water Usage: [Explain alignment with availability]

Economic Details:
- Expected Revenue: [Calculate based on yield and price]
- Estimated Costs: [Break down major expenses]
- Potential Profit: [Revenue minus costs]
- ROI: [Calculate percentage]

2. ALTERNATIVE CROPS:
List 2-3 alternative crops with:
- Crop name and variety
- Why it's suitable as an alternative
- Expected yield and market price
- Key advantages and disadvantages

3. FARMING PRACTICES:
A. Land Preparation:
- Specific steps with measurements
- Required equipment
- Estimated costs per step

B. Planting:
- Timing and method
- Seed/seedling requirements
- Spacing details
- Labor requirements

C. Irrigation:
- Schedule and method
- Water conservation techniques
- Warning signs of water stress

D. Fertilization:
- Types and quantities
- Application schedule
- Cost breakdown

4. RESOURCE OPTIMIZATION:
A. Water Management:
- Irrigation schedule
- Water-saving techniques
- Monitoring methods

B. Labor Planning:
- Number of workers needed
- Task allocation
- Cost estimates

5. BUDGET ALLOCATION:
Break down the ₹${formData.budget} budget into:
- Land preparation costs
- Seeds/seedlings
- Fertilizers and pesticides
- Labor costs
- Irrigation setup
- Equipment rental
- Contingency fund

6. RISK ASSESSMENT & MITIGATION:
A. Weather Risks:
- Potential issues
- Mitigation strategies
- Insurance options

B. Market Risks:
- Price fluctuation patterns
- Storage solutions
- Alternative market options

C. Pest/Disease Risks:
- Common problems
- Prevention methods
- Treatment costs

7. SEASONAL TIMELINE:
Month-by-month schedule including:
- Land preparation timing
- Planting dates
- Fertilizer application
- Irrigation schedule
- Expected harvest time

Ensure each section has specific, actionable information with numbers and practical details.`;

    console.log('Sending request with formData:', formData);
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log('Received API response:', text);
    
    // Split into sections and ensure we have valid text
    const sections = text.split(/\d+\.\s+/).filter(Boolean);
    if (!sections || sections.length === 0) {
      throw new Error('Invalid API response format');
    }

    // Extract summary (first section) and remaining content
    const summary = sections[0].replace('SUMMARY:', '').trim();
    const contentSections = sections.slice(1);

    // Ensure we have all required sections
    if (contentSections.length < 7) {
      throw new Error('Missing required sections in API response');
    }

    const recommendations = {
      summary,
      primaryCrops: parsePrimaryCropSection(contentSections[0]),
      alternativeCrops: parseAlternativeCropsSection(contentSections[1]),
      farmingPractices: parseGenericSection(contentSections[2]),
      resourceOptimization: parseGenericSection(contentSections[3]),
      budgetAllocation: parseGenericSection(contentSections[4]),
      riskAssessment: parseGenericSection(contentSections[5]),
      timeline: parseGenericSection(contentSections[6])
    };
    
    console.log('Parsed recommendations:', recommendations);
    return recommendations;
  } catch (error) {
    console.error('Error getting farming recommendations:', error);
    throw error;
  }
}

function parsePrimaryCropSection(text) {
  if (!text) return [];
  
  const lines = text.split('\n').filter(line => line.trim());
  const crop = {
    name: '',
    yield: '',
    marketPrice: '',
    cultivationPeriod: '',
    waterRequirements: '',
    fertilizerRequirements: '',
    benefits: [],
    economics: {
      revenue: '',
      costs: '',
      profit: '',
      roi: ''
    },
    challenges: []
  };

  let currentSection = '';

  for (const line of lines) {
    const cleanLine = line.replace(/\*+/g, '').trim();
    if (!cleanLine) continue;
    
    if (cleanLine.includes('Main Recommended Crop:')) {
      crop.name = cleanLine.split(':')[1]?.trim() || '';
    } else if (cleanLine.includes('Expected Yield:')) {
      crop.yield = cleanLine.split(':')[1]?.trim() || '';
    } else if (cleanLine.includes('Market Price:')) {
      crop.marketPrice = cleanLine.split(':')[1]?.trim() || '';
    } else if (cleanLine.includes('Cultivation Period:')) {
      crop.cultivationPeriod = cleanLine.split(':')[1]?.trim() || '';
    } else if (cleanLine.includes('Water Requirements:')) {
      crop.waterRequirements = cleanLine.split(':')[1]?.trim() || '';
    } else if (cleanLine.includes('Fertilizer Requirements:')) {
      crop.fertilizerRequirements = cleanLine.split(':')[1]?.trim() || '';
    } else if (cleanLine.includes('Why This Is Your Best Option')) {
      currentSection = 'benefits';
    } else if (cleanLine.includes('Economic Details:')) {
      currentSection = 'economics';
    } else if (cleanLine.includes('Potential Challenges:')) {
      currentSection = 'challenges';
    } else if (cleanLine.match(/^[-•]/)) {
      const content = cleanLine.replace(/^[-•]\s*/, '').trim();
      if (currentSection === 'benefits') {
        crop.benefits.push(content);
      } else if (currentSection === 'challenges') {
        crop.challenges.push(content);
      } else if (currentSection === 'economics') {
        if (cleanLine.includes('Expected Revenue:')) {
          crop.economics.revenue = content.split(':')[1]?.trim() || '';
        } else if (cleanLine.includes('Estimated Costs:')) {
          crop.economics.costs = content.split(':')[1]?.trim() || '';
        } else if (cleanLine.includes('Potential Profit:')) {
          crop.economics.profit = content.split(':')[1]?.trim() || '';
        } else if (cleanLine.includes('ROI:')) {
          crop.economics.roi = content.split(':')[1]?.trim() || '';
        }
      }
    } else if (currentSection === 'economics') {
      if (cleanLine.includes('Expected Revenue:')) {
        crop.economics.revenue = cleanLine.split(':')[1]?.trim() || '';
      } else if (cleanLine.includes('Estimated Costs:')) {
        crop.economics.costs = cleanLine.split(':')[1]?.trim() || '';
      } else if (cleanLine.includes('Potential Profit:')) {
        crop.economics.profit = cleanLine.split(':')[1]?.trim() || '';
      } else if (cleanLine.includes('ROI:')) {
        crop.economics.roi = cleanLine.split(':')[1]?.trim() || '';
      }
    }
  }

  return [crop];
}

function parseAlternativeCropsSection(text) {
  if (!text) return [];
  
  const lines = text.split('\n').filter(line => line.trim());
  const crops = [];
  let currentCrop = null;
  let currentSection = '';

  for (const line of lines) {
    const cleanLine = line.replace(/\*+/g, '').trim();
    if (!cleanLine) continue;

    if (cleanLine.includes('Crop name:') || cleanLine.includes('Crop Name:')) {
      if (currentCrop) crops.push(currentCrop);
      currentCrop = {
        name: cleanLine.split(':')[1]?.trim() || '',
        advantages: [],
        disadvantages: [],
        economics: {
          yield: '',
          price: '',
          profit: ''
        }
      };
    } else if (currentCrop) {
      if (cleanLine.includes('Expected yield:') || cleanLine.includes('Expected Yield:')) {
        currentCrop.economics.yield = cleanLine.split(':')[1]?.trim() || '';
      } else if (cleanLine.includes('Market price:') || cleanLine.includes('Market Price:')) {
        currentCrop.economics.price = cleanLine.split(':')[1]?.trim() || '';
      } else if (cleanLine.includes('Key advantages:')) {
        currentSection = 'advantages';
      } else if (cleanLine.includes('Key disadvantages:')) {
        currentSection = 'disadvantages';
      } else if (cleanLine.match(/^[-•]/)) {
        const point = cleanLine.replace(/^[-•]\s*/, '').trim();
        if (currentSection === 'advantages') {
          currentCrop.advantages.push(point);
        } else if (currentSection === 'disadvantages') {
          currentCrop.disadvantages.push(point);
        }
      }
    }
  }

  if (currentCrop) crops.push(currentCrop);
  return crops;
}

function parseGenericSection(text) {
  if (!text) return [];
  
  const lines = text.split('\n').filter(line => line.trim());
  const items = [];
  let currentItem = null;
  let currentSubItem = null;

  for (const line of lines) {
    const cleanLine = line.replace(/\*+/g, '').trim();
    if (!cleanLine) continue;

    // Check for main section headers (A., B., C., etc. or numbered items)
    if (cleanLine.match(/^[A-Z]\./) || cleanLine.match(/^\d+\./)) {
      if (currentItem) {
        items.push(currentItem);
      }
      currentItem = {
        title: cleanLine,
        points: [],
        subsections: []
      };
    }
    // Check for subsection headers (anything with a colon that's not a data point)
    else if (cleanLine.includes(':') && !cleanLine.match(/^[-•]/) && !cleanLine.match(/^[\d,]+:/)) {
      if (currentItem) {
        currentSubItem = {
          title: cleanLine,
          points: []
        };
        currentItem.subsections.push(currentSubItem);
      }
    }
    // Handle bullet points and regular text
    else {
      const point = cleanLine.replace(/^[-•]\s*/, '').trim();
      if (currentSubItem) {
        currentSubItem.points.push(point);
      } else if (currentItem) {
        currentItem.points.push(point);
      } else {
        // If no current item exists, create one for orphaned points
        currentItem = {
          title: 'General',
          points: [point],
          subsections: []
        };
      }
    }
  }

  if (currentItem) {
    items.push(currentItem);
  }

  return items;
}

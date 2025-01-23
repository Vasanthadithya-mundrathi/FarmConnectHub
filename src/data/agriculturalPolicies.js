const policies = [
  // National Policies
  {
    id: 1,
    name: 'PM-KISAN',
    shortName: 'PMKISAN',
    description: 'Pradhan Mantri Kisan Samman Nidhi',
    type: 'National',
    status: 'Active',
    implementationDate: '2019-02-24',
    details: 'Income support of Rs. 6,000 per year in three equal installments to all land holding farmer families.',
    benefits: [
      'Direct income support to farmers',
      'Helps farmers meet farm input costs',
      'Financial assistance for agricultural expenses',
      'Reduces dependence on moneylenders'
    ],
    drawbacks: [
      'Limited to landholding farmers only',
      'Amount may be insufficient for large-scale farming',
      'Excludes tenant farmers and sharecroppers',
      'Implementation challenges in identifying beneficiaries'
    ],
    eligibility: 'All landholding farmer families with cultivable landholding in their names.',
    link: 'https://pmkisan.gov.in/'
  },
  {
    id: 2,
    name: 'KCC',
    shortName: 'KCC',
    description: 'Kisan Credit Card Scheme',
    type: 'National',
    status: 'Active',
    implementationDate: '1998-08-01',
    details: 'Provides farmers with timely access to credit for their agricultural needs.',
    benefits: [
      'Easy access to credit for farmers',
      'Flexible repayment options',
      'Coverage of multiple agricultural expenses',
      'Reduced interest rates'
    ],
    drawbacks: [
      'Complex documentation process',
      'Risk of debt trap if not managed well',
      'Limited awareness among farmers',
      'Requires collateral in some cases'
    ],
    eligibility: 'All farmers, sharecroppers, tenant farmers, and individuals involved in agricultural activities.',
    link: 'https://www.nabard.org/content1.aspx?id=1720&catid=23&mid=530'
  },
  {
    id: 3,
    name: 'PMFBY',
    shortName: 'PMFBY',
    description: 'Pradhan Mantri Fasal Bima Yojana',
    type: 'National',
    status: 'Active',
    implementationDate: '2016-04-01',
    details: 'Comprehensive crop insurance scheme to protect farmers from crop losses.',
    benefits: [
      'Protection against crop failure',
      'Low premium rates',
      'Coverage for multiple risks',
      'Quick claim settlement'
    ],
    drawbacks: [
      'Delayed claim settlements in some cases',
      'Complex assessment process',
      'Limited coverage of crops',
      'Technical challenges in crop loss assessment'
    ],
    eligibility: 'All farmers including sharecroppers and tenant farmers growing notified crops.',
    link: 'https://pmfby.gov.in/'
  },
  {
    id: 4,
    name: 'eNAM',
    shortName: 'eNAM',
    description: 'Electronic National Agriculture Market',
    type: 'National',
    status: 'Active',
    implementationDate: '2016-04-14',
    details: 'Online trading platform for agricultural commodities to ensure better price discovery.',
    benefits: [
      'Better price discovery for farmers',
      'Reduced market manipulation',
      'Direct access to multiple markets',
      'Transparent trading process'
    ],
    drawbacks: [
      'Limited digital literacy among farmers',
      'Infrastructure requirements',
      'Connectivity issues in rural areas',
      'Resistance from traditional market intermediaries'
    ],
    eligibility: 'All farmers can sell their produce through eNAM enabled markets.',
    link: 'https://enam.gov.in/'
  },
  {
    id: 5,
    name: 'PKVY',
    shortName: 'PKVY',
    description: 'Paramparagat Krishi Vikas Yojana',
    type: 'National',
    status: 'Active',
    implementationDate: '2015-04-01',
    details: 'Promotes organic farming through cluster approach and PGS certification.',
    benefits: [
      'Promotion of organic farming',
      'Better market prices for organic produce',
      'Environmental sustainability',
      'Reduced input costs'
    ],
    drawbacks: [
      'Long conversion period to organic',
      'Initial yield reduction',
      'Limited market linkages',
      'Certification challenges'
    ],
    eligibility: 'Farmers willing to adopt organic farming in clusters.',
    link: 'https://pgsindia-ncof.gov.in/pkvy/index.aspx'
  },
  {
    id: 6,
    name: 'PMKSY',
    shortName: 'PMKSY',
    description: 'Pradhan Mantri Krishi Sinchayee Yojana',
    type: 'National',
    status: 'Active',
    implementationDate: '2015-07-01',
    details: 'Aims to achieve convergence of investments in irrigation at the field level.',
    benefits: [
      'Enhanced irrigation coverage',
      'Improved water use efficiency',
      'Sustainable water conservation',
      'Better crop productivity'
    ],
    drawbacks: [
      'High initial investment',
      'Long implementation time',
      'Limited coverage in some regions',
      'Maintenance challenges'
    ],
    eligibility: 'All farmers in selected districts/areas under the scheme.',
    link: 'https://pmksy.gov.in/'
  },
  {
    id: 7,
    name: 'MIDH',
    shortName: 'MIDH',
    description: 'Mission for Integrated Development of Horticulture',
    type: 'National',
    status: 'Active',
    implementationDate: '2014-04-01',
    details: 'Holistic growth of horticulture sector through area-based regionally differentiated strategies.',
    benefits: [
      'Enhanced horticulture production',
      'Technology promotion',
      'Post-harvest management',
      'Market linkages'
    ],
    drawbacks: [
      'Complex implementation structure',
      'Limited reach in remote areas',
      'High technical requirements',
      'Market volatility risks'
    ],
    eligibility: 'Farmers, entrepreneurs, and organizations involved in horticulture.',
    link: 'https://midh.gov.in/'
  },

  // Additional National Policies
  {
    id: 16,
    name: 'RKVY-RAFTAAR',
    shortName: 'RKVY',
    description: 'Rashtriya Krishi Vikas Yojana - Remunerative Approaches for Agriculture and Allied Sector Rejuvenation',
    type: 'National',
    status: 'Active',
    implementationDate: '2007-08-01',
    details: 'Aims to ensure holistic development of agriculture and allied sectors.',
    benefits: [
      'Infrastructure development',
      'Value addition in agriculture',
      'Increased farm income',
      'Technology promotion'
    ],
    drawbacks: [
      'Complex project approval process',
      'Implementation delays',
      'Limited awareness',
      'Fund utilization issues'
    ],
    eligibility: 'State governments and farmers through state implementation agencies.',
    link: 'https://rkvy.nic.in/'
  },
  {
    id: 17,
    name: 'NFSM',
    shortName: 'NFSM',
    description: 'National Food Security Mission',
    type: 'National',
    status: 'Active',
    implementationDate: '2007-10-01',
    details: 'Aims to increase production of rice, wheat, pulses, coarse cereals, and commercial crops.',
    benefits: [
      'Increased crop productivity',
      'Sustainable agriculture practices',
      'Resource conservation',
      'Enhanced food security'
    ],
    drawbacks: [
      'Weather dependent results',
      'Market price fluctuations',
      'Limited reach in remote areas',
      'Implementation challenges'
    ],
    eligibility: 'Farmers in selected districts growing target crops.',
    link: 'https://nfsm.gov.in/'
  },
  {
    id: 18,
    name: 'SMAM',
    shortName: 'SMAM',
    description: 'Sub-Mission on Agricultural Mechanization',
    type: 'National',
    status: 'Active',
    implementationDate: '2014-04-01',
    details: 'Promotes agricultural mechanization and improves farm machinery access.',
    benefits: [
      'Increased mechanization',
      'Reduced labor costs',
      'Higher productivity',
      'Modern farming techniques'
    ],
    drawbacks: [
      'High initial investment',
      'Maintenance requirements',
      'Training needs',
      'Small farm limitations'
    ],
    eligibility: 'Individual farmers, custom hiring centers, and farmer groups.',
    link: 'https://farmech.gov.in/'
  },

  // More National Policies
  {
    id: 22,
    name: 'NMSA',
    shortName: 'NMSA',
    description: 'National Mission for Sustainable Agriculture',
    type: 'National',
    status: 'Active',
    implementationDate: '2014-04-01',
    details: 'Promotes sustainable agriculture practices through climate change adaptation.',
    benefits: [
      'Climate resilient agriculture',
      'Water use efficiency',
      'Soil health improvement',
      'Risk mitigation'
    ],
    drawbacks: [
      'Complex implementation',
      'Limited awareness',
      'Resource intensive',
      'Long-term results'
    ],
    eligibility: 'All farmers through state agriculture departments.',
    link: 'https://nmsa.dac.gov.in/'
  },
  {
    id: 23,
    name: 'FPO Scheme',
    shortName: 'FPO',
    description: 'Formation and Promotion of Farmer Producer Organizations',
    type: 'National',
    status: 'Active',
    implementationDate: '2020-07-01',
    details: 'Promotes formation of FPOs to enhance farmers bargaining power.',
    benefits: [
      'Collective bargaining power',
      'Better market access',
      'Reduced input costs',
      'Value addition opportunities'
    ],
    drawbacks: [
      'Management challenges',
      'Initial setup costs',
      'Coordination issues',
      'Market competition'
    ],
    eligibility: 'Groups of farmers willing to form FPOs.',
    link: 'https://farmer.gov.in/fpo.aspx'
  },

  // Additional National Policies
  {
    id: 42,
    name: 'NMAET',
    shortName: 'NMAET',
    description: 'National Mission on Agricultural Extension and Technology',
    type: 'National',
    status: 'Active',
    implementationDate: '2014-04-01',
    details: 'Restructured scheme for agricultural extension and technology adoption.',
    benefits: [
      'Technology dissemination',
      'Capacity building',
      'Infrastructure support',
      'Skill development'
    ],
    drawbacks: [
      'Implementation gaps',
      'Resource constraints',
      'Coordination challenges',
      'Limited reach'
    ],
    eligibility: 'All farmers through state extension systems.',
    link: 'https://agricoop.nic.in/en/nmaet'
  },
  {
    id: 43,
    name: 'NPOF',
    shortName: 'NPOF',
    description: 'National Project on Organic Farming',
    type: 'National',
    status: 'Active',
    implementationDate: '2015-04-01',
    details: 'Promotes organic farming practices and certification.',
    benefits: [
      'Organic certification support',
      'Market development',
      'Training programs',
      'Quality assurance'
    ],
    drawbacks: [
      'Long conversion period',
      'Market challenges',
      'Certification costs',
      'Yield reduction initially'
    ],
    eligibility: 'Farmers willing to adopt organic farming.',
    link: 'https://pgsindia-ncof.gov.in/'
  },
  {
    id: 44,
    name: 'RKVY-RAFTAAR',
    shortName: 'RKVY',
    description: 'Rashtriya Krishi Vikas Yojana',
    type: 'National',
    status: 'Active',
    implementationDate: '2007-08-01',
    details: 'State plan scheme for agriculture development.',
    benefits: [
      'Infrastructure development',
      'Production growth',
      'Risk mitigation',
      'Value addition'
    ],
    drawbacks: [
      'State dependency',
      'Fund utilization issues',
      'Implementation delays',
      'Monitoring challenges'
    ],
    eligibility: 'All states and farmers through state plans.',
    link: 'https://rkvy.nic.in/'
  },

  // State Policies - Andhra Pradesh
  {
    id: 8,
    name: 'YSR Rythu Bharosa',
    shortName: 'Rythu Bharosa',
    description: 'Financial assistance scheme for farmers',
    type: 'State',
    state: 'Andhra Pradesh',
    status: 'Active',
    implementationDate: '2019-10-15',
    details: 'Provides financial assistance of Rs. 13,500 per year to farmer families.',
    benefits: [
      'Additional support over PM-KISAN',
      'Includes tenant farmers',
      'Covers landless SC, ST, BC farmers',
      'Interest-free crop loans'
    ],
    drawbacks: [
      'Budget constraints',
      'Verification process delays',
      'Limited to state residents',
      'Implementation challenges'
    ],
    eligibility: 'All farmer families in Andhra Pradesh including tenant farmers.',
    link: 'https://rythubharosa.ap.gov.in/'
  },

  // State Policies - Karnataka
  {
    id: 9,
    name: 'Krishi Bhagya Yojana',
    shortName: 'KBY',
    description: 'Farm ponds and water conservation scheme',
    type: 'State',
    state: 'Karnataka',
    status: 'Active',
    implementationDate: '2014-08-01',
    details: 'Construction of farm ponds and water conservation structures.',
    benefits: [
      'Improved water availability',
      'Drought mitigation',
      'Increased crop yield',
      'Sustainable farming'
    ],
    drawbacks: [
      'Limited coverage',
      'Technical expertise required',
      'Maintenance costs',
      'Weather dependent'
    ],
    eligibility: 'Small and marginal farmers in Karnataka with rainfed agriculture.',
    link: 'http://raitamitra.kar.nic.in/'
  },

  // State Policies - Maharashtra
  {
    id: 10,
    name: 'Mahatma Jyotirao Phule Shetkari Karj Maafi Yojana',
    shortName: 'MJPSKY',
    description: 'Farmer loan waiver scheme',
    type: 'State',
    state: 'Maharashtra',
    status: 'Active',
    implementationDate: '2019-12-21',
    details: 'Loan waiver scheme for farmers with outstanding loans.',
    benefits: [
      'Complete loan waiver up to Rs. 2 lakhs',
      'Relief from debt burden',
      'Fresh credit eligibility',
      'Covers both crop and term loans'
    ],
    drawbacks: [
      'One-time benefit only',
      'Budget impact on state',
      'May promote defaults',
      'Limited to specific period loans'
    ],
    eligibility: 'Farmers in Maharashtra with outstanding loans up to Rs. 2 lakhs.',
    link: 'https://maharashtra.gov.in/'
  },

  // State Policies - Tamil Nadu
  {
    id: 11,
    name: 'Uzhavan App',
    shortName: 'Uzhavan',
    description: 'Mobile app for farmers services',
    type: 'State',
    state: 'Tamil Nadu',
    status: 'Active',
    implementationDate: '2018-06-01',
    details: 'Comprehensive mobile application providing various agricultural services and information.',
    benefits: [
      'Real-time information access',
      'Direct subsidy status tracking',
      'Market price information',
      'Weather updates'
    ],
    drawbacks: [
      'Requires smartphone',
      'Internet connectivity needed',
      'Limited offline features',
      'Technical knowledge required'
    ],
    eligibility: 'All farmers in Tamil Nadu with smartphone access.',
    link: 'https://uzhavan.tn.gov.in/'
  },

  // State Policies - Punjab
  {
    id: 12,
    name: 'Pani Bachao Paise Kamao',
    shortName: 'PBPK',
    description: 'Water conservation incentive scheme',
    type: 'State',
    state: 'Punjab',
    status: 'Active',
    implementationDate: '2018-06-01',
    details: 'Monetary incentives for farmers who save water in paddy cultivation.',
    benefits: [
      'Direct monetary benefits',
      'Water conservation',
      'Sustainable agriculture',
      'Reduced electricity consumption'
    ],
    drawbacks: [
      'Limited to specific crops',
      'Initial adjustment period',
      'Monitoring challenges',
      'Weather dependencies'
    ],
    eligibility: 'Farmers cultivating paddy in Punjab.',
    link: 'https://agripb.gov.in/'
  },

  // State Policies - Gujarat
  {
    id: 13,
    name: 'Mukhya Mantri Kisan Sahay Yojana',
    shortName: 'MMKSY',
    description: 'Crop assistance scheme',
    type: 'State',
    state: 'Gujarat',
    status: 'Active',
    implementationDate: '2020-07-01',
    details: 'Financial assistance to farmers for crop damage due to natural calamities.',
    benefits: [
      'Quick assistance for crop damage',
      'No premium payment',
      'Simple documentation',
      'Wide crop coverage'
    ],
    drawbacks: [
      'Limited compensation amount',
      'Assessment delays possible',
      'State budget dependent',
      'Specific criteria for claims'
    ],
    eligibility: 'All farmers in Gujarat with crop damage due to natural calamities.',
    link: 'https://ikhedut.gujarat.gov.in/'
  },

  // State Policies - Telangana
  {
    id: 14,
    name: 'Rythu Bandhu',
    shortName: 'Rythu Bandhu',
    description: 'Investment support scheme',
    type: 'State',
    state: 'Telangana',
    status: 'Active',
    implementationDate: '2018-05-10',
    details: 'Direct investment support to farmers before crop seasons.',
    benefits: [
      'Direct financial support',
      'Timely assistance for inputs',
      'No repayment required',
      'Simple process'
    ],
    drawbacks: [
      'Limited to landowners',
      'Excludes tenant farmers',
      'Land record dependencies',
      'Budget constraints'
    ],
    eligibility: 'Farmers owning land in Telangana.',
    link: 'https://rythubandhu.telangana.gov.in/'
  },

  // State Policies - Madhya Pradesh
  {
    id: 15,
    name: 'Bhavantar Bhugtan Yojana',
    shortName: 'BBY',
    description: 'Price deficiency payment scheme',
    type: 'State',
    state: 'Madhya Pradesh',
    status: 'Under Review',
    implementationDate: '2017-10-16',
    details: 'Compensates farmers for selling crops below MSP in mandis.',
    benefits: [
      'Price protection',
      'Market price stability',
      'Direct benefit transfer',
      'Promotes formal market sales'
    ],
    drawbacks: [
      'Complex price calculation',
      'Market distortion possible',
      'Limited crop coverage',
      'Budget constraints'
    ],
    eligibility: 'Farmers selling notified crops in registered mandis of MP.',
    link: 'https://mpmandiboard.gov.in/'
  },

  // State Policies - Bihar
  {
    id: 19,
    name: 'Bihar Krishi Road Map',
    shortName: 'BKR',
    description: 'Comprehensive agricultural development program',
    type: 'State',
    state: 'Bihar',
    status: 'Active',
    implementationDate: '2017-01-01',
    details: 'Five-year roadmap for agricultural development in Bihar.',
    benefits: [
      'Increased irrigation coverage',
      'Seed replacement promotion',
      'Farm mechanization',
      'Market linkages'
    ],
    drawbacks: [
      'Implementation challenges',
      'Resource constraints',
      'Weather vulnerabilities',
      'Infrastructure gaps'
    ],
    eligibility: 'All farmers in Bihar.',
    link: 'https://state.bihar.gov.in/'
  },

  // State Policies - Rajasthan
  {
    id: 20,
    name: 'Rajasthan Krishak Sathi Yojana',
    shortName: 'RKSY',
    description: 'Farmer assistance scheme',
    type: 'State',
    state: 'Rajasthan',
    status: 'Active',
    implementationDate: '2019-12-17',
    details: 'Comprehensive scheme for farmer welfare and agricultural development.',
    benefits: [
      'Farm equipment subsidy',
      'Irrigation support',
      'Crop insurance benefits',
      'Market linkages'
    ],
    drawbacks: [
      'Budget limitations',
      'Awareness issues',
      'Processing delays',
      'Documentation requirements'
    ],
    eligibility: 'All farmers registered in Rajasthan.',
    link: 'https://agriculture.rajasthan.gov.in/'
  },

  // State Policies - Uttar Pradesh
  {
    id: 21,
    name: 'UP Kisan Uday Yojana',
    shortName: 'UPKUY',
    description: 'Farmer empowerment scheme',
    type: 'State',
    state: 'Uttar Pradesh',
    status: 'Active',
    implementationDate: '2020-02-01',
    details: 'Comprehensive scheme for farmer welfare in UP.',
    benefits: [
      'Solar pump distribution',
      'Irrigation infrastructure',
      'Modern farming techniques',
      'Market support'
    ],
    drawbacks: [
      'Limited coverage',
      'Implementation delays',
      'Bureaucratic procedures',
      'Resource constraints'
    ],
    eligibility: 'Farmers in Uttar Pradesh with valid documentation.',
    link: 'http://upagripardarshi.gov.in/'
  },

  // State Policies - West Bengal
  {
    id: 24,
    name: 'Krishak Bandhu',
    shortName: 'KB',
    description: 'Farmer assistance scheme',
    type: 'State',
    state: 'West Bengal',
    status: 'Active',
    implementationDate: '2019-01-01',
    details: 'Financial assistance and death benefit scheme for farmers.',
    benefits: [
      'Annual financial support',
      'Death benefit coverage',
      'Crop assistance',
      'Interest-free loans'
    ],
    drawbacks: [
      'Budget constraints',
      'Documentation requirements',
      'Processing time',
      'Limited coverage'
    ],
    eligibility: 'All farmers in West Bengal with valid documentation.',
    link: 'https://wb.gov.in/'
  },

  // State Policies - Kerala
  {
    id: 25,
    name: 'Kerala Karshaka Kshemanidhi',
    shortName: 'KKK',
    description: 'Farmers welfare fund scheme',
    type: 'State',
    state: 'Kerala',
    status: 'Active',
    implementationDate: '2019-11-01',
    details: 'Comprehensive welfare scheme for farmers in Kerala.',
    benefits: [
      'Pension benefits',
      'Medical assistance',
      'Educational support',
      'Insurance coverage'
    ],
    drawbacks: [
      'Limited fund allocation',
      'Eligibility restrictions',
      'Processing delays',
      'Documentation needs'
    ],
    eligibility: 'Registered farmers in Kerala.',
    link: 'https://kerala.gov.in/'
  },

  // State Policies - Odisha
  {
    id: 26,
    name: 'KALIA',
    shortName: 'KALIA',
    description: 'Krushak Assistance for Livelihood and Income Augmentation',
    type: 'State',
    state: 'Odisha',
    status: 'Active',
    implementationDate: '2018-12-31',
    details: 'Direct benefit transfer scheme for farmers welfare.',
    benefits: [
      'Financial assistance',
      'Life insurance coverage',
      'Interest-free loans',
      'Livelihood support'
    ],
    drawbacks: [
      'Beneficiary identification',
      'Fund disbursement delays',
      'Coverage limitations',
      'Administrative issues'
    ],
    eligibility: 'Small and marginal farmers in Odisha.',
    link: 'https://kalia.odisha.gov.in/'
  },

  // State Policies - Himachal Pradesh
  {
    id: 27,
    name: 'Mukhya Mantri Khet Sanrakshan Yojana',
    shortName: 'MMKSY',
    description: 'Chief Minister Farm Protection Scheme',
    type: 'State',
    state: 'Himachal Pradesh',
    status: 'Active',
    implementationDate: '2016-04-01',
    details: 'Solar fencing subsidy scheme for crop protection.',
    benefits: [
      'Crop protection from wildlife',
      'Reduced crop damage',
      'Sustainable solution',
      'Subsidy support'
    ],
    drawbacks: [
      'High initial cost',
      'Maintenance requirements',
      'Technical expertise needed',
      'Limited coverage'
    ],
    eligibility: 'Farmers in Himachal Pradesh affected by wildlife.',
    link: 'https://himachal.nic.in/agriculture'
  },

  // State Policies - Chhattisgarh
  {
    id: 28,
    name: 'Rajiv Gandhi Kisan Nyay Yojana',
    shortName: 'RGKNY',
    description: 'Farmer income support scheme',
    type: 'State',
    state: 'Chhattisgarh',
    status: 'Active',
    implementationDate: '2020-05-21',
    details: 'Input assistance scheme for farmers.',
    benefits: [
      'Direct financial support',
      'Input cost coverage',
      'Timely assistance',
      'Wide crop coverage'
    ],
    drawbacks: [
      'Budget dependency',
      'Seasonal limitations',
      'Verification process',
      'Implementation challenges'
    ],
    eligibility: 'Registered farmers in Chhattisgarh.',
    link: 'https://agriportal.cg.nic.in/'
  },

  // State Policies - Jharkhand
  {
    id: 29,
    name: 'Mukhyamantri Krishi Ashirwad Yojana',
    shortName: 'MKAY',
    description: 'Chief Minister Agriculture Blessing Scheme',
    type: 'State',
    state: 'Jharkhand',
    status: 'Active',
    implementationDate: '2019-12-21',
    details: 'Direct benefit transfer scheme for small and marginal farmers.',
    benefits: [
      'Financial assistance',
      'Seasonal support',
      'Direct bank transfer',
      'Additional state support'
    ],
    drawbacks: [
      'Land record verification',
      'Processing time',
      'Limited coverage',
      'Documentation requirements'
    ],
    eligibility: 'Small and marginal farmers in Jharkhand.',
    link: 'https://jharkhand.gov.in/'
  },
  // State Policies - Assam
  {
    id: 30,
    name: 'Chief Minister Samagra Gramya Unnayan Yojana',
    shortName: 'CMSGUY',
    description: 'Rural development and farm mechanization scheme',
    type: 'State',
    state: 'Assam',
    status: 'Active',
    implementationDate: '2017-04-01',
    details: 'Comprehensive scheme for rural development and farm mechanization.',
    benefits: [
      'Farm mechanization support',
      'Rural infrastructure',
      'Market linkages',
      'Capacity building'
    ],
    drawbacks: [
      'Implementation challenges',
      'Geographic limitations',
      'Resource constraints',
      'Coordination issues'
    ],
    eligibility: 'Rural farmers in Assam.',
    link: 'https://assam.gov.in/'
  },

  // State Policies - Uttarakhand
  {
    id: 31,
    name: 'Deendayal Upadhyaya Sahkarita Kisan Kalyan Yojana',
    shortName: 'DUSKKY',
    description: 'Cooperative farmer welfare scheme',
    type: 'State',
    state: 'Uttarakhand',
    status: 'Active',
    implementationDate: '2019-09-25',
    details: 'Promotes cooperative farming and farmer welfare.',
    benefits: [
      'Cooperative support',
      'Financial assistance',
      'Market access',
      'Technical guidance'
    ],
    drawbacks: [
      'Limited reach',
      'Cooperative formation challenges',
      'Management issues',
      'Resource constraints'
    ],
    eligibility: 'Farmers willing to form cooperatives in Uttarakhand.',
    link: 'https://uttarakhand.gov.in/'
  },

  // State Policies - Haryana
  {
    id: 32,
    name: 'Meri Fasal Mera Byora',
    shortName: 'MFMB',
    description: 'Crop registration and information portal',
    type: 'State',
    state: 'Haryana',
    status: 'Active',
    implementationDate: '2019-06-01',
    details: 'Online portal for crop registration and information management.',
    benefits: [
      'Direct benefit transfer',
      'Transparent system',
      'Easy registration',
      'Better planning'
    ],
    drawbacks: [
      'Digital literacy requirement',
      'Internet connectivity needs',
      'Data accuracy issues',
      'Technical glitches'
    ],
    eligibility: 'All farmers in Haryana.',
    link: 'https://fasal.haryana.gov.in/'
  },

  // State Policies - Jammu & Kashmir
  {
    id: 33,
    name: 'Integrated Sheep Development Scheme',
    shortName: 'ISDS',
    description: 'Sheep farming development program',
    type: 'State',
    state: 'Jammu & Kashmir',
    status: 'Active',
    implementationDate: '2020-03-01',
    details: 'Comprehensive scheme for sheep farming development.',
    benefits: [
      'Breed improvement',
      'Healthcare support',
      'Marketing assistance',
      'Training programs'
    ],
    drawbacks: [
      'Weather dependencies',
      'Limited coverage',
      'Infrastructure needs',
      'Market fluctuations'
    ],
    eligibility: 'Sheep farmers in Jammu & Kashmir.',
    link: 'https://jk.gov.in/'
  },

  // State Policies - Goa
  {
    id: 34,
    name: 'Shetkari Adhar Nidhi',
    shortName: 'SAN',
    description: 'Farmer support fund scheme',
    type: 'State',
    state: 'Goa',
    status: 'Active',
    implementationDate: '2019-10-01',
    details: 'Financial assistance scheme for farmers in Goa.',
    benefits: [
      'Direct financial support',
      'Input subsidies',
      'Marketing support',
      'Technical assistance'
    ],
    drawbacks: [
      'Limited budget',
      'Small farmer base',
      'Processing delays',
      'Documentation needs'
    ],
    eligibility: 'Registered farmers in Goa.',
    link: 'https://www.goa.gov.in/'
  },

  // State Policies - Manipur
  {
    id: 35,
    name: 'Start-Up Manipur Agricultural Scheme',
    shortName: 'SUMAS',
    description: 'Agricultural entrepreneurship scheme',
    type: 'State',
    state: 'Manipur',
    status: 'Active',
    implementationDate: '2020-01-01',
    details: 'Promotes agricultural startups and innovation.',
    benefits: [
      'Financial support',
      'Technical guidance',
      'Market linkages',
      'Innovation promotion'
    ],
    drawbacks: [
      'Limited reach',
      'Complex application',
      'Sustainability challenges',
      'Market risks'
    ],
    eligibility: 'Agricultural entrepreneurs in Manipur.',
    link: 'https://manipur.gov.in/'
  },

  // State Policies - Meghalaya
  {
    id: 36,
    name: 'Meghalaya Milk Mission',
    shortName: 'MMM',
    description: 'Dairy development program',
    type: 'State',
    state: 'Meghalaya',
    status: 'Active',
    implementationDate: '2018-12-01',
    details: 'Comprehensive dairy development scheme.',
    benefits: [
      'Dairy infrastructure',
      'Animal healthcare',
      'Market development',
      'Training support'
    ],
    drawbacks: [
      'Infrastructure gaps',
      'Technical expertise needs',
      'Market development challenges',
      'Resource limitations'
    ],
    eligibility: 'Dairy farmers in Meghalaya.',
    link: 'https://meghalaya.gov.in/'
  },

  // State Policies - Mizoram
  {
    id: 37,
    name: 'Socio-Economic Development Policy',
    shortName: 'SEDP',
    description: 'Comprehensive development policy',
    type: 'State',
    state: 'Mizoram',
    status: 'Active',
    implementationDate: '2019-01-01',
    details: 'Integrated farming and rural development scheme.',
    benefits: [
      'Sustainable farming',
      'Market development',
      'Infrastructure support',
      'Skill development'
    ],
    drawbacks: [
      'Implementation challenges',
      'Resource constraints',
      'Geographic limitations',
      'Market access issues'
    ],
    eligibility: 'Farmers and rural entrepreneurs in Mizoram.',
    link: 'https://mizoram.gov.in/'
  },

  // State Policies - Nagaland
  {
    id: 38,
    name: "Chief Minister's Sustainable Agriculture Mission",
    shortName: "CMSAM",
    description: "Sustainable agriculture promotion scheme",
    type: "State",
    state: "Nagaland",
    status: "Active",
    implementationDate: "2019-04-01",
    details: "Promotes sustainable and organic farming practices.",
    benefits: [
      "Organic certification",
      "Market linkages",
      "Technical support",
      "Input subsidies"
    ],
    drawbacks: [
      "Limited coverage",
      "Implementation gaps",
      "Resource constraints",
      "Market access challenges"
    ],
    eligibility: "Farmers in Nagaland willing to adopt sustainable practices.",
    link: "https://nagaland.gov.in/"
  },

  // State Policies - Sikkim
  {
    id: 41,
    name: "Chief Minister's Sashakt Kisan Yojana",
    shortName: "CMSKY",
    description: "Farmer empowerment scheme",
    type: "State",
    state: "Sikkim",
    status: "Active",
    implementationDate: "2020-03-01",
    details: "Integrated scheme for farmer empowerment and sustainable agriculture.",
    benefits: [
      "Financial support",
      "Technical training",
      "Market access",
      "Infrastructure development"
    ],
    drawbacks: [
      "Limited budget",
      "Implementation challenges",
      "Geographic constraints",
      "Weather dependency"
    ],
    eligibility: "All farmers in Sikkim.",
    link: "https://sikkim.gov.in/"
  },

  // State Policies - Tripura
  {
    id: 40,
    name: 'Mukhyamantri Agri-Tourism Scheme',
    shortName: 'MATS',
    description: 'Agricultural tourism promotion scheme',
    type: 'State',
    state: 'Tripura',
    status: 'Active',
    implementationDate: '2020-09-01',
    details: 'Promotes agri-tourism and farm diversification.',
    benefits: [
      'Additional income',
      'Tourism promotion',
      'Skill development',
      'Infrastructure support'
    ],
    drawbacks: [
      'Initial investment needs',
      'Tourism expertise required',
      'Seasonal variations',
      'Marketing challenges'
    ],
    eligibility: 'Farmers interested in agri-tourism in Tripura.',
    link: 'https://tripura.gov.in/'
  },

  // State Policies - Arunachal Pradesh
  {
    id: 41,
    name: 'Chief Minister’s Sashakt Kisan Yojana',
    shortName: 'CMSKY',
    description: 'Farmer empowerment scheme',
    type: 'State',
    state: 'Arunachal Pradesh',
    status: 'Active',
    implementationDate: '2020-02-01',
    details: 'Comprehensive farmer welfare and empowerment scheme.',
    benefits: [
      'Credit support',
      'Technology adoption',
      'Market linkages',
      'Capacity building'
    ],
    drawbacks: [
      'Geographic challenges',
      'Infrastructure gaps',
      'Implementation issues',
      'Resource limitations'
    ],
    eligibility: 'Farmers in Arunachal Pradesh.',
    link: 'https://arunachalpradesh.gov.in/'
  },

  // Additional State Policies - Union Territories
  {
    id: 45,
    name: 'Delhi Agricultural Marketing Board Schemes',
    shortName: 'DAMB',
    description: 'Marketing support for farmers',
    type: 'State',
    state: 'Delhi',
    status: 'Active',
    implementationDate: '2019-04-01',
    details: 'Support scheme for agricultural marketing in Delhi.',
    benefits: [
      'Market infrastructure',
      'Price support',
      'Direct marketing',
      'Storage facilities'
    ],
    drawbacks: [
      'Limited farming area',
      'Urban challenges',
      'High competition',
      'Space constraints'
    ],
    eligibility: 'Farmers and traders in Delhi.',
    link: 'https://delhi.gov.in/'
  },
  {
    id: 46,
    name: 'Puducherry Farmers Prosperity Scheme',
    shortName: 'PFPS',
    description: 'Comprehensive farmer welfare scheme',
    type: 'State',
    state: 'Puducherry',
    status: 'Active',
    implementationDate: '2020-01-01',
    details: 'Integrated scheme for farmer welfare in Puducherry.',
    benefits: [
      'Financial assistance',
      'Input subsidies',
      'Market support',
      'Technical guidance'
    ],
    drawbacks: [
      'Limited coverage',
      'Budget constraints',
      'Administrative delays',
      'Small farm sizes'
    ],
    eligibility: 'All farmers in Puducherry.',
    link: 'https://www.py.gov.in/'
  },
  {
    id: 47,
    name: 'Ladakh Cold Desert Farming Initiative',
    shortName: 'LCDFI',
    description: 'Specialized farming program for cold desert',
    type: 'State',
    state: 'Ladakh',
    status: 'Active',
    implementationDate: '2020-06-01',
    details: 'Special scheme for high-altitude farming.',
    benefits: [
      'Climate-resilient farming',
      'Greenhouse technology',
      'Market linkages',
      'Traditional crop promotion'
    ],
    drawbacks: [
      'Harsh climate',
      'Limited growing season',
      'Transportation challenges',
      'Resource limitations'
    ],
    eligibility: 'Farmers in Ladakh region.',
    link: 'https://ladakh.nic.in/'
  },
  {
    id: 48,
    name: 'Andaman Sustainable Agriculture Mission',
    shortName: 'ASAM',
    description: 'Island agriculture development program',
    type: 'State',
    state: 'Andaman and Nicobar',
    status: 'Active',
    implementationDate: '2019-08-15',
    details: 'Sustainable agriculture program for island conditions.',
    benefits: [
      'Organic farming',
      'Spice cultivation',
      'Export promotion',
      'Island-specific crops'
    ],
    drawbacks: [
      'Geographic isolation',
      'Transport costs',
      'Limited market access',
      'Natural calamities risk'
    ],
    eligibility: 'Farmers in Andaman and Nicobar Islands.',
    link: 'https://andaman.gov.in/'
  }
];

export default policies;

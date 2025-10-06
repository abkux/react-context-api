// Centralized data for the PDF report

export const associationName = 'Digital Mitti Jaanch Kendra (Saini Nursery Farm)';

export const reportData = {
  name: 'Prabhakant Singh',
  mobile: '6388011997',
  location: 'Kanpur Dehat',
  village: 'Rampur',
  previousCrop: 'Moong',
  farmSize: '1.00 Bigha',
  farmName: 'Prabhakant Singh Farm',
  nextCrop: 'Rice',
  dateOfCollection: '2024-07-09',
  sampleCode: 'S0002515',
  treatmentType: 'Organic',
};

export const tableRows = [
  { name: 'pH', ideal: '6.5 - 7.5', actual: '7.2', statusColor: '#22C55E' },
  { name: 'EC (dS/m)', ideal: '1 - 3', actual: '0.8', statusColor: '#EF4444' },
  { name: 'Organic Carbon', ideal: '0.5 - 0.75%', actual: '0.4%', statusColor: '#EF4444' },
  { name: 'Nitrogen', ideal: '280 - 560 kg/ha', actual: '245 kg/ha', statusColor: '#EF4444' },
  { name: 'Phosphorus(P2O5) *', ideal: '28 - 56 kg/ha', actual: '42 kg/ha', statusColor: '#22C55E' },
  { name: 'Potassium', ideal: '110 - 280 kg/ha', actual: '156 kg/ha', statusColor: '#F59E0B' },
  { name: 'Sulphur', ideal: '10 - 20 mg/kg', actual: '15 mg/kg', statusColor: '#22C55E' },
  { name: 'Magnesium', ideal: '1400 - 2000 ppm', actual: '1200 ppm', statusColor: '#EF4444' },
  { name: 'Calcium', ideal: '1400 - 2000 ppm', actual: '1800 ppm', statusColor: '#22C55E' },
  { name: 'Zinc', ideal: '0.5 - 1.0 mg/kg', actual: '0.4 mg/kg', statusColor: '#EF4444' },
  { name: 'Iron', ideal: '4.0 - 7.0 mg/kg', actual: '8.2 mg/kg', statusColor: '#22C55E' },
  { name: 'Copper', ideal: '0.2 - 0.4 mg/kg', actual: '0.3 mg/kg', statusColor: '#22C55E' },
  { name: 'Boron', ideal: '0.1 - 0.5 mg/kg', actual: '0.3 mg/kg', statusColor: '#22C55E' },
];

// Fertilizer recommendation default rows (used when component doesn't receive rows)
export const fertilizerRecommendationRows = [
  { stage: 'Land preparation', input: 'Farm Yard Manure', dose: '750 kg/acre', method: 'Directly in the soil' },
  { input: '10:26:26', dose: '92 kg/acre', method: 'Directly in the soil' },
  { input: 'Urea', dose: '55 kg/acre', method: 'Directly in the soil' },
  { input: 'Bio Sanjeevni', dose: '1 kg/acre', method: 'Mix with FYM and apply in the soil' },
  { input: 'Zydx Mini Kit', dose: '8 kg/acre', method: 'Mix with FYM and apply in the soil' },
  { stage: 'At the time of Planting', input: 'SOP', dose: '92 kg/acre', method: 'Directly in the soil' },
  { input: 'ICL Polysulphate', dose: '25 kg/acre', method: 'Directly in the soil' },
  { stage: 'At Vegetative growth stage (25-40 DAP)', input: 'Urea', dose: '55 kg/acre', method: 'Directly in the soil' },
  { input: 'CALSIL', dose: '50 kg/acre', method: 'Directly in the soil' },
  { input: 'Micronutrient mix', dose: '5 gm/litre', method: 'Spray from 35 to 60 days after planting, at 7-day intervals.' },
  { stage: 'Tuber Bulking (45-90 DAP)', input: 'Ammonium Sulphate', dose: '30 kg/acre', method: 'Directly in the soil' }
];

// Crop tips default rows
export const cropTips = [
  { stage: 'Before Planting', practice: 'Soil Testing', why: 'Identifies nutrient deficiencies; potatoes need well-balanced nutrition for tuber formation.' },
  { stage: 'Before Planting', practice: 'Seed Treatment (Fungicide + Insecticide + Biofertilizer)', why: 'Protects against seed-borne diseases and soil-borne pests; enhances early root health.' },
  { stage: 'Before Planting', practice: 'Field Prep (Deep Ploughing + Fine Tilth + Ridges)', why: 'Ensures aeration, drainage, and uniform tuber development; prevents waterlogging.' },
  { stage: 'Before Planting', practice: 'Apply FYM/Compost + Gypsum (if compacted)', why: 'Improves structure and calcium availability; reduces hollow heart or cracking.' },
  { stage: 'At Planting', practice: 'Basal Dose (NPK + S + Zn + B)', why: 'Supports shoot growth, root establishment, and proper stolon/tuber initiation.' },
  { stage: 'At Planting', practice: 'Proper Spacing (20–25 cm plants, 60 cm rows)', why: 'Ensures uniform tuber size, canopy, and light interception.' },
  { stage: 'Vegetative (15–30 DAS)', practice: '1st Urea Top-Dress + Irrigation', why: 'Supports shoot/leaf growth; moisture critical for stolon formation and uptake.' },
  { stage: 'Vegetative', practice: 'Weeding + Light Earthing Up', why: 'Reduces competition and supports early tuber bulking.' },
  { stage: 'Tuber Initiation (30–45 DAS)', practice: '2nd Urea Split + Potash + Micronutrients (B + Zn)', why: 'Potash improves tuber size/skin/shelf-life; Boron supports uniform formation.' },
  { stage: 'Tuber Initiation', practice: 'Maintain Moisture Uniformly', why: 'Critical stage—stress or waterlogging reduces tuber number and quality.' },
  { stage: 'Bulking (45–70 DAS)', practice: 'Optional Urea Split + K Fertilizer', why: 'Supports continued growth and sugar accumulation.' },
  { stage: 'Bulking', practice: 'Avoid Excess Nitrogen', why: 'Too much N → foliage heavy, poor tuber development.' },
  { stage: 'Bulking', practice: 'Second Earthing Up (optional)', why: 'Prevents greening; supports bulking.' },
  { stage: 'Maturation (70–90 DAS)', practice: 'Stop N + Controlled Irrigation', why: 'Lets plants mature and tubers harden; reduces rotting.' },
  { stage: 'Pre-Harvest', practice: 'Irrigation withdrawal 10–15 days before harvest', why: 'Aids skin setting and easier harvest.' },
  { stage: 'Post Harvest', practice: 'Residue incorporation + Legume green manure', why: 'Restores organic matter, structure, and reduces disease carryover.' },
  { stage: 'Always', practice: 'Consult soil doctor team when in doubt', why: 'Smart practices from soil to harvest ensure yield and soil health.' },
];

// Derived parameters (the small table under Section 1)
export const derivedParametersRows = [
  { name: 'C:N Ratio', ideal: '10:1-12:1', actual: '13:1', assessment: 'High', statusColor: '#F59E0B' },
  { name: 'CEC Tendency', ideal: 'Medium to High', actual: '-', assessment: 'Weak Holding', statusColor: '#EF4444' },
  { name: 'Ca:Mg Ratio', ideal: '5:1-7:1', actual: '≈ 5:1', assessment: 'Upper Ideal', statusColor: '#F59E0B' },
  { name: 'K:Mg Ratio', ideal: '0.5:1-0.7:1', actual: '≈ 0.57', assessment: 'Balanced', statusColor: '#22C55E' }
];

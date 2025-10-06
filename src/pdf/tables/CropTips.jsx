import { View, Text, StyleSheet } from '@react-pdf/renderer';
import { colors } from '../utils/theme';

const COLS = [110, 180, 220];

const styles = StyleSheet.create({
  sectionTitle: { backgroundColor: colors.tableHeader, color: '#fff', padding: 6, fontSize: 12, marginTop: 8 },
  subtitle: { fontSize: 10, marginTop: 4, marginBottom: 8 },
  table: { borderWidth: 1, borderColor: colors.border, marginTop: 6 },
  row: { flexDirection: 'row', borderBottomWidth: 1, borderColor: colors.border },
  header: { backgroundColor: '#e5efe9' },
  cell: { padding: 5, borderRightWidth: 1, borderColor: colors.border },
  text: { fontSize: 12 },
  disclaimer: { fontSize: 9, color: '#6B7280', marginTop: 8, fontStyle: 'italic' },
});

function Cell({ width, children, style }) {
  return (
    <View style={[styles.cell, { width }, style]}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

export default function CropTips({ title = 'SECTION 5: CROP-SPECIFIC TIPS (POTATO)', subtitle = 'Expert tips for potato cultivation. Follow these practices for better results.', tips = [], rowsPerPage = 16 }) {
  const rows = tips.length ? tips : defaultTips;

  const chunks = [];
  for (let i = 0; i < rows.length; i += rowsPerPage) {
    chunks.push(rows.slice(i, i + rowsPerPage));
  }

  return (
    <View>
      <Text style={styles.sectionTitle}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>

      {chunks.map((chunk, idx) => (
        <View key={idx}>
          {idx > 0 && <View break />}
          <View style={styles.table}>
            <View style={[styles.row, styles.header]} wrap={false}>
              <Cell width={COLS[0]}>Stage</Cell>
              <Cell width={COLS[1]}>Practice</Cell>
              <Cell width={COLS[2]} style={{ borderRightWidth: 0 }}>Why It Matters</Cell>
            </View>
            {chunk.map((r, i) => (
              <View key={i} style={styles.row} wrap={false}>
                <Cell width={COLS[0]}>{r.stage}</Cell>
                <Cell width={COLS[1]}>{r.practice}</Cell>
                <Cell width={COLS[2]} style={{ borderRightWidth: 0 }}>{r.why}</Cell>
              </View>
            ))}
          </View>
        </View>
      ))}
      <Text style={styles.disclaimer}>Consult soil doctor team when in doubt. Smart practices from soil to harvest help ensure maximum yield and soil health.</Text>
    </View>
  );
}

const defaultTips = [
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
  { stage: 'Bulking (45–70 DAS)', practice: 'Optional Urea Split + K Fertilizer', why: 'Supports continu afdhjf afjfhja fajfkaf jfajfkaj ed growth and sugar accumulation.' },
  { stage: 'Bulking', practice: 'Avoid Excess Nitrogen', why: 'Too much N → foliage heavy, poor tuber development.' },
  { stage: 'Bulking', practice: 'Second Earthing Up (optional)', why: 'Prevents greening; supports bulking.' },
  { stage: 'Maturation (70–90 DAS)', practice: 'Stop N + Controlled Irrigation', why: 'Lets plants mature and tubers harden; reduces rotting.' },
  { stage: 'Pre-Harvest', practice: 'Irrigation withdrawal 10–15 days before harvest', why: 'Aids skin setting and easier harvest.' },
  { stage: 'Post Harvest', practice: 'Residue incorporation + Legume green manure', why: 'Restores organic matter, structure, and reduces disease carryover.' },
  { stage: 'Always', practice: 'Consult soil doctor team when in doubt', why: 'Smart practices from soil to harvest ensure yield and soil health.' },
  { stage: '1Bulking', practice: 'Avoid Excess Nitrogen', why: 'Too much N → foliage heavy, poor tuber development.' },
  { stage: '11Bulking', practice: 'Second Earthing Up (optional)', why: 'Prevents greening; supports bulking.' },
  { stage: '123Maturation (70–90 DAS)', practice: 'Stop N + Controlled Irrigation', why: 'Lets plants mature and tubers harden; reduces rotting.' },
  { stage: '13Pre-Harvest', practice: 'Irrigation withdrawal 10–15 days before harvest', why: 'Aids skin setting and easier harvest.' },
  { stage: '46Post Harvest', practice: 'Residue incorporation + Legume green manure', why: 'Restores organic matter, structure, and reduces disease carryover.' },
  { stage: '77Always', practice: 'Consult soil doctor team when in doubt', why: 'Smart practices from soil to harvest ensure yield and soil health.' },

];


// import { View, Text, StyleSheet } from '@react-pdf/renderer';
// import { colors } from '../utils/theme';

// const COLS = [110, 180, 220];

// const styles = StyleSheet.create({
//   sectionTitle: { backgroundColor: colors.tableHeader, color: '#fff', padding: 6, fontSize: 12, marginTop: 8 },
//   subtitle: { fontSize: 10, marginTop: 4, marginBottom: 8 },
//   table: { borderWidth: 1, borderColor: colors.border, marginTop: 6 },
//   row: { flexDirection: 'row', borderBottomWidth: 1, borderColor: colors.border },
//   header: { backgroundColor: '#e5efe9' },
//   cell: { padding: 5, borderRightWidth: 1, borderColor: colors.border },
//   text: { fontSize: 12 },
// });

// function Cell({ width, children, style }) {
//   return (
//     <View style={[styles.cell, { width }, style]}>
//       <Text style={styles.text}>{children}</Text>
//     </View>
//   );
// }

// export default function CropTips({ 
//   title = 'SECTION 5: CROP-SPECIFIC TIPS (POTATO)', 
//   subtitle = 'Expert tips for potato cultivation. Follow these practices for better results.', 
//   tips = [], 
//   rowsPerPage = 16 
// }) {
//   const rows = tips.length ? tips : defaultTips;

//   const chunks = [];
//   for (let i = 0; i < rows.length; i += rowsPerPage) {
//     chunks.push(rows.slice(i, i + rowsPerPage));
//   }

//   return (
//     <View>
//       {/* Title and subtitle - no break here */}
//       <Text style={styles.sectionTitle}>{title}</Text>
//       <Text style={styles.subtitle}>{subtitle}</Text>

//       {chunks.map((chunk, idx) => (
//         <View key={idx}>
//           {/* Only add page break BEFORE subsequent chunks, not the first one */}
//           {idx > 0 && <View break />}
          
//           <View style={styles.table}>
//             <View style={[styles.row, styles.header]} wrap={false}>
//               <Cell width={COLS[0]}>Stage</Cell>
//               <Cell width={COLS[1]}>Practice</Cell>
//               <Cell width={COLS[2]} style={{ borderRightWidth: 0 }}>Why It Matters</Cell>
//             </View>
//             {chunk.map((r, i) => (
//               <View key={i} style={styles.row} wrap={false}>
//                 <Cell width={COLS[0]}>{r.stage}</Cell>
//                 <Cell width={COLS[1]}>{r.practice}</Cell>
//                 <Cell width={COLS[2]} style={{ borderRightWidth: 0 }}>{r.why}</Cell>
//               </View>
//             ))}
//           </View>
//         </View>
//       ))}
//     </View>
//   );
// }

// const defaultTips = [
//   { stage: 'Before Planting', practice: 'Soil Testing', why: 'Identifies nutrient deficiencies; potatoes need well-balanced nutrition for tuber formation.' },
//   { stage: 'Before Planting', practice: 'Seed Treatment (Fungicide + Insecticide + Biofertilizer)', why: 'Protects against seed-borne diseases and soil-borne pests; enhances early root health.' },
//   { stage: 'Before Planting', practice: 'Field Prep (Deep Ploughing + Fine Tilth + Ridges)', why: 'Ensures aeration, drainage, and uniform tuber development; prevents waterlogging.' },
//   { stage: 'Before Planting', practice: 'Apply FYM/Compost + Gypsum (if compacted)', why: 'Improves structure and calcium availability; reduces hollow heart or cracking.' },
//   { stage: 'At Planting', practice: 'Basal Dose (NPK + S + Zn + B)', why: 'Supports shoot growth, root establishment, and proper stolon/tuber initiation.' },
//   { stage: 'At Planting', practice: 'Proper Spacing (20–25 cm plants, 60 cm rows)', why: 'Ensures uniform tuber size, canopy, and light interception.' },
//   { stage: 'Vegetative (15–30 DAS)', practice: '1st Urea Top-Dress + Irrigation', why: 'Supports shoot/leaf growth; moisture critical for stolon formation and uptake.' },
//   { stage: 'Vegetative', practice: 'Weeding + Light Earthing Up', why: 'Reduces competition and supports early tuber bulking.' },
//   { stage: 'Tuber Initiation (30–45 DAS)', practice: '2nd Urea Split + Potash + Micronutrients (B + Zn)', why: 'Potash improves tuber size/skin/shelf-life; Boron supports uniform formation.' },
//   { stage: 'Tuber Initiation', practice: 'Maintain Moisture Uniformly', why: 'Critical stage—stress or waterlogging reduces tuber number and quality.' },
//   { stage: 'Bulking (45–70 DAS)', practice: 'Optional Urea Split + K Fertilizer', why: 'Supports continued growth and sugar accumulation.' },
//   { stage: 'Bulking', practice: 'Avoid Excess Nitrogen', why: 'Too much N → foliage heavy, poor tuber development.' },
//   { stage: 'Bulking', practice: 'Second Earthing Up (optional)', why: 'Prevents greening; supports bulking.' },
//   { stage: 'Maturation (70–90 DAS)', practice: 'Stop N + Controlled Irrigation', why: 'Lets plants mature and tubers harden; reduces rotting.' },
//   { stage: 'Pre-Harvest', practice: 'Irrigation withdrawal 10–15 days before harvest', why: 'Aids skin setting and easier harvest.' },
//   { stage: 'Post Harvest', practice: 'Residue incorporation + Legume green manure', why: 'Restores organic matter, structure, and reduces disease carryover.' },
//   { stage: 'Always', practice: 'Consult soil doctor team when in doubt', why: 'Smart practices from soil to harvest ensure yield and soil health.' },
//   { stage: '1Bulking', practice: 'Avoid Excess Nitrogen', why: 'Too much N → foliage heavy, poor tuber development.' },
//   { stage: '11Bulking', practice: 'Second Earthing Up (optional)', why: 'Prevents greening; supports bulking.' },
//   { stage: '123Maturation (70–90 DAS)', practice: 'Stop N + Controlled Irrigation', why: 'Lets plants mature and tubers harden; reduces rotting.' },
//   { stage: '13Pre-Harvest', practice: 'Irrigation withdrawal 10–15 days before harvest', why: 'Aids skin setting and easier harvest.' },
//   { stage: '46Post Harvest', practice: 'Residue incorporation + Legume green manure', why: 'Restores organic matter, structure, and reduces disease carryover.' },
//   { stage: '77Always', practice: 'Consult soil doctor team when in doubt', why: 'Smart practices from soil to harvest ensure yield and soil health.' },
// ];
import { Document, Page, View, Text, StyleSheet } from '@react-pdf/renderer';
import Header from './components/Header';
import Footer from './components/Footer';
import DataTable from './tables/DataTable';
import NutrientInsightsTable from './tables/NutrientInsightsTable';
import DerivedParametersTable from './tables/DerivedParametersTable';
import FertilizerRecommendationTable from './tables/FertilizerRecommendationTable';
import DerivedInsightsTable from './tables/DerivedInsightsTable';
import NutrientBalanceTable from './tables/NutrientBalanceTable';
import { derivedParametersRows } from './utils/data';
import CropTips from './tables/CropTips';
import Disclaimer from './components/Disclaimer';
import { colors, registerFonts } from './utils/theme';

registerFonts();

const styles = StyleSheet.create({
  page: { padding: 12, paddingTop: 50, paddingBottom: 56, backgroundColor: '#fff' },
  infoWrap: { backgroundColor: '#E8EFEA', padding: 8, marginTop: 6, gap: 6 },
  infoRow: { flexDirection: 'row', gap: 6 },
  infoCol: { flexGrow: 1, flexBasis: 0, backgroundColor: '#E3ECE7', padding: 6 },
  label: { fontSize: 9, color: '#111827' },
  value: { fontSize: 10 },
  metaRow: { flexDirection: 'row', gap: 6, marginTop: 8 },
  metaBox: { flexGrow: 1, flexBasis: 0, backgroundColor: '#EDE0D4', padding: 6 },
  sectionTitle: { backgroundColor: colors.tableHeader, color: '#fff', padding: 5, marginTop: 10, fontSize: 11 },
  helper: { fontSize: 9, color: '#374151', fontStyle: 'italic', marginTop: 4, marginBottom: 4 },
  legendRow: { flexDirection: 'row', justifyContent: 'center', gap: 12, marginTop: 6 },
  dot: (c) => ({ width: 8, height: 8, borderRadius: 4, backgroundColor: c, marginRight: 6 }),
  disclaimer: { marginTop: 16, padding: 10, fontSize: 9, color: '#374151', lineHeight: 1.4 },
});

function Labeled({ label, value }) {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

function Legend() {
  return (
    <View style={styles.legendRow}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={styles.dot(colors.bad)} />
        <Text style={{ fontSize: 10 }}>Low</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={styles.dot(colors.warn)} />
        <Text style={{ fontSize: 10 }}>Medium</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={styles.dot(colors.ok)} />
        <Text style={{ fontSize: 10 }}>High</Text>
      </View>
    </View>
  );
}

export default function SoilReport({ logoUrl, title = "Soil Doctor", reportData = {}, tableRows = [] }) {
  const d = reportData || {};
  const rows = Array.isArray(tableRows) ? tableRows : [];

  return (
    <Document>
      {/* ======================================== */}
      {/* PAGE 1: SOIL ANALYSIS PARAMETERS (Lines 63-105) */}
      {/* ======================================== */}
      <Page size="A4" style={styles.page}>
        <Header title={title} logoUrl={logoUrl} fixed association="Digital Mitti Jaanch Kendra (Saini Nursery Farm)" />

        {/* Farmer Information Section (Lines 66-79) */}
        <View style={styles.infoWrap}>
          <View style={styles.infoRow}>
            <View style={styles.infoCol}><Labeled label="Name:" value={d.name || 'N/A'} /></View>
            <View style={styles.infoCol}><Labeled label="Mob. No.:" value={d.mobile || 'N/A'} /></View>
            <View style={styles.infoCol}><Labeled label="Address:" value={d.location || 'N/A'} /></View>
            <View style={styles.infoCol}><Labeled label="City, State:" value={d.village || 'N/A'} /></View>
          </View>
          <View style={styles.infoRow}>
            <View style={styles.infoCol}><Labeled label="Previous Crop:" value={d.previousCrop || 'N/A'} /></View>
            <View style={styles.infoCol}><Labeled label="Farm Size:" value={d.farmSize || 'N/A'} /></View>
            {/* <View style={styles.infoCol}><Labeled label="Farm Name:" value={d.farmName || 'N/A'} /></View> */}
            <View style={styles.infoCol}><Labeled label="Next Crop:" value={d.nextCrop || 'N/A'} /></View>
          </View>
        </View>

        {/* Sample Information Section (Lines 81-85) */}
        <View style={styles.metaRow}>
          {/* <View style={styles.metaBox}><Labeled label="Date of Collection:" value={d.dateOfCollection || 'N/A'} /></View> */}
          <View style={styles.metaBox}><Labeled label="Sample Code:" value={d.sampleCode || 'N/A'} /></View>
          <View style={styles.metaBox}><Labeled label="Treatment Type:" value={d.treatmentType || 'N/A'} /></View>
        </View>

        {/* Main Soil Analysis Table (Lines 87-89) */}
        <Text style={styles.sectionTitle}>SECTION 1: SOIL ANALYSIS PARAMETERS</Text>
        <Text style={styles.helper}>The table explains each nutrient, its role. Important to understand your soil better.</Text>
        <DataTable rows={rows} startingIndex={0} />

        {/* Derived Parameters Table (Lines 91-101) */}
        <Text style={styles.sectionTitle}>DERIVED PARAMETERS</Text>
        <DataTable 
          rows={derivedParametersRows} 
          startingIndex={rows.length}
          showHeader={false}
        />
        {/* <Legend /> */}
        <Text style={[styles.disclaimer, { marginTop: 8, marginBottom: 8 }]}>Note: This report expresses phosphorus values as P2O5. To convert P2O5 to elemental P, multiply the value by 0.436.</Text>
        <Footer />
      </Page>

      {/* ======================================== */}
      {/* PAGE 2: DETAILED NUTRIENT INSIGHTS (Lines 108-114) */}
      {/* ======================================== */}
      <Page size="A4" style={styles.page}>
        <Header title={title} logoUrl={logoUrl} fixed />
        <Text style={styles.sectionTitle}>SECTION 2: DETAILED NUTRIENT INSIGHTS</Text>
        <Text style={styles.helper}>This page explains each nutrient and its role. Important to understand your soil better.</Text>
        <NutrientInsightsTable />
        <Legend/>
        <Footer />
      </Page>

      {/* ======================================== */}
      {/* PAGE 3: STATUS OF OTHER DERIVED PARAMETERS (Lines 117-122) */}
      {/* ======================================== */}
      <Page size="A4" style={styles.page}>
        <Header title={title} logoUrl={logoUrl} fixed />
        <Text style={styles.sectionTitle}>Status of Other derived parameters</Text>
        <DerivedParametersTable />
        <Legend/>
        <Footer />
      </Page>

      {/* ======================================== */}
      {/* PAGE 4: FERTILIZER RECOMMENDATION (Lines 125-129) */}
      {/* ======================================== */}
       <Page size="A4" style={styles.page}>
         <Header title={title} logoUrl={logoUrl} fixed />
         <Text style={styles.sectionTitle}>SECTION 3: FERTILIZER RECOMMENDATION</Text>
         <Text style={styles.helper}>This page tells you exactly what fertilizers to use, how much, and when. Follow this plan.</Text>
         <FertilizerRecommendationTable />
         <Footer />
       </Page>

      {/* ======================================== */}
      {/* PAGE 5: DERIVED INSIGHTS & NUTRIENT BALANCE */}
      {/* ======================================== */}
      <Page size="A4" style={styles.page}>
        <Header title={title} logoUrl={logoUrl} fixed />
        <Text style={styles.sectionTitle}>SECTION 4: DERIVED INSIGHTS & NUTRIENT BALANCE</Text>
        <Text style={styles.helper}>This section gives deeper insights. Useful but not mandatory to read.</Text>
        
        <DerivedInsightsTable />
        
        <Text style={[styles.sectionTitle, { marginTop: 16 }]}>Points to Keep in Mind During Fertilizer Application</Text>
        <NutrientBalanceTable />
        
        <Footer />
      </Page>

      {/* ======================================== */}
      {/* PAGE 6: CROP TIPS (Lines 125-129) */}
      {/* ======================================== */}
      <Page size="A4" style={styles.page}>
        <Header title={title} logoUrl={logoUrl} fixed/>
        <CropTips />
        <Footer />
      </Page>

       <Page size="A4" style={styles.page}>
         <Header title={title} logoUrl={logoUrl} fixed/>
         <Disclaimer />
         <Footer />
       </Page>
    </Document>
  );
}


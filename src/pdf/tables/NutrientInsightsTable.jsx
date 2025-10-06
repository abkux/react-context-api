import { View, Text, StyleSheet } from '@react-pdf/renderer';
import { colors } from '../utils/theme';
import ProgressBar from '../components/ProgressBar';

const COLS = [120, 140, 180, 200];

const styles = StyleSheet.create({
  table: { borderWidth: 1, borderColor: colors.border },
  header: { backgroundColor: colors.tableHeader, color: '#fff' },
  row: { flexDirection: 'row', borderBottomWidth: 1, borderColor: colors.border },
  cellBase: { padding: 8, borderRightWidth: 1, borderColor: colors.border },
  cellText: { fontSize: 10 },
});

const Cell = ({ width, children, style }) => (
  <View style={[styles.cellBase, { width }, style]}>
    {typeof children === 'string' || typeof children === 'number' ? (
      <Text style={styles.cellText}>{children}</Text>
    ) : (
      children
    )}
  </View>
);

export default function NutrientInsightsTable({ rows = [] }) {
  const defaultRows = [
    { 
      parameter: 'pH', 
      rating: 40, 
      color: '#22C55E', 
      meaning: 'Acidity/alkalinity of soil', 
      function: 'Affects nutrient availability and microbial activity' 
    },
    { 
      parameter: 'EC (dS/m)', 
      rating: 20, 
      color: '#EF4444', 
      meaning: 'Salt level in soil', 
      function: 'Influences root water uptake and nutrient solubility' 
    },
    { 
      parameter: 'OC (%)', 
      rating: 20, 
      color: '#EF4444', 
      meaning: 'Soil organic matter', 
      function: 'Enhances microbial life, structure, and water retention' 
    },
    { 
      parameter: 'Nitrogen', 
      rating: 80, 
      color: '#F59E0B', 
      meaning: 'Growth nutrient', 
      function: 'Promotes leafy growth and chlorophyll formation' 
    },
    { 
      parameter: 'Phosphorus', 
      rating: 20, 
      color: '#EF4444', 
      meaning: 'Energy transfer', 
      function: 'Supports root development and flowering' 
    },
    { 
      parameter: 'Potassium', 
      rating: 80, 
      color: '#F59E0B', 
      meaning: 'Fruit quality regulator', 
      function: 'Helps in water balance, disease resistance, fruit size' 
    },
    { 
      parameter: 'Sulphur', 
      rating: 80, 
      color: '#F59E0B', 
      meaning: 'Protein synthesis', 
      function: 'Improves enzyme function, oil synthesis, and taste' 
    },
    { 
      parameter: 'Magnesium', 
      rating: 80, 
      color: '#F59E0B', 
      meaning: 'Core of chlorophyll', 
      function: 'Essential for photosynthesis and enzyme activation' 
    },
    { 
      parameter: 'Calcium', 
      rating: 20, 
      color: '#EF4444', 
      meaning: 'Cell strength', 
      function: 'Builds strong cell walls, prevents blossom-end rot' 
    },
    { 
      parameter: 'Zinc', 
      rating: 40, 
      color: '#22C55E', 
      meaning: 'Growth hormone support', 
      function: 'Needed for enzyme activation, leaf expansion, rooting' 
    },
    { 
      parameter: 'Iron', 
      rating: 40, 
      color: '#22C55E', 
      meaning: 'Chlorophyll synthesis', 
      function: 'Supports green leaf formation and respiration' 
    },
    { 
      parameter: 'Copper', 
      rating: 80, 
      color: '#F59E0B', 
      meaning: 'Enzyme activator', 
      function: 'Influences pollen viability and disease resistance' 
    },
    { 
      parameter: 'Boron', 
      rating: 40, 
      color: '#22C55E', 
      meaning: 'Pollination & fruit set', 
      function: 'Aids flowering, fruit set, sugar transport, and seed formation' 
    }
  ];

  const dataRows = rows.length > 0 ? rows : defaultRows;

  return (
    <View style={styles.table}>
      <View style={[styles.row, styles.header]}>
        <Cell width={COLS[0]}>Parameter</Cell>
        <Cell width={COLS[1]}>Fertility rating</Cell>
        <Cell width={COLS[2]}>What it means?</Cell>
        <Cell width={COLS[3]}>Function in Crop Growth</Cell>
      </View>

      {dataRows.map((r, i) => (
        <View key={i} style={styles.row} wrap={false}>
          <Cell width={COLS[0]}>{r.parameter}</Cell>
          <Cell width={COLS[1]} style={{ justifyContent: 'center', alignItems: 'center' }}>
            <ProgressBar value={r.rating} color={r.color} />
          </Cell>
          <Cell width={COLS[2]}>{r.meaning}</Cell>
          <Cell width={COLS[3]}>{r.function}</Cell>
        </View>
      ))}
    </View>
  );
}

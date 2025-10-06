import { View, Text, StyleSheet } from '@react-pdf/renderer';
import { colors } from '../utils/theme';
import ProgressBar from '../components/ProgressBar';

const COLS = [120, 140, 180, 200];

const styles = StyleSheet.create({
  table: { borderWidth: 1, borderColor: colors.border, marginTop: 10 },
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

export default function DerivedParametersTable({ rows = [] }) {
  const defaultRows = [
    { 
      parameter: 'C:N Ratio', 
      rating: 50, 
      color: '#22C55E', 
      meaning: 'Ratio of soil Organic carbon to available nitrogen', 
      function: 'Indicates quality of organic matter; affects microbial activity and nitrogen availability' 
    },
    { 
      parameter: 'CEC Tendency', 
      rating: 85, 
      color: '#F59E0B', 
      meaning: 'Soil\'s capacity to hold and exchange nutrients (based on OC, Ca, Mg, K, pH)', 
      function: 'Influences root water uptake and nutrient solubility' 
    },
    { 
      parameter: 'Ca:Mg Ratio', 
      rating: 20, 
      color: '#EF4444', 
      meaning: 'Balance between calcium and magnesium levels in soil', 
      function: 'Influences soil structure, aeration, water movement, and root penetration' 
    },
    { 
      parameter: 'K:Mg Ratio', 
      rating: 20, 
      color: '#EF4444', 
      meaning: 'Balance between potassium and magnesium availability', 
      function: 'Controls competition for uptake; affects fruit quality, stress tolerance, and leaf strength' 
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

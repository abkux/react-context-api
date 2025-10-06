import { View, Text, StyleSheet } from '@react-pdf/renderer';
import { colors } from '../utils/theme';

const COLS = [120, 120, 200];

const styles = StyleSheet.create({
  table: { borderWidth: 1, borderColor: colors.border, marginTop: 6 },
  header: { backgroundColor: colors.tableHeader, color: '#fff' },
  row: { flexDirection: 'row', borderBottomWidth: 1, borderColor: colors.border },
  cellBase: { padding: 6, borderRightWidth: 1, borderColor: colors.border },
  cellText: { fontSize: 12 },
  lowText: { color: '#EF4444', fontWeight: 'bold' },
  highText: { color: '#F59E0B', fontWeight: 'bold' },
  normalText: { color: '#000000' }
});

const Cell = ({ width, children, style, textColor = 'normal', isHeader = false }) => (
  <View style={[styles.cellBase, { width }, style]}>
    <Text style={[
      styles.cellText,
      isHeader ? { color: '#fff', fontWeight: 'bold' } :
      textColor === 'low' ? styles.lowText : 
      textColor === 'high' ? styles.highText : styles.normalText
    ]}>
      {children}
    </Text>
  </View>
);

export default function DerivedInsightsTable({ rows = [] }) {
  const defaultRows = [
    {
      indicator: 'C:N Ratio',
      condition: 'Low',
      conditionColor: 'low',
      effect: 'Fast breakdown of organic matter, increased nitrate leaching, short nutrient retention.'
    },
    {
      indicator: '',
      condition: 'High',
      conditionColor: 'high',
      effect: 'Nutrient lock-up, slower nitrogen mineralization, poor nutrient availability.'
    },
    {
      indicator: 'CEC Tendency (Proxy)',
      condition: 'Low',
      conditionColor: 'low',
      effect: 'Poor nutrient retention, higher risk of nutrient leaching, low fertility.'
    },
    {
      indicator: '',
      condition: 'High',
      conditionColor: 'high',
      effect: 'Nutrients may bind too tightly, reducing immediate availability.'
    },
    {
      indicator: 'Ca:Mg Ratio',
      condition: 'Low',
      conditionColor: 'low',
      effect: 'Soil compaction, poor aeration, reduced water infiltration.'
    },
    {
      indicator: '',
      condition: 'High',
      conditionColor: 'high',
      effect: 'Nutrient antagonism, especially magnesium and potassium deficiency.'
    },
    {
      indicator: 'K:Mg Ratio',
      condition: 'Low',
      conditionColor: 'low',
      effect: 'Potential magnesium excess, may delay fruit maturity.'
    },
    {
      indicator: '',
      condition: 'High',
      conditionColor: 'high',
      effect: 'Potassium suppresses Mg uptake → weak stems, leaf chlorosis.'
    }
  ];

  const dataRows = rows.length > 0 ? rows : defaultRows;

  return (
    <View style={styles.table}>
      <View style={[styles.row, styles.header]}>
        <Cell width={COLS[0]} isHeader={true}>Indicator</Cell>
        <Cell width={COLS[1]} isHeader={true}>Condition</Cell>
        <Cell width={COLS[2]} isHeader={true} style={{ borderRightWidth: 0 }}>Imbalance Effect</Cell>
      </View>

      {dataRows.map((row, index) => (
        <View key={index} style={styles.row} wrap={false}>
          <Cell width={COLS[0]}>{row.indicator}</Cell>
          <Cell width={COLS[1]} textColor={row.conditionColor}>{row.condition}</Cell>
          <Cell width={COLS[2]} style={{ borderRightWidth: 0 }}>{row.effect}</Cell>
        </View>
      ))}
    </View>
  );
}

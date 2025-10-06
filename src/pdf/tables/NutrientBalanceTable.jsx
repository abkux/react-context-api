import { View, Text, StyleSheet } from '@react-pdf/renderer';
import { colors } from '../utils/theme';

const COLS = [200, 200];

const styles = StyleSheet.create({
  table: { borderWidth: 1, borderColor: colors.border, marginTop: 6 },
  header: { backgroundColor: colors.tableHeader, color: '#fff' },
  row: { flexDirection: 'row', borderBottomWidth: 1, borderColor: colors.border },
  cellBase: { padding: 6, borderRightWidth: 1, borderColor: colors.border },
  cellText: { fontSize: 12 }
});

const Cell = ({ width, children, style, isHeader = false }) => (
  <View style={[styles.cellBase, { width }, style]}>
    <Text style={[
      styles.cellText,
      isHeader ? { color: '#fff', fontWeight: 'bold' } : {}
    ]}>
      {children}
    </Text>
  </View>
);

export default function NutrientBalanceTable({ rows = [] }) {
  const defaultRows = [
    {
      whenTooMuch: 'Phosphorus (P)',
      itBlocks: 'Zinc (Zn), Iron (Fe), Copper (Cu)'
    },
    {
      whenTooMuch: 'Potassium (K)',
      itBlocks: 'Magnesium (Mg), Calcium (Ca)'
    },
    {
      whenTooMuch: 'Nitrogen (N)',
      itBlocks: 'Copper (Cu), Boron (B)'
    }
  ];

  const dataRows = rows.length > 0 ? rows : defaultRows;

  return (
    <View style={styles.table}>
      <View style={[styles.row, styles.header]}>
        <Cell width={COLS[0]} isHeader={true}>When There Is Too Much Of...</Cell>
        <Cell width={COLS[1]} isHeader={true} style={{ borderRightWidth: 0 }}>It Blocks...</Cell>
      </View>

      {dataRows.map((row, index) => (
        <View key={index} style={styles.row} wrap={false}>
          <Cell width={COLS[0]}>{row.whenTooMuch}</Cell>
          <Cell width={COLS[1]} style={{ borderRightWidth: 0 }}>{row.itBlocks}</Cell>
        </View>
      ))}
    </View>
  );
}

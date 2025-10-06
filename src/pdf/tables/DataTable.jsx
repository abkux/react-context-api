import { View, Text, StyleSheet } from '@react-pdf/renderer';
import { colors } from '../utils/theme';
import StatusDot from '../components/StatusDot';

const COLS = [40, 180, 160, 140, 80];

const styles = StyleSheet.create({
  table: { borderWidth: 1, borderColor: colors.border },
  header: { backgroundColor: colors.tableHeader, color: '#fff' },
  row: { flexDirection: 'row', borderBottomWidth: 1, borderColor: colors.border },
  cellBase: { padding: 6, borderRightWidth: 1, borderColor: colors.border },
  cellText: { fontSize: 12 },
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

export default function DataTable({ rows, startingIndex = 0, showHeader = true }) {
  return (
    <View style={styles.table}>
      {showHeader && (
        <View style={[styles.row, styles.header]}>
          <Cell width={COLS[0]}>S.No.</Cell>
          <Cell width={COLS[1]}>Parameter</Cell>
          <Cell width={COLS[2]}>Ideal Range</Cell>
          <Cell width={COLS[3]}>Actual Value</Cell>
          <Cell width={COLS[4]}>Status</Cell>
        </View>
      )}

      {rows.map((r, i) => (
        <View key={startingIndex + i} style={styles.row} wrap={false}>
          <Cell width={COLS[0]} style={{ textAlign: 'center' }}>{startingIndex + i + 1}</Cell>
          <Cell width={COLS[1]} style={{ textAlign: 'center' }}>{r.name}</Cell>
          <Cell width={COLS[2]} style={{ textAlign: 'center' }}>{r.ideal}</Cell>
          <Cell width={COLS[3]} style={{ textAlign: 'center' }}>{r.actual || 'N/A'}</Cell>
          <Cell width={COLS[4]} style={{ justifyContent: 'center', alignItems: 'center' }}>
            <StatusDot color={r.statusColor} />
          </Cell>
        </View>
      ))}
    </View>
  );
}
import { View } from '@react-pdf/renderer';

export default function StatusDot({ color }) {
  return <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: color }} />;
}
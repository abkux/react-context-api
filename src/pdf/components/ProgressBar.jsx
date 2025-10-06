import { View, Text, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  container: { alignItems: 'center', marginVertical: 4 },
  bar: { 
    width: 120, 
    height: 8, 
    backgroundColor: '#E5E7EB', 
    borderRadius: 4,
    position: 'relative',
    marginBottom: 2
  },
  fill: { 
    height: '100%', 
    borderRadius: 4,
    position: 'absolute',
    left: 0,
    top: 0
  },
  labels: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    width: 120,
    fontSize: 8
  }
});

export default function ProgressBar({ value, color }) {
  const percentage = Math.min(Math.max(value, 0), 100);
  
  return (
    <View style={styles.container}>
      <View style={styles.bar}>
        <View style={[styles.fill, { width: `${percentage}%`, backgroundColor: color }]} />
      </View>
      <View style={styles.labels}>
        <Text>Low</Text>
        <Text>Medium</Text>
        <Text>High</Text>
      </View>
    </View>
  );
}

import { View, Text, StyleSheet } from '@react-pdf/renderer';
import { colors } from '../utils/theme.js';

const styles = StyleSheet.create({
  bar: { 
    position: 'absolute', 
    left: 2, 
    right: 2, 
    bottom: 2, 
    backgroundColor: colors.brand, 
    color: '#fff', 
    padding: 18, 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center' 
  },
  text: { color: '#fff', fontSize: 14 }
});

export default function Footer({ leftText = 'Soil Doctor', rightText = 'Soil Analysis Report' }) {
  return (
    <View style={styles.bar} fixed>
      <Text style={styles.text}>{leftText}</Text>
      <Text style={styles.text}>{rightText}</Text>
      <Text style={styles.text} render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} />
    </View>
  );
}
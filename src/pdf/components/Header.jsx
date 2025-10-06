import { View, Text, Image, StyleSheet } from '@react-pdf/renderer';
import { colors } from '../utils/theme';

const styles = StyleSheet.create({
  bar: { 
    position: 'absolute', 
    top: 2, 
    left: 2, 
    right: 2, 
    backgroundColor: colors.brand, 
    padding: 14, 
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  left: { flexDirection: 'row', alignItems: 'center' },
  right: { alignItems: 'flex-end' },
  logo: { width: 18, height: 18, marginRight: 8 },
  title: { color: '#fff', fontSize: 20, fontWeight: 'bold' },
  assocLabel: { color: '#fff', fontSize: 8 },
  assocText: { color: '#fff', fontSize: 12, fontWeight: 'bold' }
});

export default function Header({ title = 'Soil Doctor', logoUrl, fixed, association }) {
  return (
    <View style={styles.bar} fixed={fixed}>
      <View style={styles.left}>
        {logoUrl ? <Image src={logoUrl} style={styles.logo} /> : null}
        <Text style={styles.title}>{title}</Text>
      </View>
      {association ? (
        <View style={styles.right}>
          <Text style={styles.assocLabel}>In Association with</Text>
          <Text style={styles.assocText}>{association}</Text>
        </View>
      ) : null}
    </View>
  );
}
import { View, Text, StyleSheet } from '@react-pdf/renderer';
import { colors } from '../utils/theme';

const styles = StyleSheet.create({
  container: {
    marginTop: 90,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  text: {
    fontSize: 9,
    color: '#374151',
    lineHeight: 1.4,
    textAlign: 'center',
    maxWidth: 500
  }
});

export default function Disclaimer() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Results relate only to the sample as received and information provided by the client. Ekosight accepts no responsibility or liability for the origin, traceability or quality of samples prior to receipt by the laboratory, either of which may compromise the quality or accuracy of the results generated. No representation or warranty is given by Ekosight, or any member or employee as to the accuracy of any test method or test results. Any action you take upon the information on this report is strictly at your own risk, Ekosight will not be liable for the use of guidance in the report in respect of any business losses, including without limitation loss of or damage to profits, income, revenue, use, production, anticipated savings, business, contracts, commercial opportunities or goodwill. No part of this report may be reproduced or use for commercial or public use without permission in writing from Ekosight.
      </Text>
    </View>
  );
}

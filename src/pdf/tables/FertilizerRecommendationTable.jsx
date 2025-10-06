import { View, Text, StyleSheet } from '@react-pdf/renderer';
import { colors } from '../utils/theme';

const DEFAULT_COLS = [120, 200, 120, 200];
const DEFAULT_COLUMNS = [
  { key: 'stage', label: 'Crop Stage', width: 120 },
  { key: 'input', label: 'Input', width: 200 },
  { key: 'dose', label: 'Dose', width: 120 },
  { key: 'method', label: 'Method', width: 200 }
];

const styles = StyleSheet.create({
  table: { 
    borderWidth: 1, 
    borderColor: colors.border,
    marginTop: 6
  },
  header: { backgroundColor: colors.tableHeader, color: '#fff' },
  row: { 
    flexDirection: 'row', 
    borderBottomWidth: 1, 
    borderColor: colors.border
  },
  cellBase: { 
    padding: 6, 
    borderRightWidth: 1, 
    borderColor: colors.border,
    minHeight: 20 // Ensure consistent row height
  },
  cellText: { fontSize: 12 },
  stageCell: { backgroundColor: '#E5E7EB', fontWeight: 'bold' },
  dataRow: { backgroundColor: '#fff' }
});

const Cell = ({ width, children, style, isStage = false, isHeader = false }) => (
  <View style={[
    styles.cellBase, 
    { width }, 
    isHeader ? styles.header : (isStage ? styles.stageCell : styles.dataRow),
    style
  ]}>
    {typeof children === 'string' || typeof children === 'number' ? (
      <Text style={[
        styles.cellText, 
        isStage && { fontWeight: 'bold' },
        isHeader && { color: '#fff', fontWeight: 'bold' }
      ]}>{children}</Text>
    ) : (
      children
    )}
  </View>
);

// Helper function to process and validate row data
const processRowData = (rows) => {
  if (!Array.isArray(rows)) return [];
  
  return rows.map((row, index) => {
    // Ensure required fields exist with defaults
    return {
      stage: row.stage || '',
      input: row.input || '',
      dose: row.dose || '',
      method: row.method || '',
      isStage: Boolean(row.isStage || row.stage), // Auto-detect stage if stage field has value
      ...row // Preserve any additional properties
    };
  });
};

// Helper function to group rows by stage for better organization
const groupRowsByStage = (rows) => {
  const grouped = [];
  let currentStage = null;
  
  rows.forEach((row, index) => {
    if (row.stage && row.stage.trim() !== '') {
      // This is a new stage
      currentStage = row.stage;
      grouped.push({ ...row, isStage: true });
    } else {
      // This is a continuation of the current stage
      grouped.push({ ...row, isStage: false });
    }
  });
  
  return grouped;
};


export default function FertilizerRecommendationTable({ 
  rows = [], 
  columns = DEFAULT_COLUMNS,
  columnWidths = DEFAULT_COLS,
  rowsPerPage = 18
}) {
  const defaultRows = [
    // Land preparation stage
    { 
      stage: 'Land preparation', 
      input: 'Farm Yard Manure', 
      dose: '750 kg/acre', 
      method: 'Directly in the soil'
    },
    { 
      input: '10:26:26', 
      dose: '92 kg/acre', 
      method: 'Directly in the soil'
    },
    { 
      input: 'Urea', 
      dose: '55 kg/acre', 
      method: 'Directly in the soil'
    },
    { 
      input: 'Bio Sanjeevni', 
      dose: '1 kg/acre', 
      method: 'Mix with FYM and apply in the soil'
    },
    { 
      input: 'Zydx Mini Kit', 
      dose: '8 kg/acre', 
      method: 'Mix with FYM and apply in the soil'
    },
    // At the time of Planting
    { 
      stage: 'At the time of Planting', 
      input: 'SOP', 
      dose: '92 kg/acre', 
      method: 'Directly in the soil'
    },
    { 
      input: 'ICL Polysulphate', 
      dose: '25 kg/acre', 
      method: 'Directly in the soil'
    },
    // At Vegetative growth stage
    { 
      stage: 'At Vegetative growth stage (25-40 DAP)', 
      input: 'Urea', 
      dose: '55 kg/acre', 
      method: 'Directly in the soil'
    },
    { 
      input: 'CALSIL', 
      dose: '50 kg/acre', 
      method: 'Directly in the soil'
    },
    { 
      input: 'Micronutrient mix', 
      dose: '5 gm/litre', 
      method: 'Spray from 35 to 60 days after planting, at 7-day intervals.'
    },
    // Tuber Bulking
    { 
      stage: 'Tuber Bulking (45-90 DAP)', 
      input: 'Ammonium Sulphate', 
      dose: '30 kg/acre', 
      method: 'Directly in the soil'
    },
    { 
      stage: 'Land preparation', 
      input: 'Farm Yard Manure', 
      dose: '750 kg/acre', 
      method: 'Directly in the soil'
    },
    { 
      input: '10:26:26', 
      dose: '92 kg/acre', 
      method: 'Directly in the soil'
    },
    { 
      input: 'Urea', 
      dose: '55 kg/acre', 
      method: 'Directly in the soil'
    },
    { 
      input: 'Bio Sanjeevni', 
      dose: '1 kg/acre', 
      method: 'Mix with FYM and apply in the soil'
    },
    { 
      input: 'Zydx Mini Kit', 
      dose: '8 kg/acre', 
      method: 'Mix with FYM and apply in the soil'
    },
    // At the time of Planting
    { 
      stage: 'At the time of Planting', 
      input: 'SOP', 
      dose: '92 kg/acre', 
      method: 'Directly in the soil'
    },
    { 
      input: 'ICL Polysulphate', 
      dose: '25 kg/acre', 
      method: 'Directly in the soil'
    },
    // At Vegetative growth stage
    { 
      stage: 'At Vegetative growth stage (25-40 DAP)', 
      input: 'Urea', 
      dose: '55 kg/acre', 
      method: 'Directly in the soil'
    },
    { 
      input: 'CALSIL', 
      dose: '50 kg/acre', 
      method: 'Directly in the soil'
    },
    { 
      input: 'Micronutrient mix', 
      dose: '5 gm/litre', 
      method: 'Spray from 35 to 60 days after planting, at 7-day intervals.'
    },
    // Tuber Bulking
    { 
      stage: 'Tuber Bulking (45-90 DAP)', 
      input: 'Ammonium Sulphate', 
      dose: '30 kg/acre', 
      method: 'Directly in the soil'
    }
  ];

  // Process the data - use provided rows or fall back to defaults
  const rawData = rows.length > 0 ? rows : defaultRows;
  const processedRows = processRowData(rawData);
  const dataRows = groupRowsByStage(processedRows);

  // Use provided column widths or fall back to column definitions
  const widths = columnWidths.length > 0 ? columnWidths : columns.map(col => col.width);
  
  // Create chunks for pagination - same logic as CropTips
  const chunks = [];
  for (let i = 0; i < dataRows.length; i += rowsPerPage) {
    chunks.push(dataRows.slice(i, i + rowsPerPage));
  }
  
  return (
    <View>
      {chunks.map((chunk, idx) => (
        <View key={idx}>
          {/* Add page break before each chunk except the first one */}
          {idx > 0 && <View break />}
          
          <View style={styles.table}>
            {/* Show header for each page */}
            <View style={[styles.row, styles.header]}>
              {columns.map((column, index) => (
                <Cell key={column.key} width={widths[index]} isHeader={true}>
                  {column.label}
                </Cell>
              ))}
            </View>

            {chunk.map((row, rowIndex) => (
              <View key={rowIndex} style={styles.row} wrap={false}>
                {columns.map((column, colIndex) => (
                  <Cell key={column.key} width={widths[colIndex]} isStage={row.isStage}>
                    {row[column.key] || ''}
                  </Cell>
                ))}
              </View>
            ))}
          </View>
        </View>
      ))}
    </View>
  );
}

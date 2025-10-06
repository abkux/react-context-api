# PDF Components Structure

This directory contains all PDF-related components organized into logical subfolders for better management.

## 📁 Folder Structure

```
src/pdf/
├── components/           # Reusable UI components
│   ├── Header.jsx       # PDF header with logo and title
│   ├── Footer.jsx       # PDF footer with branding and page numbers
│   ├── StatusDot.jsx    # Colored status indicator dot
│   └── ProgressBar.jsx  # Visual progress bar for fertility ratings
├── tables/              # Table components for data display
│   ├── DataTable.jsx           # Main soil analysis parameters table
│   ├── NutrientInsightsTable.jsx   # Detailed nutrient insights with progress bars
│   ├── DerivedParametersTable.jsx  # Status of other derived parameters
│   └── CropTips.jsx     # Crop-specific tips table
├── utils/               # Utility files and shared resources
│   └── theme.js         # Colors, fonts, and shared styling
├── SoilReport.jsx       # Main PDF document orchestrator
└── ReportComponent.jsx  # React component for PDF preview and download
```

## 🎯 Component Categories

### **Components** (`/components/`)
- **Header.jsx**: Fixed header with logo and title
- **Footer.jsx**: Fixed footer with branding and page numbers
- **StatusDot.jsx**: Small colored circle for status indication
- **ProgressBar.jsx**: Visual progress bars with Low/Medium/High labels

### **Tables** (`/tables/`)
- **DataTable.jsx**: Main soil analysis parameters (pH, EC, OC, etc.)
- **NutrientInsightsTable.jsx**: Detailed nutrient insights with progress bars
- **DerivedParametersTable.jsx**: Status of other derived parameters (C:N Ratio, CEC, etc.)
- **CropTips.jsx**: Crop-specific cultivation tips and practices

### **Utils** (`/utils/`)
- **theme.js**: Shared colors, fonts, and styling constants

## 📄 Page Structure

1. **Page 1**: Soil Analysis Parameters (first 20 rows)
2. **Page 2**: Soil Analysis Parameters (continued) + Derived Parameters + Legend  
3. **Page 3**: Detailed Nutrient Insights + Status of Other derived parameters
4. **Page 4**: Crop Tips
5. **Page 5**: Disclaimer

## 🔧 Usage

```jsx
import SoilReport from './SoilReport';
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';

// Use in your React component
<PDFViewer>
  <SoilReport 
    logoUrl="https://example.com/logo.jpg"
    title="Soil Doctor"
    reportData={reportData}
    tableRows={tableRows}
  />
</PDFViewer>
```

## 🎨 Styling

All components use the shared theme from `utils/theme.js` for consistent colors and styling across the PDF document.

import React, { useMemo } from 'react';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import SoilReport from './SoilReport';

const ReportComponent = () => {
  // Example dynamic data - you can change these values as needed
  const reportData = {
    name: 'Prabhakant Singh',
    mobile: '6388011997',
    location: 'Kanpur Dehat',
    village: 'Rampur',
    previousCrop: 'Moong',
    farmSize: '1.00 Bigha',
    farmName: 'Prabhakant Singh Farm',
    nextCrop: 'Rice',
    dateOfCollection: '2024-07-09',
    sampleCode: 'S0002515',
    treatmentType: 'Organic',
  };

  // Example dynamic table data - you can modify this array
  const tableRows = [
    { name: 'pH', ideal: '6.5 - 7.5', actual: '7.2', statusColor: '#22C55E' },
    { name: 'EC (dS/m)', ideal: '1 - 3', actual: '0.8', statusColor: '#EF4444' },
    { name: 'Organic Carbon', ideal: '0.5 - 0.75%', actual: '0.4%', statusColor: '#EF4444' },
    { name: 'Nitrogen', ideal: '280 - 560 kg/ha', actual: '245 kg/ha', statusColor: '#EF4444' },
    { name: 'Phosphorus(P2O5) *', ideal: '28 - 56 kg/ha', actual: '42 kg/ha', statusColor: '#22C55E' },
    { name: 'Potassium', ideal: '110 - 280 kg/ha', actual: '156 kg/ha', statusColor: '#F59E0B' },
    { name: 'Sulphur', ideal: '10 - 20 mg/kg', actual: '15 mg/kg', statusColor: '#22C55E' },
    { name: 'Magnesium', ideal: '1400 - 2000 ppm', actual: '1200 ppm', statusColor: '#EF4444' },
    { name: 'Calcium', ideal: '1400 - 2000 ppm', actual: '1800 ppm', statusColor: '#22C55E' },
    { name: 'Zinc', ideal: '0.5 - 1.0 mg/kg', actual: '0.4 mg/kg', statusColor: '#EF4444' },
    { name: 'Iron', ideal: '4.0 - 7.0 mg/kg', actual: '8.2 mg/kg', statusColor: '#22C55E' },
    { name: 'Copper', ideal: '0.2 - 0.4 mg/kg', actual: '0.3 mg/kg', statusColor: '#22C55E' },
    { name: 'Boron', ideal: '0.1 - 0.5 mg/kg', actual: '0.3 mg/kg', statusColor: '#22C55E' },
  ];

  const documentNode = useMemo(() => (
    <SoilReport 
      logoUrl="https://media-net.abku.dev/logo.jpg"
      title="Soil Doctor"
      reportData={reportData}
      tableRows={tableRows}
    />
  ), [reportData, tableRows]);

  return (
    <div style={{ maxWidth: '100vh', margin: '24px auto', padding: 16 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
        <h2 style={{ margin: 0, fontSize: 20, fontWeight: 600 }}>Soil Analysis Report (Preview)</h2>
        <PDFDownloadLink document={documentNode} fileName="soil-analysis-report.pdf" style={{
          textDecoration: 'none',
          backgroundColor: '#124B2F',
          color: '#fff',
          padding: '8px 12px',
          borderRadius: 6,
          fontWeight: 600
        }}>
          {({ loading }) => (loading ? 'Preparing…' : 'Download PDF')}
        </PDFDownloadLink>
      </div>

      <div style={{
        height: '78vh',
        minHeight: 560,
        background: '#f9fafb',
        border: '1px solid #e5e7eb',
        borderRadius: 10,
        overflow: 'hidden',
        boxShadow: '0 10px 25px rgba(0,0,0,0.06)'
      }}>
        <PDFViewer width="100%" height="100%" showToolbar>
          {documentNode}
        </PDFViewer>
      </div>
    </div>
  );
};

export default ReportComponent;
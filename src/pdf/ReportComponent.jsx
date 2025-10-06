import React, { useMemo } from 'react';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import SoilReport from './SoilReport';
import { reportData, tableRows, associationName } from './utils/data';

const ReportComponent = () => {
  // All data now imported from utils/data.js

  const documentNode = useMemo(() => (
    <SoilReport 
      logoUrl="/soil-doctor-logo.png"
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
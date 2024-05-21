import React, { useState } from 'react';
import ReportC from '../../components/reportComponent';
import ReportRequest from '../../components/ReportRequest';

export default function ParentComponent() {
  const [reports, setReports] = useState([]);

  const handleReportSubmit = (reportData) => {
    setReports([...reports, reportData]);
  };

  return (
    <>
      <div className="grid grid-cols-2">
        <ReportRequest onReportSubmit={handleReportSubmit} className="cols-span-1"/>
        <ReportC reports={reports} className="cols-span-1"/>
      </div>

    </>
  );
}

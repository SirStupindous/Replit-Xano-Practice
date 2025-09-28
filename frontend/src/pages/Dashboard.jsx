import React, { useEffect, useState } from 'react';
import SEOReportCard from '../components/SEOReportCard';
import axios from 'axios';

const Dashboard = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_XANO_API}/seo-reports`)
      .then(res => setReports(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Your SEO Reports</h2>
      {reports.map(report => (
        <SEOReportCard key={report.id} report={report} />
      ))}
    </div>
  );
};

export default Dashboard;

import React from 'react';

const SEOReportCard = ({ report }) => (
  <div className="seo-card">
    <h3>{report.title}</h3>
    <p><strong>Meta Description:</strong> {report.meta}</p>
    <p><strong>Keywords:</strong> {report.keywords.join(', ')}</p>
    <p><strong>Score:</strong> {report.score}/100</p>
  </div>
);

export default SEOReportCard;

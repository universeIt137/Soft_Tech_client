import React from 'react';

const CompanyProfilePage = () => {
    window.scrollTo(0, 0);
    const pdfUrl = '/pdfs/portfolio.pdf';
    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <iframe
                src={pdfUrl}
                title="PDF Viewer"
                width="100%"
                height="100%"
                style={{ border: 'none', display: 'block', maxWidth: '100%', maxHeight: '100vh' }}
            />
        </div>
    );
};

export default CompanyProfilePage;
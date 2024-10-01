import React from 'react';

const CompanyProfilePage = () => {
    window.scrollTo(0, 0);
    const pdfUrl = '/pdfs/portfolio.pdf';
    return (
        <>
            <div className=" w-2/3 mx-auto">
                <div style={{ height: '100vh', width: '100%' }}>
                    <iframe
                        src={`${pdfUrl}#toolbar=0`}
                        title="PDF Viewer"
                        width="100%"
                        height="100%"
                        style={{ border: 'none', display: 'block', maxHeight: '100vh' }}
                    />

                </div>
            </div>
        </>
    );
};

export default CompanyProfilePage;
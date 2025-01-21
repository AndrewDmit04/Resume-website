import React, { useEffect } from 'react';

const PageMoved = ({ newUrl = "#", companyName = "Our Website" }) => {
    useEffect(()=>{
        setTimeout(()=>{
            window.location.href = newUrl;
        }, 2000);
    },[newUrl])
  
    return (
    <div className="min-vh-100 bg-light d-flex align-items-center justify-content-center p-4">
      <div className="card shadow-sm" style={{ maxWidth: '500px' }}>
        <div className="card-body text-center p-5">
          {/* Arrow Icon */}
          <div className="mb-4">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="64" 
              height="64" 
              fill="currentColor" 
              className="bi bi-arrow-right text-primary" 
              viewBox="0 0 16 16"
            >
              <path 
                fillRule="evenodd" 
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              />
            </svg>
          </div>

          {/* Main Content */}
          <h1 className="display-6 mb-3">This Page Has Moved</h1>
          
          <p className="text-muted mb-4">
            The content you're looking for has been relocated to a new address. 
          </p>

          {/* CTA Button */}
          <a 
            href={newUrl} 
            className="btn btn-primary btn-lg px-4"
          >
            Go to New Location
          </a>

          {/* Helper Text */}
          <p className="text-muted small mt-4 mb-0">
            If you're not redirected automatically, please click the button above.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PageMoved;
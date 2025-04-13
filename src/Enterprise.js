import React from 'react';
import { PlayCircle, ArrowRight, CheckCircle } from 'lucide-react'; 

export default function Enterprise() {
  
  const breakpoints = {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1200px'
  };
  
  const sectionStyle = {
    backgroundColor: '#000',
    color: '#fff',
    padding: '100px 20px', 
    width: '100%',
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '600px',
    overflow: 'hidden',
    position: 'relative'
  };

  const containerStyle = {
    maxWidth: '900px',
    margin: '0 auto',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  };

  const sectionHeaderStyle = {
    marginBottom: '50px',
    textAlign: 'center',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  };

  const titleStyle = {
    fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
    fontWeight: '700',
    lineHeight: '1.2',
    letterSpacing: '-0.02em',
    marginBottom: '30px',
    width: '100%',
    maxWidth: '100%',
    color: '#ffffff',
    textAlign: 'center'
  };

  const descriptionStyle = {
    fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
    lineHeight: '1.6',
    color: 'rgba(255, 255, 255, 0.85)',
    maxWidth: '800px',
    margin: '0 auto 40px',
    textAlign: 'center',
    fontWeight: '400'
  };

  const featuresContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '16px',
    marginBottom: '40px',
    width: '100%'
  };

  const featureRowStyle = {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '24px 40px',
    width: '100%'
  };

  const featureItemStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  };

  const iconStyle = {
    display: 'inline-flex',
    color: 'rgba(255, 255, 255, 0.7)'
  };

  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    marginTop: '20px'
  };
  
  const buttonStyle = {
    backgroundColor: 'transparent',
    color: '#ffffff',
    border: '2px solid #ffffff',
    borderRadius: '50px',
    padding: '14px 28px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    position: 'relative',
    overflow: 'hidden'
  };

  const contactButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#e5ff76',
    color: '#000000',
    borderColor: '#e5ff76'
  };

  const soonButtonStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    color: '#ffffff',
    fontSize: '0.75rem',
    fontWeight: '600',
    padding: '4px 8px',
    borderRadius: '12px',
    marginLeft: '8px',
    border: 'none',
    cursor: 'default'
  };

  const vectorIconStyle = {
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 20px'
  };

  const handleButtonHover = (e, isHovering, isContactButton = false) => {
    if (isContactButton) {
      if (isHovering) {
        e.currentTarget.style.backgroundColor = '#d4f053';
        e.currentTarget.style.transform = 'translateY(-3px)';
        e.currentTarget.style.boxShadow = '0 7px 14px rgba(0, 0, 0, 0.2)';
      } else {
        e.currentTarget.style.backgroundColor = '#e5ff76';
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
      }
    } else {
      if (isHovering) {
        e.currentTarget.style.backgroundColor = '#ffffff';
        e.currentTarget.style.color = '#000000';
        e.currentTarget.style.transform = 'translateY(-3px)';
        e.currentTarget.style.boxShadow = '0 7px 14px rgba(0, 0, 0, 0.2)';
      } else {
        e.currentTarget.style.backgroundColor = 'transparent';
        e.currentTarget.style.color = '#ffffff';
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
      }
    }
  };

  const responsiveStyles = `
    /* Tablet adjustments for better readability and spacing */
    @media (max-width: ${breakpoints.tablet}) {
      .section-container {
        padding: 70px 20px !important;
      }
      
      .section-header {
        margin-bottom: 40px !important;
      }
      
      .feature-row {
        gap: 16px 24px !important;
      }
      
      .contact-button {
        padding: 12px 24px !important;
        font-size: 0.95rem !important;
      }
    }
    
    /* Mobile optimizations for better UX on smaller screens */
    @media (max-width: ${breakpoints.mobile}) {
      .section-container {
        padding: 60px 16px !important;
        min-height: 500px !important;
      }
      
      .section-title {
        font-size: 1.85rem !important;
        margin-bottom: 20px !important;
      }
      
      .feature-row {
        flex-direction: column !important;
        align-items: center !important;
        text-align: center !important;
      }
      
      .contact-button {
        padding: 10px 20px !important;
        font-size: 0.9rem !important;
      }
    }
  `;

  React.useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.textContent = responsiveStyles;
    document.head.appendChild(styleElement);
    
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  // Shield icon for the security vector
  const ShieldIcon = () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M20 3.33334L6.66667 9.16667V18.3333C6.66667 26.5833 12.4 34.3 20 36.6667C27.6 34.3 33.3333 26.5833 33.3333 18.3333V9.16667L20 3.33334Z" 
        stroke="white" 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M14.1667 20L18.3333 24.1667L25.8333 16.6667" 
        stroke="white" 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <section style={sectionStyle} className="section-container features-section">
      <div style={containerStyle} className="container">
        <div style={vectorIconStyle}>
          <ShieldIcon />
        </div>

        <div style={sectionHeaderStyle} className="section-header">
          <h2 style={titleStyle} className="section-title">
            Enterprise-ready <br />
            data protection
          </h2>
          
          <div style={featuresContainerStyle}>
            <div style={featureRowStyle} className="feature-row">
              <div style={featureItemStyle}>
                <span style={iconStyle}>
                  <CheckCircle size={20} />
                </span>
                SOC 2 Type 2 compliant
              </div>
              
              <div style={featureItemStyle}>
                <span style={iconStyle}>
                  <CheckCircle size={20} />
                </span>
                Industry standard data encryption
              </div>
            </div>
            
            <div style={featureRowStyle} className="feature-row">
              <div style={featureItemStyle}>
                <span style={iconStyle}>
                  <CheckCircle size={20} />
                </span>
                Enforce sign-in with SAML SSO
              </div>
              
              <div style={featureItemStyle}>
                <span style={iconStyle}>
                  <CheckCircle size={20} />
                </span>
                Custom retention policies
              </div>
            </div>
            
            <div style={featureRowStyle} className="feature-row">
              <div style={featureItemStyle}>
                <span style={iconStyle}>
                  <CheckCircle size={20} />
                </span>
                Encryption Key Management
                <button style={soonButtonStyle}>soon</button>
              </div>
              
              <div style={featureItemStyle}>
                <span style={iconStyle}>
                  <CheckCircle size={20} />
                </span>
                Self-hosted buckets
                <button style={soonButtonStyle}>soon</button>
              </div>
            </div>
          </div>
          
          <div style={buttonContainerStyle} className="button-container">
            <button 
              style={contactButtonStyle} 
              className="contact-button"
              onMouseEnter={(e) => handleButtonHover(e, true, true)}
              onMouseLeave={(e) => handleButtonHover(e, false, true)}
            >
              Questions? Contact us 
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
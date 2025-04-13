import React from 'react';
import { ArrowRight } from 'lucide-react'; 


export default function Increase() {
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
    maxWidth: '1132px',
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

  const buttonContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Center horizontally
    justifyContent: 'center', // Center vertically
    width: '100%',
    maxWidth: '1132px',
    height: 'auto', // Changed from fixed height to auto
    marginTop: '30px',
    marginLeft: '0', // Removed left margin to center properly
    borderRadius: '8px',
    position: 'relative'
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
    overflow: 'hidden',
    width: '100%',
    maxWidth: '320px',
    marginBottom: '16px'
  };

  const primaryButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#e5ff76', // Lime accent color
    color: '#000000',
    borderColor: '#e5ff76',
    width: '100%',
    maxWidth: '400px',
    padding: '16px 32px',
    fontSize: '1.125rem',
    marginBottom: '24px'
  };

  const secondaryButtonsContainerStyle = {
    display: 'flex',
    justifyContent: 'center', // Center horizontally
    alignItems: 'center', // Center vertically
    gap: '20px',
    width: '100%',
    flexWrap: 'wrap'
  };

  const secondaryButtonStyle = {
    ...buttonStyle,
    maxWidth: '200px',
    marginBottom: '0'
  };

  const vectorIconStyle = {
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 20px'
  };

  /**
   * Handle button hover interactions
   * @param {Event} e - The event object
   * @param {boolean} isHovering - Whether the mouse is entering or leaving
   * @param {boolean} isPrimary - Whether this is the primary CTA
   */
  const handleButtonHover = (e, isHovering, isPrimary = false) => {
    if (isPrimary) {
      // Primary button hover effects
      e.currentTarget.style.backgroundColor = isHovering ? '#d4f053' : '#e5ff76';
      e.currentTarget.style.transform = isHovering ? 'translateY(-3px)' : 'translateY(0)';
      e.currentTarget.style.boxShadow = isHovering ? 
        '0 7px 14px rgba(0, 0, 0, 0.2)' : 
        '0 4px 6px rgba(0, 0, 0, 0.1)';
    } else {
      // Secondary button hover effects
      e.currentTarget.style.backgroundColor = isHovering ? '#ffffff' : 'transparent';
      e.currentTarget.style.color = isHovering ? '#000000' : '#ffffff';
      e.currentTarget.style.transform = isHovering ? 'translateY(-3px)' : 'translateY(0)';
      e.currentTarget.style.boxShadow = isHovering ? 
        '0 7px 14px rgba(0, 0, 0, 0.2)' : 
        '0 4px 6px rgba(0, 0, 0, 0.1)';
    }
  };

  // Responsive style adjustments for different breakpoints
  const responsiveStyles = `
    /* Tablet optimizations */
    @media (max-width: ${breakpoints.tablet}) {
      .section-container {
        padding: 70px 20px !important;
      }
      
      .section-header {
        margin-bottom: 40px !important;
      }
      
      .button-container {
        height: auto !important;
      }
      
      .primary-button {
        max-width: 320px !important;
      }
      
      .secondary-button {
        max-width: 160px !important;
      }
    }
    
    /* Mobile optimizations */
    @media (max-width: ${breakpoints.mobile}) {
      .section-container {
        padding: 60px 16px !important;
        min-height: 500px !important;
      }
      
      .section-title {
        font-size: 1.85rem !important;
        margin-bottom: 20px !important;
      }
      
      .button-container {
        width: 100% !important;
      }
      
      .secondary-buttons-container {
        flex-direction: column !important;
        align-items: center !important;
      }
      
      .secondary-button {
        width: 100% !important;
        max-width: 280px !important;
        margin-bottom: 12px !important;
      }
      
      .primary-button {
        padding: 14px 24px !important;
        font-size: 1rem !important;
      }
    }
  `;

  // Inject responsive styles and handle cleanup
  React.useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.textContent = responsiveStyles;
    document.head.appendChild(styleElement);
    
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  // SVG Icon Components
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

  const EmailIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M22 6L12 13L2 6" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );

  const CursorIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M5 3L19 12L12 14L9 21L5 3Z" 
        stroke="currentColor" 
        strokeWidth="2" 
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
            Increase your team's <br />
            visibility and alignment
          </h2>
          
          <div style={buttonContainerStyle} className="button-container">
            <button 
              style={primaryButtonStyle} 
              className="button primary-button"
              onMouseEnter={(e) => handleButtonHover(e, true, true)}
              onMouseLeave={(e) => handleButtonHover(e, false, true)}
            >
              Start for free <ArrowRight size={16} />
            </button>

            <div style={secondaryButtonsContainerStyle} className="secondary-buttons-container">
              <button 
                style={secondaryButtonStyle} 
                className="button secondary-button"
                onMouseEnter={(e) => handleButtonHover(e, true)}
                onMouseLeave={(e) => handleButtonHover(e, false)}
              >
                <EmailIcon /> Contact us
              </button>
              
              <button 
                style={secondaryButtonStyle} 
                className="button secondary-button"
                onMouseEnter={(e) => handleButtonHover(e, true)}
                onMouseLeave={(e) => handleButtonHover(e, false)}
              >
                <CursorIcon /> Book a demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
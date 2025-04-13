import React from 'react';
import { PlayCircle } from 'lucide-react';

export default function EachWeek() {
  
  const breakpoints = {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1200px'
  };

  
  const sectionStyle = {
    backgroundColor: '#000',
    color: '#fff',
    padding: '100px 20px', // Increased vertical padding for better spacing
    width: '100%',
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '600px', // Ensure minimum height for visual impact
    overflow: 'hidden', // Prevent any overflow issues
    position: 'relative' // For potential background elements
  };

  
  const containerStyle = {
    maxWidth: '900px', // Match the specified width in comments
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
    alignItems: 'center' // Center all children including the button
  };

  
  const titleStyle = {
    fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', // Slightly larger for impact
    fontWeight: '700',
    lineHeight: '1.2',
    letterSpacing: '-0.02em', // Tighter letter spacing for headlines
    marginBottom: '30px',
    width: '100%',
    maxWidth: '100%',
    color: '#ffffff', // Ensuring good contrast
    textAlign: 'center'
  };

  const descriptionStyle = {
    fontSize: 'clamp(1.05rem, 2vw, 1.25rem)', // Slightly increased for readability
    lineHeight: '1.6',
    color: 'rgba(255, 255, 255, 0.85)', // Softer white for better reading
    maxWidth: '800px', // Constraining width for readability
    margin: '0 auto 40px', // Added bottom margin before button
    textAlign: 'center',
    fontWeight: '400' // Regular weight for body text
  };

  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    marginTop: '20px' // Add some space after the description
  };

  const buttonStyle = {
    backgroundColor: 'transparent',
    color: '#ffffff',
    border: '2px solid #ffffff',
    borderRadius: '50px', // Pill-shaped button
    padding: '14px 28px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px', // Space between icon and text
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    position: 'relative',
    overflow: 'hidden' // For potential hover effects
  };

  const handleButtonHover = (e, isHovering) => {
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
  };

  const playIconStyle = {
    marginRight: '8px',
    verticalAlign: 'middle'
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
      
      .video-button {
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
      
      .section-description {
        font-size: 1rem !important;
        margin-bottom: 30px !important;
      }
      
      .video-button {
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

  return (
    <section style={sectionStyle} className="section-container features-section">
      <div style={containerStyle} className="container">
        <div style={sectionHeaderStyle} className="section-header">
          <h2 style={titleStyle} className="section-title">
            Each week gets summarized <br />
            and shared, automatically
          </h2>
          
          <p style={descriptionStyle} className="section-description">
            Current integrates with the tools your team uses to get <br />
            At the end of each week, our AI-powered newsletter—"The <br />
            Weekly Drop"—creates a summary of all the updates your <br />
            team shared in a format that's concise and easy to consume.
          </p>
          
          <div style={buttonContainerStyle} className="button-container">
            <button 
              style={buttonStyle} 
              className="video-button"
              onMouseEnter={(e) => handleButtonHover(e, true)}
              onMouseLeave={(e) => handleButtonHover(e, false)}
            >
              <PlayCircle size={20} style={playIconStyle} /> 
              Watch video
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
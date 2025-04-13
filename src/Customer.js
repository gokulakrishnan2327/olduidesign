import React, { useState, useEffect } from 'react';

const Customer = () => {
  const styles = {
    section: {
      width: '100%',
      maxWidth: '1440px',
      margin: '0 auto',
      padding: '80px 20px',
      fontFamily: 'Inter, sans-serif',
      position: 'relative',
      backgroundColor: '#FFFFFF',
    },
    headerContainer: {
      width: '100%',
      maxWidth: '1132px',
      margin: '0 auto 60px auto',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start', // Changed to align-items: flex-start to separate title from arrows
      flexWrap: 'wrap',
      gap: '40px',
    },
    contentLayout: {
      display: 'flex',
      maxWidth: '1132px',
      margin: '0 auto',
      position: 'relative',
    },
    testimonialColumn: {
      width: '60%', // Left side column for testimonial
      paddingRight: '40px',
    },
    companyColumn: {
      width: '40%', // Right side column for company name
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      justifyContent: 'flex-start',
    },
    featuresLabelContainer: {
      display: 'flex',
      flexDirection: 'column',
      maxWidth: '629px',
      flex: '1 1 60%',
    },
    featuresLabel: {
      fontSize: '14px',
      fontWeight: '600',
      letterSpacing: '1px',
      textTransform: 'uppercase',
      color: '#4F46E5', // Primary brand color
      marginBottom: '12px',
    },
    title: {
      fontSize: '48px',
      fontWeight: '700',
      lineHeight: '1.15',
      color: '#111827', // High contrast for readability
      margin: '0 0 40px 0', // Added bottom margin to separate from testimonial
    },
    arrowContainer: {
      display: 'flex',
      gap: '20px', // Increased gap for larger arrows
      alignSelf: 'flex-start',
      marginBottom: '60px', // Added margin to separate from company name
    },
    arrowButton: {
      width: '95px', // Increased from 72px to 95px
      height: '79px', // Increased from 72px to 79px
      borderRadius: '50%',
      backgroundColor: '#F9FAFB',
      border: '1px solid #E5E7EB',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
    },
    arrowButtonHover: {
      backgroundColor: '#F3F4F6',
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
    },
    testimonialContainer: {
      marginTop: '0',
      marginBottom: '40px',
    },
    testimonialText: {
      fontSize: '24px',
      lineHeight: '1.5',
      color: '#374151',
      fontWeight: '500',
      margin: '0 0 30px 0',
    },
    profileContainer: {
      display: 'flex',
      alignItems: 'center',
    },
    profileImage: {
      width: '64px',
      height: '64px',
      borderRadius: '50%',
      marginRight: '20px',
      objectFit: 'cover',
    },
    profileInfo: {
      display: 'flex',
      flexDirection: 'column',
    },
    profileName: {
      fontSize: '18px',
      fontWeight: '600',
      color: '#111827',
      margin: '0 0 4px 0',
    },
    profileTitle: {
      fontSize: '16px',
      color: '#6B7280',
      margin: '0',
    },
    companyBrandContainer: {
      display: 'flex',
      alignItems: 'center',
      alignSelf: 'flex-end',
    },
    companyLogo: {
      marginRight: '10px',
      color: '#817eee', // Secondary brand color
    },
    companyName: {
      fontSize: '16px',
      fontWeight: '600',
      color: '#817eee', // Secondary brand color
      letterSpacing: '0.5px',
    },
  };

  const [responsiveStyles, setResponsiveStyles] = useState({
    headerContainer: styles.headerContainer,
    title: styles.title,
    testimonialText: styles.testimonialText,
    contentLayout: styles.contentLayout,
    testimonialColumn: styles.testimonialColumn,
    companyColumn: styles.companyColumn,
    arrowButton: styles.arrowButton,
  });

  const [leftArrowHovered, setLeftArrowHovered] = useState(false);
  const [rightArrowHovered, setRightArrowHovered] = useState(false);

  const testimonial = {
    text: "Current enables our entire team to align, share work, and support each other using the tools we use every day. Weekly Drops help build momentum and Streams enable anyone to see what is happening elsewhere as our team and product scales.",
    author: "Jonathan Simcoe",
    title: "Senior Product Designer",
    company: "MERCURY"
  };

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 768;
      const isTablet = window.innerWidth <= 1024 && window.innerWidth > 768;
      
      setResponsiveStyles({
        headerContainer: {
          ...styles.headerContainer,
          flexDirection: isMobile ? 'column' : 'row',
        },
        title: {
          ...styles.title,
          fontSize: isMobile ? '36px' : '48px',
        },
        testimonialText: {
          ...styles.testimonialText,
          fontSize: isMobile ? '20px' : '24px',
        },
        contentLayout: {
          ...styles.contentLayout,
          flexDirection: isMobile ? 'column' : 'row',
        },
        testimonialColumn: {
          ...styles.testimonialColumn,
          width: isMobile ? '100%' : '60%',
          paddingRight: isMobile ? '0' : '40px',
        },
        companyColumn: {
          ...styles.companyColumn,
          width: isMobile ? '100%' : '40%',
          alignItems: isMobile ? 'flex-start' : 'flex-end',
          marginTop: isMobile ? '40px' : '0',
        },
        arrowButton: {
          ...styles.arrowButton,
          width: isMobile ? '72px' : '95px',
          height: isMobile ? '72px' : '79px',
        },
      });
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const FlowerLogo = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2Z" fill="#817eee"/>
      <path d="M12 18C13.1 18 14 18.9 14 20C14 21.1 13.1 22 12 22C10.9 22 10 21.1 10 20C10 18.9 10.9 18 12 18Z" fill="#817eee"/>
      <path d="M4 12C4 10.9 4.9 10 6 10C7.1 10 8 10.9 8 12C8 13.1 7.1 14 6 14C4.9 14 4 13.1 4 12Z" fill="#817eee"/>
      <path d="M20 12C20 10.9 20.9 10 22 10C23.1 10 24 10.9 24 12C24 13.1 23.1 14 22 14C20.9 14 20 13.1 20 12Z" fill="#817eee"/>
      <path d="M6.34 6.34C7.15 5.54 8.46 5.54 9.27 6.34C10.07 7.15 10.07 8.46 9.27 9.27C8.46 10.07 7.15 10.07 6.34 9.27C5.54 8.46 5.54 7.15 6.34 6.34Z" fill="#817eee"/>
      <path d="M14.73 14.73C15.54 13.93 16.85 13.93 17.66 14.73C18.46 15.54 18.46 16.85 17.66 17.66C16.85 18.46 15.54 18.46 14.73 17.66C13.93 16.85 13.93 15.54 14.73 14.73Z" fill="#817eee"/>
    </svg>
  );

  const LeftArrow = () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 12H5" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 19L5 12L12 5" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const RightArrow = () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 12H19" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 5L19 12L12 19" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  return (
    <section style={styles.section}>
      <div style={responsiveStyles.headerContainer}>
        <div style={styles.featuresLabelContainer}>
          <h6 style={styles.featuresLabel}>CUSTOMER STORIES</h6>
          <h2 style={responsiveStyles.title}>
            Teams with alignment <br />
            on the latest work
          </h2>
        </div>
        
        <div style={styles.arrowContainer}>
          <button 
            style={{
              ...responsiveStyles.arrowButton,
              ...(leftArrowHovered ? styles.arrowButtonHover : {})
            }}
            onMouseEnter={() => setLeftArrowHovered(true)}
            onMouseLeave={() => setLeftArrowHovered(false)}
            aria-label="Previous testimonial"
          >
            <LeftArrow />
          </button>
          <button 
            style={{
              ...responsiveStyles.arrowButton,
              ...(rightArrowHovered ? styles.arrowButtonHover : {})
            }}
            onMouseEnter={() => setRightArrowHovered(true)}
            onMouseLeave={() => setRightArrowHovered(false)}
            aria-label="Next testimonial"
          >
            <RightArrow />
          </button>
        </div>
      </div>

      <div style={responsiveStyles.contentLayout}>
        <div style={responsiveStyles.testimonialColumn}>
          <div style={styles.testimonialContainer}>
            <p style={responsiveStyles.testimonialText}>
              "{testimonial.text}"
            </p>
            
            <div style={styles.profileContainer}>
              <img 
                src="/api/placeholder/64/64" 
                alt="Jonathan Simcoe" 
                style={styles.profileImage} 
              />
              
              <div style={styles.profileInfo}>
                <h3 style={styles.profileName}>{testimonial.author}</h3>
                <p style={styles.profileTitle}>{testimonial.title}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div style={responsiveStyles.companyColumn}>
          <div style={styles.companyBrandContainer}>
            <span style={styles.companyLogo}>
              <FlowerLogo />
            </span>
            <span style={styles.companyName}>{testimonial.company}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customer;
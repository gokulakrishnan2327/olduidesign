import React from 'react';

const Features = () => {
  const styles = {
    section: {
      width: '100%',
      maxWidth: '1440px',
      margin: '0 auto',
      padding: '80px 20px', // Add padding instead of absolute positioning
      fontFamily: 'Inter, sans-serif',
      position: 'relative',
      backgroundColor: '#FFFFFF',
    },
    headerContainer: {
      width: '100%',
      maxWidth: '1132px',
      margin: '0 auto 80px auto', // Add margin bottom instead of absolute positioning
      display: 'flex',
      flexDirection: 'row', // Will change to column on small screens
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      flexWrap: 'wrap', // Allow wrapping on smaller screens
      gap: '40px',
    },
    featuresLabelContainer: {
      display: 'flex',
      flexDirection: 'column',
      maxWidth: '629px', // Max width instead of fixed width
      flex: '1 1 60%', // Allow it to grow and shrink
    },
    featuresLabel: {
      fontSize: '14px',
      fontWeight: '600',
      letterSpacing: '1px',
      textTransform: 'uppercase',
      color: '#4F46E5',
      marginBottom: '12px',
    },
    title: {
      fontSize: '48px',
      fontWeight: '700',
      lineHeight: '1.15',
      color: '#111827',
      margin: '0',
      '@media (max-width: 768px)': {
        fontSize: '36px',
      },
    },
    buttonContainer: {
      flex: '0 0 auto', // Don't grow, don't shrink
      alignSelf: 'flex-end',
    },
    button: {
      width: '226px',
      height: '66px',
      backgroundColor: '#111827',
      color: '#FFFFFF',
      border: 'none',
      borderRadius: '9999px',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.2s ease',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
    },
    buttonHover: {
      backgroundColor: '#1F2937',
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    arrow: {
      marginLeft: '8px',
      transition: 'transform 0.2s ease',
    },
    arrowHover: {
      transform: 'translateX(3px)',
    },
    grid: {
      width: '100%',
      maxWidth: '1132px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', // Responsive grid
      gap: '24px',
    },
    featureItem: {
      height: 'auto', // Auto height instead of fixed
      padding: '24px',
      borderRadius: '12px',
      backgroundColor: '#F9FAFB',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      border: '1px solid #F3F4F6',
      display: 'flex',
      flexDirection: 'column',
    },
    featureItemHover: {
      transform: 'translateY(-5px)',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.08)',
      backgroundColor: '#FFFFFF',
    },
    featureTitle: {
      fontSize: '20px',
      fontWeight: '600',
      color: '#111827',
      marginBottom: '12px',
      display: 'flex',
      alignItems: 'center',
    },
    featureIcon: {
      marginRight: '12px',
      color: '#9CA3AF',
      display: 'flex',
      alignItems: 'center',
    },
    featureDescription: {
      fontSize: '16px',
      lineHeight: '24px',
      color: '#6B7280',
      margin: '0',
    }
  };

  const applyResponsiveStyles = (baseStyles) => {
    if (typeof window !== 'undefined' && window.innerWidth <= 768) {
      if (baseStyles === styles.headerContainer) {
        return {
          ...baseStyles,
          flexDirection: 'column',
          alignItems: 'flex-start',
        };
      }
      if (baseStyles === styles.title) {
        return {
          ...baseStyles,
          fontSize: '36px',
        };
      }
      if (baseStyles === styles.grid) {
        return {
          ...baseStyles,
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        };
      }
    }
    return baseStyles;
  };

  const FeatureIcon = ({ type }) => {
    const iconTypes = {
      reminder: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 2C7.23858 2 5 4.23858 5 7V10.5858L3.29289 12.2929C3.10536 12.4804 3 12.7348 3 13V14C3 14.5523 3.44772 15 4 15H16C16.5523 15 17 14.5523 17 14V13C17 12.7348 16.8946 12.4804 16.7071 12.2929L15 10.5858V7C15 4.23858 12.7614 2 10 2Z" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M10 18C11.1046 18 12 17.1046 12 16H8C8 17.1046 8.89543 18 10 18Z" fill="#9CA3AF"/>
        </svg>
      ),
      broadcast: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.5 8.33333C17.5 11.555 15.8657 14.3933 13.3333 16.0417C12.75 16.4167 12.0833 16.0417 12.0833 15.3333V12.9167C9.16667 12.9167 6.66667 11.875 5 9.16667C4.58333 8.33333 4.25 7.41667 4.08333 6.41667C4 5.83333 4.58333 5.41667 5.08333 5.75C6.58333 6.75 8.33333 7.5 10.8333 7.5C11.5 7.5 12.0833 6.91667 12.0833 6.25V4.66667C12.0833 3.95833 12.75 3.58333 13.3333 3.95833C15.8657 5.60667 17.5 8.445 17.5 11.6667" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      private: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 9V7C5 4.79086 6.79086 3 9 3H11C13.2091 3 15 4.79086 15 7V9" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M4 9H16C16.5523 9 17 9.44772 17 10V16C17 16.5523 16.5523 17 16 17H4C3.44772 17 3 16.5523 3 16V10C3 9.44772 3.44772 9 4 9Z" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="10" cy="13" r="1" fill="#9CA3AF"/>
        </svg>
      ),
      comments: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 10C18 14.4183 14.4183 18 10 18C8.29374 18 6.71181 17.4905 5.40192 16.6205L2 18L3.3795 14.5981C2.50948 13.2882 2 11.7063 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10Z" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7 9H13" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7 12H10" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      collaborators: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 10C14.6569 10 16 8.65685 16 7C16 5.34315 14.6569 4 13 4C11.3431 4 10 5.34315 10 7C10 8.65685 11.3431 10 13 10Z" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7 16V15C7 13.3431 8.34315 12 10 12H16C17.6569 12 19 13.3431 19 15V16" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7 10C8.65685 10 10 8.65685 10 7C10 5.34315 8.65685 4 7 4C5.34315 4 4 5.34315 4 7C4 8.65685 5.34315 10 7 10Z" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M1 16V15C1 13.3431 2.34315 12 4 12H10" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      notifications: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 7C15 5.4087 14.3679 3.88258 13.2426 2.75736C12.1174 1.63214 10.5913 1 9 1C7.4087 1 5.88258 1.63214 4.75736 2.75736C3.63214 3.88258 3 5.4087 3 7C3 14 1 16 1 16H17C17 16 15 14 15 7Z" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M10.7295 19C10.5537 19.3031 10.3014 19.5547 9.99815 19.7295C9.69494 19.9044 9.35145 19.9965 9.00021 19.9965C8.64897 19.9965 8.30549 19.9044 8.00227 19.7295C7.69906 19.5547 7.44677 19.3031 7.27102 19" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    };

    return iconTypes[type] || null;
  };

  const useHover = () => {
    const [isHovered, setIsHovered] = React.useState(false);
    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);
    return { isHovered, onMouseEnter, onMouseLeave };
  };

  const buttonHover = useHover();
  
  const FeatureItem = ({ iconType, title, description }) => {
    const hover = useHover();
    
    return (
      <div 
        style={{ 
          ...styles.featureItem, 
          ...(hover.isHovered ? styles.featureItemHover : {}) 
        }}
        onMouseEnter={hover.onMouseEnter}
        onMouseLeave={hover.onMouseLeave}
      >
        <h3 style={styles.featureTitle}>
          <span style={styles.featureIcon}>
            <FeatureIcon type={iconType} />
          </span>
          {title}
        </h3>
        <p style={styles.featureDescription}>{description}</p>
      </div>
    );
  };

  const [responsiveStyles, setResponsiveStyles] = React.useState({
    headerContainer: styles.headerContainer,
    title: styles.title,
    grid: styles.grid
  });

  React.useEffect(() => {
    const handleResize = () => {
      setResponsiveStyles({
        headerContainer: applyResponsiveStyles(styles.headerContainer),
        title: applyResponsiveStyles(styles.title),
        grid: applyResponsiveStyles(styles.grid)
      });
    };
    
    handleResize();
    
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section style={styles.section}>
      <div style={responsiveStyles.headerContainer}>
        <div style={styles.featuresLabelContainer}>
          <h6 style={styles.featuresLabel}>FEATURES</h6>
          <h2 style={responsiveStyles.title}>Everything to collaborate on work-in-progress</h2>
        </div>
        <div style={styles.buttonContainer}>
          <button 
            style={{ 
              ...styles.button, 
              ...(buttonHover.isHovered ? styles.buttonHover : {}) 
            }}
            onMouseEnter={buttonHover.onMouseEnter}
            onMouseLeave={buttonHover.onMouseLeave}
          >
            Explore Features
            <span style={{ 
              ...styles.arrow, 
              ...(buttonHover.isHovered ? styles.arrowHover : {}) 
            }}>→</span>
          </button>
        </div>
      </div>

      <div style={responsiveStyles.grid}>
        <FeatureItem 
          iconType="reminder"
          title="Weekly Reminders"
          description="Establish team rituals around sharing with automated Slack reminders."
        />
        
        <FeatureItem 
          iconType="broadcast"
          title="Broadcast to Slack"
          description="Broadcast updates to Slack for your cross-functional partners to see."
        />
        
        <FeatureItem 
          iconType="private"
          title="Private Streams"
          description="Create a private space to collaborate on before opening it up to the entire team."
        />
        
        <FeatureItem 
          iconType="comments"
          title="Comments, mentions, reactions"
          description="All the functionalities to loop in the right people and provide constructive feedback."
        />
        
        <FeatureItem 
          iconType="collaborators"
          title="Add Collaborators"
          description="Help others get visibility on their work by marking them as collaborators."
        />
        
        <FeatureItem 
          iconType="notifications"
          title="Notifications"
          description="Get notified about important activity directly in Slack, via email, or in app."
        />
      </div>
    </section>
  );
};

export default Features;
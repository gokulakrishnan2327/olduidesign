import React from "react";

export default function WeeklyDropComponent() {
  const styles = {
    wrapper: {
      position: 'relative',
      width: '100%',
      maxWidth: '1440px',
      minHeight: '100vh',
      backgroundColor: '#121212',
      color: 'white',
      fontFamily: 'Arial, sans-serif',
      overflow: 'hidden',
      margin: '0 auto',
    },
    weeklyDropHeader: {
      position: 'relative',
      width: '100%',
      maxWidth: '283px',
      padding: '15px 0',
      fontSize: 'clamp(16px, 2vw, 18px)',
      fontWeight: '500',
      margin: '0 auto',
      textAlign: 'center',
      opacity: '0.6', // Decreased opacity as requested
      '@media (min-width: 768px)': {
        position: 'relative', // Changed from absolute to relative
        textAlign: 'center', // Center-aligned for desktop too
        margin: '20px auto', // Added margin
        left: 'auto', // Removed left positioning
        top: 'auto', // Removed top positioning
      }
    },
    container: {
      position: 'relative',
      width: '90%',
      maxWidth: '670px',
      margin: '0 auto', // Center container
      padding: '20px 0',
      '@media (min-width: 768px)': {
        top: '0', // Removed top positioning
        left: 'auto', // Removed left positioning to center
        padding: '0',
        margin: '40px auto', // Added margin to create space
      }
    },
    titleContainer: {
      position: 'relative',
      width: '100%',
      maxWidth: '600px',
      margin: '20px auto',
      opacity: '0.3',
      '@media (min-width: 768px)': {
        margin: '20px auto', // Keep centered
        top: 'auto', // Removed top positioning
        left: 'auto', // Removed left positioning
      }
    },
    title: {
      fontSize: 'clamp(20px, 3vw, 24px)',
      fontWeight: 'bold',
      margin: '0'
    },
    imageContainer: {
      position: 'relative',
      width: '100%',
      maxWidth: '600px',
      margin: '20px auto',
      opacity: '0.3',
      '@media (min-width: 768px)': {
        margin: '20px auto', // Keep centered
        top: 'auto', // Removed top positioning
        left: 'auto', // Removed left positioning
      }
    },
    mainImage: {
      width: '100%',
      height: 'auto',
      borderRadius: '4px'
    },
    descriptionBox: {
      width: '100%',
      minHeight: '120px', // smaller minimum height for mobile
      borderRight: '1px solid rgba(255, 255, 255, 0.3)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
      borderBottomRightRadius: '4.49px',
      borderBottomLeftRadius: '4.49px',
      padding: '15px',
      boxSizing: 'border-box',
      '@media (min-width: 768px)': {
        height: '187px',
      }
    },
    descriptionText: {
      fontSize: 'clamp(14px, 2vw, 16px)',
      lineHeight: '1.5',
      margin: '0'
    },
    halfImageContainer: {
      width: '100%',
      height: '180px',
      overflow: 'hidden',
      marginTop: '15px',
      '@media (min-width: 768px)': {
        height: 'auto', // Allow full height for desktop
        overflow: 'visible', // Show the full image
      }
    },
    halfImage: {
      width: '100%',
      marginTop: '-25%', // Cut the image in half on mobile
      '@media (min-width: 768px)': {
        marginTop: '0', // Show full image on desktop
      }
    }
  };

  const applyResponsiveStyles = (baseStyles) => {
    const currentStyles = {...baseStyles};
    delete currentStyles['@media (min-width: 768px)'];
    
    if (typeof window !== 'undefined' && window.innerWidth >= 768) {
      const mediaStyles = baseStyles['@media (min-width: 768px)'];
      if (mediaStyles) {
        Object.assign(currentStyles, mediaStyles);
      }
    }
    
    return currentStyles;
  };

  const [dimensions, setDimensions] = React.useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1440,
  });

  React.useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div style={applyResponsiveStyles(styles.wrapper)}>
      <div style={applyResponsiveStyles(styles.weeklyDropHeader)}>
        Weekly Drop · May 15, 2023
      </div>
      
      <div style={applyResponsiveStyles(styles.container)}>
        <div style={applyResponsiveStyles(styles.titleContainer)}>
          <h1 style={styles.title}># Mobile Squad</h1>
        </div>
        
        <div style={applyResponsiveStyles(styles.imageContainer)}>
          <img 
            src="https://s3-alpha-sig.figma.com/img/1289/b97d/4f3b9c934193f8486a3cfe29fca24a7b?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=m6XhBrLwwPnXE0pGpxdS78RCzw~8BVc5idfLqHKnznYn5~nIAqhln-8o67dXtU3wOu3O470tqsOj4rZ-STKkgoTlIw~ZuSiJbCeMtESb33-mZ9HCtVDIodX6LVE-AkH33qnohrJPoTLlAjhTaIFrqqSI90bY9wiMq7wplRS77f4ELrb9y3pitGefMjaXJO1~tc0QBvV3Q8svbT68ed5ZqmTwrvoH5PC5Ipbr3jGdAP19-43AbrCpl0b3AirZscYpHICILc9Hd0yvKkUyzmvesvjEdEz~6gEnyumoRWwssFeMN6~8Gg9wQgcqTDl0EQWqXJjTKqt-XYJBwRpeEuA51A__" 
            alt="Mobile app interface" 
            style={styles.mainImage}
          />
          
          <div style={applyResponsiveStyles(styles.descriptionBox)}>
            <p style={styles.descriptionText}>
              New mobile Exploration<br/>
              Adressing UI feedback & adding bunch<br/>
              of UI polish also fixing
            </p>
          </div>
          
          <div style={applyResponsiveStyles(styles.halfImageContainer)}>
            <img 
              src="https://s3-alpha-sig.figma.com/img/2890/84ee/97cec2c91998fb9c14a657167e362f08?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=TCv3KbMRcsu7RqF0Im4Cf1j~C1iceA6RaoeY9HiN4q~zgL6arT49pm~NRevkNU8LsQwI~n~khcQFBLcq15zYRtEDIS~YgPEMkfWwud603ol7QvbyvEag4rudFtQJtQEDW3rMuELTWKJXC~Vubb9v66RU~Pg4uglfw2wqyn6Tv9do1gPyTRQGbKQ1oNxz2EI2xPI8VZYnDuRZzTl3JjeknK3p3kmfWHmJ9AsLCEVwtzjF~nfV7lLyJxg1y2o413gUatliwD5HK7dY2Yq6agwovx3ovEwKodfvvTbZOgRZ2g2C9veyFuhzl~LGMZ2W0UU6dGqz4ydJEuCYFymr8Cd2vA__" 
              alt="Full interface" 
              style={applyResponsiveStyles(styles.halfImage)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
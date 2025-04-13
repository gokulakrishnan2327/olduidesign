export default function WorkHappen() {
    const heroSectionStyle = {
      backgroundColor: '#000000', // Black background as requested in comment
      paddingTop: '8rem',
      paddingBottom: '6rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center'
    };
    
    const heroContainerStyle = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 1.5rem'
    };
    
    const heroContentStyle = {
      marginBottom: '4rem',
      maxWidth: '800px'
    };
    
    const heroImageStyle = {
      width: '100%',
      maxWidth: '1200px',
      height: 'auto',
      aspectRatio: '1200/756',
      borderRadius: '16px',
      marginTop: '3rem',
      overflow: 'hidden'
    };
    
    const logoContainerStyle = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '3rem',
      marginTop: '2.5rem',
      width: '100%',
      maxWidth: '1440px',
      height: '188px',
      borderRadius: '12px',
      padding: '2rem'
    };
    
    const headingStyle = {
      fontSize: '4.625rem', // 74px
      fontWeight: 600, 
      fontFamily: 'MaisonNeueExtendedWEB-Demi, sans-serif',
      marginBottom: '1.5rem',
      lineHeight: '81.4px',
      letterSpacing: '0%',
      color: '#FFFFFF', 
      textAlign: 'center'
    };
    
    const descriptionStyle = {
      fontSize: '1.25rem', // 20px
      fontFamily: 'Scto Grotesk A, sans-serif',
      fontWeight: 400,
      lineHeight: '28px',
      letterSpacing: '0%',
      color: '#FFFFFF', 
      marginBottom: '2rem',
      maxWidth: '700px',
      margin: '0 auto 2rem',
      textAlign: 'center'
    };
        
    return (
      <section style={heroSectionStyle}>
        <div style={heroContainerStyle}>
          <div style={heroContentStyle}>
            <h1 style={headingStyle}>
              Work happens all over the place
            </h1>
            
            <div style={descriptionStyle}>
              Getting an overview of what's happening is next to 
              impossible. With Current, you no longer have to dig through 
              Slack messages, get lost in Figma files, or hunt through 
              emails to see what your team is working on.
            </div>
            
          </div>
          
         
        </div>
      </section>
    );
  }
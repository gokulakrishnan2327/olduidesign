export default function Footer() {
    const styles = {
      footer: {
        backgroundColor: '#000',
        color: '#fff',
        padding: '60px 0 30px'
      },
      container: {
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px'
      },
      footerGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '40px'
      },
      footerCol: {
        marginBottom: '20px'
      },
      footerHeading: {
        color: '#999',
        fontSize: '14px',
        textTransform: 'uppercase',
        fontWeight: '600',
        marginBottom: '20px'
      },
      footerLinks: {
        listStyle: 'none',
        padding: '0',
        margin: '0'
      },
      footerLinkItem: {
        marginBottom: '10px'
      },
      footerLink: {
        color: '#fff',
        textDecoration: 'none',
        transition: 'color 0.2s ease'
      },
      footerBottom: {
        marginTop: '60px',
        paddingTop: '30px',
        borderTop: '1px solid #333',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      },
      copyright: {
        marginBottom: '15px',
        fontSize: '14px',
        color: '#999'
      },
      legalLinks: {
        fontSize: '14px',
        color: '#999'
      },
      '@media (min-width: 768px)': {
        footerGrid: {
          gridTemplateColumns: 'repeat(4, 1fr)'
        },
        footerBottom: {
          flexDirection: 'row',
          justifyContent: 'space-between'
        }
      }
    };
  
    const applyResponsiveStyles = () => {
      if (typeof window !== 'undefined') {
        if (window.innerWidth >= 768) {
          styles.footerGrid = {
            ...styles.footerGrid,
            gridTemplateColumns: 'repeat(4, 1fr)'
          };
          styles.footerBottom = {
            ...styles.footerBottom,
            flexDirection: 'row',
            justifyContent: 'space-between'
          };
        }
      }
    };
  
    if (typeof window !== 'undefined') {
      applyResponsiveStyles();
      window.addEventListener('resize', applyResponsiveStyles);
    }
  
    return (
      <footer style={styles.footer}>
        <div style={styles.container}>
          <div style={styles.footerGrid}>
            
            <div style={styles.footerCol}>
              <h4 style={styles.footerHeading}>Product</h4>
              <ul style={styles.footerLinks}>
                <li style={styles.footerLinkItem}><a href="#" style={styles.footerLink}>Features</a></li>
                <li style={styles.footerLinkItem}><a href="#" style={styles.footerLink}>Pricing</a></li>
                <li style={styles.footerLinkItem}><a href="#" style={styles.footerLink}>Figma Plugin</a></li>
                <li style={styles.footerLinkItem}><a href="#" style={styles.footerLink}>Changing</a></li>
                <li style={styles.footerLinkItem}><a href="#" style={styles.footerLink}>Support</a></li>
              </ul>
            </div>
            
            <div style={styles.footerCol}>
              <h4 style={styles.footerHeading}>Legal</h4>
              <ul style={styles.footerLinks}>
                <li style={styles.footerLinkItem}><a href="#" style={styles.footerLink}>Terms of Service</a></li>
                <li style={styles.footerLinkItem}><a href="#" style={styles.footerLink}>Privacy Policy</a></li>
                <li style={styles.footerLinkItem}><a href="#" style={styles.footerLink}>BDPA</a></li>
                <li style={styles.footerLinkItem}><a href="#" style={styles.footerLink}>SOC-2</a></li>
                <li style={styles.footerLinkItem}><a href="#" style={styles.footerLink}>Security</a></li>
              </ul>
            </div>
            
            <div style={styles.footerCol}>
              <h4 style={styles.footerHeading}>Guides</h4>
              <ul style={styles.footerLinks}>
                <li style={styles.footerLinkItem}><a href="#" style={styles.footerLink}>Current for Startups</a></li>
                <li style={styles.footerLinkItem}><a href="#" style={styles.footerLink}>Current for Enterprise</a></li>
                <li style={styles.footerLinkItem}><a href="#" style={styles.footerLink}>Current for Agency</a></li>
              </ul>
            </div>
            
            <div style={styles.footerCol}>
              <h4 style={styles.footerHeading}>Social</h4>
              <ul style={styles.footerLinks}>
                <li style={styles.footerLinkItem}><a href="#" style={styles.footerLink}>Twitter</a></li>
                <li style={styles.footerLinkItem}><a href="#" style={styles.footerLink}>Youtube</a></li>
                <li style={styles.footerLinkItem}><a href="#" style={styles.footerLink}>Discord</a></li>
              </ul>
            </div>
          </div>
          
          <div style={styles.footerBottom}>
            <div style={styles.copyright}>
              Designed and Built by GK
            </div>
            <div style={styles.legalLinks}>
              <p>&copy; {new Date().getFullYear()} Current. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
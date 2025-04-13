export default function HeroSection() {
    const logos = [1, 2, 3, 4, 5, 6];
  
    return (
      <section style={{
        backgroundColor: '#e5ff76',
        paddingTop: '8rem',
        paddingBottom: '6rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
      }} className="hero-section">
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1.5rem',
          width: '100%'
        }}>
          <div style={{
            marginBottom: '4rem',
            maxWidth: '800px',
            width: '100%'
          }}>
            <h1 style={{ 
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 'bold', 
              marginBottom: '1.5rem', 
              lineHeight: '1.2'
            }}>
              Finally, all your team's work in one place
            </h1>
            <p style={{ 
              fontSize: 'clamp(1rem, 3vw, 1.25rem)',
              color: '#333', 
              marginBottom: '2rem',
              maxWidth: '700px',
              margin: '0 auto 2rem'
            }}>
              Increase your team's speed, collaboration, and alignment by giving everyone an overview of the most important work happening across your company.
            </p>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: '1rem',
              marginBottom: '1.5rem',
              flexWrap: 'wrap'
            }} className="button-group">
              <button style={{ 
                backgroundColor: '#333', 
                color: 'white',
                padding: '0.75rem 1.5rem',
                borderRadius: '0.375rem',
                border: 'none',
                fontWeight: 500,
                cursor: 'pointer',
                margin: '0.5rem'
              }} className="primary-button">
                Get Started for free
              </button>
              <button style={{ 
                border: '1px solid #333',
                color: '#333',
                padding: '0.75rem 1.5rem',
                borderRadius: '0.375rem',
                background: 'transparent',
                fontWeight: 500,
                cursor: 'pointer',
                margin: '0.5rem'
              }} className="secondary-button">
                Watch demo
              </button>
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'center'
            }} className="social-proof">
              <p style={{
                color: '#555',
                fontSize: '0.9rem'
              }} className="rating-count">
                No credit card required
              </p>
            </div>
          </div>
  
          <div style={{
            width: '100%',
            maxWidth: '1200px',
            height: 'auto',
            aspectRatio: '1200/756',
            borderRadius: '16px',
            marginTop: '3rem',
            overflow: 'hidden'
          }} className="hero-image">
            <img 
              src="https://s3-alpha-sig.figma.com/img/054a/f893/0277232d176e4c8c05059e8495b7dff8?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=naDMyicilCM6SVvI~0emnJEy~NRxMWZQ6lyv0pWlWi8TvWqBuLl4riZuh8P92aIKskZv5Tw1k62o9OywRHk3v-HXK10fy3kwkhC10W2mkWKYP6jwZ0rCvmT0LVJC1eRz2dkRXLRAHYWeph9mUdc4yp05IKz~5wC685mC3e0Y3PKAcT2J2nrNNaFp9VuWyFco5reaoeJrbrgZvdVxzeJAstA-AUZF4IN8ov6eBXD7vCAsYH7L5BBpTivoJsUDu6~o08hBoViSNxQHbZtFVgVyxQ~Rw52Q1NNPD4vqo8ZZM2C2NWPrXGsdfW70H37igZTBHaL2OmhGku7j~TEr3yeJ5Q__" 
              alt="Dashboard preview" 
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '16px'
              }}
            />
          </div>
  
          {/* Company logos section */}
          <div style={{
            position: 'relative',
            marginTop: '2rem',
            width: '100%'
          }}>
            <div style={{
              justifyContent: 'center',
              textAlign: 'center',
              marginBottom: '1.5rem'
            }} className="transaction-content">
              <p style={{ 
                fontWeight: 500, 
                fontSize: '1rem', 
                letterSpacing: '0.05em',
                color: '#333'
              }}>
                YOU'RE IN GOOD COMPANY
              </p>
            </div>
            
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '1.5rem',
              marginTop: '2.5rem',
              width: '100%',
              padding: '2rem'
            }} className="logo-container">
              {logos.map((logo, index) => (
                <div key={index} style={{ 
                  width: '140px', 
                  height: '60px', 
                  background: '#f0f0f0', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  borderRadius: '8px',
                  margin: '0.5rem'
                }}>
                  <span style={{
                    color: '#777',
                    fontWeight: 'bold'
                  }}>LOGO {logo}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
}

const cssStyles = `
  @media (max-width: 768px) {
    .mobile-menu-button {
      display: block !important;
    }
    
    .nav-container {
      position: fixed;
      top: 60px;
      right: 0;
      flex-direction: column;
      align-items: flex-start;
      background-color: #e5ff76;
      width: 250px;
      height: 100vh;
      padding: 2rem;
      transform: translateX(100%);
      transition: transform 0.3s ease;
      box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
    }
    
    .nav-container.open {
      transform: translateX(0);
    }
    
    .desktop-nav {
      flex-direction: column;
      align-items: flex-start;
      width: 100%;
    }
    
    .action-buttons {
      flex-direction: column;
      width: 100%;
      margin-top: 1rem;
    }
    
    .action-buttons a, 
    .action-buttons button {
      width: 100%;
      text-align: center;
      margin: 0.25rem 0;
    }
    
    .hero-section {
      padding-top: 4rem;
      padding-bottom: 3rem;
    }
    
    .button-group {
      flex-direction: column;
    }
    
    .logo-container {
      padding: 1rem 0;
    }
  }

  @media (max-width: 480px) {
    .hero-image {
      margin-top: 2rem;
    }
    
    .button-group button {
      width: 100%;
    }
  }
`;

document.head.insertAdjacentHTML('beforeend', `<style>${cssStyles}</style>`);
import React, { useState } from 'react';
import { Menu, X, ArrowRight, Star, ChevronDown, ChevronUp } from 'lucide-react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showGuideDropdown, setShowGuideDropdown] = useState(false);
    
    return (
      <nav style={{
        background: '#e5ff76',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.05)',
        padding: '1rem',
        position: 'sticky',
        top: 0,
        zIndex: 1000
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1rem'
        }}>
          <div style={{
            fontSize: '1.5rem',
            fontWeight: 'bold'
          }}>
            current.
          </div>
          
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              display: 'none',
              padding: '0.5rem',
              '@media (max-width: 768px)': {
                display: 'block'
              }
            }}
            className="mobile-menu-button"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2rem'
          }} className={`nav-container ${isMenuOpen ? 'open' : ''}`}>
            <div style={{
              display: 'flex',
              gap: '1.5rem'
            }} className="desktop-nav">
              <a href="#" style={{
                textDecoration: 'none',
                color: '#333',
                fontSize: '1rem',
                fontWeight: 500
              }}>Features</a>
              <a href="#" style={{
                textDecoration: 'none',
                color: '#333',
                fontSize: '1rem',
                fontWeight: 500
              }}>Pricing</a>
              <div style={{
                position: 'relative'
              }}>
                <a 
                  href="#" 
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem',
                    textDecoration: 'none',
                    color: '#333',
                    fontSize: '1rem',
                    fontWeight: 500
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    setShowGuideDropdown(!showGuideDropdown);
                  }}
                >
                  Guides <ChevronDown size={16} />
                </a>
                {showGuideDropdown && (
                  <div style={{
                    position: 'absolute',
                    top: '100%',
                    left: '0',
                    background: 'white',
                    borderRadius: '8px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                    padding: '1rem',
                    minWidth: '180px',
                    zIndex: 100
                  }}>
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.75rem'
                    }}>
                      <a href="#" style={{
                        color: '#333',
                        textDecoration: 'none',
                        fontSize: '0.9rem'
                      }}>Getting Started</a>
                      <a href="#" style={{
                        color: '#333',
                        textDecoration: 'none',
                        fontSize: '0.9rem'
                      }}>Best Practices</a>
                      <a href="#" style={{
                        color: '#333',
                        textDecoration: 'none',
                        fontSize: '0.9rem'
                      }}>API Documentation</a>
                      <a href="#" style={{
                        color: '#333',
                        textDecoration: 'none',
                        fontSize: '0.9rem'
                      }}>Use Cases</a>
                    </div>
                  </div>
                )}
              </div>
              <a href="#" style={{
                textDecoration: 'none',
                color: '#333',
                fontSize: '1rem',
                fontWeight: 500
              }}>Support</a>
              <a href="#" style={{
                textDecoration: 'none',
                color: '#333',
                fontSize: '1rem',
                fontWeight: 500
              }}>Changelog</a>
            </div>
  
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }} className="action-buttons">
              <a href="#" style={{
                textDecoration: 'none',
                color: '#333',
                fontSize: '1rem',
                fontWeight: 500
              }}>Login</a>
              <button style={{ 
                backgroundColor: '#333', 
                color: 'white',
                padding: '0.5rem 1rem',
                borderRadius: '0.375rem',
                border: 'none',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'background-color 0.3s'
              }}>
                Sign up
              </button>
            </div>
          </div>
        </div>
      </nav>
    );
}
import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState('');

  const toggleDropdown = (dropdown:string) => {
    setOpenDropdown(openDropdown === dropdown ? '' : dropdown);
  };

  return (
    <div style={{ width: '100%' }}>
      {/* Top Bar */}
      <div style={{
        background: 'linear-gradient(90deg, #7c3aed 0%, #2563eb 100%)',
        color: 'white',
        padding: '8px 16px'
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '14px'
        }}>
          <span>We are always ready to protect your data Contact Now</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span>Help / Support / Contact</span>
            <div style={{ display: 'flex', gap: '8px' }}>
              <span style={{ cursor: 'pointer' }}>✕</span>
              <span style={{ cursor: 'pointer' }}>📘</span>
              <span style={{ cursor: 'pointer' }}>📷</span>
              <span style={{ cursor: 'pointer' }}>🐦</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div style={{
        backgroundColor: 'white',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 16px'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '16px 0'
          }}>
            {/* Logo */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{
                width: '40px',
                height: '40px',
                backgroundColor: '#2563eb',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 'bold'
              }}>
                🛡️
              </div>
              <span style={{
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#1f2937'
              }}>
                Proshield.
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav style={{
              display: 'flex',
              alignItems: 'center',
              gap: '32px'
            }}>
              <div style={{ position: 'relative' }}>
                <button
                  onClick={() => toggleDropdown('home')}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    color: openDropdown === 'home' ? '#2563eb' : '#374151',
                    background: 'none',
                    border: 'none',
                    padding: '8px 0',
                    cursor: 'pointer',
                    fontSize: '16px'
                  }}
                >
                  <span>Home</span>
                  <span>▾</span>
                </button>
                {openDropdown === 'home' && (
                  <div style={{
                    position: 'absolute',
                    top: '100%',
                    left: '0',
                    marginTop: '4px',
                    width: '192px',
                    backgroundColor: 'white',
                    border: '1px solid #e5e7eb',
                    borderRadius: '6px',
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                    zIndex: 50
                  }}>
                    <a href="#" style={{
                      display: 'block',
                      padding: '8px 16px',
                      color: '#374151',
                      textDecoration: 'none'
                    }}>Home v1</a>
                    <a href="#" style={{
                      display: 'block',
                      padding: '8px 16px',
                      color: '#374151',
                      textDecoration: 'none'
                    }}>Home v2</a>
                    <a href="#" style={{
                      display: 'block',
                      padding: '8px 16px',
                      color: '#374151',
                      textDecoration: 'none'
                    }}>Home v3</a>
                  </div>
                )}
              </div>

              <a href="#" style={{
                color: '#374151',
                textDecoration: 'none',
                padding: '8px 0'
              }}>About Us</a>
              
              <a href="#" style={{
                color: '#374151',
                textDecoration: 'none',
                padding: '8px 0'
              }}>Services</a>
              
              <a href="#" style={{
                color: '#374151',
                textDecoration: 'none',
                padding: '8px 0'
              }}>Blog</a>

              <div style={{ position: 'relative' }}>
                <button
                  onClick={() => toggleDropdown('pages')}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    color: openDropdown === 'pages' ? '#2563eb' : '#374151',
                    background: 'none',
                    border: 'none',
                    padding: '8px 0',
                    cursor: 'pointer',
                    fontSize: '16px'
                  }}
                >
                  <span>Pages</span>
                  <span>▾</span>
                </button>
                {openDropdown === 'pages' && (
                  <div style={{
                    position: 'absolute',
                    top: '100%',
                    left: '0',
                    marginTop: '4px',
                    width: '192px',
                    backgroundColor: 'white',
                    border: '1px solid #e5e7eb',
                    borderRadius: '6px',
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                    zIndex: 50
                  }}>
                    <a href="#" style={{
                      display: 'block',
                      padding: '8px 16px',
                      color: '#374151',
                      textDecoration: 'none'
                    }}>FAQ</a>
                    <a href="#" style={{
                      display: 'block',
                      padding: '8px 16px',
                      color: '#374151',
                      textDecoration: 'none'
                    }}>Team</a>
                    <a href="#" style={{
                      display: 'block',
                      padding: '8px 16px',
                      color: '#374151',
                      textDecoration: 'none'
                    }}>Testimonials</a>
                    <a href="#" style={{
                      display: 'block',
                      padding: '8px 16px',
                      color: '#374151',
                      textDecoration: 'none'
                    }}>Pricing</a>
                  </div>
                )}
              </div>

              <a href="#" style={{
                color: '#374151',
                textDecoration: 'none',
                padding: '8px 0'
              }}>Contact Us</a>
            </nav>

            {/* Get Started Button */}
            <div>
              <button style={{
                background: 'linear-gradient(90deg, #2563eb 0%, #7c3aed 100%)',
                color: 'white',
                padding: '8px 24px',
                borderRadius: '24px',
                border: 'none',
                fontWeight: '500',
                cursor: 'pointer',
                fontSize: '16px'
              }}>
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={{
                display: 'none',
                padding: '8px',
                borderRadius: '6px',
                color: '#374151',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: '24px'
              }}
            >
              {isMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div style={{
            backgroundColor: 'white',
            borderTop: '1px solid #e5e7eb',
            padding: '16px'
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <a href="#" style={{
                padding: '12px 16px',
                color: '#374151',
                textDecoration: 'none',
                borderRadius: '6px'
              }}>Home</a>
              <a href="#" style={{
                padding: '12px 16px',
                color: '#374151',
                textDecoration: 'none',
                borderRadius: '6px'
              }}>About Us</a>
              <a href="#" style={{
                padding: '12px 16px',
                color: '#374151',
                textDecoration: 'none',
                borderRadius: '6px'
              }}>Services</a>
              <a href="#" style={{
                padding: '12px 16px',
                color: '#374151',
                textDecoration: 'none',
                borderRadius: '6px'
              }}>Blog</a>
              <a href="#" style={{
                padding: '12px 16px',
                color: '#374151',
                textDecoration: 'none',
                borderRadius: '6px'
              }}>Pages</a>
              <a href="#" style={{
                padding: '12px 16px',
                color: '#374151',
                textDecoration: 'none',
                borderRadius: '6px'
              }}>Contact Us</a>
              
              <div style={{ paddingTop: '16px' }}>
                <button style={{
                  width: '100%',
                  background: 'linear-gradient(90deg, #2563eb 0%, #7c3aed 100%)',
                  color: 'white',
                  padding: '12px 24px',
                  borderRadius: '24px',
                  border: 'none',
                  fontWeight: '500',
                  cursor: 'pointer',
                  fontSize: '16px'
                }}>
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
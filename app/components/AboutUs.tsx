import React from 'react';
import {motion} from 'framer-motion'
const AboutUs = () => {
  return (
    <div style={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #2d2d5f 100%)',
      padding: '80px 20px 40px',
      color: 'white'
    }}>
      {/* Main Container */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        gap: '40px',
        alignItems: 'flex-start'
      }}>
        
        {/* Left Side - Images Grid */}
        <div style={{
          flex: '1',
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '20px',
          position: 'relative'
        }}>
          {/* Top Left Image */}
          <div style={{
            background: 'linear-gradient(135deg, #1e293b, #475569)',
            borderRadius: '20px',
            padding: '30px',
            height: '280px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
          }}>
            <div style={{
              width: '80px',
              height: '80px',
              background: 'linear-gradient(135deg, #00d4ff, #0099cc)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '20px',
              fontSize: '2rem'
            }}>
              🔒
            </div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: '600', textAlign: 'center' }}>
              Secure Operations
            </h3>
          </div>

          {/* Top Right Image */}
          <div style={{
            background: 'linear-gradient(135deg, #1e293b, #475569)',
            borderRadius: '20px',
            padding: '30px',
            height: '200px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
            marginTop: '40px'
          }}>
            <div style={{
              width: '60px',
              height: '60px',
              background: 'linear-gradient(135deg, #00d4ff, #0099cc)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '15px',
              fontSize: '1.5rem'
            }}>
              👥
            </div>
            <h3 style={{ fontSize: '1rem', fontWeight: '600', textAlign: 'center' }}>
              Expert Team
            </h3>
          </div>

          {/* Bottom Left Image */}
          <div style={{
            background: 'linear-gradient(135deg, #1e293b, #475569)',
            borderRadius: '20px',
            padding: '30px',
            height: '200px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
          }}>
            <div style={{
              width: '60px',
              height: '60px',
              background: 'linear-gradient(135deg, #00d4ff, #0099cc)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '15px',
              fontSize: '1.5rem'
            }}>
              ⚡
            </div>
            <h3 style={{ fontSize: '1rem', fontWeight: '600', textAlign: 'center' }}>
              Real-time Monitoring
            </h3>
          </div>

          {/* Bottom Right Image */}
          <div style={{
            background: 'linear-gradient(135deg, #1e293b, #475569)',
            borderRadius: '20px',
            padding: '30px',
            height: '280px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
            marginTop: '-40px'
          }}>
            <div style={{
              width: '80px',
              height: '80px',
              background: 'linear-gradient(135deg, #00d4ff, #0099cc)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '20px',
              fontSize: '2rem'
            }}>
              🛡️
            </div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: '600', textAlign: 'center' }}>
              Advanced Protection
            </h3>
          </div>

          {/* Center Badge */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'linear-gradient(135deg, #00d4ff, #0099cc)',
            borderRadius: '50%',
            width: '120px',
            height: '120px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            border: '4px solid rgba(255, 255, 255, 0.2)',
            boxShadow: '0 12px 40px rgba(0, 212, 255, 0.3)',
            zIndex: 10
          }}>
            <div style={{ fontSize: '0.8rem', fontWeight: '600', textAlign: 'center', color: 'white' }}>
              Get free cyber
            </div>
            <div style={{ fontSize: '0.7rem', color: 'rgba(255, 255, 255, 0.9)', textAlign: 'center' }}>
              security consultation
            </div>
          </div>
        </div>

        {/* Right Side - Content */}
        <div style={{ flex: '1', paddingLeft: '40px' }}>
          {/* About Us Badge */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '20px'
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              background: 'linear-gradient(135deg, #00d4ff, #0099cc)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.2rem'
            }}>
              🏢
            </div>
            <span style={{
              color: '#00d4ff',
              fontSize: '0.9rem',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>
              ABOUT US
            </span>
          </div>

          {/* Main Heading */}
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: '800',
            lineHeight: '1.2',
            marginBottom: '20px'
          }}>
            Your trusted partner in our{' '}
            <span style={{ color: '#00d4ff' }}>
              cyber security solutions
            </span>
          </h1>

          {/* Description */}
          <p style={{
            fontSize: '1.1rem',
            lineHeight: '1.6',
            color: '#ccc',
            marginBottom: '40px'
          }}>
            We provide reliable, cutting-edge cybersecurity solutions to protect your digital 
            assets, ensuring safety and peace of mind.
          </p>

          {/* Features Card */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(0, 153, 204, 0.1))',
            borderRadius: '20px',
            padding: '30px',
            border: '1px solid rgba(0, 212, 255, 0.2)',
            marginBottom: '30px'
          }}>
            <h3 style={{
              fontSize: '1.3rem',
              fontWeight: '700',
              color: '#00d4ff',
              marginBottom: '15px'
            }}>
              24/7 security assistance
            </h3>
            <p style={{
              color: '#ccc',
              lineHeight: '1.6',
              fontSize: '1rem'
            }}>
              Real-time support for all cybersecurity concerns, including breach response, 
              threat detection, and expert guidance.
            </p>
          </div>

          {/* Services List */}
          <div style={{ marginBottom: '30px' }}>
            {[
              'Threat Detection and Monitoring',
              'Access Control Management', 
              'Security Awareness Training'
            ].map((service, index) => (
              <div key={index} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '15px',
                marginBottom: '15px'
              }}>
                <div style={{
                  width: '30px',
                  height: '30px',
                  background: 'linear-gradient(135deg, #00d4ff, #0099cc)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.8rem'
                }}>
                  ✓
                </div>
                <span style={{ color: '#ccc', fontSize: '1rem' }}>
                  {service}
                </span>
              </div>
            ))}
          </div>

          {/* Contact Info and CTA */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <div style={{
                width: '50px',
                height: '50px',
                background: 'linear-gradient(135deg, #00d4ff, #0099cc)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem'
              }}>
                📞
              </div>
              <span style={{
                fontSize: '1.2rem',
                fontWeight: '700',
                color: '#00d4ff'
              }}>
                +91 123 456 789
              </span>
            </div>

            <button
                style={{
                    background: 'linear-gradient(135deg, #00d4ff, #0099cc)',
                    color: 'white',
                    padding: '12px 30px',
                    borderRadius: '50px',
                    border: 'none',
                    fontSize: '1rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    boxShadow: '0 4px 15px rgba(0, 212, 255, 0.3)',
                    transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                    const button = e.currentTarget as HTMLButtonElement;
                    button.style.transform = 'translateY(-2px)';
                    button.style.boxShadow = '0 8px 25px rgba(0, 212, 255, 0.4)';
                }}
                onMouseOut={(e) => {
                    const button = e.currentTarget as HTMLButtonElement;
                    button.style.transform = 'translateY(0)';
                    button.style.boxShadow = '0 4px 15px rgba(0, 212, 255, 0.3)';
                }}
                >
                More About →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
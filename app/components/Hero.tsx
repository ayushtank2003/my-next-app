const CyberSecurityHero = () => {
  return (
    <section style={{
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 30%, #334155 70%, #475569 100%)',
      minHeight: '100vh',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 5%',
      color: 'white',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      {/* Background overlay for depth */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 30% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
        zIndex: 1
      }}></div>

      {/* Main content */}
      <div style={{
        flex: 1,
        maxWidth: '600px',
        zIndex: 2,
        position: 'relative'
      }}>
        {/* Brand badge */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          marginBottom: '24px',
          fontSize: '14px',
          fontWeight: '500',
          color: '#94a3b8'
        }}>
          <div style={{
            width: '24px',
            height: '24px',
            background: 'linear-gradient(45deg, #3b82f6, #06b6d4)',
            borderRadius: '6px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            🛡️
          </div>
          WELCOME CYBER SECURITY
        </div>

        {/* Main heading */}
        <h1 style={{
          fontSize: 'clamp(2.5rem, 5vw, 4rem)',
          fontWeight: '700',
          lineHeight: '1.1',
          marginBottom: '24px',
          background: 'linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          Secure your world,<br />
          effortlessly today!
        </h1>

        {/* Description */}
        <p style={{
          fontSize: '18px',
          lineHeight: '1.6',
          color: '#cbd5e1',
          marginBottom: '40px',
          maxWidth: '500px'
        }}>
          Protect your digital world with seamless, cutting-edge cybersecurity solutions designed to safeguard your data, systems, and peace of mind.
        </p>

        {/* CTA Buttons */}
        <div style={{
          display: 'flex',
          gap: '16px',
          alignItems: 'center',
          marginBottom: '48px',
          flexWrap: 'wrap'
        }}>
          <button style={{
            background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
            border: 'none',
            borderRadius: '50px',
            padding: '14px 28px',
            color: 'white',
            fontSize: '16px',
            fontWeight: '600',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 20px rgba(59, 130, 246, 0.3)'
          }}>
            Learn More
            <span style={{ fontSize: '12px' }}>→</span>
          </button>
          
          <button style={{
            background: 'transparent',
            border: '2px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '50px',
            padding: '12px 26px',
            color: 'white',
            fontSize: '16px',
            fontWeight: '600',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            transition: 'all 0.3s ease',
            backdropFilter: 'blur(10px)'
          }}>
            <div style={{
              width: '20px',
              height: '20px',
              background: 'linear-gradient(45deg, #3b82f6, #06b6d4)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '10px'
            }}>
              ▶
            </div>
            Play Video
          </button>
        </div>

        {/* Features */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <div style={{
              width: '20px',
              height: '20px',
              borderRadius: '50%',
              border: '2px solid #3b82f6',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <div style={{
                width: '8px',
                height: '8px',
                background: '#3b82f6',
                borderRadius: '50%'
              }}></div>
            </div>
            <span style={{ fontSize: '16px', color: '#e2e8f0' }}>Access Control Management</span>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              marginLeft: 'auto'
            }}>
              {/* Customer avatars */}
              {[1, 2, 3, 4].map((i) => (
                <div key={i} style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: `linear-gradient(45deg, hsl(${i * 60}, 70%, 50%), hsl(${i * 60 + 30}, 70%, 60%))`,
                  border: '2px solid rgba(255, 255, 255, 0.2)',
                  marginLeft: i > 1 ? '-8px' : '0'
                }}></div>
              ))}
              <div style={{
                background: 'rgba(59, 130, 246, 0.2)',
                borderRadius: '50%',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '12px',
                fontWeight: '600',
                marginLeft: '-8px',
                border: '2px solid rgba(255, 255, 255, 0.2)'
              }}>
                25k
              </div>
            </div>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <div style={{
              width: '20px',
              height: '20px',
              borderRadius: '50%',
              border: '2px solid #3b82f6',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <div style={{
                width: '8px',
                height: '8px',
                background: '#3b82f6',
                borderRadius: '50%'
              }}></div>
            </div>
            <span style={{ fontSize: '16px', color: '#e2e8f0' }}>Security Awareness Training</span>
            <span style={{ 
              fontSize: '14px', 
              color: '#94a3b8',
              marginLeft: 'auto'
            }}>
              Our 20k+ Satisfied Customer
            </span>
          </div>
        </div>
      </div>

      {/* Right side - Image/Visual */}
      <div style={{
        flex: 1,
        maxWidth: '600px',
        height: '500px',
        position: 'relative',
        zIndex: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {/* Placeholder for the professional image */}
        <div style={{
          width: '400px',
          height: '400px',
          borderRadius: '20px',
          background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(6, 182, 212, 0.1))',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(20px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Decorative elements */}
          <div style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            background: 'linear-gradient(45deg, #f59e0b, #f97316)',
            opacity: 0.8
          }}></div>
          <div style={{
            position: 'absolute',
            bottom: '30px',
            left: '30px',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: 'linear-gradient(45deg, #06b6d4, #3b82f6)',
            opacity: 0.6
          }}></div>
          
          {/* Central content placeholder */}
          <div style={{
            textAlign: 'center',
            color: '#94a3b8'
          }}>
            <div style={{
              fontSize: '48px',
              marginBottom: '16px'
            }}>👩‍💻</div>
            <div style={{
              fontSize: '16px',
              fontWeight: '500'
            }}>
              Cybersecurity Professional
            </div>
          </div>
        </div>
      </div>

      {/* Responsive styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          section {
            flex-direction: column !important;
            text-align: center;
            padding: 40px 20px !important;
          }
          
          .hero-content {
            max-width: 100% !important;
            margin-bottom: 40px;
          }
          
          .hero-visual {
            max-width: 100% !important;
            height: 300px !important;
          }
          
          .hero-visual > div {
            width: 280px !important;
            height: 280px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default CyberSecurityHero;
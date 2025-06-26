const ExpertTeamSection = () => {
  const teamMembers = [
    {
      name: "Michael Johnson",
      role: "Security Officer",
      image: "👨‍💼"
    },
    {
      name: "Sophia Carter",
      role: "Cybersecurity Analyst",
      image: "👩‍💻"
    },
    {
      name: "Michael Brown",
      role: "Incident Response",
      image: "👨‍💻"
    },
    {
      name: "Isabella Moore",
      role: "Security Awareness",
      image: "👩‍🔬"
    }
  ];

  return (
    <section style={{
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
      minHeight: '100vh',
      padding: '80px 5% 40px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background decorative elements */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '5%',
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        background: 'rgba(59, 130, 246, 0.1)',
        filter: 'blur(40px)'
      }}></div>
      <div style={{
        position: 'absolute',
        top: '60%',
        right: '10%',
        width: '150px',
        height: '150px',
        borderRadius: '50%',
        background: 'rgba(6, 182, 212, 0.1)',
        filter: 'blur(60px)'
      }}></div>

      {/* Expert Team Section */}
      <div style={{
        textAlign: 'center',
        marginBottom: '60px'
      }}>
        {/* Badge */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          marginBottom: '24px',
          fontSize: '14px',
          fontWeight: '500',
          color: '#94a3b8',
          textTransform: 'uppercase',
          letterSpacing: '1px'
        }}>
          <div style={{
            width: '20px',
            height: '20px',
            background: 'linear-gradient(45deg, #3b82f6, #06b6d4)',
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '10px'
          }}>
            👥
          </div>
          EXPERT TEAM
        </div>

        {/* Main heading */}
        <h2 style={{
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: '700',
          color: 'white',
          marginBottom: '60px',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
        }}>
          Our expert team member
        </h2>

        {/* Team Members Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '24px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {teamMembers.map((member, index) => (
            <div key={index} style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '20px',
              padding: '0',
              overflow: 'hidden',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              position: 'relative',
              height: '320px'
            }}>
              {/* Member image area */}
              <div style={{
                height: '240px',
                background: `linear-gradient(135deg, 
                  hsl(${index * 60 + 200}, 60%, 25%), 
                  hsl(${index * 60 + 240}, 70%, 35%))`,
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden'
              }}>
                {/* Tech/server room background pattern */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: `repeating-linear-gradient(
                    90deg,
                    transparent,
                    transparent 20px,
                    rgba(255, 255, 255, 0.03) 20px,
                    rgba(255, 255, 255, 0.03) 22px
                  )`,
                  opacity: 0.5
                }}></div>
                
                {/* Member avatar placeholder */}
                <div style={{
                  fontSize: '80px',
                  zIndex: 2
                }}>
                  {member.image}
                </div>

                {/* Decorative elements */}
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)'
                }}></div>
                <div style={{
                  position: 'absolute',
                  bottom: '20px',
                  left: '20px',
                  width: '60px',
                  height: '8px',
                  borderRadius: '4px',
                  background: 'linear-gradient(90deg, #3b82f6, #06b6d4)',
                  opacity: 0.7
                }}></div>
              </div>

              {/* Member info */}
              <div style={{
                padding: '20px',
                textAlign: 'center'
              }}>
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: '600',
                  color: 'white',
                  marginBottom: '8px',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                }}>
                  {member.name}
                </h3>
                <p style={{
                  fontSize: '14px',
                  color: '#94a3b8',
                  margin: 0
                }}>
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination dots */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '8px',
          marginTop: '40px'
        }}>
          {[0, 1, 2].map((dot, index) => (
            <div key={index} style={{
              width: index === 0 ? '24px' : '8px',
              height: '8px',
              borderRadius: '4px',
              background: index === 0 ? '#3b82f6' : 'rgba(255, 255, 255, 0.3)',
              transition: 'all 0.3s ease'
            }}></div>
          ))}
        </div>
      </div>

      {/* Contact CTA Section */}
      <div style={{
        maxWidth: '1000px',
        margin: '80px auto 0',
        position: 'relative'
      }}>
        <div style={{
          background: 'linear-gradient(135deg, #4f46e5 0%, #3b82f6 50%, #06b6d4 100%)',
          borderRadius: '24px',
          padding: '0',
          overflow: 'hidden',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          minHeight: '200px'
        }}>
          {/* Left content */}
          <div style={{
            flex: 1,
            padding: '40px',
            zIndex: 2
          }}>
            <h3 style={{
              fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
              fontWeight: '700',
              color: 'white',
              marginBottom: '32px',
              lineHeight: '1.2',
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
            }}>
              Protect business, cyber security<br />
              solution today!
            </h3>

            {/* Contact options */}
            <div style={{
              display: 'flex',
              gap: '32px',
              flexWrap: 'wrap'
            }}>
              {/* Phone contact */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  background: 'rgba(255, 255, 255, 0.2)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backdropFilter: 'blur(10px)'
                }}>
                  📞
                </div>
                <div>
                  <div style={{
                    fontSize: '16px',
                    fontWeight: '600',
                    color: 'white',
                    marginBottom: '4px'
                  }}>
                    Get contact now
                  </div>
                  <div style={{
                    fontSize: '14px',
                    color: 'rgba(255, 255, 255, 0.8)'
                  }}>
                    +123 456 789
                  </div>
                </div>
              </div>

              {/* Email contact */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  background: 'rgba(255, 255, 255, 0.2)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backdropFilter: 'blur(10px)'
                }}>
                  ✉️
                </div>
                <div>
                  <div style={{
                    fontSize: '16px',
                    fontWeight: '600',
                    color: 'white',
                    marginBottom: '4px'
                  }}>
                    Send e-mail
                  </div>
                  <div style={{
                    fontSize: '14px',
                    color: 'rgba(255, 255, 255, 0.8)'
                  }}>
                    info@domainname.com
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative arrow */}
            <div style={{
              position: 'absolute',
              bottom: '20px',
              left: '50%',
              transform: 'translateX(-50%)',
              fontSize: '24px',
              color: 'rgba(255, 255, 255, 0.6)'
            }}>
              ↗
            </div>
          </div>

          {/* Right image area */}
          <div style={{
            width: '300px',
            height: '200px',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Professional working image placeholder */}
            <div style={{
              width: '100%',
              height: '100%',
              background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative'
            }}>
              <div style={{
                fontSize: '60px'
              }}>
                👩‍💻
              </div>
              
              {/* Tech overlay */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: `repeating-linear-gradient(
                  45deg,
                  transparent,
                  transparent 10px,
                  rgba(255, 255, 255, 0.05) 10px,
                  rgba(255, 255, 255, 0.05) 12px
                )`
              }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          section {
            padding: 60px 20px 40px !important;
          }
          
          .team-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          
          .contact-cta {
            flex-direction: column !important;
            text-align: center;
          }
          
          .contact-cta .right-image {
            width: 100% !important;
            height: 150px !important;
          }
          
          .contact-options {
            justify-content: center !important;
          }
        }
        
        @media (max-width: 480px) {
          .contact-options {
            flex-direction: column !important;
            align-items: center !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ExpertTeamSection;
import React from 'react';
import { Shield, Network, Monitor, Award, Users, CheckCircle, Target } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      title: "Expertise And Experience",
      description: "A team of seasoned cybersecurity professionals with extensive industry knowledge.",
      icon: <Network size={24} />
    },
    {
      id: 2,
      title: "Proactive Security Approach",
      description: "Focused on preventing threats before they impact your system, not just reacting after the fact.",
      icon: <Monitor size={24} />
    },
    {
      id: 3,
      title: "Tailored Training Programs",
      description: "Educating your team on security best practices to reduce human error and enhance vigilance.",
      icon: <Target size={24} />
    }
  ];

  const stats = [
    {
      id: 1,
      number: "25+",
      label: "Years Experience",
      icon: <Shield size={32} />
    },
    {
      id: 2,
      number: "15K",
      label: "Project Complete",
      icon: <CheckCircle size={32} />
    },
    {
      id: 3,
      number: "16K",
      label: "Customer Happy",
      icon: <Users size={32} />
    },
    {
      id: 4,
      number: "120",
      label: "Winning Awards",
      icon: <Award size={32} />
    }
  ];

  return (
    <div style={{
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
      minHeight: '100vh',
      position: 'relative',
      overflow: 'hidden',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    }}>
      {/* Background Pattern */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: `
          radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, rgba(6, 182, 212, 0.05) 0%, transparent 50%)
        `,
        pointerEvents: 'none'
      }} />
      
      {/* Floating Elements */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '10%',
        width: '8px',
        height: '8px',
        background: '#3b82f6',
        borderRadius: '50%',
        boxShadow: '0 0 20px rgba(59, 130, 246, 0.6)'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '20%',
        right: '20%',
        width: '6px',
        height: '6px',
        background: '#8b5cf6',
        borderRadius: '50%',
        boxShadow: '0 0 15px rgba(139, 92, 246, 0.6)'
      }} />

      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '80px 20px'
      }}>
        {/* Main Content Section */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'center',
          marginBottom: '120px'
        }}>
          {/* Left Side - Image */}
          <div style={{
            position: 'relative'
          }}>
            <div style={{
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)',
              position: 'relative'
            }}>
              <div style={{
                width: '100%',
                height: '500px',
                background: 'url("https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=500&fit=crop") center/cover',
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.3) 0%, rgba(30, 41, 59, 0.2) 100%)'
                }} />
              </div>
            </div>
            
            {/* Glowing border effect */}
            <div style={{
              position: 'absolute',
              inset: '-2px',
              background: 'linear-gradient(45deg, #3b82f6, #8b5cf6, #06b6d4)',
              borderRadius: '26px',
              zIndex: -1,
              opacity: 0.3,
              filter: 'blur(8px)'
            }} />
          </div>

          {/* Right Side - Content */}
          <div>
            {/* Header */}
            <div style={{
              marginBottom: '48px'
            }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                background: 'rgba(59, 130, 246, 0.1)',
                border: '1px solid rgba(59, 130, 246, 0.2)',
                padding: '8px 20px',
                borderRadius: '25px',
                marginBottom: '24px',
                fontSize: '14px',
                fontWeight: '600',
                color: '#60a5fa',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                <Shield size={16} style={{ marginRight: '8px' }} />
                WHY CHOOSE US
              </div>
              
              <h2 style={{
                fontSize: '48px',
                fontWeight: '700',
                color: 'white',
                margin: '0',
                lineHeight: '1.2',
                background: 'linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Reliable solutions for<br />
                <span style={{
                  background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  cybersecurity excellence
                </span>
              </h2>
            </div>

            {/* Features */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '24px'
            }}>
              {features.map((feature) => (
                <div key={feature.id} style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '16px',
                  padding: '24px',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.3)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '16px'
                  }}>
                    <div style={{
                      width: '48px',
                      height: '48px',
                      background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      flexShrink: 0
                    }}>
                      {feature.icon}
                    </div>
                    <div>
                      <h3 style={{
                        fontSize: '18px',
                        fontWeight: '600',
                        color: 'white',
                        margin: '0 0 8px 0'
                      }}>
                        {feature.title}
                      </h3>
                      <p style={{
                        fontSize: '14px',
                        color: 'rgba(255, 255, 255, 0.7)',
                        lineHeight: '1.5',
                        margin: '0'
                      }}>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          paddingTop: '60px'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '40px'
          }}>
            {stats.map((stat, index) => (
              <div key={stat.id} style={{
                textAlign: 'center',
                position: 'relative'
              }}>
                {/* Separator line */}
                {index < stats.length - 1 && (
                  <div style={{
                    position: 'absolute',
                    right: '-20px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '1px',
                    height: '80px',
                    background: 'rgba(255, 255, 255, 0.1)'
                  }} />
                )}
                
                <div style={{
                  marginBottom: '16px',
                  color: 'rgba(59, 130, 246, 0.8)'
                }}>
                  {stat.icon}
                </div>
                
                <div style={{
                  fontSize: '36px',
                  fontWeight: '800',
                  color: 'white',
                  marginBottom: '8px',
                  background: 'linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  {stat.number}
                </div>
                
                <div style={{
                  fontSize: '14px',
                  color: 'rgba(255, 255, 255, 0.6)',
                  fontWeight: '500'
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
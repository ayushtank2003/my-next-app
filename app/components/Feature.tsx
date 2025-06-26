import React from 'react';
import { Shield, Eye, Users, Clock } from 'lucide-react';

const CybersecurityFeatures = () => {
  const features = [
    {
      id: 1,
      title: "Real-Time Threat Detection",
      description: "Real-Time Threat Detection provides instant monitoring & response to cyber threats, ensuring your devices and data remain secure.",
      icon: <Eye size={32} />,
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      id: 2,
      title: "Malware And Virus Prevention",
      description: "malware and virus prevention provides instant monitoring & response to cyber threats, ensuring your devices and data remain secure.",
      icon: <Shield size={32} />,
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
      id: 3,
      title: "24/7 Monitoring And Support",
      description: "24/7 monitoring and support provides instant monitoring & response to cyber threats, ensuring your devices and data remain secure.",
      icon: <Clock size={32} />,
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    }
  ];

  const teamMembers = [
    { id: 1, name: "John", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face" },
    { id: 2, name: "Sarah", avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face" },
    { id: 3, name: "Mike", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" },
    { id: 4, name: "+2k", isCounter: true }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
      padding: '80px 20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '80px',
        alignItems: 'center'
      }}>
        {/* Left Side - Images */}
        <div style={{
          position: 'relative',
          height: '600px'
        }}>
          {/* Main Large Image */}
          <div style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '60%',
            height: '65%',
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
            background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
            zIndex: 2
          }}>
            <div style={{
              width: '100%',
              height: '100%',
              background: 'url("https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&h=400&fit=crop") center/cover',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(135deg, rgba(30, 58, 138, 0.8) 0%, rgba(59, 130, 246, 0.6) 100%)'
              }} />
            </div>
            {/* Blue indicator dot */}
            <div style={{
              position: 'absolute',
              bottom: '20px',
              left: '20px',
              width: '12px',
              height: '12px',
              background: '#3b82f6',
              borderRadius: '50%',
              boxShadow: '0 0 0 4px rgba(59, 130, 246, 0.3)'
            }} />
          </div>

          {/* Bottom Left Image */}
          <div style={{
            position: 'absolute',
            bottom: '0',
            left: '0',
            width: '50%',
            height: '45%',
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)',
            zIndex: 1
          }}>
            <div style={{
              width: '100%',
              height: '100%',
              background: 'url("https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop") center/cover'
            }} />
          </div>

          {/* Stats Card */}
          <div style={{
            position: 'absolute',
            bottom: '20px',
            right: '0',
            width: '45%',
            height: '40%',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            borderRadius: '24px',
            padding: '32px 24px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow: '0 20px 40px rgba(102, 126, 234, 0.3)',
            zIndex: 3,
            color: 'white',
            textAlign: 'center'
          }}>
            <div style={{
              fontSize: '48px',
              fontWeight: '800',
              marginBottom: '8px',
              background: 'linear-gradient(45deg, #ffffff 0%, rgba(255, 255, 255, 0.8) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              25+
            </div>
            <div style={{
              fontSize: '16px',
              opacity: 0.9,
              marginBottom: '20px',
              lineHeight: '1.4'
            }}>
              Years of experience<br />in cyber security
            </div>
            
            {/* Team Avatars */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '-8px'
            }}>
              {teamMembers.map((member, index) => (
                <div key={member.id} style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  border: '3px solid white',
                  marginLeft: index > 0 ? '-8px' : '0',
                  zIndex: teamMembers.length - index,
                  background: member.isCounter 
                    ? 'rgba(255, 255, 255, 0.2)' 
                    : `url("${member.avatar}") center/cover`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '12px',
                  fontWeight: '600',
                  color: member.isCounter ? 'white' : 'transparent'
                }}>
                  {member.isCounter ? member.name : ''}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - Content */}
        <div style={{
          paddingLeft: '40px'
        }}>
          {/* Header */}
          <div style={{
            marginBottom: '48px'
          }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              background: 'rgba(102, 126, 234, 0.1)',
              padding: '8px 20px',
              borderRadius: '25px',
              marginBottom: '24px',
              fontSize: '14px',
              fontWeight: '600',
              color: '#667eea',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>
              <Shield size={16} style={{ marginRight: '8px' }} />
              OUR FEATURE
            </div>
            
            <h2 style={{
              fontSize: '48px',
              fontWeight: '700',
              color: '#1e293b',
              margin: '0 0 8px 0',
              lineHeight: '1.2'
            }}>
              Comprehensive protection
            </h2>
            <h3 style={{
              fontSize: '48px',
              fontWeight: '700',
              background: 'linear-gradient(135deg, #667eea 0%, #4facfe 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              margin: '0',
              lineHeight: '1.2'
            }}>
              simplified security
            </h3>
          </div>

          {/* Features List */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '32px'
          }}>
            {features.map((feature, index) => (
              <div key={feature.id} style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '20px',
                padding: '24px 0',
                borderBottom: index < features.length - 1 ? '1px solid #e2e8f0' : 'none'
              }}>
                {/* Icon */}
                <div style={{
                  width: '64px',
                  height: '64px',
                  background: feature.gradient,
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  flexShrink: 0,
                  boxShadow: '0 8px 20px rgba(102, 126, 234, 0.3)'
                }}>
                  {feature.icon}
                </div>
                
                {/* Content */}
                <div style={{
                  flex: 1
                }}>
                  <h4 style={{
                    fontSize: '20px',
                    fontWeight: '700',
                    color: '#1e293b',
                    margin: '0 0 12px 0',
                    lineHeight: '1.3'
                  }}>
                    {feature.title}
                  </h4>
                  <p style={{
                    fontSize: '16px',
                    color: '#64748b',
                    lineHeight: '1.6',
                    margin: '0'
                  }}>
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CybersecurityFeatures;
import React from 'react';
import { Shield, Lock, Wifi, Database, Cloud, AlertTriangle } from 'lucide-react';

const OurServices = () => {
  const services = [
    {
      id: 1,
      title: "Threat Detection and Prevention",
      description: "Real-time monitoring and proactive and measures to identify and threats.",
      icon: <Shield size={48} />,
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      featured: true
    },
    {
      id: 2,
      title: "Endpoint Security Solutions",
      description: "Real-time monitoring and proactive and measures to identify and threats.",
      icon: <Lock size={48} />,
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      featured: false
    },
    {
      id: 3,
      title: "Network Defense and Firewalls",
      description: "Real-time monitoring and proactive and measures to identify and threats.",
      icon: <Wifi size={48} />,
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      featured: false
    },
    {
      id: 4,
      title: "Data Encryption and Privacy",
      description: "Real-time monitoring and proactive and measures to identify and threats.",
      icon: <Database size={48} />,
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      featured: false
    },
    {
      id: 5,
      title: "Cloud Security and Compliance",
      description: "Real-time monitoring and proactive and measures to identify and threats.",
      icon: <Cloud size={48} />,
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      featured: false
    },
    {
      id: 6,
      title: "Incident Response and Management",
      description: "Real-time monitoring and proactive and measures to identify and threats.",
      icon: <AlertTriangle size={48} />,
      gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
      featured: false
    }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      padding: '80px 20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Header Section */}
        <div style={{
          textAlign: 'center',
          marginBottom: '60px'
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            background: 'rgba(255, 255, 255, 0.9)',
            padding: '8px 24px',
            borderRadius: '25px',
            marginBottom: '20px',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
            fontSize: '14px',
            fontWeight: '600',
            color: '#6366f1',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>
            <Shield size={16} style={{ marginRight: '8px' }} />
            OUR SERVICES
          </div>
          <h1 style={{
            fontSize: '48px',
            fontWeight: '700',
            color: '#1e293b',
            margin: '0',
            lineHeight: '1.2'
          }}>
            Comprehensive cybersecurity
          </h1>
          <h2 style={{
            fontSize: '48px',
            fontWeight: '700',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            margin: '0',
            lineHeight: '1.2'
          }}>
            services for protection
          </h2>
        </div>

        {/* Services Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '30px',
          padding: '0 20px'
        }}>
          {services.map((service) => (
            <div key={service.id} style={{
              background: service.featured ? service.gradient : 'rgba(255, 255, 255, 0.95)',
              borderRadius: '20px',
              padding: '40px 30px',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              border: service.featured ? 'none' : '1px solid rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(10px)',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
            }}>
              {/* Background Pattern */}
              <div style={{
                position: 'absolute',
                top: '-50%',
                right: '-50%',
                width: '200%',
                height: '200%',
                background: service.featured 
                  ? 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)'
                  : 'radial-gradient(circle, rgba(102, 126, 234, 0.05) 1px, transparent 1px)',
                backgroundSize: '20px 20px',
                opacity: 0.3,
                pointerEvents: 'none'
              }} />
              
              {/* Icon */}
              <div style={{
                color: service.featured ? 'white' : '#667eea',
                marginBottom: '24px',
                position: 'relative',
                zIndex: 2
              }}>
                {service.icon}
              </div>
              
              {/* Content */}
              <div style={{ position: 'relative', zIndex: 2 }}>
                <h3 style={{
                  fontSize: '24px',
                  fontWeight: '700',
                  color: service.featured ? 'white' : '#1e293b',
                  marginBottom: '16px',
                  lineHeight: '1.3'
                }}>
                  {service.title}
                </h3>
                
                <p style={{
                  fontSize: '16px',
                  color: service.featured ? 'rgba(255, 255, 255, 0.9)' : '#64748b',
                  lineHeight: '1.6',
                  marginBottom: '24px'
                }}>
                  {service.description}
                </p>
                
                {/* Arrow Button */}
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '40px',
                  height: '40px',
                  background: service.featured 
                    ? 'rgba(255, 255, 255, 0.2)' 
                    : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  borderRadius: '50%',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}>
                  <svg 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    style={{
                      color: service.featured ? 'white' : 'white'
                    }}
                  >
                    <path 
                      d="M5 12h14m-7-7l7 7-7 7" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
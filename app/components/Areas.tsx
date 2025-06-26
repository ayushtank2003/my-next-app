import React from 'react';
import { Shield, Monitor, FileText, Network } from 'lucide-react';

const CybersecurityServices = () => {
  const services = [
    {
      icon: <Monitor size={24} />,
      title: "Computer Security",
      description: "Protecting systems and data from unauthorized access, cyber threats digital vulnerabilities."
    },
    {
      icon: <FileText size={24} />,
      title: "File D Uplication & Access",
      description: "Protecting systems and data from unauthorized access, cyber threats digital vulnerabilities."
    },
    {
      icon: <Network size={24} />,
      title: "Network Protections",
      description: "Protecting systems and data from unauthorized access, cyber threats digital vulnerabilities."
    }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
      padding: '60px 20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        {/* Header Section */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'center',
          marginBottom: '100px'
        }}>
          {/* Left Content */}
          <div>
            {/* Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(255, 255, 255, 0.9)',
              padding: '10px 20px',
              borderRadius: '25px',
              marginBottom: '32px',
              border: '1px solid rgba(0, 0, 0, 0.1)',
              fontSize: '14px',
              fontWeight: '500',
              color: '#64748b',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
            }}>
              <Shield size={16} />
              OUR SECURITY
            </div>

            {/* Main Title */}
            <h1 style={{
              fontSize: '54px',
              fontWeight: '700',
              lineHeight: '1.1',
              marginBottom: '40px',
              color: '#1e293b'
            }}>
              Securing your digital{' '}
              <span style={{
                background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                world
              </span>
              <br />
              <span style={{
                background: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                together
              </span>
            </h1>

            {/* Services Description */}
            <div style={{ marginBottom: '50px' }}>
              <h3 style={{
                fontSize: '22px',
                fontWeight: '600',
                color: '#1e293b',
                marginBottom: '16px'
              }}>
                Real-Time Threat Monitoring:
              </h3>
              <p style={{
                fontSize: '16px',
                lineHeight: '1.6',
                color: '#64748b',
                marginBottom: '40px'
              }}>
                Real-Time Threat Monitoring continuously analyzes network traffic, user behavior, and system activity to detect and respond to potential potentials security threats threats as they occur.
              </p>

              <h3 style={{
                fontSize: '22px',
                fontWeight: '600',
                color: '#1e293b',
                marginBottom: '16px'
              }}>
                Compliance And Risk Management:
              </h3>
              <p style={{
                fontSize: '16px',
                lineHeight: '1.6',
                color: '#64748b'
              }}>
                compliance & risk management continuously analyzes network traffic, user behavior, and system activity to detect and respond to potential potentials security threats threats as they occur.
              </p>
            </div>
          </div>

          {/* Right Hero Image */}
          <div style={{
            position: 'relative',
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)',
            background: 'linear-gradient(135deg, #1e40af 0%, #3730a3 100%)'
          }}>
            <img 
              src="https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Cybersecurity professionals working together"
              style={{
                width: '100%',
                height: '400px',
                objectFit: 'cover',
                opacity: '0.9'
              }}
            />
            {/* Overlay with cyber elements */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.3) 0%, rgba(29, 78, 216, 0.3) 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <div style={{
                color: 'white',
                textAlign: 'center',
                opacity: '0.8'
              }}>
                <Shield size={48} style={{ marginBottom: '16px' }} />
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Content Box */}
        <div style={{
          background: 'white',
          borderRadius: '20px',
          padding: '40px',
          marginBottom: '80px',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
          border: '1px solid rgba(0, 0, 0, 0.05)',
          marginLeft: 'auto',
          maxWidth: '600px'
        }}>
          <h3 style={{
            fontSize: '22px',
            fontWeight: '600',
            color: '#1e293b',
            marginBottom: '16px'
          }}>
            Identity And Access Management:
          </h3>
          <p style={{
            fontSize: '16px',
            lineHeight: '1.6',
            color: '#64748b'
          }}>
            Identity and access management continuously analyzes network traffic, user behavior, and system activity to detect and respond to potential potentials security threats threats as they occur.
          </p>
        </div>

        {/* Services Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '30px',
          marginTop: '60px'
        }}>
          {services.map((service, index) => (
            <div key={index} style={{
              background: 'white',
              borderRadius: '20px',
              padding: '40px 30px',
              boxShadow: '0 8px 25px rgba(0, 0, 0, 0.08)',
              border: '1px solid rgba(0, 0, 0, 0.05)',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.12)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.08)';
            }}>
              {/* Icon */}
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '16px',
                background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                marginBottom: '24px'
              }}>
                {service.icon}
              </div>

              {/* Title */}
              <h3 style={{
                fontSize: '20px',
                fontWeight: '600',
                color: '#1e293b',
                marginBottom: '16px',
                lineHeight: '1.3'
              }}>
                {service.title}
              </h3>

              {/* Description */}
              <p style={{
                fontSize: '16px',
                lineHeight: '1.6',
                color: '#64748b',
                margin: 0
              }}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Responsive Styles */}
      <style jsx>{`
        @media (max-width: 1024px) {
          .header-grid {
            grid-template-columns: 1fr !important;
            gap: 50px !important;
          }
          
          .main-title {
            font-size: 42px !important;
          }
        }

        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr !important;
          }
          
          .main-title {
            font-size: 36px !important;
          }
          
          .hero-image {
            height: 300px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default CybersecurityServices;
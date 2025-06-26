'use client';

import React, { useEffect, useState } from 'react';

const Footer = () => {
  const [gridSpan, setGridSpan] = useState('span 1');

  useEffect(() => {
    const updateGridSpan = () => {
      setGridSpan(window.innerWidth > 768 ? 'span 2' : 'span 1');
    };

    updateGridSpan(); // Run once on mount
    window.addEventListener('resize', updateGridSpan);
    return () => window.removeEventListener('resize', updateGridSpan);
  }, []);

  const quickLinks = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'Blog', href: '#' }
  ];

  const services = [
    { name: 'Threat Detection', href: '#' },
    { name: 'Endpoint Security', href: '#' },
    { name: 'Network Defense', href: '#' },
    { name: 'Data Encryption', href: '#' }
  ];

  const support = [
    { name: 'Help', href: '#' },
    { name: "Term's & Condition", href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Contact Us', href: '#' }
  ];

  const socialIcons = [
    { name: 'Pinterest', icon: 'P', href: '#' },
    { name: 'Twitter', icon: 'X', href: '#' },
    { name: 'Facebook', icon: 'f', href: '#' },
    { name: 'Instagram', icon: 'IG', href: '#' }
  ];

  return (
    <footer style={{
      background: 'linear-gradient(135deg, #6366f1 0%, #3b82f6 50%, #06b6d4 100%)',
      color: 'white',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background decorative elements */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `
          radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.05) 0%, transparent 50%)
        `,
        pointerEvents: 'none'
      }}></div>

      {/* Main content */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        padding: '60px 5% 0'
      }}>
        {/* Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '60px',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <div style={{
              width: '48px',
              height: '48px',
              background: 'rgba(255, 255, 255, 0.2)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.3)'
            }}>
              🛡️
            </div>
            <span style={{
              fontSize: '28px',
              fontWeight: '700',
              fontFamily: 'Segoe UI, Roboto, sans-serif'
            }}>
              Proshield.
            </span>
          </div>

          <div style={{ display: 'flex', gap: '12px' }}>
            {socialIcons.map((social, i) => (
              <a
                key={i}
                href={social.href}
                style={{
                  width: '44px',
                  height: '44px',
                  background: 'rgba(255, 255, 255, 0.15)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '16px',
                  fontWeight: '600',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Grid Sections */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '40px',
          marginBottom: '40px'
        }}>
          {/* Newsletter */}
          <div style={{ gridColumn: gridSpan }}>
            <h3 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '16px' }}>
              Subscribe Our Newsletter:
            </h3>
            <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.8)', marginBottom: '24px' }}>
              Protecting networks, systems data from evolving.
            </p>
            <div style={{ display: 'flex', gap: '12px', maxWidth: '400px' }}>
              <input
                type="email"
                placeholder="Enter Your Email"
                style={{
                  flex: 1,
                  padding: '16px 20px',
                  borderRadius: '50px',
                  border: 'none',
                  background: 'rgba(255, 255, 255, 0.9)',
                  fontSize: '16px',
                  outline: 'none',
                  color: '#333'
                }}
              />
              <button style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                border: 'none',
                background: 'rgba(255, 255, 255, 0.2)',
                color: 'white',
                fontSize: '20px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s ease'
              }}>
                ➤
              </button>
            </div>
          </div>

          {/* Links */}
          {[{ title: 'Quick Link', items: quickLinks },
            { title: 'Services', items: services },
            { title: 'Support', items: support }].map((section, i) => (
            <div key={i}>
              <h4 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '24px' }}>
                {section.title}
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {section.items.map((item, index) => (
                  <li key={index} style={{ marginBottom: '12px' }}>
                    <a
                      href={item.href}
                      style={{
                        color: 'rgba(255, 255, 255, 0.8)',
                        textDecoration: 'none',
                        fontSize: '16px',
                        transition: 'color 0.3s ease'
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = 'white'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)'; }}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '24px' }}>
              Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '16px', fontWeight: '500' }}>
                +123 456 789
              </div>
              <div style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '16px' }}>
                Info@Domain.Com
              </div>
              <div style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '16px', lineHeight: '1.5' }}>
                123 High Street LN1 1AB<br />
                United Kingdom
              </div>
            </div>
          </div>
        </div>

        {/* Bottom box */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '16px',
          padding: '24px',
          marginBottom: '40px',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          textAlign: 'center'
        }}>
          <p style={{ margin: '0 0 8px 0', fontSize: '16px', color: 'rgba(255, 255, 255, 0.8)' }}>
            Looking For WordPress Theme?
          </p>
          <a
            href="#"
            style={{
              color: 'white',
              fontSize: '18px',
              fontWeight: '600',
              textDecoration: 'underline',
              textUnderlineOffset: '4px'
            }}
          >
            View Demo
          </a>
        </div>

        {/* Copyright */}
        <div style={{
          textAlign: 'center',
          padding: '20px 0',
          borderTop: '1px solid rgba(255, 255, 255, 0.2)',
          color: 'rgba(255, 255, 255, 0.7)',
          fontSize: '16px'
        }}>
          Copyright © 2025 All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

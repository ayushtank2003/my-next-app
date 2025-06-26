import React, { useState, MouseEvent } from 'react';
import { ChevronDown, ChevronUp, Shield } from 'lucide-react';

type FAQItem = {
  question: string;
  answer: string;
};

const CybersecurityFAQ: React.FC = () => {
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({ 0: true });

  const toggleItem = (index: number) => {
    setExpandedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const faqData: FAQItem[] = [
    {
      question: "What is cybersecurity?",
      answer: "Cybersecurity is critical for safeguarding sensitive information..."
    },
    {
      question: "Why is cybersecurity important?",
      answer: "Cybersecurity protects organizations and individuals from data breaches..."
    },
    {
      question: "What are the most common cyber threats?",
      answer: "Common cyber threats include malware, phishing attacks, ransomware..."
    },
    {
      question: "How can I protect my business from cyber threats?",
      answer: "Implement multi-layered security including firewalls, antivirus software..."
    }
  ];

  const handleMouseEnter = (e: MouseEvent<HTMLButtonElement>, index: number) => {
    if (!expandedItems[index]) {
      (e.currentTarget as HTMLButtonElement).style.background = '#f8f9fa';
    }
  };

  const handleMouseLeave = (e: MouseEvent<HTMLButtonElement>, index: number) => {
    if (!expandedItems[index]) {
      (e.currentTarget as HTMLButtonElement).style.background = 'white';
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)', padding: '40px 20px' }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '60px',
        alignItems: 'start'
      }}>
        {/* Left Section */}
        <div style={{ paddingTop: '40px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(255, 255, 255, 0.9)',
            padding: '8px 16px',
            borderRadius: '20px',
            marginBottom: '32px',
            border: '1px solid rgba(0, 0, 0, 0.1)',
            fontSize: '14px',
            fontWeight: '500',
            color: '#666'
          }}>
            <Shield size={16} />
            FAQ
          </div>

          <h1 style={{
            fontSize: '48px',
            fontWeight: '700',
            lineHeight: '1.2',
            marginBottom: '40px',
            color: '#1a1a1a'
          }}>
            Cybersecurity questions{' '}
            <span style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              answered clearly
            </span>
          </h1>

          <div style={{
            position: 'relative',
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
            background: 'linear-gradient(135deg, #0c4a6e 0%, #0891b2 50%, #06b6d4 100%)'
          }}>
            <img
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Cybersecurity professional working"
              style={{
                width: '100%',
                height: '400px',
                objectFit: 'cover',
                opacity: '0.9'
              }}
            />
            <div style={{
              position: 'absolute',
              bottom: '20px',
              left: '20px',
              background: 'rgba(0, 0, 0, 0.7)',
              color: 'white',
              padding: '8px 16px',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '500'
            }}>
              View
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div style={{ paddingTop: '120px' }}>
          {faqData.map((item, index) => (
            <div key={index} style={{
              marginBottom: '16px',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
              transition: 'all 0.3s ease'
            }}>
              <button
                onClick={() => toggleItem(index)}
                onMouseEnter={(e) => handleMouseEnter(e, index)}
                onMouseLeave={(e) => handleMouseLeave(e, index)}
                style={{
                  width: '100%',
                  background: expandedItems[index]
                    ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                    : 'white',
                  color: expandedItems[index] ? 'white' : '#1a1a1a',
                  border: 'none',
                  padding: '24px 28px',
                  fontSize: '18px',
                  fontWeight: '600',
                  textAlign: 'left',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  transition: 'all 0.3s ease',
                  borderBottom: expandedItems[index] ? 'none' : '1px solid #eee'
                }}
              >
                <span>{item.question}</span>
                {expandedItems[index] ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
              </button>

              {expandedItems[index] && (
                <div style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: 'white',
                  padding: '0 28px 28px 28px',
                  fontSize: '16px',
                  lineHeight: '1.6',
                  animation: 'fadeIn 0.3s ease-in-out'
                }}>
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .grid-container {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }

          .title {
            font-size: 36px !important;
          }

          .faq-section {
            padding-top: 0 !important;
          }
        }
      `}</style>
    </div>
  );
};

export default CybersecurityFAQ;

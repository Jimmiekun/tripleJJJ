import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';

export default function TripleJBiscuits() {
  const [activeCategory, setActiveCategory] = useState('all');

  const biscuits = [
    { name: 'Yale Digestive', category: 'classic', img: 'https://images.unsplash.com/photo-1599599810694-b5ac4dd64974?w=200&h=200&fit=crop', alt: 'Yale digestive biscuits' },
    { name: 'Deli Crackers', category: 'crackers', img: 'https://images.unsplash.com/photo-1585707924f48-5eedc2277f89?w=200&h=200&fit=crop', alt: 'Deli crackers' },
    { name: 'Premium Wafers', category: 'premium', img: 'https://images.unsplash.com/photo-1590080876-ab7ed4b8bfd6?w=200&h=200&fit=crop', alt: 'Wafers' },
    { name: 'Tea Biscuits', category: 'classic', img: 'https://images.unsplash.com/photo-1604080889193-3876e17b4c4d?w=200&h=200&fit=crop', alt: 'Tea biscuits' },
    { name: 'Malted Grain', category: 'premium', img: 'https://images.unsplash.com/photo-1548269865-cbf461e0b0a2?w=200&h=200&fit=crop', alt: 'Malted biscuits' },
    { name: 'Coconut Delights', category: 'premium', img: 'https://images.unsplash.com/photo-1599599810964-b82b6f16c2eb?w=200&h=200&fit=crop', alt: 'Coconut biscuits' },
    { name: 'Chocolate Coated', category: 'premium', img: 'https://images.unsplash.com/photo-1595521624265-af8e5b8b37fd?w=200&h=200&fit=crop', alt: 'Chocolate biscuits' },
    { name: 'Ositas Classic', category: 'classic', img: 'https://images.unsplash.com/photo-1590080876-ab7ed4b8bfd6?w=200&h=200&fit=crop', alt: 'Ositas biscuits' },
  ];

  const filtered = activeCategory === 'all' 
    ? biscuits 
    : biscuits.filter(b => b.category === activeCategory);

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f5f1e8 0%, #e8dcc8 100%)',
      color: '#2c2c2c',
      fontFamily: '"Inter", sans-serif',
    }}>
      
      {/* Header */}
      <header style={{
        padding: '40px 20px 20px',
        textAlign: 'center',
        borderBottom: '1px solid rgba(139, 69, 19, 0.1)',
      }}>
        <h1 style={{
          fontSize: '48px',
          fontWeight: '700',
          margin: '0 0 8px',
          color: '#704214',
          letterSpacing: '-1px',
        }}>
          TripleJ
        </h1>
        <p style={{
          fontSize: '14px',
          color: '#8B4513',
          fontWeight: '500',
          letterSpacing: '1.5px',
          textTransform: 'uppercase',
          margin: '0',
        }}>
          Premium biscuits from Lagos
        </p>
      </header>

      {/* Hero Section */}
      <section style={{
        padding: '40px 20px',
        textAlign: 'center',
        borderBottom: '1px solid rgba(139, 69, 19, 0.1)',
      }}>
        <p style={{
          fontSize: '16px',
          color: '#5c3d2e',
          lineHeight: '1.6',
          maxWidth: '600px',
          margin: '0 auto 24px',
        }}>
          Curated biscuits and crackers from trusted wholesale partners. Direct from Lagos to your door.
        </p>
        
        <a href="https://wa.me/2348085513418" style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '10px',
          padding: '14px 28px',
          background: '#25D366',
          color: 'white',
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: '600',
          fontSize: '15px',
          transition: 'all 0.2s ease',
          boxShadow: '0 4px 12px rgba(37, 211, 102, 0.25)',
          border: 'none',
          cursor: 'pointer',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = '#1da856';
          e.currentTarget.style.boxShadow = '0 6px 16px rgba(37, 211, 102, 0.35)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = '#25D366';
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(37, 211, 102, 0.25)';
        }}>
          <MessageCircle size={18} />
          Message on WhatsApp
        </a>
      </section>

      {/* Filters */}
      <section style={{
        padding: '24px 20px',
        textAlign: 'center',
        display: 'flex',
        gap: '12px',
        justifyContent: 'center',
        flexWrap: 'wrap',
      }}>
        {['all', 'classic', 'crackers', 'premium'].map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            style={{
              padding: '8px 18px',
              borderRadius: '6px',
              border: activeCategory === cat ? '2px solid #704214' : '1px solid #d4b8a0',
              background: activeCategory === cat ? '#704214' : 'white',
              color: activeCategory === cat ? 'white' : '#704214',
              fontWeight: '500',
              fontSize: '13px',
              cursor: 'pointer',
              textTransform: 'capitalize',
              transition: 'all 0.2s ease',
            }}>
            {cat === 'all' ? 'All biscuits' : cat}
          </button>
        ))}
      </section>

      {/* Grid */}
      <section style={{
        padding: '40px 20px',
        maxWidth: '1000px',
        margin: '0 auto',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
          gap: '24px',
        }}>
          {filtered.map((biscuit, idx) => (
            <div
              key={idx}
              style={{
                borderRadius: '12px',
                background: 'white',
                overflow: 'hidden',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(0, 0, 0, 0.05)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
              }}>
              <img 
                src={biscuit.img} 
                alt={biscuit.alt}
                style={{
                  width: '100%',
                  aspectRatio: '1',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
              <div style={{ padding: '12px' }}>
                <p style={{
                  margin: '0',
                  fontSize: '13px',
                  fontWeight: '600',
                  color: '#704214',
                  textAlign: 'center',
                }}>
                  {biscuit.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section style={{
        padding: '40px 20px',
        textAlign: 'center',
        borderTop: '1px solid rgba(139, 69, 19, 0.1)',
        background: 'rgba(139, 69, 19, 0.05)',
      }}>
        <h2 style={{
          fontSize: '24px',
          fontWeight: '600',
          color: '#704214',
          margin: '0 0 16px',
        }}>
          Ready to order?
        </h2>
        <p style={{
          fontSize: '14px',
          color: '#5c3d2e',
          margin: '0 0 20px',
        }}>
          DM us on WhatsApp with your order details
        </p>
        <a href="https://wa.me/2348085513418" style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '10px',
          padding: '14px 28px',
          background: '#25D366',
          color: 'white',
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: '600',
          fontSize: '15px',
          transition: 'all 0.2s ease',
          boxShadow: '0 4px 12px rgba(37, 211, 102, 0.25)',
          border: 'none',
          cursor: 'pointer',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = '#1da856';
          e.currentTarget.style.boxShadow = '0 6px 16px rgba(37, 211, 102, 0.35)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = '#25D366';
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(37, 211, 102, 0.25)';
        }}>
          <MessageCircle size={18} />
          Chat on WhatsApp
        </a>
      </section>

      {/* Contact Info */}
      <footer style={{
        padding: '24px 20px',
        textAlign: 'center',
        background: '#704214',
        color: 'white',
        fontSize: '12px',
      }}>
        <p style={{ margin: '0' }}>
          📱 WhatsApp: +234 808 551 3418
        </p>
        <p style={{ margin: '8px 0 0', opacity: '0.9' }}>
          Located in Ejigbo, Lagos | Wholesale & Retail
        </p>
      </footer>
    </div>
  );
}
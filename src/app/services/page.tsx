export default function Services() {
  const services = [
    { title: 'Facials', description: 'Rejuvenate your skin with our luxurious facial treatments.' },
    { title: 'Massages', description: 'Relax and unwind with a variety of massage therapies.' },
    { title: 'Manicure & Pedicure', description: 'Pamper your hands and feet with our expert care.' },
    { title: 'Spray Tanning', description: 'Get a sun-kissed glow with our safe spray tanning.' },
    { title: 'Permanent Makeup', description: 'Wake up beautiful every day with our permanent makeup services.' },
  ];

  return (
    <main style={{
      minHeight: '80vh',
      background: 'linear-gradient(180deg, #ffb6b9 0%, #fceabb 100%)',
      fontFamily: 'sans-serif',
      padding: '3rem 1rem',
    }}>
      <h1 style={{
        textAlign: 'center',
        color: '#d72660',
        fontSize: '2.2rem',
        fontWeight: 800,
        marginBottom: '2.5rem',
      }}>
        Our Services
      </h1>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '2rem',
        justifyContent: 'center',
        maxWidth: '1100px',
        margin: '0 auto',
      }}>
        {services.map((service) => (
          <div
            key={service.title}
            style={{
              background: 'rgba(255,255,255,0.95)',
              borderRadius: '1.5rem',
              boxShadow: '0 2px 12px rgba(255,111,145,0.10)',
              padding: '2rem 1.5rem',
              minWidth: '220px',
              maxWidth: '260px',
              flex: '1 1 220px',
              border: '2px solid #ffb6b9',
              textAlign: 'center',
              transition: 'transform 0.15s',
            }}
          >
            <h2 style={{ color: '#d72660', fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.7rem' }}>{service.title}</h2>
            <p style={{ color: '#ff6f91', fontSize: '1rem', marginBottom: 0 }}>{service.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
} 
'use client';

import Link from 'next/link';

const services = [
  { id: 'eyebrows', name: 'Eyebrows' },
  { id: 'eyeliner', name: 'Eyeliner' },
  { id: 'lips', name: 'Lips' },
  { id: 'fine-line-tattoos', name: 'Fine Line Tattoos' },
  { id: 'scalp-micro-pigmentation', name: 'Scalp Micro Pigmentation' },
  { id: 'spray-tanning', name: 'Spray Tanning' },
];

type ServicesListProps = {
  params: { locale: string };
};

export default function ServicesList({ params }: ServicesListProps) {
  const { locale } = params;

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Our Services</h1>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {services.map(service => (
          <Link
            key={service.id}
            href={`/${locale}/marketing/services/${service.id}`}
            style={{
              padding: '1rem 2rem',
              backgroundColor: 'black',
              color: 'white',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 'bold',
            }}
          >
            {service.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

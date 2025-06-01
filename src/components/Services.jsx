import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { client } from '../lib/sanity';

const Services = () => {
  const { data: services, isLoading, error } = useQuery({
    queryKey: ['services'],
    queryFn: async () => {
      const query = `*[_type == "service"] {
        _id,
        title,
        description,
        "imageUrl": image.asset->url
      }`;
      return await client.fetch(query);
    }
  });

  if (isLoading) return <div>Chargement...</div>;
  if (error) return <div>Une erreur est survenue</div>;

  return (
    <section id="services" className="services">
      <h2>Nos Services</h2>
      <div className="services-grid">
        {services?.map((service) => (
          <div key={service._id} className="service-card">
            {service.imageUrl && (
              <img src={service.imageUrl} alt={service.title} />
            )}
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services; 
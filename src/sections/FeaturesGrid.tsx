import React from 'react';
import { Database, Server, Code } from 'lucide-react';

const FeaturesGrid = () => {
  const cards = [
    {
      icon: <Code className="text-backend-green" />,
      title: "API Architecture",
      desc: "Design clean, performant, and scalable APIs using REST, GraphQL, and gRPC."
    },
    {
      icon: <Database className="text-backend-cyan" />,
      title: "Database Scaling",
      desc: "Master SQL and NoSQL databases, from indexing to sharding and replication."
    },
    {
      icon: <Server className="text-backend-accent" />,
      title: "Infrastructure Automation",
      desc: "Learn to automate your infrastructure using Docker, Kubernetes, and Terraform."
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-[#050505]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {cards.map((card, i) => (
            <div key={i} className="glass-panel p-8 md:p-10 hover:border-backend-green/30 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:bg-white/10 transition-all duration-300">
                {card.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
              <p className="text-white/50 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;

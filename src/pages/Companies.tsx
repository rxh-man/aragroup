import Layout from '@/components/layout/Layout';
import SectionTitle from '@/components/ui/SectionTitle';
import GoldDivider from '@/components/ui/GoldDivider';
import { HardHat, Building2, Car, Factory } from 'lucide-react';

const Companies = () => {
  const companies = [
    {
      icon: HardHat,
      name: 'Masheco Trading & Contracting',
      location: 'Qatar',
      description: 'Providing trading and contracting services for construction and infrastructure projects, fully owned and operated by ARA Group.',
    },
    {
      icon: Building2,
      name: 'Masheco Real Estate',
      location: 'Qatar',
      description: 'Specialized in property development, leasing, and asset management, focusing on long-term value creation.',
    },
    {
      icon: Car,
      name: 'Masheco Used Cars',
      location: 'Qatar',
      description: 'A trusted business offering quality used vehicles, operating with transparency and ethical standards.',
    },
    {
      icon: Factory,
      name: 'Panomara Steels Recycling & Molding',
      location: 'Saudi Arabia',
      description: 'An industrial unit engaged in steel recycling and molding, supporting sustainable manufacturing and environmental responsibility.',
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-24 lg:pt-40 lg:pb-32 bg-cream-gradient">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-xs font-medium tracking-[0.3em] uppercase text-accent mb-6 animate-fade-up">
              Our Portfolio
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-8 animate-fade-up animate-delay-100">
              Our Companies
            </h1>
            <GoldDivider className="my-10 animate-fade-up animate-delay-200" />
            <p className="text-xl text-muted-foreground leading-relaxed animate-fade-up animate-delay-300">
              Wholly Owned Subsidiaries
            </p>
          </div>
        </div>
      </section>

      {/* Companies Grid */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {companies.map((company, index) => (
              <div
                key={company.name}
                className="group p-10 bg-card border border-border/50 hover:border-accent/30 hover:shadow-elegant transition-all duration-500 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-accent/10 rounded flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <company.icon className="w-8 h-8 text-accent" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-medium tracking-[0.15em] uppercase text-accent">
                        {company.location}
                      </span>
                    </div>
                    <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-4">
                      {company.name}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {company.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ownership Statement */}
      <section className="py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-accent mb-6 animate-fade-up">
              Ownership Statement
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-8 animate-fade-up animate-delay-100">
              100% ARA Group Ownership
            </h2>
            <GoldDivider className="my-10 animate-fade-up animate-delay-200" />
            <p className="text-lg text-primary-foreground/70 leading-relaxed animate-fade-up animate-delay-300">
              All companies listed above are 100% owned, funded, and controlled 
              by ARA Group of Companies. We maintain full independence in our 
              operations and decision-making processes.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Companies;

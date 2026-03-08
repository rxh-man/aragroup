import Layout from '@/components/layout/Layout';
import GoldDivider from '@/components/ui/GoldDivider';
import SectionTitle from '@/components/ui/SectionTitle';

const Companies = () => {
  const companies = [
    {
      name: 'Masheco Trading & Contracting',
      location: 'Qatar',
      description: 'Providing trading and contracting services for construction and infrastructure projects, fully owned and operated by ARA Group.',
    },
    {
      name: 'Masheco Real Estate',
      location: 'Qatar',
      description: 'Specialized in property development, leasing, and asset management, focusing on long-term value creation.',
    },
    {
      name: 'Masheco Used Cars',
      location: 'Qatar',
      description: 'A trusted business offering quality used vehicles, operating with transparency and ethical standards.',
    },
    {
      name: 'Panomara Steels Recycling & Molding',
      location: 'Saudi Arabia',
      description: 'An industrial unit engaged in steel recycling and molding, supporting sustainable manufacturing and environmental responsibility.',
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-36 pb-24 lg:pt-44 lg:pb-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-[11px] tracking-[0.5em] uppercase text-accent mb-8 animate-fade-up">Portfolio</p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-[1.15] animate-fade-up animate-delay-100">
              Our Companies
            </h1>
            <GoldDivider className="my-10 animate-fade-up animate-delay-200" />
            <p className="text-base text-primary-foreground/60 animate-fade-up animate-delay-300">
              Wholly owned subsidiaries
            </p>
          </div>
        </div>
      </section>

      {/* Companies */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {companies.map((company, index) => (
              <div
                key={company.name}
                className="p-8 border border-border bg-card hover:border-accent/40 hover:shadow-[0_8px_30px_-12px_hsla(38,55%,48%,0.12)] transition-all duration-500 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <p className="text-[11px] tracking-[0.25em] uppercase text-accent mb-3">
                  {company.location}
                </p>
                <h3 className="font-serif text-xl text-foreground mb-4">
                  {company.name}
                </h3>
                <div className="w-8 h-0.5 bg-accent/40 mb-4" />
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {company.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ownership */}
      <section className="py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-[11px] tracking-[0.3em] uppercase text-accent mb-6 animate-fade-up">Ownership</p>
            <h2 className="font-serif text-3xl md:text-4xl mb-8 animate-fade-up animate-delay-100">
              100% ARA Group
            </h2>
            <GoldDivider className="my-8 animate-fade-up animate-delay-200" />
            <p className="text-base text-primary-foreground/60 leading-[1.85] animate-fade-up animate-delay-300">
              All companies are fully owned, funded, and controlled by ARA Group of Companies. 
              We maintain complete independence in operations and decision-making.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Companies;

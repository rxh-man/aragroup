import Layout from '@/components/layout/Layout';
import SectionTitle from '@/components/ui/SectionTitle';
import GoldDivider from '@/components/ui/GoldDivider';

const Companies = () => {
  const companies = [
    {
      name: 'Masheco Trading & Contracting',
      location: 'Qatar',
      description: 'Trading and contracting services for construction and infrastructure projects.',
    },
    {
      name: 'Masheco Real Estate',
      location: 'Qatar',
      description: 'Property development, leasing, and asset management focused on long-term value.',
    },
    {
      name: 'Masheco Used Cars',
      location: 'Qatar',
      description: 'Quality used vehicles, operating with transparency and ethical standards.',
    },
    {
      name: 'Panomara Steels Recycling & Molding',
      location: 'Saudi Arabia',
      description: 'Steel recycling and molding, supporting sustainable manufacturing.',
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-36 pb-28 lg:pt-44 lg:pb-36">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-[11px] tracking-[0.4em] uppercase text-muted-foreground mb-8 animate-fade-up">
              Portfolio
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-foreground leading-[1.15] animate-fade-up animate-delay-100">
              Our Companies
            </h1>
            <GoldDivider className="my-10 animate-fade-up animate-delay-200" />
            <p className="text-base text-muted-foreground animate-fade-up animate-delay-300">
              Wholly owned subsidiaries
            </p>
          </div>
        </div>
      </section>

      {/* Companies */}
      <section className="pb-28 lg:pb-36">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="divide-y divide-border">
              {companies.map((company, index) => (
                <div
                  key={company.name}
                  className="py-12 first:pt-0 last:pb-0 animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <p className="text-[11px] tracking-[0.25em] uppercase text-accent mb-3">
                    {company.location}
                  </p>
                  <h3 className="font-serif text-xl md:text-2xl font-normal text-foreground mb-4">
                    {company.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-[1.8]">
                    {company.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ownership */}
      <section className="py-28 lg:py-36 bg-foreground text-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-[11px] tracking-[0.25em] uppercase text-background/50 mb-6 animate-fade-up">
              Ownership
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-normal mb-8 animate-fade-up animate-delay-100">
              100% ARA Group
            </h2>
            <p className="text-base text-background/60 leading-[1.8] animate-fade-up animate-delay-200">
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

import Layout from '@/components/layout/Layout';
import GoldDivider from '@/components/ui/GoldDivider';

const Projects = () => {
  const focusAreas = [
    'Self-Funded Business Expansion',
    'Hospitality Development',
    'Construction & Infrastructure',
    'Industrial Recycling',
    'Real Estate Growth',
  ];

  const commitments = [
    'No public or private fundraising',
    'No third-party investors',
    'No shared ownership',
    'Full responsibility & accountability',
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-36 pb-28 lg:pt-44 lg:pb-36">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-[11px] tracking-[0.4em] uppercase text-muted-foreground mb-8 animate-fade-up">
              Growth & Development
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-foreground leading-[1.15] animate-fade-up animate-delay-100">
              Projects & Future
            </h1>
            <GoldDivider className="my-10 animate-fade-up animate-delay-200" />
            <p className="text-base text-muted-foreground animate-fade-up animate-delay-300">
              Strategic developments powered by our vision and capital
            </p>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-28 lg:py-36 border-t border-border">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <p className="text-[11px] tracking-[0.25em] uppercase text-muted-foreground mb-10 text-center animate-fade-up">
              Current Focus
            </p>
            <div className="space-y-0 divide-y divide-border">
              {focusAreas.map((area, index) => (
                <div
                  key={area}
                  className="py-6 animate-fade-up"
                  style={{ animationDelay: `${(index + 1) * 0.08}s` }}
                >
                  <span className="text-base text-foreground">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* India Expansion */}
      <section className="py-28 lg:py-36 bg-secondary">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-[11px] tracking-[0.25em] uppercase text-muted-foreground mb-6 animate-fade-up">
              Upcoming
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-normal text-foreground mb-8 animate-fade-up animate-delay-100">
              Expanding to India
            </h2>
            <p className="text-base text-muted-foreground leading-[1.8] mb-12 animate-fade-up animate-delay-200">
              ARA Group is planning to develop modern hotels and convention centers 
              across multiple states in India — fully financed by ARA Group's own capital, 
              without external investment or joint ventures.
            </p>
            <div className="flex justify-center gap-12 text-sm text-muted-foreground animate-fade-up animate-delay-300">
              <span className="font-serif text-lg text-foreground">Hotels</span>
              <span className="font-serif text-lg text-foreground">Convention Centers</span>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-28 lg:py-36">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <p className="text-[11px] tracking-[0.25em] uppercase text-muted-foreground mb-10 text-center animate-fade-up">
              Our Commitment
            </p>
            <div className="space-y-0 divide-y divide-border">
              {commitments.map((commitment, index) => (
                <div
                  key={commitment}
                  className="py-6 animate-fade-up"
                  style={{ animationDelay: `${(index + 1) * 0.08}s` }}
                >
                  <span className="text-base text-foreground">{commitment}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-28 lg:py-36 bg-foreground text-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-[11px] tracking-[0.25em] uppercase text-background/50 mb-6 animate-fade-up">
              Get in Touch
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-normal mb-12 animate-fade-up animate-delay-100">
              Contact
            </h2>
            <div className="flex flex-col gap-4 text-sm text-background/60 animate-fade-up animate-delay-200">
              <span>Headquarters — Qatar</span>
              <span>Qatar · Saudi Arabia · UAE · India</span>
              <span>info@aragroup.com</span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;

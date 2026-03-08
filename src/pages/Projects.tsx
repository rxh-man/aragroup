import Layout from '@/components/layout/Layout';
import GoldDivider from '@/components/ui/GoldDivider';
import SectionTitle from '@/components/ui/SectionTitle';
import { MapPin, Globe, Mail } from 'lucide-react';

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
      <section className="pt-36 pb-24 lg:pt-44 lg:pb-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-[11px] tracking-[0.5em] uppercase text-accent mb-8 animate-fade-up">
              Growth & Development
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-[1.15] animate-fade-up animate-delay-100">
              Projects & Future
            </h1>
            <GoldDivider className="my-10 animate-fade-up animate-delay-200" />
            <p className="text-base text-primary-foreground/60 animate-fade-up animate-delay-300">
              Strategic developments powered by our vision and capital
            </p>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <SectionTitle subtitle="Strategic Focus" title="Current Focus Areas" />
          <div className="mt-14 max-w-2xl mx-auto grid gap-3">
            {focusAreas.map((area, index) => (
              <div
                key={area}
                className="flex items-center gap-4 p-5 border border-border bg-card hover:border-accent/40 transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${(index + 1) * 0.08}s` }}
              >
                <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                <span className="text-foreground text-sm font-medium">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* India Expansion */}
      <section className="py-24 lg:py-32 bg-secondary">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[11px] tracking-[0.3em] uppercase text-accent mb-6 animate-fade-up">Upcoming</p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8 animate-fade-up animate-delay-100">
              Expanding to India
            </h2>
            <p className="text-base text-muted-foreground leading-[1.85] mb-14 animate-fade-up animate-delay-200">
              ARA Group is planning to develop modern hotels and convention centers 
              across multiple states in India — fully financed by ARA Group's own capital, 
              without external investment or joint ventures.
            </p>
            <div className="grid md:grid-cols-2 gap-6 max-w-lg mx-auto animate-fade-up animate-delay-300">
              <div className="p-8 bg-background border border-border text-center">
                <h3 className="font-serif text-xl text-foreground">Modern Hotels</h3>
                <p className="text-sm text-muted-foreground mt-2">Luxury hospitality across states</p>
              </div>
              <div className="p-8 bg-background border border-border text-center">
                <h3 className="font-serif text-xl text-foreground">Convention Centers</h3>
                <p className="text-sm text-muted-foreground mt-2">World-class venues</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <SectionTitle subtitle="Our Pledge" title="Our Commitment" />
          <div className="mt-14 max-w-2xl mx-auto grid gap-3">
            {commitments.map((commitment, index) => (
              <div
                key={commitment}
                className="flex items-center gap-4 p-5 border border-border bg-card animate-fade-up"
                style={{ animationDelay: `${(index + 1) * 0.08}s` }}
              >
                <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                <span className="text-foreground text-sm font-medium">{commitment}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[11px] tracking-[0.3em] uppercase text-accent mb-6 animate-fade-up">Get in Touch</p>
            <h2 className="font-serif text-3xl md:text-4xl mb-14 animate-fade-up animate-delay-100">Contact</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center animate-fade-up animate-delay-200">
                <MapPin className="w-5 h-5 text-accent mx-auto mb-3" />
                <h4 className="text-sm font-medium mb-1">Headquarters</h4>
                <p className="text-sm text-primary-foreground/50">Qatar</p>
              </div>
              <div className="text-center animate-fade-up animate-delay-300">
                <Globe className="w-5 h-5 text-accent mx-auto mb-3" />
                <h4 className="text-sm font-medium mb-1">Operations</h4>
                <p className="text-sm text-primary-foreground/50">Qatar · Saudi Arabia · UAE · India</p>
              </div>
              <div className="text-center animate-fade-up animate-delay-400">
                <Mail className="w-5 h-5 text-accent mx-auto mb-3" />
                <h4 className="text-sm font-medium mb-1">Email</h4>
                <p className="text-sm text-primary-foreground/50">info@aragroup.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;

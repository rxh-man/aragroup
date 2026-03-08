import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import SectionTitle from '@/components/ui/SectionTitle';
import GoldDivider from '@/components/ui/GoldDivider';
import { ArrowRight, Check } from 'lucide-react';
import chairmanImage from '@/assets/chairman.png';

const Index = () => {
  const differentiators = [
    'No External Investors',
    '100% ARA Group Capital',
    'Halal & Ethical Business Model',
    'Long-Term Vision',
    'International Operations',
  ];

  const businessAreas = [
    { title: 'Halal Business Investments', description: 'Strategic investments in ethical, shariah-compliant ventures across global markets.' },
    { title: 'Hotel Development', description: 'World-class hospitality projects designed for lasting excellence.' },
    { title: 'Construction & Infrastructure', description: 'Building foundations for sustainable, large-scale development.' },
    { title: 'Trading & Contracting', description: 'Comprehensive services for construction and infrastructure sectors.' },
    { title: 'Real Estate', description: 'Property development focused on long-term value creation.' },
    { title: 'Industrial Recycling', description: 'Sustainable manufacturing supporting environmental responsibility.' },
  ];

  return (
    <Layout>
      {/* Hero — dark cinematic */}
      <section className="relative min-h-[100vh] flex items-center justify-center bg-primary overflow-hidden">
        {/* Subtle radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsla(38,55%,48%,0.08)_0%,_transparent_70%)]" />
        
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[11px] tracking-[0.5em] uppercase text-accent mb-10 animate-fade-up">
              Self-Funded · Ethical · Global
            </p>
            
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold text-primary-foreground leading-[1.1] animate-fade-up animate-delay-100">
              ARA Group
              <span className="block text-accent font-normal italic text-3xl md:text-4xl lg:text-5xl mt-3">
                of Companies
              </span>
            </h1>
            
            <GoldDivider className="my-10 animate-fade-up animate-delay-200" />
            
            <p className="text-base md:text-lg text-primary-foreground/60 font-light leading-relaxed max-w-lg mx-auto animate-fade-up animate-delay-300">
              Building the future with our own vision & capital.
            </p>
            
            <div className="mt-14 animate-fade-up animate-delay-400">
              <Link
                to="/about"
                className="inline-flex items-center gap-3 px-8 py-3.5 bg-accent text-accent-foreground text-[13px] font-medium tracking-[0.1em] uppercase hover:bg-gold-light transition-all duration-300 group"
              >
                Discover Our Story
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* About */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <SectionTitle subtitle="About" title="A Legacy of Independent Growth" />
            
            <div className="mt-10 space-y-5">
              <p className="text-base md:text-lg text-muted-foreground leading-[1.85] animate-fade-up animate-delay-300">
                ARA Group of Companies is a privately owned, self-funded business group. 
                We invest exclusively using ARA Group's own capital — no external investors, 
                no partnerships, no outside funding.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-[1.85] animate-fade-up animate-delay-400">
                Our focus: halal, ethical, and sustainable businesses with operations 
                in Qatar, Saudi Arabia, UAE, and upcoming developments in India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-24 lg:py-32 bg-secondary">
        <div className="container mx-auto px-6 lg:px-8">
          <SectionTitle subtitle="Our Distinction" title="What Makes Us Different" />
          
          <div className="mt-14 max-w-2xl mx-auto grid gap-3">
            {differentiators.map((item, index) => (
              <div
                key={item}
                className="flex items-center gap-4 p-5 bg-background border border-border hover:border-accent/40 hover-lift animate-fade-up"
                style={{ animationDelay: `${(index + 3) * 0.1}s` }}
              >
                <div className="w-7 h-7 bg-accent/15 rounded-sm flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5 text-accent" />
                </div>
                <span className="text-foreground text-sm font-medium tracking-wide">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Areas */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <SectionTitle subtitle="Portfolio" title="Core Business Areas" />
          
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessAreas.map((area, index) => (
              <div
                key={area.title}
                className="group p-8 border border-border bg-card hover:border-accent/40 hover:shadow-[0_8px_30px_-12px_hsla(38,55%,48%,0.15)] transition-all duration-500 animate-fade-up"
                style={{ animationDelay: `${(index + 2) * 0.08}s` }}
              >
                <div className="w-10 h-0.5 bg-accent mb-6 group-hover:w-14 transition-all duration-500" />
                <h3 className="font-serif text-lg text-foreground mb-3">
                  {area.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-14 text-center animate-fade-up animate-delay-600">
            <Link
              to="/companies"
              className="inline-flex items-center gap-3 text-[13px] tracking-[0.1em] uppercase text-foreground border-b border-foreground/30 pb-1 hover:border-accent hover:text-accent transition-colors duration-300 group"
            >
              View Our Companies
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Chairman */}
      <section className="py-24 lg:py-32 bg-primary">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="animate-fade-up">
                <div className="relative">
                  <div className="absolute -top-3 -left-3 w-full h-full border border-accent/30" />
                  <img
                    src={chairmanImage}
                    alt="Abdul Rahman Auf — Chairman & CEO of ARA Group"
                    className="relative z-10 w-full aspect-[3/4] object-cover object-top"
                  />
                </div>
              </div>
              
              <div className="animate-fade-up animate-delay-200">
                <span className="text-[11px] tracking-[0.3em] uppercase text-accent">
                  Chairman & CEO
                </span>
                <h3 className="font-serif text-3xl md:text-4xl text-primary-foreground mt-4 mb-8 leading-tight">
                  Abdul Rahman Auf
                </h3>
                <div className="w-10 h-0.5 bg-accent mb-8" />
                <p className="text-base text-primary-foreground/70 leading-[1.85] mb-5">
                  Founder and leader of ARA Group, driving the company with a clear vision 
                  of independent growth, ethical responsibility, and global expansion.
                </p>
                <p className="text-sm text-primary-foreground/50 leading-[1.85]">
                  Under his leadership, ARA Group has grown into a respected international 
                  conglomerate — maintaining complete ownership while expanding across 
                  multiple sectors and regions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_hsla(38,55%,48%,0.06)_0%,_transparent_70%)]" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-[11px] tracking-[0.3em] uppercase text-accent mb-6">
              Global Presence
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-8 leading-tight">
              Operating Across Borders
            </h2>
            <p className="text-base text-muted-foreground mb-12 leading-[1.85]">
              Headquarters in Qatar with operations spanning Saudi Arabia, 
              UAE, and upcoming developments in India.
            </p>
            <Link
              to="/projects"
              className="inline-flex items-center gap-3 px-8 py-3.5 bg-primary text-primary-foreground text-[13px] font-medium tracking-[0.1em] uppercase hover:bg-charcoal-light transition-all duration-300 group"
            >
              Explore Our Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;

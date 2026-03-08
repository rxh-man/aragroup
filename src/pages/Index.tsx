import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import SectionTitle from '@/components/ui/SectionTitle';
import GoldDivider from '@/components/ui/GoldDivider';
import { ArrowRight } from 'lucide-react';
import chairmanImage from '@/assets/chairman.png';

const Index = () => {
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
      {/* Hero */}
      <section className="relative min-h-[100vh] flex items-center justify-center">
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[11px] tracking-[0.4em] uppercase text-muted-foreground mb-10 animate-fade-up">
              Self-Funded · Ethical · Global
            </p>
            
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-foreground leading-[1.15] animate-fade-up animate-delay-100">
              ARA Group<br />of Companies
            </h1>
            
            <GoldDivider className="my-10 animate-fade-up animate-delay-200" />
            
            <p className="text-base text-muted-foreground font-light leading-relaxed max-w-md mx-auto animate-fade-up animate-delay-300">
              Building the future with our own vision and capital.
            </p>
            
            <div className="mt-14 animate-fade-up animate-delay-400">
              <Link
                to="/about"
                className="inline-flex items-center gap-3 text-[13px] tracking-[0.1em] uppercase text-foreground border-b border-foreground pb-1 hover:border-accent hover:text-accent transition-colors duration-300 group"
              >
                Discover Our Story
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-28 lg:py-36 border-t border-border">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <SectionTitle subtitle="About" title="A Legacy of Independent Growth" />
            
            <div className="mt-10 space-y-5">
              <p className="text-base text-muted-foreground leading-[1.8] animate-fade-up animate-delay-300">
                ARA Group of Companies is a privately owned, self-funded business group. 
                We invest exclusively using ARA Group's own capital — no external investors, 
                no partnerships, no outside funding.
              </p>
              <p className="text-base text-muted-foreground leading-[1.8] animate-fade-up animate-delay-400">
                Our focus: halal, ethical, and sustainable businesses with operations 
                in Qatar, Saudi Arabia, UAE, and upcoming developments in India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Areas */}
      <section className="py-28 lg:py-36 bg-secondary">
        <div className="container mx-auto px-6 lg:px-8">
          <SectionTitle subtitle="Portfolio" title="Core Business Areas" />
          
          <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {businessAreas.map((area, index) => (
              <div
                key={area.title}
                className="bg-secondary p-10 animate-fade-up"
                style={{ animationDelay: `${(index + 2) * 0.08}s` }}
              >
                <h3 className="font-serif text-lg font-normal text-foreground mb-3">
                  {area.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center animate-fade-up animate-delay-600">
            <Link
              to="/companies"
              className="inline-flex items-center gap-3 text-[13px] tracking-[0.1em] uppercase text-foreground border-b border-foreground pb-1 hover:border-accent hover:text-accent transition-colors duration-300 group"
            >
              View Our Companies
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Chairman */}
      <section className="py-28 lg:py-36">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div className="animate-fade-up">
                <img
                  src={chairmanImage}
                  alt="Abdul Rahman Auf — Chairman & CEO of ARA Group"
                  className="w-full aspect-[3/4] object-cover object-top"
                />
              </div>
              
              <div className="animate-fade-up animate-delay-200">
                <span className="text-[11px] tracking-[0.25em] uppercase text-muted-foreground">
                  Chairman & CEO
                </span>
                <h3 className="font-serif text-3xl md:text-4xl font-normal text-foreground mt-4 mb-8">
                  Abdul Rahman Auf
                </h3>
                <div className="w-8 h-px bg-accent mb-8" />
                <p className="text-base text-muted-foreground leading-[1.8] mb-5">
                  Founder and leader of ARA Group, driving the company with a clear vision 
                  of independent growth, ethical responsibility, and global expansion.
                </p>
                <p className="text-sm text-muted-foreground leading-[1.8]">
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
      <section className="py-28 lg:py-36 bg-foreground text-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-[11px] tracking-[0.25em] uppercase text-background/50 mb-6">
              Global Presence
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-normal mb-8 leading-tight">
              Operating Across Borders
            </h2>
            <p className="text-base text-background/60 mb-12 leading-[1.8]">
              Headquarters in Qatar with operations spanning Saudi Arabia, 
              UAE, and upcoming developments in India.
            </p>
            <Link
              to="/projects"
              className="inline-flex items-center gap-3 text-[13px] tracking-[0.1em] uppercase text-background border-b border-background/40 pb-1 hover:border-accent hover:text-accent transition-colors duration-300 group"
            >
              Explore Our Projects
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;

import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import SectionTitle from '@/components/ui/SectionTitle';
import GoldDivider from '@/components/ui/GoldDivider';
import { ArrowRight, Check, Building2, Hotel, HardHat, Handshake, Home } from 'lucide-react';

const Index = () => {
  const differentiators = [
    'No External Investors',
    '100% ARA Group Capital',
    'Halal & Ethical Business Model',
    'Long-Term Vision',
    'International Operations',
  ];

  const businessAreas = [
    { icon: Handshake, title: 'Halal Business Investments', description: 'Strategic investments in ethical, shariah-compliant ventures' },
    { icon: Hotel, title: 'Modern Hotel Development', description: 'World-class hospitality projects across multiple regions' },
    { icon: HardHat, title: 'Construction & Infrastructure', description: 'Building foundations for sustainable development' },
    { icon: Building2, title: 'Trading & Contracting', description: 'Comprehensive trading and contracting services' },
    { icon: Home, title: 'Real Estate & Industrial Recycling', description: 'Property development and sustainable manufacturing' },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-cream-gradient">
        {/* Subtle Pattern Background */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-xs font-medium tracking-[0.3em] uppercase text-accent mb-8 animate-fade-up">
              Self-Funded • Ethical • Global
            </span>
            
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-foreground mb-8 leading-tight animate-fade-up animate-delay-100">
              ARA Group of Companies
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground font-light mb-6 animate-fade-up animate-delay-200">
              Building the Future with Our Own Vision & Capital
            </p>
            
            <GoldDivider className="my-10 animate-fade-up animate-delay-300" />
            
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm text-muted-foreground animate-fade-up animate-delay-400">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                100% Self-Funded
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                Halal Businesses
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                Global Development
              </span>
            </div>
            
            <div className="mt-12 animate-fade-up animate-delay-500">
              <Link
                to="/about"
                className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground text-sm font-medium tracking-wide hover:bg-charcoal-light transition-all duration-300 group"
              >
                Discover Our Story
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animate-delay-600">
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-accent rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <SectionTitle
              subtitle="About ARA Group"
              title="A Legacy of Independent Growth"
            />
            
            <div className="mt-12 space-y-6 text-center">
              <p className="text-lg text-muted-foreground leading-relaxed animate-fade-up animate-delay-300">
                ARA Group of Companies is a privately owned, self-funded business group. 
                We invest exclusively using ARA Group's own capital and do not accept investments, 
                partnerships, or funding from external parties.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed animate-fade-up animate-delay-400">
                Our focus is on halal, ethical, and sustainable businesses, with strong operations 
                in Qatar and Saudi Arabia, United Arab Emirates and upcoming developments in India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-24 lg:py-32 bg-secondary">
        <div className="container mx-auto px-6 lg:px-8">
          <SectionTitle
            subtitle="Our Distinction"
            title="What Makes Us Different"
          />
          
          <div className="mt-16 max-w-2xl mx-auto">
            <div className="grid gap-4">
              {differentiators.map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-4 p-5 bg-background rounded shadow-elegant hover-lift animate-fade-up"
                  style={{ animationDelay: `${(index + 3) * 0.1}s` }}
                >
                  <div className="w-8 h-8 bg-accent/10 rounded flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Business Areas */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <SectionTitle
            subtitle="Our Portfolio"
            title="Core Business Areas"
          />
          
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessAreas.map((area, index) => (
              <div
                key={area.title}
                className="group p-8 bg-card border border-border/50 hover:border-accent/30 hover:shadow-elegant transition-all duration-500 animate-fade-up"
                style={{ animationDelay: `${(index + 3) * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-accent/10 rounded flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <area.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {area.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center animate-fade-up animate-delay-600">
            <Link
              to="/companies"
              className="inline-flex items-center gap-3 px-8 py-4 border border-primary text-primary text-sm font-medium tracking-wide hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
            >
              View Our Companies
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-accent mb-6">
              Global Presence
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mb-8">
              Operating Across Borders
            </h2>
            <p className="text-lg text-primary-foreground/70 mb-10">
              With headquarters in Qatar and operations spanning Saudi Arabia, 
              UAE, and upcoming developments in India.
            </p>
            <Link
              to="/projects"
              className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-accent-foreground text-sm font-medium tracking-wide hover:bg-gold-light transition-all duration-300 group"
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

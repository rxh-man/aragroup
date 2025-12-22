import Layout from '@/components/layout/Layout';
import SectionTitle from '@/components/ui/SectionTitle';
import GoldDivider from '@/components/ui/GoldDivider';
import { Shield, Heart, Award, Leaf, Users } from 'lucide-react';

const About = () => {
  const values = [
    { icon: Shield, title: 'Independence', description: 'Full ownership and control of all operations' },
    { icon: Heart, title: 'Integrity', description: 'Ethical practices in every business decision' },
    { icon: Award, title: 'Quality', description: 'Excellence in all our developments and services' },
    { icon: Leaf, title: 'Sustainability', description: 'Long-term value creation for future generations' },
    { icon: Users, title: 'Trust', description: 'Building lasting relationships with stakeholders' },
  ];

  const missions = [
    'Invest only in halal and ethical sectors',
    'Build world-class hotels and infrastructure',
    'Maintain full ownership and control',
    'Create sustainable, long-lasting businesses',
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-24 lg:pt-40 lg:pb-32 bg-cream-gradient">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-xs font-medium tracking-[0.3em] uppercase text-accent mb-6 animate-fade-up">
              About Us
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-8 animate-fade-up animate-delay-100">
              Who We Are
            </h1>
            <GoldDivider className="my-10 animate-fade-up animate-delay-200" />
            <p className="text-xl text-muted-foreground leading-relaxed animate-fade-up animate-delay-300">
              ARA Group of Companies is a self-reliant international conglomerate, 
              operating across multiple sectors through its wholly owned subsidiaries.
            </p>
          </div>
        </div>
      </section>

      {/* Independence Statement */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed animate-fade-up">
              All projects, developments, and expansions are financed and controlled solely 
              by ARA Group, ensuring <span className="text-foreground font-medium">full independence</span>, 
              <span className="text-foreground font-medium"> transparency</span>, and 
              <span className="text-foreground font-medium"> quality control</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 lg:py-32 bg-secondary">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Vision */}
            <div className="animate-fade-up">
              <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-accent mb-4">
                Our Vision
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-8">
                Global Excellence
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To become a globally respected, self-funded halal business group, 
                known for excellence in development and long-term value creation.
              </p>
            </div>

            {/* Mission */}
            <div className="animate-fade-up animate-delay-200">
              <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-accent mb-4">
                Our Mission
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-8">
                Purposeful Growth
              </h2>
              <ul className="space-y-4">
                {missions.map((mission, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 flex-shrink-0" />
                    <span className="text-lg text-muted-foreground">{mission}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <SectionTitle
            subtitle="Leadership"
            title="Guiding Our Vision"
          />
          
          <div className="mt-16 max-w-2xl mx-auto">
            <div className="text-center p-12 border border-border/50 bg-card animate-fade-up animate-delay-300">
              <div className="w-24 h-24 bg-secondary rounded-full mx-auto mb-8 flex items-center justify-center">
                <span className="font-serif text-3xl font-semibold text-accent">ARA</span>
              </div>
              <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-accent mb-3">
                Chairman & CEO
              </span>
              <h3 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-6">
                Abdul Rahman Auf
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-lg mx-auto">
                Founder and leader of ARA Group, driving the company with a clear vision 
                of independent growth, ethical responsibility, and global expansion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-accent mb-4 animate-fade-up">
              Our Foundation
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold animate-fade-up animate-delay-100">
              Core Values
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="text-center p-6 border border-primary-foreground/10 hover:border-accent/30 transition-colors duration-300 animate-fade-up"
                style={{ animationDelay: `${(index + 2) * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-accent/10 rounded mx-auto mb-5 flex items-center justify-center">
                  <value.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-serif text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-primary-foreground/60">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;

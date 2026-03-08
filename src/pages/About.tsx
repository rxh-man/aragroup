import Layout from '@/components/layout/Layout';
import SectionTitle from '@/components/ui/SectionTitle';
import GoldDivider from '@/components/ui/GoldDivider';
import chairmanImage from '@/assets/chairman.png';

const About = () => {
  const missions = [
    'Invest only in halal and ethical sectors',
    'Build world-class hotels and infrastructure',
    'Maintain full ownership and control',
    'Create sustainable, long-lasting businesses',
  ];

  const values = ['Independence', 'Integrity', 'Quality', 'Sustainability', 'Trust'];

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-36 pb-28 lg:pt-44 lg:pb-36">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-[11px] tracking-[0.4em] uppercase text-muted-foreground mb-8 animate-fade-up">
              About Us
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-foreground leading-[1.15] animate-fade-up animate-delay-100">
              Who We Are
            </h1>
            <GoldDivider className="my-10 animate-fade-up animate-delay-200" />
            <p className="text-base text-muted-foreground leading-[1.8] animate-fade-up animate-delay-300">
              A self-reliant international conglomerate, operating across multiple sectors 
              through wholly owned subsidiaries.
            </p>
          </div>
        </div>
      </section>

      {/* Statement */}
      <section className="py-28 lg:py-36 border-t border-border">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg md:text-xl text-muted-foreground leading-[1.8] animate-fade-up">
              All projects, developments, and expansions are financed and controlled solely 
              by ARA Group — ensuring full <em className="text-foreground not-italic font-medium">independence</em>, 
              <em className="text-foreground not-italic font-medium"> transparency</em>, and 
              <em className="text-foreground not-italic font-medium"> quality control</em>.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-28 lg:py-36 bg-secondary">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-px bg-border max-w-5xl mx-auto">
            <div className="bg-secondary p-12 lg:p-16 animate-fade-up">
              <p className="text-[11px] tracking-[0.25em] uppercase text-muted-foreground mb-5">
                Vision
              </p>
              <h2 className="font-serif text-2xl md:text-3xl font-normal text-foreground mb-6">
                Global Excellence
              </h2>
              <p className="text-base text-muted-foreground leading-[1.8]">
                To become a globally respected, self-funded halal business group, 
                known for excellence in development and long-term value creation.
              </p>
            </div>

            <div className="bg-secondary p-12 lg:p-16 animate-fade-up animate-delay-200">
              <p className="text-[11px] tracking-[0.25em] uppercase text-muted-foreground mb-5">
                Mission
              </p>
              <h2 className="font-serif text-2xl md:text-3xl font-normal text-foreground mb-6">
                Purposeful Growth
              </h2>
              <ul className="space-y-4">
                {missions.map((mission, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="w-1 h-1 bg-accent rounded-full mt-2.5 flex-shrink-0" />
                    <span className="text-base text-muted-foreground">{mission}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-28 lg:py-36">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div className="animate-fade-up">
                <img
                  src={chairmanImage}
                  alt="Abdul Rahman Auf — Chairman & CEO"
                  className="w-full aspect-[3/4] object-cover object-top"
                />
              </div>
              <div className="animate-fade-up animate-delay-200">
                <p className="text-[11px] tracking-[0.25em] uppercase text-muted-foreground mb-4">
                  Chairman & CEO
                </p>
                <h3 className="font-serif text-3xl md:text-4xl font-normal text-foreground mb-8">
                  Abdul Rahman Auf
                </h3>
                <div className="w-8 h-px bg-accent mb-8" />
                <p className="text-base text-muted-foreground leading-[1.8]">
                  Founder and leader of ARA Group, driving the company with a clear vision 
                  of independent growth, ethical responsibility, and global expansion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-28 lg:py-36 bg-foreground text-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[11px] tracking-[0.25em] uppercase text-background/50 mb-6 animate-fade-up">
              Our Foundation
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-normal mb-16 animate-fade-up animate-delay-100">
              Core Values
            </h2>
            
            <div className="flex flex-wrap justify-center gap-6">
              {values.map((value, index) => (
                <span
                  key={value}
                  className="text-sm tracking-[0.15em] uppercase text-background/70 animate-fade-up"
                  style={{ animationDelay: `${(index + 2) * 0.1}s` }}
                >
                  {value}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;

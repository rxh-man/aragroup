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

  const values = [
    { title: 'Independence', desc: 'Full ownership and control of all operations' },
    { title: 'Integrity', desc: 'Ethical practices in every decision' },
    { title: 'Quality', desc: 'Excellence in all developments' },
    { title: 'Sustainability', desc: 'Long-term value creation' },
    { title: 'Trust', desc: 'Lasting relationships with stakeholders' },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-36 pb-24 lg:pt-44 lg:pb-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-[11px] tracking-[0.5em] uppercase text-accent mb-8 animate-fade-up">
              About Us
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-[1.15] animate-fade-up animate-delay-100">
              Who We Are
            </h1>
            <GoldDivider className="my-10 animate-fade-up animate-delay-200" />
            <p className="text-base text-primary-foreground/60 leading-[1.85] animate-fade-up animate-delay-300">
              A self-reliant international conglomerate, operating across multiple sectors 
              through wholly owned subsidiaries.
            </p>
          </div>
        </div>
      </section>

      {/* Statement */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg md:text-xl text-muted-foreground leading-[1.85] animate-fade-up">
              All projects, developments, and expansions are financed and controlled solely 
              by ARA Group — ensuring full <span className="text-foreground font-medium">independence</span>, 
              <span className="text-foreground font-medium"> transparency</span>, and 
              <span className="text-foreground font-medium"> quality control</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 lg:py-32 bg-secondary">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="p-10 lg:p-14 bg-background border border-border animate-fade-up">
              <p className="text-[11px] tracking-[0.3em] uppercase text-accent mb-5">Vision</p>
              <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6">Global Excellence</h2>
              <div className="w-10 h-0.5 bg-accent mb-6" />
              <p className="text-base text-muted-foreground leading-[1.85]">
                To become a globally respected, self-funded halal business group, 
                known for excellence in development and long-term value creation.
              </p>
            </div>

            <div className="p-10 lg:p-14 bg-background border border-border animate-fade-up animate-delay-200">
              <p className="text-[11px] tracking-[0.3em] uppercase text-accent mb-5">Mission</p>
              <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6">Purposeful Growth</h2>
              <div className="w-10 h-0.5 bg-accent mb-6" />
              <ul className="space-y-4">
                {missions.map((mission, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-base text-muted-foreground">{mission}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="animate-fade-up">
                <div className="relative">
                  <div className="absolute -top-3 -left-3 w-full h-full border border-accent/30" />
                  <img
                    src={chairmanImage}
                    alt="Abdul Rahman Auf — Chairman & CEO"
                    className="relative z-10 w-full aspect-[3/4] object-cover object-top"
                  />
                </div>
              </div>
              <div className="animate-fade-up animate-delay-200">
                <p className="text-[11px] tracking-[0.3em] uppercase text-accent mb-4">Chairman & CEO</p>
                <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-8 leading-tight">
                  Abdul Rahman Auf
                </h3>
                <div className="w-10 h-0.5 bg-accent mb-8" />
                <p className="text-base text-muted-foreground leading-[1.85]">
                  Founder and leader of ARA Group, driving the company with a clear vision 
                  of independent growth, ethical responsibility, and global expansion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[11px] tracking-[0.3em] uppercase text-accent mb-5 animate-fade-up">Our Foundation</p>
            <h2 className="font-serif text-3xl md:text-4xl animate-fade-up animate-delay-100">Core Values</h2>
          </div>
          
          <div className="grid md:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="text-center p-6 border border-primary-foreground/10 hover:border-accent/40 transition-colors duration-300 animate-fade-up"
                style={{ animationDelay: `${(index + 2) * 0.1}s` }}
              >
                <h3 className="font-serif text-base mb-2">{value.title}</h3>
                <p className="text-[12px] text-primary-foreground/45 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;

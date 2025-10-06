import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award, BookOpen, Briefcase, ExternalLink, Trophy, Users } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(153, 0, 0, 0.85), rgba(51, 51, 51, 0.85)), url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container mx-auto px-4 text-center z-10 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6">
            Trey Edwards
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-4 font-light">
            Real Estate Student at the Kelley School of Business, Indiana University
          </p>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-8 leading-relaxed">
            Driven student-athlete building a foundation in real estate with a focus on leadership, analysis, and character.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => scrollToSection('honors')}
              className="text-lg"
            >
              View My Credentials
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary"
              asChild
            >
              <a href="https://www.linkedin.com/in/trey-edwards" target="_blank" rel="noopener noreferrer">
                Connect on LinkedIn
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-20 bg-card" id="about">
        <div className="container mx-auto px-4 max-w-4xl animate-fade-in-up">
          <div className="text-center mb-12">
            <Users className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-foreground mb-6">About Me</h2>
          </div>
          <p className="text-lg text-foreground/80 leading-relaxed text-center">
            I am a dedicated freshman at Indiana University's Kelley School of Business, pursuing a Bachelor's degree in Real Estate. 
            My background as a varsity athlete has instilled in me a strong work ethic, teamwork, and the mental attitude required to 
            excel in competitive environments. I am actively seeking to apply my analytical skills and leadership experience to 
            opportunities in the real estate sector.
          </p>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-background" id="education">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <GraduationCap className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-foreground mb-6">Education</h2>
          </div>
          
          <div className="space-y-8">
            <Card className="border-l-4 border-primary hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">Indiana University - Kelley School of Business</h3>
                    <p className="text-lg text-muted-foreground">Bachelor's degree, Real Estate</p>
                  </div>
                  <span className="text-muted-foreground font-medium mt-2 md:mt-0">Aug 2025 - May 2029</span>
                </div>
                <div className="flex items-center text-secondary">
                  <Briefcase className="h-5 w-5 mr-2" />
                  <span className="font-medium">Activities: Real Estate Club</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-secondary hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">Brebeuf Jesuit Preparatory School</h3>
                    <p className="text-lg text-muted-foreground">High School Diploma</p>
                  </div>
                  <span className="text-muted-foreground font-medium mt-2 md:mt-0">2021 - 2025</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <Trophy className="h-5 w-5 mr-2 mt-1 text-secondary flex-shrink-0" />
                    <span className="font-medium">4 Years Varsity Football (2 Year Starter)</span>
                  </div>
                  <div className="flex items-start">
                    <Briefcase className="h-5 w-5 mr-2 mt-1 text-secondary flex-shrink-0" />
                    <span className="font-medium">Investment Club, Mi Familia Club, Breakfast Club (Volunteering)</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Honors & Awards Section */}
      <section className="py-20 bg-card" id="honors">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <Award className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-foreground mb-6">Honors & Recognition</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-t-4 border-primary">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <BookOpen className="h-8 w-8 text-primary mr-3" />
                  <h3 className="text-xl font-bold text-foreground">AP Capstone Diploma</h3>
                </div>
                <p className="text-muted-foreground mb-2">Brebeuf Jesuit Preparatory School</p>
                <p className="text-sm text-foreground/70">May 2025</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-t-4 border-secondary">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Trophy className="h-8 w-8 text-secondary mr-3" />
                  <h3 className="text-xl font-bold text-foreground">Joe Harvey Mental Attitude Award</h3>
                </div>
                <p className="text-muted-foreground mb-2">Brebeuf Jesuit Preparatory School</p>
                <p className="text-sm text-foreground/70 mb-2">May 2025</p>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  Recognizes a senior who has demonstrated exceptional leadership, citizenship, and mental attitude throughout their high school career.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-t-4 border-primary">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Award className="h-8 w-8 text-primary mr-3" />
                  <h3 className="text-xl font-bold text-foreground">Burlsworth Character Award</h3>
                </div>
                <p className="text-muted-foreground mb-2">Brebeuf Jesuit Preparatory School</p>
                <p className="text-sm text-foreground/70 mb-2">Dec 2024</p>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  Presented to a student-athlete who demonstrates outstanding character, work ethic, and serves as a moral example to others.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-t-4 border-secondary">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <GraduationCap className="h-8 w-8 text-secondary mr-3" />
                  <h3 className="text-xl font-bold text-foreground">National Honors Society</h3>
                </div>
                <p className="text-muted-foreground mb-2">Brebeuf Jesuit Preparatory School</p>
                <p className="text-sm text-foreground/70">Oct 2024</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-t-4 border-primary">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Trophy className="h-8 w-8 text-primary mr-3" />
                  <h3 className="text-xl font-bold text-foreground">Ignatian Scholar</h3>
                </div>
                <p className="text-muted-foreground mb-2">Brebeuf Jesuit Preparatory School</p>
                <p className="text-sm text-foreground/70 mb-2">Jan 2022</p>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  Four-year academic scholarship awarded for outstanding academic achievement and potential.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-background" id="certifications">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-foreground mb-6">Certifications</h2>
          </div>
          
          <Card className="border-l-4 border-secondary hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Introduction to Financial Accounting</h3>
                  <p className="text-lg text-muted-foreground">University of Pennsylvania</p>
                </div>
                <span className="text-muted-foreground font-medium mt-2 md:mt-0">Issued Sep 2025</span>
              </div>
            </CardContent>
          </Card>

          <div className="mt-12 text-center">
            <h3 className="text-2xl font-semibold text-foreground mb-4">Developing Skills In:</h3>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full font-medium">Financial Accounting</span>
              <span className="px-4 py-2 bg-secondary/10 text-secondary rounded-full font-medium">Market Analysis</span>
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full font-medium">Investment Principles</span>
              <span className="px-4 py-2 bg-secondary/10 text-secondary rounded-full font-medium">Real Estate Development</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-primary text-primary-foreground" id="contact">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <ExternalLink className="h-12 w-12 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 leading-relaxed">
            I am open to connecting and exploring opportunities in real estate. Feel free to reach out via LinkedIn.
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            className="text-lg"
            asChild
          >
            <a href="https://www.linkedin.com/in/trey-edwards" target="_blank" rel="noopener noreferrer">
              Connect on LinkedIn
              <ExternalLink className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-card border-t">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">© 2025 Trey Edwards. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

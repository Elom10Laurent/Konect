import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Zap, Globe, MessageSquare } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="African sunset landscape"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/80 to-primary/10" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <Zap className="h-8 w-8 text-primary opacity-30" />
      </div>
      <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '1s' }}>
        <Globe className="h-6 w-6 text-accent opacity-40" />
      </div>
      <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: '2s' }}>
        <MessageSquare className="h-7 w-7 text-primary-glow opacity-35" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium mb-8">
            <Zap className="h-4 w-4 mr-2" />
            Powering African Language AI
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
              The AI API for
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
              African Languages
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Unlock the power of local African languages with Yodi's advanced LLM. 
            Translation, text-to-speech, and intelligent generation for{' '}
            <span className="text-primary font-semibold">Ewé, Kabyè, English, French </span>, and more.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button className="hero-button text-lg">
              Try Yodi
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="hero-button-outline text-lg">
              <Play className="mr-2 h-5 w-5" />
              View Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">African Languages</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">5</div>
              <div className="text-sm text-muted-foreground">Core Features</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">AI</div>
              <div className="text-sm text-muted-foreground">Powered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
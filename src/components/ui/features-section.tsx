import { Mic, MessageCircle, BarChart3, Languages, Volume2, Brain } from 'lucide-react'; 
import audioTranslationImg from '@/assets/audio-translation.jpg';

const FeaturesSection = () => {

const features = [
  {
    icon: Mic,
    title: 'Transcribe',
    description: 'Convert speech to text in African languages with high accuracy and real-time processing.',
    color: 'text-primary',
    comingSoon: false,
  },
  {
    icon: MessageCircle,
    title: 'Converse',
    description: 'Engage in natural conversations with AI that understands African language nuances.',
    color: 'text-accent',
    comingSoon: true,
  },
  {
    icon: BarChart3,
    title: 'Analyze',
    description: 'Extract insights and sentiment from African language text with advanced AI analysis.',
    color: 'text-primary-glow',
    comingSoon: true,
  },
  {
    icon: Languages,
    title: 'Translate',
    description: 'Seamlessly translate between African languages and global languages with context awareness.',
    color: 'text-accent',
  },
  {
    icon: Volume2,
    title: 'Speak',
    description: 'Generate natural-sounding speech in African languages with customizable voices.',
    color: 'text-primary',
    comingSoon: false,
  },
  {
    icon: Brain,
    title: 'AI Agent',
    description: 'Autonomous AI agents to assist in tasks, make decisions, and adapt to user needs in African contexts.',
    color: 'text-accent',
    comingSoon: true,
  },
];

  return (
    <section id="features" className="py-24 bg-gradient-to-br from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Powerful Features for
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              African Language AI
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to integrate African language intelligence into your applications, 
            from chatbots to digital services and enterprise solutions.
          </p>
        </div>

        {/* Visual Element */}
        <div className="relative mb-16">
          <div className="max-w-lg mx-auto">
            <img 
              src={audioTranslationImg} 
              alt="Audio translation and voice technology"
              className="w-full h-auto rounded-xl shadow-soft"
            />
            <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full font-semibold shadow-glow animate-float">
              AI Powered
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`p-3 rounded-lg bg-gradient-to-br from-${feature.color.split('-')[1]}/10 to-transparent w-fit mb-4`}>
                <feature.icon className={`h-8 w-8 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))} */}

          {features.map((feature, index) => (
  <div
    key={index}
    className={`relative feature-card group transition duration-300 ${feature.comingSoon ? 'opacity-50 pointer-events-none' : ''}`}
    style={{ animationDelay: `${index * 0.1}s` }}
  >
    {/* Badge Coming Soon */}
    {feature.comingSoon && (
      <div className="absolute top-2 right-2 bg-muted text-foreground text-xs font-semibold px-2 py-1 rounded-full shadow-sm">
        Coming Soon
      </div>
    )}

    <div className={`p-3 rounded-lg bg-gradient-to-br from-${feature.color.split('-')[1]}/10 to-transparent w-fit mb-4`}>
      <feature.icon className={`h-8 w-8 ${feature.color}`} />
    </div>

    <h3 className="text-xl font-semibold mb-3 text-foreground">
      {feature.title}
    </h3>
    <p className="text-muted-foreground leading-relaxed">
      {feature.description}
    </p>
  </div>
))}

        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="md:inline-flex items-center px-6 py-3 space-y-5 sm:space-y-0 rounded-2xl sm:rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
            <span className="text-lg font-medium text-foreground mr-4">
              Ready to get started?
            </span>
            <button className="hero-button text-base">
              Explore API Docs
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
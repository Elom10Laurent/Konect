import { Button } from '@/components/ui/button';
import { Check, Star, Zap, Crown, Building } from 'lucide-react';

const PricingSection = () => {
  const plans = [
    {
      name: 'Developer',
      icon: Zap,
      price: 'Free',
      subtitle: 'Perfect for testing and prototyping',
      features: [
        '1,000 API calls/month',
        'Basic language translation',
        'Community support',
        'Standard documentation',
        'Rate limit: 10 req/min'
      ],
      cta: 'Start Free',
      variant: 'outline' as const,
      popular: false
    },
    {
      name: 'Startup',
      icon: Star,
      price: '$49',
      subtitle: 'Ideal for growing applications',
      features: [
        '50,000 API calls/month',
        'All language features',
        'Text-to-speech included',
        'Priority email support',
        'Rate limit: 100 req/min',
        'Custom integration help'
      ],
      cta: 'Choose Startup',
      variant: 'default' as const,
      popular: true
    },
    {
      name: 'Enterprise',
      icon: Building,
      price: 'Custom',
      subtitle: 'For large-scale deployments',
      features: [
        'Unlimited API calls',
        'Custom model training',
        'Dedicated support team',
        'SLA guarantees',
        'White-label options',
        'On-premise deployment'
      ],
      cta: 'Contact Sales',
      variant: 'outline' as const,
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Simple, Transparent
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Pricing
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the perfect plan for your African language AI needs. 
            Start free and scale as you grow.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`pricing-card relative ${plan.popular ? 'pricing-card-featured' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-6">
                <div className={`inline-flex p-3 rounded-full ${plan.popular ? 'bg-primary/10' : 'bg-muted'} mb-4`}>
                  <plan.icon className={`h-8 w-8 ${plan.popular ? 'text-primary' : 'text-muted-foreground'}`} />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm">{plan.subtitle}</p>
              </div>

              <div className="text-center mb-8">
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  {plan.price !== 'Free' && plan.price !== 'Custom' && (
                    <span className="text-muted-foreground ml-1">/month</span>
                  )}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-3" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full ${plan.variant === 'default' ? 'hero-button' : 'hero-button-outline'}`}
                variant={plan.variant}
                size="lg"
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            All plans include secure API access, comprehensive documentation, and our growing language library.
          </p>
          <p className="text-sm text-muted-foreground">
            Need a custom solution? <span className="text-primary font-medium cursor-pointer hover:underline">Contact our sales team</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
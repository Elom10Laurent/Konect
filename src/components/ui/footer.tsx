import { Globe, Twitter, Linkedin, Github, Mail } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: 'Product',
      links: [
        { label: 'API Documentation', href: '#documentation' },
        { label: 'Pricing', href: '#pricing' },
        { label: 'Features', href: '#features' },
        { label: 'Status', href: '#' }
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '#' },
        { label: 'Blog', href: '#' },
        { label: 'Careers', href: '#' },
        { label: 'Contact', href: '#contact' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'Help Center', href: '#' },
        { label: 'Community', href: '#' },
        { label: 'Guides', href: '#' },
        { label: 'Changelog', href: '#' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '#' },
        { label: 'Terms of Service', href: '#' },
        { label: 'Cookie Policy', href: '#' },
        { label: 'GDPR', href: '#' }
      ]
    }
  ];

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Mail, href: '#', label: 'Email' }
  ];

  return (
    <footer className="bg-gradient-to-br from-muted/30 to-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Globe className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                Yodi
              </span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Empowering African languages through advanced AI technology.
              Connecting cultures, breaking barriers, building the future.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-foreground mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Yodi. All rights reserved. Building the future of African language AI.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
<span className="text-sm text-muted-foreground">Empowering African Languages with AI</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
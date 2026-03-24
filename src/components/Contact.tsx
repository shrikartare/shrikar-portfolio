import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons';
import { SectionHeading } from './About';

interface ContactItem {
  icon: React.JSX.Element;
  label: string;
  value: string;
  href: string | null;
}

interface SocialItem {
  icon: React.JSX.Element;
  href: string;
  label: string;
}

const contactInfo: ContactItem[] = [
  {
    icon: <Mail size={20} />,
    label: 'Email',
    value: 'shrikar.tare@gmail.com',
    href: 'mailto:shrikar.tare@gmail.com',
  },
  {
    icon: <Phone size={20} />,
    label: 'Phone',
    value: '+91 8460210158',
    href: 'tel:+918460210158',
  },
  {
    icon: <MapPin size={20} />,
    label: 'Location',
    value: 'Pune, India',
    href: null,
  },
];

const socials: SocialItem[] = [
  {
    icon: <GithubIcon size={20} />,
    href: 'https://github.com/shrikartare',
    label: 'GitHub',
  },
  {
    icon: <LinkedinIcon size={20} />,
    href: 'https://www.linkedin.com/in/shrikar-tare/',
    label: 'LinkedIn',
  },
  {
    icon: <Mail size={20} />,
    href: 'mailto:shrikar.tare@gmail.com',
    label: 'Email',
  },
];

export default function Contact(): React.JSX.Element {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeading label="Contact" title="Let's Work Together" />

        <p className="text-center text-body mt-4 max-w-2xl mx-auto text-lg">
          I'm open to new opportunities and always excited to collaborate on
          impactful projects. Feel free to reach out!
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {contactInfo.map((item) => (
            <div
              key={item.label}
              className="p-6 rounded-2xl bg-white border border-border text-center hover:shadow-lg hover:border-primary/20 transition-all duration-300 group"
            >
              <div className="inline-flex p-3 rounded-xl bg-primary-light text-primary mb-4 group-hover:bg-primary/10 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-heading font-medium mb-1">{item.label}</h3>
              {item.href ? (
                <a
                  href={item.href}
                  className="text-muted hover:text-primary transition-colors text-sm"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-muted text-sm">{item.value}</p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="mailto:shrikar.tare@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-white font-medium hover:bg-primary-dark transition-colors shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30"
          >
            <Send size={18} />
            Send Me a Message
          </a>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="p-3 rounded-xl border border-border bg-white text-body hover:text-primary hover:border-primary/30 hover:shadow-md transition-all duration-200"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

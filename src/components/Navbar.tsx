import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { RESUME_URL } from '../data/portfolio';

const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Clients', href: '#clients' },
  { label: 'Systems', href: '#systems' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar(): React.JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = (): void => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-900/95 backdrop-blur-xl border-b border-white/10 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#hero"
          className={`text-xl font-bold transition-colors ${
            scrolled ? 'text-white' : 'text-white'
          }`}
        >
          ST
        </a>

        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors duration-200 ${
                scrolled
                  ? 'text-slate-300 hover:text-white'
                  : 'text-slate-200 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm px-4 py-2 rounded-lg bg-white text-primary-dark font-medium hover:bg-blue-50 transition-colors"
          >
            Resume
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white hover:text-blue-200"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-slate-900/98 backdrop-blur-xl border-t border-white/10">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-slate-300 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm px-4 py-2 rounded-lg bg-white text-primary-dark text-center font-medium"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

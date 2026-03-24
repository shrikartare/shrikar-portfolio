import { GraduationCap, Award, Globe } from 'lucide-react';
import { SectionHeading } from './About';

interface EducationItem {
  degree: string;
  institution: string;
}

interface Certification {
  name: string;
  issuer: string;
}

const education: EducationItem[] = [
  {
    degree: 'Post Graduate Diploma in Advanced Computing (PG-DAC)',
    institution: 'CDAC ACTS, Pune, India',
  },
  {
    degree: 'Bachelor of Technology',
    institution: 'Gujarat Technological University, India',
  },
];

const certifications: Certification[] = [
  {
    name: 'Microsoft Certified: Azure Fundamentals (AZ-900)',
    issuer: 'Microsoft',
  },
];

const languages: string[] = ['English (Fluent)', 'Hindi', 'Gujarati', 'Marathi'];

export default function Education(): React.JSX.Element {
  return (
    <section id="education" className="py-24 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="Background"
          title="Education & Certifications"
        />

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-border hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary-light">
                <GraduationCap className="text-primary" size={22} />
              </div>
              <h3 className="text-lg font-semibold text-heading">Education</h3>
            </div>
            <div className="space-y-5">
              {education.map((edu) => (
                <div key={edu.degree}>
                  <h4 className="text-heading font-medium">{edu.degree}</h4>
                  <p className="text-sm text-muted mt-1">{edu.institution}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-border hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-accent-light">
                <Award className="text-accent" size={22} />
              </div>
              <h3 className="text-lg font-semibold text-heading">
                Certifications
              </h3>
            </div>
            <div className="space-y-5">
              {certifications.map((cert) => (
                <div key={cert.name}>
                  <h4 className="text-heading font-medium">{cert.name}</h4>
                  <p className="text-sm text-muted mt-1">{cert.issuer}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-border hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-emerald-50">
                <Globe className="text-emerald-600" size={22} />
              </div>
              <h3 className="text-lg font-semibold text-heading">Languages</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {languages.map((lang) => (
                <span
                  key={lang}
                  className="px-3 py-1.5 text-sm rounded-lg bg-surface text-body border border-border font-medium"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

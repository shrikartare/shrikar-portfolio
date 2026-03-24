import { SectionHeading } from './About';

interface SkillCategory {
  title: string;
  color: string;
  bgColor: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    color: 'text-primary',
    bgColor: 'bg-primary-light',
    skills: [
      'React.js',
      'Next.js',
      'Redux',
      'Context API',
      'Angular',
      'TypeScript',
      'JavaScript (ES6+)',
      'HTML5',
      'CSS3',
      'TailwindCSS',
      'SCSS',
    ],
  },
  {
    title: 'Backend',
    color: 'text-accent',
    bgColor: 'bg-accent-light',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'MySQL', 'MS SQL Server'],
  },
  {
    title: 'Testing',
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50',
    skills: ['Jest', 'React Testing Library', 'Enzyme'],
  },
  {
    title: 'DevOps & Tools',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
    skills: [
      'Git',
      'Azure DevOps',
      'Azure Pipelines',
      'JIRA',
      'NPM',
      'Yarn',
    ],
  },
  {
    title: 'AI & Machine Learning',
    color: 'text-violet-600',
    bgColor: 'bg-violet-50',
    skills: ['AI', 'Agentic AI', 'LangChain', 'RAG Systems', 'AI Workflow Integration'],
  },
  {
    title: 'Other',
    color: 'text-rose-600',
    bgColor: 'bg-rose-50',
    skills: ['Agile/Scrum', 'CI/CD', 'Accessibility (WCAG AA)'],
  },
];

export default function Skills(): React.JSX.Element {
  return (
    <section id="skills" className="py-24 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <SectionHeading label="Tech Stack" title="Technical Skills" />

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="p-6 rounded-2xl bg-white border border-border hover:shadow-lg transition-all duration-300"
            >
              <h3
                className={`text-lg font-semibold ${cat.color} mb-4`}
              >
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1.5 text-sm rounded-lg ${cat.bgColor} ${cat.color} font-medium transition-all duration-200`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

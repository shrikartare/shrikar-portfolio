import { atsKeywords } from '../data/portfolio';

export default function Footer(): React.JSX.Element {
  return (
    <footer className="py-10 px-6 border-t border-white/10 bg-slate-950 text-slate-400">
      <div className="max-w-6xl mx-auto">
        <p className="sr-only">{atsKeywords.join(', ')}</p>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-base">
            &copy; {new Date().getFullYear()} Shrikar Tare. Lead Software
            Engineer.
          </p>
          <p className="text-base">
            <span className="text-blue-400">React</span>
            {' · '}
            <span className="text-teal-400">TypeScript</span>
            {' · '}
            <span className="text-cyan-400">Node.js</span>
            {' · '}
            <span className="text-violet-400">RAG</span>
            {' · '}
            <span className="text-sky-400">Azure</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

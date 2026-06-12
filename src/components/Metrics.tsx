import { metrics } from '../data/portfolio';

const accentBars = [
  'bg-primary',
  'bg-accent',
  'bg-blue-500',
  'bg-indigo-500',
  'bg-teal-500',
  'bg-sky-500',
];

export default function Metrics(): React.JSX.Element {
  return (
    <section id="metrics" className="py-16 px-6 section-band">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-sm font-medium text-blue-200/80 uppercase tracking-widest mb-8">
          Impact at a Glance
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {metrics.map((metric, i) => (
            <div
              key={metric.label}
              className="relative bg-white rounded-2xl p-5 text-center shadow-lg overflow-hidden group hover:shadow-xl transition-shadow"
            >
              <div
                className={`absolute top-0 left-0 right-0 h-1 ${accentBars[i % accentBars.length]}`}
              />
              <div className="text-xl md:text-2xl font-bold text-primary leading-tight mt-1">
                {metric.value}
              </div>
              <div className="mt-2 text-sm font-semibold text-heading">
                {metric.label}
              </div>
              <div className="mt-1 text-xs text-muted leading-snug">
                {metric.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

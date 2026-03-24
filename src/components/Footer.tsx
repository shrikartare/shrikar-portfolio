export default function Footer(): React.JSX.Element {
  return (
    <footer className="py-8 px-6 border-t border-border bg-surface">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted">
          &copy; {new Date().getFullYear()} Shrikar Tare. All rights reserved.
        </p>
        <p className="text-sm text-muted">
          Built with{' '}
          <span className="text-primary font-medium">React</span> &{' '}
          <span className="text-accent font-medium">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
}

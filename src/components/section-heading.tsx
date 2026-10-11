import type { ReactNode } from 'react';

type Props = {
  index: string;
  label: string;
  title: ReactNode;
};

/* The numbered rule that opens every section. */
const SectionHeading = ({ index, label, title }: Props) => (
  <div className="mb-10 grid gap-3 border-t border-ink pt-5 md:mb-14 md:grid-cols-[14rem_1fr] md:gap-8">
    <p className="label-mono text-muted">
      <span className="text-accent">{index}</span> / {label}
    </p>
    <h2 className="font-serif text-[clamp(2.25rem,5vw,3.75rem)] leading-none tracking-[-0.02em]">{title}</h2>
  </div>
);

export default SectionHeading;

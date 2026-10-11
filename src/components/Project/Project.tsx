import { FaChevronDown } from 'react-icons/fa';

import { projects, workProjects } from '@/data/projects';
import SectionHeading from '../section-heading';

type RowProps = {
  index: number;
  title: string;
  stack?: string[];
  points: string[];
  /* Either a link out or a plain tag fills the right-hand column. */
  github?: string;
  tag?: string;
};

const aside = 'col-start-2 mt-4 self-start label-mono md:col-start-3 md:mt-3';

const ProjectRow = ({ index, title, stack, points, github, tag }: RowProps) => (
  <li className="grid grid-cols-[2.5rem_1fr] gap-x-4 border-b border-rule py-7 md:grid-cols-[14rem_1fr_auto] md:gap-x-8">
    <span aria-hidden className="pt-2.5 label-mono text-muted">
      {String(index + 1).padStart(2, '0')}
    </span>

    <div>
      <h4 className="font-serif text-3xl leading-tight md:text-4xl">{title}</h4>

      {stack && <p className="mt-3 label-mono text-muted">{stack.join(' · ')}</p>}

      {/* Collapsed by default so the list reads as a set of titles first. */}
      <details className="group/details mt-3">
        <summary className="inline-flex cursor-pointer list-none items-center gap-2 label-mono text-muted transition-colors duration-200 hover:text-accent [&::-webkit-details-marker]:hidden">
          <span className="group-open/details:hidden">What I built</span>
          <span className="hidden group-open/details:inline">Hide details</span>
          <FaChevronDown
            aria-hidden
            className="text-[0.6rem] transition-transform duration-200 group-open/details:rotate-180"
          />
        </summary>

        <ul className="mt-4 max-w-2xl space-y-3 text-[0.95rem] text-ink-soft">
          {points.map((point) => (
            <li key={point} className="border-l border-accent pl-4">
              {point}
            </li>
          ))}
        </ul>
      </details>
    </div>

    {github ? (
      <a
        href={github}
        aria-label={`Github: ${title}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`${aside} transition-colors duration-200 hover:text-accent`}
      >
        Github <span aria-hidden>↗</span>
      </a>
    ) : (
      tag && <span className={`${aside} text-muted`}>{tag}</span>
    )}
  </li>
);

const groupHeading = 'border-b border-ink pb-3 label-mono text-ink';

const Project = () => {
  return (
    <section id="projects" className="site-container py-14 md:py-20">
      <SectionHeading index="04" label="My recent work" title="Projects" />

      <h3 className={groupHeading}>Professional work</h3>
      <ol>
        {workProjects.map(({ id, employer, title, stack, points }, index) => (
          <ProjectRow key={id} index={index} title={title} stack={stack} points={points} tag={employer} />
        ))}
      </ol>

      <h3 className={`${groupHeading} mt-16`}>Personal projects</h3>
      <ol>
        {projects.map(({ id, title, points, github }, index) => (
          <ProjectRow key={id} index={index} title={title} points={points} github={github} />
        ))}
      </ol>
    </section>
  );
};

export default Project;

import { FaChevronDown } from 'react-icons/fa';

import { projects } from '@/data/projects';
import SectionHeading from '../section-heading';

const Project = () => {
  return (
    <section id="projects" className="site-container py-14 md:py-20">
      <SectionHeading index="04" label="My recent work" title="Projects" />

      <ol>
        {projects.map(({ id, title, points, github }, index) => (
          <li
            key={id}
            className="grid grid-cols-[2.5rem_1fr] gap-x-4 border-b border-rule py-7 md:grid-cols-[14rem_1fr_auto] md:gap-x-8"
          >
            <span aria-hidden className="pt-2.5 label-mono text-muted">
              {String(index + 1).padStart(2, '0')}
            </span>

            <div>
              <h3 className="font-serif text-3xl leading-tight md:text-4xl">{title}</h3>

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

            <a
              href={github}
              aria-label={`Github: ${title}`}
              target="_blank"
              rel="noopener noreferrer"
              className="col-start-2 mt-4 self-start label-mono transition-colors duration-200 hover:text-accent md:col-start-3 md:mt-3"
            >
              Github <span aria-hidden>↗</span>
            </a>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Project;

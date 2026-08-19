'use client';

import { useEffect, useRef } from 'react';
import { projects } from '@/data/projects';

const Project = () => {
  const projectsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
          }
        });
      },
      { threshold: 0.1 }
    );

    const projectCards = projectsRef.current?.querySelectorAll('[data-project-card]');
    projectCards?.forEach((card: Element) => {
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={projectsRef}
      className="mt-32 py-8 max-lg:mt-24 max-md:mt-16 max-md:py-4"
    >
      <h5 className="text-center text-light">My Recent work</h5>
      <h2 className="relative mb-12 gradient-text text-center after:absolute after:-bottom-2 after:left-1/2 after:h-[3px] after:w-[60px] after:-translate-x-1/2 after:rounded-full after:bg-[image:var(--gradient-primary)] after:content-[''] max-md:mb-8 max-[600px]:mt-16">
        Projects
      </h2>

      <div className="site-container mt-12 grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-10 max-lg:grid-cols-[repeat(auto-fit,minmax(320px,1fr))] max-lg:gap-8 max-md:mt-8 max-md:grid-cols-1 max-md:gap-8 max-[600px]:gap-6">
        {projects.map(({ id, title, description, github }, index) => (
          <article
            key={id}
            data-project-card
            style={{ animationDelay: `${(index % 3) * 2}s` }}
            className="relative flex min-h-[400px] translate-y-[30px] flex-col justify-between overflow-hidden rounded-xl border border-border bg-bg-card p-8 opacity-0 backdrop-blur-[10px] transition-all duration-[600ms] ease-out hover:-translate-y-2 hover:border-primary hover:shadow-xl before:absolute before:inset-x-0 before:top-0 before:h-[3px] before:rounded-t-xl before:bg-[image:var(--gradient-primary)] before:content-[''] max-md:min-h-[350px] max-md:p-6 max-[600px]:min-h-[300px] max-[600px]:p-5"
          >
            <div className="relative mb-6 text-center text-2xl font-semibold text-white after:absolute after:-bottom-2 after:left-1/2 after:h-0.5 after:w-10 after:-translate-x-1/2 after:rounded-full after:bg-[image:var(--gradient-primary)] after:content-[''] max-md:mb-4 max-md:text-xl max-[600px]:text-[1.1rem]">
              {title}
            </div>

            <div className="mb-8 flex-1 text-[0.95rem] leading-[1.8] text-light [&_h3]:text-[0.95rem] [&_h3]:font-normal [&_h3]:leading-[1.8] [&_h3]:text-light max-md:mb-6 max-md:text-[0.9rem] max-[600px]:text-[0.85rem]">
              {description}
            </div>

            <div className="mt-auto flex justify-center gap-4 max-md:flex-col max-md:gap-3">
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center gap-2 overflow-hidden rounded-xl border border-primary bg-[image:var(--gradient-primary)] px-6 py-3 text-sm font-medium text-white transition-all duration-300 ease-standard hover:-translate-y-0.5 hover:border-secondary hover:bg-[image:var(--gradient-secondary)] hover:shadow-lg before:absolute before:inset-y-0 before:-left-full before:w-full before:bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.1),transparent)] before:transition-all before:duration-300 before:content-[''] hover:before:left-full max-[600px]:px-5 max-[600px]:py-2.5 max-[600px]:text-[0.8rem]"
              >
                Github
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Project;

'use client';

import { useEffect, useRef } from 'react';
import { skillGroups } from '@/data/skills';

const Skills = () => {
  const skillsRef = useRef<HTMLElement>(null);

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

    const skillCards = skillsRef.current?.querySelectorAll('[data-skill-card]');
    skillCards?.forEach((card: Element) => {
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={skillsRef} className="mt-32 py-8 max-lg:mt-24 max-md:mt-16 max-md:py-4">
      <h2 className="relative mb-12 gradient-text text-center after:absolute after:-bottom-2 after:left-1/2 after:h-[3px] after:w-[60px] after:-translate-x-1/2 after:rounded-full after:bg-[image:var(--gradient-primary)] after:content-[''] max-md:mb-8 max-[600px]:mt-16">
        My Skills
      </h2>

      <div className="site-container mt-12 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8 max-lg:grid-cols-[repeat(auto-fit,minmax(280px,1fr))] max-lg:gap-6 max-md:mt-8 max-md:grid-cols-1 max-md:gap-6 max-[600px]:gap-4">
        {skillGroups.map(({ title, skills }) => (
          <div
            key={title}
            data-skill-card
            className="relative translate-y-[30px] overflow-hidden rounded-xl border border-border bg-bg-card p-8 opacity-0 backdrop-blur-[10px] transition-all duration-[600ms] ease-out hover:-translate-y-2 hover:border-primary hover:shadow-xl before:absolute before:inset-x-0 before:top-0 before:h-[3px] before:rounded-t-xl before:bg-[image:var(--gradient-primary)] before:content-[''] max-md:p-6 max-[600px]:p-5"
          >
            <h3 className="relative mb-6 text-center text-2xl font-semibold text-white after:absolute after:-bottom-2 after:left-1/2 after:h-0.5 after:w-10 after:-translate-x-1/2 after:rounded-full after:bg-[image:var(--gradient-primary)] after:content-['']">
              {title}
            </h3>

            <div className="grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-4 max-lg:grid-cols-[repeat(auto-fit,minmax(120px,1fr))] max-lg:gap-3 max-md:grid-cols-[repeat(auto-fit,minmax(100px,1fr))] max-[600px]:grid-cols-[repeat(auto-fit,minmax(90px,1fr))] max-[600px]:gap-2">
              {skills.map(({ Icon, name, level }) => (
                <article
                  key={name}
                  className="group relative flex min-h-[100px] flex-col items-center gap-2 overflow-hidden rounded-xl border border-border bg-white/[0.02] px-3 py-4 text-center transition-all duration-300 ease-standard hover:-translate-y-[3px] hover:border-primary hover:bg-primary/5 before:absolute before:inset-y-0 before:-left-full before:w-full before:bg-[linear-gradient(90deg,transparent,rgba(99,102,241,0.1),transparent)] before:transition-all before:duration-300 before:content-[''] hover:before:left-full max-md:min-h-[90px] max-md:px-2 max-md:py-3 max-[600px]:min-h-[80px] max-[600px]:p-2"
                >
                  <Icon className="mb-2 shrink-0 text-[2rem] text-primary transition-all duration-300 ease-standard group-hover:scale-110 group-hover:text-secondary max-md:text-2xl max-[600px]:text-xl" />
                  <div className="flex flex-1 flex-col items-center gap-1">
                    <h4 className="mb-0 text-center text-[0.9rem] font-medium text-white max-md:text-[0.8rem]">
                      {name}
                    </h4>
                    <small className="text-center text-xs font-normal text-muted before:font-bold before:text-primary before:content-['•_'] max-md:text-[0.7rem]">
                      {level}
                    </small>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

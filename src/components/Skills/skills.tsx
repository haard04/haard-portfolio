import { skillGroups } from '@/data/skills';
import SectionHeading from '../section-heading';

/* Proficiency reads off the dot: green, orange, hollow. */
const levelDot: Record<string, string> = {
  Experienced: 'border-level-experienced bg-level-experienced',
  Intermediate: 'border-level-intermediate bg-level-intermediate',
  Basic: 'border-muted',
};

const Skills = () => {
  return (
    <section id="skills" className="site-container py-14 md:py-20">
      <SectionHeading index="02" label="Skills" title="What I work with" />

      <ul aria-hidden className="mb-2 flex flex-wrap gap-x-6 gap-y-1 label-mono text-muted md:pl-[16rem]">
        {Object.entries(levelDot).map(([level, dot]) => (
          <li key={level} className="flex items-center gap-2">
            <span className={`h-2 w-2 rounded-full border ${dot}`} />
            {level}
          </li>
        ))}
      </ul>

      {skillGroups.map(({ title, skills }) => (
        <div key={title} className="grid gap-4 border-b border-rule py-8 md:grid-cols-[14rem_1fr] md:gap-8">
          <h3 className="font-serif text-2xl leading-tight">{title}</h3>

          <ul className="flex flex-wrap gap-2">
            {skills.map(({ Icon, name, level }) => (
              <li
                key={name}
                className="inline-flex items-center gap-2 rounded-full border border-rule px-3.5 py-1.5 text-sm transition-colors duration-200 hover:border-ink"
              >
                <Icon aria-hidden className="text-base text-ink-soft" />
                {name}
                <span aria-hidden className={`h-2 w-2 rounded-full border ${levelDot[level] ?? 'border-muted'}`} />
                <span className="sr-only">({level})</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Skills;

import { FaChevronDown } from 'react-icons/fa';

import { experience } from '@/data/experience';
import { education } from '@/data/education';

type Side = 'education' | 'experience';

/* One stint: a job title, or a degree. */
type Stint = {
  key: string;
  title: string;
  duration: string;
  start: string;
  end: string;
  points: string[];
};

/* One organisation, holding every stint served there, newest first. */
type TimelineGroup = {
  key: string;
  side: Side;
  organisation: string;
  location: string;
  start: string;
  end: string;
  stints: Stint[];
};

const monthIndex = (yyyyMm: string) => {
  const [year, month] = yyyyMm.split('-').map(Number);
  return year * 12 + (month - 1);
};

const newestFirst = <T extends { end: string }>(a: T, b: T) => monthIndex(b.end) - monthIndex(a.end);

/*
  Roles at one company collapse into a single card so a promotion reads as a
  progression rather than as three unrelated jobs. The card then spans the
  company's whole tenure on the axis.
*/
const groupBy = <T,>(items: T[], keyOf: (item: T) => string) =>
  items.reduce<Map<string, T[]>>((groups, item) => {
    const key = keyOf(item);
    groups.set(key, [...(groups.get(key) ?? []), item]);
    return groups;
  }, new Map());

const workGroups: TimelineGroup[] = [...groupBy(experience, (job) => job.Company)].map(([company, jobs]) => {
  const stints = jobs
    .map(({ id, Role, Duration, start, end, description1, description2, description3 }) => ({
      key: `experience-${id}`,
      title: Role,
      duration: Duration,
      start,
      end,
      points: [description1, description2, description3].filter(Boolean),
    }))
    .sort(newestFirst);

  return {
    key: `company-${company}`,
    side: 'experience' as Side,
    organisation: company,
    location: jobs[0].Location,
    start: stints.reduce((earliest, stint) => (stint.start < earliest ? stint.start : earliest), stints[0].start),
    end: stints[0].end,
    stints,
  };
});

const studyGroups: TimelineGroup[] = education.map(
  ({ id, Institution, Location, Degree, Duration, start, end, detail1, detail2 }) => ({
    key: `education-${id}`,
    side: 'education' as Side,
    organisation: Institution,
    location: Location,
    start,
    end,
    stints: [
      {
        key: `education-${id}-degree`,
        title: Degree,
        duration: Duration,
        start,
        end,
        points: [detail1, detail2].filter(Boolean),
      },
    ],
  }),
);

/* Newest at the top, so the rail reads present -> past. */
const groups = [...workGroups, ...studyGroups].sort(newestFirst);

const newest = Math.max(...groups.map((group) => monthIndex(group.end)));

/*
  One grid row per month, newest first. A card occupies exactly the rows its
  dates cover and stretches to fill them, so a long degree runs alongside every
  job that overlapped it, and months nobody occupies stay empty -- that empty
  run is the gap between two stints. Rows are minmax(_, auto), so a card whose
  text outgrows its own span pushes those months taller instead of overflowing.
*/
const MONTH = 0.4;

const spanOf = ({ start, end }: TimelineGroup) => ({
  top: newest - monthIndex(end) + 1,
  bottom: newest - monthIndex(start) + 2,
});

/*
  The stacked layout has no shared axis to leave holes in, so each card carries
  the months between it and the card above as extra top margin instead.
*/
const gapAbove = (group: TimelineGroup, i: number) =>
  i === 0 ? 0 : Math.max(0, monthIndex(groups[i - 1].start) - monthIndex(group.end));

const StintBlock = ({ stint, showRail }: { stint: Stint; showRail: boolean }) => (
  /* The inner rail only appears once a company holds more than one role. */
  <div
    className={
      showRail
        ? "relative pl-5 before:absolute before:left-[3px] before:top-2 before:h-[calc(100%-0.5rem)] before:w-px before:bg-border before:content-['']"
        : undefined
    }
  >
    {showRail && <span className="absolute left-0 top-[7px] block h-[7px] w-[7px] rounded-full bg-secondary" />}

    {/* <details> keeps the toggle working without shipping any JS. */}
    <details className="group/details">
      <summary className="cursor-pointer list-none [&::-webkit-details-marker]:hidden">
        <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
          <h4 className="text-[1rem] font-semibold leading-snug text-primary max-md:text-[0.95rem]">{stint.title}</h4>
          <span className="whitespace-nowrap text-xs font-medium text-muted">{stint.duration}</span>
        </div>

        <span className="mt-2 inline-flex items-center gap-2 text-xs font-medium text-muted transition-colors duration-300 hover:text-primary">
          {stint.points.length} {stint.points.length === 1 ? 'highlight' : 'highlights'}
          <FaChevronDown className="text-[0.6rem] transition-transform duration-300 ease-standard group-open/details:rotate-180" />
        </span>
      </summary>

      {stint.points.map((point, i) => (
        <p key={i} className="mt-3 text-[0.88rem] leading-[1.7] text-light max-md:text-[0.85rem]">
          {point}
        </p>
      ))}
    </details>
  </div>
);

const Experience = () => {
  return (
    <section id="Experience" className="mt-32 py-8 max-lg:mt-24 max-md:mt-16 max-md:py-4">
      <h2 className="relative mb-12 gradient-text text-center after:absolute after:-bottom-2 after:left-1/2 after:h-[3px] after:w-[60px] after:-translate-x-1/2 after:rounded-full after:bg-[image:var(--gradient-primary)] after:content-[''] max-md:mb-8 max-[600px]:mt-16">
        Experience &amp; Education
      </h2>

      <div className="site-container mt-12 max-md:mt-8">
        <div className="mb-8 grid grid-cols-[1fr_3.5rem_1fr] text-sm font-semibold uppercase tracking-[0.2em] text-muted max-lg:hidden">
          <span className="text-right">Education</span>
          <span />
          <span>Experience</span>
        </div>

        <div className="relative">
          <span className="pointer-events-none absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-[linear-gradient(180deg,transparent,var(--color-primary)_5%,var(--color-secondary)_85%,transparent)] max-lg:left-[5px] max-lg:translate-x-0" />

          <ol
            style={{ gridAutoRows: `minmax(${MONTH}rem, auto)` }}
            className="grid grid-cols-[1fr_3.5rem_1fr] max-lg:block"
          >
            {groups.map((group, i) => {
              const { top, bottom } = spanOf(group);
              const isStudy = group.side === 'education';

              return (
                /*
                  `contents` hands the dot and the card straight to the grid so
                  each can be placed on the axis; the stacked layout turns the
                  item back into an ordinary block and the row spans go unused.
                */
                <li
                  key={group.key}
                  style={{ '--gap-months': gapAbove(group, i) } as React.CSSProperties}
                  className="group contents max-lg:relative max-lg:mt-[calc(var(--gap-months)*0.4rem)] max-lg:block max-lg:pl-8"
                >
                  <span
                    style={{ gridRow: `${top} / span 1` }}
                    className="col-start-2 mt-[6px] block h-[11px] w-[11px] justify-self-center self-start rounded-full border-2 border-primary bg-bg transition-all duration-300 ease-standard group-hover:scale-125 group-hover:bg-primary group-hover:shadow-glow max-lg:absolute max-lg:left-0 max-lg:top-[6px] max-lg:mt-0"
                  />

                  <div
                    style={{ gridRow: `${top} / ${bottom}` }}
                    className={`mb-3 rounded-xl border border-border bg-white/[0.02] p-5 transition-all duration-300 ease-standard hover:border-primary hover:bg-primary/5 max-lg:mb-0 max-[600px]:p-4 ${
                      isStudy
                        ? 'col-start-1 hover:-translate-x-[5px] max-lg:hover:translate-x-[5px]'
                        : 'col-start-3 hover:translate-x-[5px]'
                    }`}
                  >
                    <header className="mb-4 border-b border-border pb-3">
                      <h3 className="text-[1.1rem] font-semibold text-secondary max-md:text-base">
                        {group.organisation}
                      </h3>
                      <p className="mt-1 text-xs text-muted">{group.location}</p>
                    </header>

                    <div className="flex flex-col gap-5">
                      {group.stints.map((stint) => (
                        <StintBlock key={stint.key} stint={stint} showRail={group.stints.length > 1} />
                      ))}
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Experience;

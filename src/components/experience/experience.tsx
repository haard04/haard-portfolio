import { experience } from '@/data/experience';

const Experience = () => {
  return (
    <section id="Experience" className="mt-32 py-8 max-lg:mt-24 max-md:mt-16 max-md:py-4">
      <h2 className="relative mb-12 gradient-text text-center after:absolute after:-bottom-2 after:left-1/2 after:h-[3px] after:w-[60px] after:-translate-x-1/2 after:rounded-full after:bg-[image:var(--gradient-primary)] after:content-[''] max-md:mb-8 max-[600px]:mt-16">
        Experience
      </h2>

      <div className="site-container mt-12 grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-8 max-lg:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] max-lg:gap-6 max-md:mt-8 max-md:grid-cols-1">
        {experience.map(({ id, Company, Role, Duration, description1, description2, description3 }) => (
          <article
            key={id}
            className="relative mb-6 overflow-hidden rounded-xl border border-border bg-white/[0.02] p-6 transition-all duration-300 ease-standard hover:translate-x-[5px] hover:border-primary hover:bg-primary/5 before:absolute before:inset-y-0 before:-left-full before:w-full before:bg-[linear-gradient(90deg,transparent,rgba(99,102,241,0.05),transparent)] before:transition-all before:duration-300 before:content-[''] hover:before:left-full max-md:mb-4 max-md:p-5 max-[600px]:p-4"
          >
            <div className="mb-4 flex flex-wrap items-center justify-between gap-2 max-[600px]:flex-col max-[600px]:items-start max-[600px]:gap-1">
              <h2 className="mb-0 text-xl font-semibold text-primary max-md:text-[1.1rem]">{Role}</h2>
              <h2 className="mb-0 rounded-full bg-primary-variant px-3 py-1 text-sm font-medium text-muted max-[600px]:text-[0.8rem]">
                {Duration}
              </h2>
            </div>

            <h3 className="mb-3 block text-[1.1rem] font-semibold text-secondary max-md:text-base">{Company}</h3>

            {[description1, description2, description3]
              .filter(Boolean)
              .map((desc, i) => (
                <h5 key={i} className="mt-2 text-[0.9rem] leading-[1.7] text-light max-md:text-[0.85rem]">
                  {desc}
                </h5>
              ))}
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;

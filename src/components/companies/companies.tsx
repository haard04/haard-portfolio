import { companies } from '@/data/companies';

const Companies = () => {
  const scrollCompanies = [...companies, ...companies, ...companies];

  return (
    <section id="companies" className="mt-32 overflow-hidden bg-bg py-[50px] max-lg:mt-24 max-md:mt-16">
      <h2 className="relative mb-12 gradient-text text-center after:absolute after:-bottom-2 after:left-1/2 after:h-[3px] after:w-[60px] after:-translate-x-1/2 after:rounded-full after:bg-[image:var(--gradient-primary)] after:content-[''] max-md:mb-8">
        Trusted By These Companies Through My Work
      </h2>

      <div className="relative w-full overflow-hidden py-5">
        <div className="w-full overflow-hidden [mask-image:linear-gradient(90deg,transparent,white_20%,white_80%,transparent)] [-webkit-mask-image:linear-gradient(90deg,transparent,white_20%,white_80%,transparent)]">
          <div className="flex w-fit gap-8 animate-[marquee_50s_linear_infinite] hover:[animation-play-state:paused]">
            {scrollCompanies.map((company, index) => (
              <a
                key={`${company.name}-${index}`}
                href={company.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-w-[280px] flex-col items-center justify-center gap-4 rounded-2xl border border-transparent bg-bg-variant p-[1.2rem] text-center transition-all duration-300 ease-standard hover:-translate-y-[5px] hover:border-primary-variant max-lg:min-w-[250px] max-lg:p-4 max-[600px]:min-w-[200px] max-[600px]:p-[0.8rem]"
              >
                <img
                  src={company.logo.src}
                  alt={company.name}
                  className="h-[60px] w-[180px] object-contain max-lg:h-[50px] max-lg:w-[150px] max-[600px]:h-10 max-[600px]:w-[120px]"
                />
                <h4>{company.name}</h4>
                <p className="text-[0.8rem] leading-[1.3] text-light max-lg:text-[0.75rem] max-[600px]:text-[0.7rem]">
                  {company.line1}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Companies;

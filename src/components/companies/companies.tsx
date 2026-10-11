import Image from 'next/image';

import { companies } from '@/data/companies';
import SectionHeading from '../section-heading';

const Companies = () => {
  return (
    <section id="companies" className="site-container py-14 md:py-20">
      <SectionHeading index="01" label="Work" title="Companies I&rsquo;ve built for" />

      <ul className="grid gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
        {companies.map((company) => (
          <li key={company.name} className="border-b border-rule">
            <a
              href={company.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full items-center gap-4 py-5"
            >
              {/* The logos are a mixed bag of shapes and backgrounds; a white tile evens them out. */}
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-md border border-rule bg-white p-1.5">
                <Image src={company.logo} alt="" sizes="56px" className="h-full w-full object-contain" />
              </span>

              <div className="min-w-0 flex-1">
                <h3 className="font-serif text-2xl leading-tight">{company.name}</h3>
                <p className="mt-1 text-sm leading-snug text-muted">{company.line1}</p>
              </div>

              <span
                aria-hidden
                className="self-start pt-1 text-muted transition duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
              >
                ↗
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Companies;

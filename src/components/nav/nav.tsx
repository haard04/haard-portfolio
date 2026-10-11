const links = [
  { href: '#companies', label: 'Work' },
  { href: '#skills', label: 'Skills' },
  { href: '#Experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

const Nav = () => {
  return (
    /* Two rows on phones, so it only sticks once it fits on one. */
    <nav aria-label="Primary" className="top-0 z-50 border-b border-rule bg-paper/85 backdrop-blur-md md:sticky">
      <div className="site-container flex flex-wrap items-center justify-between gap-x-8 gap-y-2 py-4">
        <a href="#" className="font-serif text-2xl leading-none">
          Haard Shah<span className="text-accent">.</span>
        </a>

        <ul className="flex max-w-full gap-x-6 overflow-x-auto label-mono text-muted max-sm:w-full max-sm:justify-between max-sm:gap-x-2 max-sm:text-[0.66rem] max-sm:tracking-[0.06em]">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a href={href} className="block py-1 transition-colors hover:text-ink">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;

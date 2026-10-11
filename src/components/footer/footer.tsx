const permalinks = [
  { href: '#', label: 'Home' },
  { href: '#skills', label: 'Skills' },
  { href: '#Experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

const socials = [
  { href: 'https://instagram.com/haardshah41', label: 'Instagram' },
  { href: 'https://twitter.com/haardshah10', label: 'Twitter' },
  { href: 'https://www.facebook.com/haard.shah.58', label: 'Facebook' },
  { href: 'https://www.linkedin.com/in/haard-/', label: 'LinkedIn' },
];

const link = 'block py-1 transition-colors duration-200 hover:text-paper';

const Footer = () => {
  return (
    <footer className="mt-14 bg-ink text-paper md:mt-20">
      <div className="site-container grid gap-12 py-14 md:grid-cols-[1fr_auto_auto] md:gap-20 md:py-20">
        <a href="#" className="self-start font-serif text-[clamp(3rem,8vw,5.5rem)] leading-[0.9] tracking-[-0.02em]">
          Haard <span className="italic">Shah</span>
        </a>

        <ul className="label-mono text-paper/70">
          {permalinks.map(({ href, label }) => (
            <li key={label}>
              <a href={href} className={link}>
                {label}
              </a>
            </li>
          ))}
        </ul>

        <ul className="label-mono text-paper/70">
          {socials.map(({ href, label }) => (
            <li key={label}>
              <a href={href} target="_blank" rel="noopener noreferrer" className={link}>
                {label} <span aria-hidden>↗</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t border-paper/15">
        <p className="site-container py-5 label-mono text-paper/70">&copy; haardshah04</p>
      </div>
    </footer>
  );
};

export default Footer;

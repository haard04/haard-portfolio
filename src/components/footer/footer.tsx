import { BsInstagram, BsTwitter, BsFacebook, BsLinkedin } from 'react-icons/bs';

const permalinks = [
  { href: '#', label: 'Home' },
  { href: '#skills', label: 'Skills' },
  { href: '#Experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact Me' },
];

const socials = [
  { href: 'https://instagram.com/haardshah41', label: 'Instagram', Icon: BsInstagram },
  { href: 'https://twitter.com/haardshah10', label: 'Twitter', Icon: BsTwitter },
  { href: 'https://www.facebook.com/haard.shah.58', label: 'Facebook', Icon: BsFacebook },
  { href: 'https://www.linkedin.com/in/haard-/', label: 'LinkedIn', Icon: BsLinkedin },
];

const Footer = () => {
  return (
    <footer className="relative mt-32 overflow-hidden bg-[image:var(--gradient-primary)] pb-8 pt-16 text-center text-[0.9rem] before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.1)_0%,transparent_50%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.1)_0%,transparent_50%)] before:content-[''] [&>*]:relative [&>*]:z-[1] max-md:mt-24 max-md:pb-6 max-md:pt-12 max-[600px]:pb-4 max-[600px]:pt-10">
      <a
        href="#"
        className="relative mb-8 inline-block text-[2.5rem] font-bold text-white transition-all duration-300 ease-standard after:absolute after:-bottom-2 after:left-1/2 after:h-[3px] after:w-[60px] after:-translate-x-1/2 after:rounded-full after:bg-white after:content-[''] max-md:text-[2rem] max-[600px]:mb-6 max-[600px]:text-[1.75rem]"
      >
        Haard Shah
      </a>

      <ul className="mx-auto mb-12 flex flex-wrap justify-center gap-10 max-md:mb-10 max-md:gap-8 max-[600px]:mb-8 max-[600px]:flex-col max-[600px]:gap-6">
        {permalinks.map(({ href, label }) => (
          <li key={label}>
            <a
              href={href}
              className="relative block py-2 text-base font-medium text-white transition-all duration-300 ease-standard hover:text-bg after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:bg-white after:transition-all after:duration-300 after:content-[''] hover:after:w-full max-[600px]:text-[0.95rem]"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      <div className="mb-16 flex justify-center gap-6 max-md:mb-12 max-md:gap-4 max-[600px]:mb-10 max-[600px]:gap-3">
        {socials.map(({ href, label, Icon }, index) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            style={{ animationDelay: `${index}s` }}
            className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 bg-white/10 p-4 text-xl text-white backdrop-blur-[10px] transition-all duration-300 ease-standard animate-[footerFloat_6s_ease-in-out_infinite] hover:-translate-y-[5px] hover:border-white hover:bg-white hover:text-primary hover:shadow-lg max-md:h-11 max-md:w-11 max-md:p-3.5 max-md:text-[1.1rem] max-[600px]:h-10 max-[600px]:w-10 max-[600px]:p-3 max-[600px]:text-base"
          >
            <Icon />
          </a>
        ))}
      </div>

      <div className="relative mb-8 pt-8 font-normal text-white opacity-90 before:absolute before:left-1/2 before:top-0 before:h-px before:w-[200px] before:-translate-x-1/2 before:bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.3),transparent)] before:content-[''] max-[600px]:mb-6 max-[600px]:text-[0.85rem]">
        <small>&copy; haardshah04</small>
      </div>
    </footer>
  );
};

export default Footer;

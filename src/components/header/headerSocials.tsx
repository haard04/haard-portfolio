import { BsLinkedin, BsGithub, BsTwitter } from 'react-icons/bs';
import { SiLeetcode } from 'react-icons/si';

const socials = [
  { href: 'https://www.linkedin.com/in/haard-/', label: 'LinkedIn', Icon: BsLinkedin },
  { href: 'https://github.com/haard04', label: 'GitHub', Icon: BsGithub },
  { href: 'https://leetcode.com/haardshah04', label: 'LeetCode', Icon: SiLeetcode },
  { href: 'https://twitter.com/haardshah10', label: 'Twitter', Icon: BsTwitter },
];

const HeaderSocial = () => {
  return (
    <div className="absolute bottom-12 left-8 flex flex-col items-center gap-3 animate-[fadeInLeft_0.8s_ease-out_1s_both] after:mt-2 after:h-8 after:w-px after:bg-[image:var(--gradient-primary)] after:content-[''] max-lg:left-4 max-md:hidden">
      {socials.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-bg-card text-[1.1rem] text-light backdrop-blur-[10px] transition-all duration-300 ease-standard hover:-translate-y-[3px] hover:bg-[image:var(--gradient-primary)] hover:text-white hover:shadow-glow"
        >
          <Icon />
        </a>
      ))}
    </div>
  );
};

export default HeaderSocial;

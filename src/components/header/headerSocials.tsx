const socials = [
  { href: 'https://www.linkedin.com/in/haard-/', label: 'LinkedIn' },
  { href: 'https://github.com/haard04', label: 'GitHub' },
  { href: 'https://leetcode.com/haardshah04', label: 'LeetCode' },
  { href: 'https://twitter.com/haardshah10', label: 'Twitter' },
];

const HeaderSocial = () => {
  return (
    <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 label-mono text-muted">
      {socials.map(({ href, label }) => (
        <li key={label}>
          <a href={href} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-accent">
            {label} <span aria-hidden>↗</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default HeaderSocial;

'use client';

import { useState } from 'react';
import { FaHome, FaToolbox, FaTools } from 'react-icons/fa';
import { AiOutlineProject } from 'react-icons/ai';
import { IoMdContact } from 'react-icons/io';

const links = [
  { href: '#', label: 'Home', Icon: FaHome },
  { href: '#skills', label: 'Skills', Icon: FaTools },
  { href: '#Experience', label: 'Experience', Icon: FaToolbox },
  { href: '#projects', label: 'Projects', Icon: AiOutlineProject },
  { href: '#contact', label: 'Contact', Icon: IoMdContact },
];

const linkBase =
  "relative flex items-center justify-center overflow-hidden rounded-full p-3 text-[1.1rem] transition-all duration-300 ease-standard hover:-translate-y-0.5 hover:text-white before:absolute before:inset-0 before:scale-[0.8] before:rounded-full before:bg-[image:var(--gradient-primary)] before:opacity-0 before:transition-all before:duration-300 before:content-[''] hover:before:scale-100 hover:before:opacity-100 [&_svg]:relative [&_svg]:z-[1] max-md:p-2.5 max-md:text-base max-[480px]:p-2 max-[480px]:text-[0.9rem]";

const linkActive =
  'bg-[image:var(--gradient-primary)] text-white shadow-glow -translate-y-0.5 before:opacity-0 animate-[navPulse_2s_ease-in-out_infinite]';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav className="fixed bottom-8 left-1/2 z-[999] flex w-max -translate-x-1/2 gap-2 rounded-full border border-border bg-white/5 px-6 py-3 shadow-lg backdrop-blur-[20px] transition-all duration-300 ease-standard hover:shadow-xl max-md:bottom-6 max-md:gap-1 max-md:px-4 max-md:py-2 max-[480px]:gap-[0.2rem] max-[480px]:px-3 max-[480px]:py-2">
      {links.map(({ href, label, Icon }) => (
        <a
          key={href}
          href={href}
          aria-label={label}
          onClick={() => setActiveNav(href)}
          className={`${linkBase} ${activeNav === href ? linkActive : 'text-light'}`}
        >
          <Icon />
        </a>
      ))}
    </nav>
  );
};

export default Nav;

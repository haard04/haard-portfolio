import Image from 'next/image';

import CTA from './CTA';
import PIC from '../../assets/Image.jpeg';
import HeaderSocial from './headerSocials';
import { jobTitle } from '@/lib/site';

const Header = () => {
  return (
    <header className="site-container grid items-end gap-14 pb-16 pt-12 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:gap-16 lg:pb-24 lg:pt-20">
      <div>
        <p className="label-mono text-muted">
          <span className="text-accent">Hello, I&apos;m</span> / {jobTitle}
        </p>

        <h1 className="mt-6 font-serif text-[clamp(4.5rem,15vw,10.5rem)] leading-[0.86] tracking-[-0.03em]">
          <span className="block">Haard</span> <span className="block italic text-accent">Shah</span>
        </h1>

        <p className="mt-8 max-w-xl text-lg text-ink-soft">
          I build full-stack products across NestJS, Next.js, Node.js, React, FastAPI, Django and cloud infrastructure.
        </p>

        <CTA />
        <HeaderSocial />
      </div>

      <div className="relative mx-auto w-full max-w-[18rem] lg:mx-0 lg:justify-self-end">
        <div aria-hidden className="absolute inset-0 translate-x-3 translate-y-3 bg-accent" />
        <Image
          src={PIC}
          alt="Haard Shah"
          preload
          sizes="288px"
          className="relative aspect-[4/5] h-auto w-full object-cover"
        />
      </div>
    </header>
  );
};

export default Header;

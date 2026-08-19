'use client';

import CTA from './CTA';
import PIC from '../../assets/Image.jpeg';
import HeaderSocial from './headerSocials';

const Header = () => {
  return (
    <header className="relative flex h-screen items-center justify-center overflow-hidden pt-28 before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_20%_80%,rgba(99,102,241,0.1)_0%,transparent_50%),radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.1)_0%,transparent_50%)] before:content-[''] max-lg:h-[68vh] max-lg:pt-16 max-md:h-screen max-md:pt-8 max-[600px]:pt-4">
      <div className="site-container relative z-[1] flex h-full flex-col items-center justify-center text-center">
        <h5 className="mb-2 text-[1.1rem] font-normal text-light animate-[fadeInUp_0.8s_ease-out_0.2s_both]">
          Hello I&apos;m
        </h5>

        <h1 className="relative mb-4 gradient-text text-[clamp(3rem,8vw,5rem)] font-bold animate-[fadeInUp_0.8s_ease-out_0.4s_both] after:absolute after:-bottom-2 after:left-1/2 after:h-1 after:w-[100px] after:-translate-x-1/2 after:rounded-full after:bg-[image:var(--gradient-primary)] after:content-[''] max-md:text-[clamp(2.5rem,10vw,4rem)] max-[600px]:text-[clamp(2rem,12vw,3rem)]">
          Haard Shah
        </h1>

        <h5 className="mb-8 text-xl font-medium text-light animate-[fadeInUp_0.8s_ease-out_0.6s_both] max-[600px]:text-[1.1rem]">
          Software Engineer
        </h5>

        <CTA />
        <HeaderSocial />

        <div className="absolute right-8 top-1/2 h-[30rem] w-[22rem] -translate-y-1/2 overflow-hidden rounded-2xl border border-border bg-[image:var(--gradient-primary)] p-6 shadow-xl animate-[fadeInRight_0.8s_ease-out_0.8s_both,float_6s_ease-in-out_infinite] before:absolute before:inset-0 before:z-[1] before:bg-[linear-gradient(135deg,rgba(99,102,241,0.1)_0%,rgba(139,92,246,0.1)_100%)] before:content-[''] max-lg:right-4 max-lg:h-96 max-lg:w-72 max-md:relative max-md:right-auto max-md:top-auto max-md:mx-auto max-md:mt-8 max-md:h-80 max-md:w-64 max-md:translate-y-0 max-md:animate-[fadeInUp_0.8s_ease-out_0.8s_both] max-[600px]:h-72 max-[600px]:w-56">
          <img
            src={PIC.src}
            alt="Haard Shah"
            className="relative z-[2] h-full w-full rounded-xl object-cover"
          />
        </div>

        <a
          href="#contact"
          className="absolute bottom-20 right-8 rotate-90 text-[0.9rem] font-normal text-light transition-all duration-300 ease-standard animate-[fadeInRight_0.8s_ease-out_1.2s_both] hover:text-primary max-lg:right-4 max-md:hidden"
        >
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;

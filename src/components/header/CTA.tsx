const btn =
  "relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl border border-transparent px-6 py-3 text-sm font-medium transition-all duration-300 ease-standard hover:-translate-y-0.5 hover:shadow-lg before:absolute before:inset-y-0 before:-left-full before:w-full before:bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.1),transparent)] before:transition-all before:duration-300 before:content-[''] hover:before:left-full max-[600px]:px-5 max-[600px]:py-2.5 max-[600px]:text-[0.8rem]";

const CTA = () => {
  return (
    <div className="mt-10 flex justify-center gap-5 animate-[fadeInUp_0.8s_ease-out_0.8s_both] max-md:flex-col max-md:items-center max-md:gap-4">
      <a
        href="https://drive.google.com/drive/folders/1C5EESJIZUQokd9D2u6vjR37_c_cXumn2?usp=drive_link"
        target="_blank"
        rel="noopener noreferrer"
        className={`${btn} border-primary text-primary hover:bg-primary hover:text-white`}
      >
        Download Resume
      </a>
      <a
        href="mailto:haardshah04@gmail.com"
        className={`${btn} border-primary bg-[image:var(--gradient-primary)] text-white hover:border-secondary hover:bg-[image:var(--gradient-secondary)] hover:text-white`}
      >
        Contact Me
      </a>
    </div>
  );
};

export default CTA;

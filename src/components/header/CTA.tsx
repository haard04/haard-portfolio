const btn =
  'inline-flex items-center justify-center gap-2 rounded-full border border-ink px-6 py-3 text-sm font-medium transition-colors duration-200';

const CTA = () => {
  return (
    <div className="mt-10 flex flex-wrap gap-3">
      <a
        href="mailto:haardshah04@gmail.com"
        aria-label="Contact me by email"
        className={`${btn} bg-ink text-paper hover:border-accent hover:bg-accent`}
      >
        Contact Me
      </a>
      <a
        href="https://drive.google.com/drive/folders/1C5EESJIZUQokd9D2u6vjR37_c_cXumn2?usp=drive_link"
        target="_blank"
        rel="noopener noreferrer"
        className={`${btn} hover:bg-ink hover:text-paper`}
      >
        Download Resume
      </a>
    </div>
  );
};

export default CTA;

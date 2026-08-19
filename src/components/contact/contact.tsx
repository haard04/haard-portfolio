'use client';

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { MdEmail } from 'react-icons/md';
import { ImLinkedin } from 'react-icons/im';
import { IoLogoWhatsapp } from 'react-icons/io';

const number = '+916354601088';
const text = 'hello';

const optionCard =
  "relative overflow-hidden rounded-xl border border-border bg-bg-card p-6 text-center backdrop-blur-[10px] transition-all duration-300 ease-standard hover:-translate-y-[5px] hover:border-primary hover:shadow-xl before:absolute before:inset-x-0 before:top-0 before:h-[3px] before:rounded-t-xl before:bg-[image:var(--gradient-primary)] before:content-[''] max-md:p-5 max-[600px]:p-4";

const optionIcon =
  'mx-auto mb-4 text-[2rem] text-primary transition-all duration-300 ease-standard group-hover:scale-110 group-hover:text-secondary max-[600px]:text-2xl';

const optionLink =
  'mt-2 inline-block text-[0.9rem] font-medium text-primary transition-all duration-300 ease-standard hover:translate-x-[5px] hover:text-secondary';

const field =
  'peer w-full rounded-xl border border-border bg-white/[0.02] px-4 py-5 text-[0.95rem] text-white transition-all duration-300 ease-standard placeholder:opacity-0 focus:border-primary focus:bg-primary/5 focus:shadow-[0_0_0_3px_rgba(99,102,241,0.1)] focus:outline-none max-md:p-4 max-md:text-[0.9rem] max-[600px]:p-3.5 max-[600px]:text-[0.85rem]';

const floatingLabel =
  'pointer-events-none absolute left-4 top-4 bg-bg-card px-2 text-[0.9rem] text-muted transition-all duration-300 ease-standard peer-focus:-top-2 peer-focus:left-3 peer-focus:text-xs peer-focus:font-medium peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:font-medium peer-[:not(:placeholder-shown)]:text-primary';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formEl = form.current;
    if (!formEl) return;

    emailjs
      .sendForm('service_s88ryeh', 'template_cm2rzpi', formEl, {
        publicKey: 'cfcwjfuEVrb3jWP7P',
      })
      .then(
        (result) => {
          console.log(result.text);
          formEl.reset();
        },
        (error: { text: string }) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact" className="mt-32 py-8 max-lg:mt-24 max-md:mt-16 max-md:py-4">
      <h5 className="text-center text-light">Get In Touch</h5>
      <h2 className="relative mb-12 gradient-text text-center after:absolute after:-bottom-2 after:left-1/2 after:h-[3px] after:w-[60px] after:-translate-x-1/2 after:rounded-full after:bg-[image:var(--gradient-primary)] after:content-[''] max-md:mb-8 max-[600px]:mt-16">
        Contact Me
      </h2>

      <div className="mx-auto mt-12 grid w-[70%] grid-cols-[1fr_1.5fr] gap-12 max-lg:w-[80%] max-lg:grid-cols-1 max-lg:gap-8 max-md:mt-8 max-md:w-[90%] max-md:gap-6 max-[600px]:w-[95%]">
        <div className="flex flex-col gap-6">
          <article className={`group ${optionCard}`}>
            <MdEmail className={optionIcon} />
            <h4 className="mb-2 font-semibold text-white">Email</h4>
            <h5 className="mb-4 font-normal text-light">haardshah04@gmail.com</h5>
            <a href="mailto:haardshah04@gmail.com" className={optionLink}>
              Send a message
            </a>
          </article>

          <article className={`group ${optionCard}`}>
            <ImLinkedin className={optionIcon} />
            <h4 className="mb-2 font-semibold text-white">LinkedIn</h4>
            <h5 className="mb-4 font-normal text-light">Haard Shah</h5>
            <a
              href="https://www.linkedin.com/in/haard-/"
              target="_blank"
              rel="noopener noreferrer"
              className={optionLink}
            >
              Connect Me
            </a>
          </article>

          <article className={`group ${optionCard}`}>
            <IoLogoWhatsapp className={optionIcon} />
            <h4 className="mb-2 font-semibold text-white">Whatsapp</h4>
            <h5 className="mb-4 font-normal text-light">{number}</h5>
            <a
              href={`whatsapp://send?text=${text}&phone=${number}`}
              target="_blank"
              rel="noopener noreferrer"
              className={optionLink}
            >
              Send a message
            </a>
          </article>
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="relative flex flex-col gap-6 overflow-hidden rounded-xl border border-border bg-bg-card p-8 backdrop-blur-[10px] before:absolute before:inset-x-0 before:top-0 before:h-[3px] before:rounded-t-xl before:bg-[image:var(--gradient-primary)] before:content-[''] max-md:p-6 max-[600px]:p-5"
        >
          <div className="relative">
            <input type="text" name="Name" placeholder=" " required className={field} />
            <label className={floatingLabel}>Your Full Name</label>
          </div>

          <div className="relative">
            <input type="email" name="Email" placeholder=" " required className={field} />
            <label className={floatingLabel}>Your Email Address</label>
          </div>

          <div className="relative">
            <textarea
              name="message"
              rows={7}
              placeholder=" "
              required
              className={`${field} min-h-[120px] resize-none leading-[1.6]`}
            />
            <label className={floatingLabel}>Your Message</label>
          </div>

          <button
            type="submit"
            className="relative mt-4 cursor-pointer overflow-hidden rounded-xl bg-[image:var(--gradient-primary)] px-8 py-4 text-base font-semibold text-white transition-all duration-300 ease-standard hover:-translate-y-0.5 hover:bg-[image:var(--gradient-secondary)] hover:shadow-lg before:absolute before:inset-y-0 before:-left-full before:w-full before:bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.2),transparent)] before:transition-all before:duration-300 before:content-[''] hover:before:left-full max-md:px-6 max-md:py-3.5 max-md:text-[0.9rem] max-[600px]:px-5 max-[600px]:py-3 max-[600px]:text-[0.85rem]"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

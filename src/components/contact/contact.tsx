'use client';

import React, { useRef, useState } from 'react';

import SectionHeading from '../section-heading';

const number = '+916354601088';
const text = 'hello';

const options = [
  {
    label: 'Email',
    value: 'haardshah04@gmail.com',
    href: 'mailto:haardshah04@gmail.com',
    action: 'Send a message by email',
    external: false,
  },
  {
    label: 'LinkedIn',
    value: 'Haard Shah',
    href: 'https://www.linkedin.com/in/haard-/',
    action: 'Connect on LinkedIn',
    external: true,
  },
  {
    label: 'Whatsapp',
    value: number,
    href: `whatsapp://send?text=${text}&phone=${number}`,
    action: 'Send a message on WhatsApp',
    external: true,
  },
];

const field =
  'w-full border-b border-ink/40 bg-transparent py-3 text-base text-ink transition-colors duration-200 placeholder:text-muted focus:border-accent focus:outline-none';

type Status = 'idle' | 'sending' | 'sent' | 'failed';

const statusText: Record<Status, string> = {
  idle: '',
  sending: 'Sending…',
  sent: 'Thanks — your message is on its way.',
  failed: 'That didn’t send. Please email me directly instead.',
};

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>('idle');

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formEl = form.current;
    if (!formEl) return;

    setStatus('sending');

    // Loaded on submit so the library stays out of the initial bundle.
    import('@emailjs/browser')
      .then(({ default: emailjs }) =>
        emailjs.sendForm('service_s88ryeh', 'template_cm2rzpi', formEl, {
          publicKey: 'cfcwjfuEVrb3jWP7P',
        })
      )
      .then(
        () => {
          formEl.reset();
          setStatus('sent');
        },
        () => setStatus('failed')
      );
  };

  return (
    <section id="contact" className="site-container py-14 md:py-20">
      <SectionHeading index="05" label="Get in touch" title="Contact me" />

      <div className="grid gap-14 lg:grid-cols-[1fr_1.25fr] lg:gap-20">
        <ul>
          {options.map(({ label, value, href, action, external }) => (
            <li key={label} className="border-b border-rule">
              <a
                href={href}
                aria-label={`${label}: ${value}. ${action}`}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="group flex items-baseline justify-between gap-4 py-5"
              >
                <span>
                  <span className="block label-mono text-muted">{label}</span>
                  <span className="mt-1 block break-all font-serif text-2xl leading-tight transition-colors duration-200 group-hover:text-accent">
                    {value}
                  </span>
                </span>
                <span aria-hidden className="text-muted transition-colors duration-200 group-hover:text-accent">
                  ↗
                </span>
              </a>
            </li>
          ))}
        </ul>

        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-7">
          <div>
            <label htmlFor="contact-name" className="label-mono text-muted">
              Your full name
            </label>
            <input id="contact-name" type="text" name="Name" autoComplete="name" required className={field} />
          </div>

          <div>
            <label htmlFor="contact-email" className="label-mono text-muted">
              Your email address
            </label>
            <input id="contact-email" type="email" name="Email" autoComplete="email" required className={field} />
          </div>

          <div>
            <label htmlFor="contact-message" className="label-mono text-muted">
              Your message
            </label>
            <textarea id="contact-message" name="message" rows={5} required className={`${field} resize-none`} />
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <button
              type="submit"
              disabled={status === 'sending'}
              className="cursor-pointer rounded-full border border-ink bg-ink px-8 py-3.5 text-sm font-medium text-paper transition-colors duration-200 hover:border-accent hover:bg-accent disabled:cursor-wait disabled:opacity-60"
            >
              Send Message
            </button>
            <p role="status" className="text-sm text-ink-soft">
              {statusText[status]}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;

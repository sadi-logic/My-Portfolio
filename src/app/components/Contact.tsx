"use client";

import { useState } from "react";
import { personalDetails } from "@/data/portfolio";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const errs: typeof errors = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = "Please enter your name (at least 2 characters).";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = "Message must be at least 10 characters long.";
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      // Simulate network response
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      }, 700);
    }
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-2">
          <p className="text-xs uppercase tracking-widest font-semibold text-sky-500">
            Let&apos;s Connect
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Contact Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-sky-500 to-indigo-600 rounded-full mx-auto mt-2" />
          <p className="text-sm text-base-content/70 max-w-md mx-auto pt-2">
            Have an opportunity, project idea, or question? Feel free to reach out anytime.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Info & Socials */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-2xl bg-base-100 border border-base-content/10 shadow-md space-y-6">
              <h3 className="text-2xl font-bold">Contact Details</h3>
              <p className="text-sm text-base-content/75 leading-relaxed">
                I am actively seeking software engineering internships, junior developer roles, and freelance collaborations.
              </p>

              <div className="space-y-4 pt-2">
                {/* Email Item */}
                <a
                  href={`mailto:${personalDetails.email}`}
                  className="flex items-center gap-4 p-3 rounded-xl bg-base-200/60 hover:bg-sky-500/10 border border-base-content/5 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-sky-500/10 text-sky-500 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-xs text-base-content/60 font-medium">Email Me</p>
                    <p className="text-sm font-semibold truncate group-hover:text-sky-500 transition-colors">
                      {personalDetails.email}
                    </p>
                  </div>
                </a>

                {/* Location Item */}
                <div className="flex items-center gap-4 p-3 rounded-xl bg-base-200/60 border border-base-content/5">
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/10 text-indigo-500 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-base-content/60 font-medium">Location</p>
                    <p className="text-sm font-semibold">{personalDetails.location}</p>
                  </div>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="pt-4 border-t border-base-content/10">
                <p className="text-xs uppercase tracking-wider font-semibold text-base-content/60 mb-3">
                  Find Me Online
                </p>
                <div className="flex gap-3">
                  {personalDetails.socials.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl bg-base-200 hover:bg-sky-500/10 hover:text-sky-500 border border-base-content/10 text-xs font-semibold flex items-center gap-2 transition-colors"
                    >
                      {social.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-2xl bg-base-100 border border-base-content/10 shadow-md">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 mx-auto flex items-center justify-center">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold">Message Sent!</h3>
                  <p className="text-sm text-base-content/75 max-w-sm mx-auto">
                    Thank you for reaching out. I have received your note and will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-xl text-sm font-semibold bg-base-200 hover:bg-base-300 text-base-content transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <h3 className="text-2xl font-bold mb-4">Send a Message</h3>

                  {/* Name field */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-base-content/70 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Jane Doe"
                      className={`w-full px-4 py-3 rounded-xl bg-base-200/60 border ${
                        errors.name ? "border-rose-500 focus:ring-rose-500" : "border-base-content/10 focus:border-sky-500"
                      } focus:outline-none focus:ring-2 focus:ring-sky-500/20 text-sm transition-all`}
                    />
                    {errors.name && (
                      <p className="text-xs text-rose-500 mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Email field */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-base-content/70 mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. jane@example.com"
                      className={`w-full px-4 py-3 rounded-xl bg-base-200/60 border ${
                        errors.email ? "border-rose-500 focus:ring-rose-500" : "border-base-content/10 focus:border-sky-500"
                      } focus:outline-none focus:ring-2 focus:ring-sky-500/20 text-sm transition-all`}
                    />
                    {errors.email && (
                      <p className="text-xs text-rose-500 mt-1">{errors.email}</p>
                    )}
                  </div>

                  {/* Message field */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-base-content/70 mb-1.5">
                      Your Message *
                    </label>
                    <textarea
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hello Sadi, I would like to discuss..."
                      className={`w-full px-4 py-3 rounded-xl bg-base-200/60 border ${
                        errors.message ? "border-rose-500 focus:ring-rose-500" : "border-base-content/10 focus:border-sky-500"
                      } focus:outline-none focus:ring-2 focus:ring-sky-500/20 text-sm transition-all resize-none`}
                    />
                    {errors.message && (
                      <p className="text-xs text-rose-500 mt-1">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl font-semibold text-white bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-600 hover:to-indigo-700 shadow-md hover:shadow-lg transition-all active:scale-98 disabled:opacity-50"
                  >
                    {isSubmitting ? "Sending Message..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

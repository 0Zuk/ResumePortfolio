import { useRef } from "react";
import emailjs from "emailjs-com";
import { Send } from "lucide-react";

export const ContactSection = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_r5x8hjh",
        "template_ywlsikb",
        form.current,
        "pJu9Hffja_iJhlg2a"
      )
      .then(
        () => alert("Message sent!"),
        () => alert("Failed to send message.")
      );
    e.target.reset();
  };

  return (
    <section id="contact" className="py-12">
      <div className="container mx-auto">
        <h2 className="text-4xl p-4 font-semibold text-center animate-float">
          <Send className="inline-block mr-2 animate-float text-primary" />Contact Me
        </h2>
        <form ref={form} onSubmit={sendEmail} className="max-w-lg mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium">
              Name
            </label>
            <input
              placeholder="Enter your Name"
              type="text"
              name="from_name"
              id="name"
              className="mt-1 block w-full border border-border rounded-md p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              placeholder="Enter your email address"
              type="email"
              name="from_email"
              id="email"
              className="mt-1 block w-full border border-border rounded-md p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium">
              Message
            </label>
            <textarea
              placeholder="Your message here..."
              name="message"
              id="message"
              rows="4"
              className="mt-1 block w-full border border-border rounded-md p-2"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground py-2 rounded-md hover:bg-primary-dark transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

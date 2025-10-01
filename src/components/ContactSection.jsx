import { useRef } from "react";
import emailjs from "emailjs-com";
import { Send, Github, Linkedin} from "lucide-react";

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
        <div className="flex flex-col items-center">
            <h2 className="text-4xl font-semibold text-center animate-float inline-block mx-2 m-5 text-outline-">
                <Send className="inline-block mr-2 text-primary" />
                Contact <span className="text-primary">Me</span>
            </h2>
            <div className="max-w-lg w-full gradient-border rounded-xl p-6 card-hover">
                <form ref={form} onSubmit={sendEmail}>
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
                        className="cosmic-button text-readable"
                    >
                        Send Message
                    </button>
                </form>
                <div className="flex justify-center items-center mt-6">
                    <Github className="inline-block mx-2" />
                    <a href="https://github.com/0Zuk" className="inline-block mx-2 text-glow text-primary">GitHub</a>
                    <Linkedin className="inline-block mx-2" />
                    <a href="https://www.linkedin.com/in/pontus-karlsson-766660268" className="inline-block mx-2 text-glow text-primary">LinkedIn</a>
                </div>
            </div>
        </div>
    </section>
);
};

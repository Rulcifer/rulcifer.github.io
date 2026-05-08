import {
  Mail,
  MapPin, // Phone dihapus karena tidak dipakai
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/Button";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "sahrulrafiwork@gmail.com",
    href: "mailto:sahrulrafiwork@gmail.com",
  },
  // Objek Phone sudah dihapus dari sini
  {
    icon: MapPin,
    label: "Location",
    value: "East Java, Indonesia",
    href: "#",
  },
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: null, // 'success' or 'error'
    message: "",
  });

  const headerLabel = useScrollReveal();
  const headerTitle = useScrollReveal();
  const headerDesc = useScrollReveal();
  const formReveal = useScrollReveal();
  const infoReveal = useScrollReveal();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });
    try {
      // Pastikan kamu sudah buat file .env di root project!
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_dqt71vx";
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_gswsr3w";
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "ZKbDDE9Kf-Q6unLCP";

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "EmailJS configuration is missing. Please check your environment variables."
        );
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        publicKey
      );

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      setSubmitStatus({
        type: "error",
        message:
          error.text || "Failed to send message. Please check your connection.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span
            ref={headerLabel.ref}
            className={`text-secondary-foreground text-sm font-medium tracking-wider uppercase reveal reveal-up ${headerLabel.isVisible ? "revealed" : ""}`}
          >
            Get In Touch
          </span>

          <h2
            ref={headerTitle.ref}
            className={`text-4xl md:text-5xl font-bold mt-4 mb-6 reveal reveal-blur ${headerTitle.isVisible ? "revealed" : ""}`}
            style={{ transitionDelay: "100ms" }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-blue-600 via-blue-400 to-blue-300">
              Let's build
            </span>

            <span className="font-serif italic font-normal text-white bg-clip-text text-transparent bg-gradient-to-b from-white via-white/90 to-white/60">
              {" "}
              something great.
            </span>
          </h2>

          <p
            ref={headerDesc.ref}
            className={`text-muted-foreground reveal reveal-up ${headerDesc.isVisible ? "revealed" : ""}`}
            style={{ transitionDelay: "200ms" }}
          >
            Have a project in mind or want to collaborate? I'd love to hear
            about it. Send me a message and let's discuss how we can work
            together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Form Section */}
          <div
            ref={formReveal.ref}
            className={`glass p-8 rounded-3xl border border-primary/30 reveal reveal-left ${formReveal.isVisible ? "revealed" : ""}`}
            style={{ transitionDelay: "300ms" }}
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Your name..."
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="input-animated w-full px-4 py-3 bg-surface rounded-xl border border-border outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="input-animated w-full px-4 py-3 bg-surface rounded-xl border border-border outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Tell me about your project..."
                  className="input-animated w-full px-4 py-3 bg-surface rounded-xl border border-border outline-none resize-none"
                />
              </div>

              <Button
                className="w-full btn-animated"
                type="submit"
                size="lg"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <span className="inline-block w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </>
                )}
              </Button>

              {submitStatus.type && (
                <div
                  className={`flex items-center gap-3 p-4 rounded-xl animate-fade-in ${
                    submitStatus.type === "success"
                      ? "bg-green-500/10 border border-green-500/20 text-green-400"
                      : "bg-red-500/10 border border-red-500/20 text-red-400"
                  }`}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  )}
                  <p className="text-sm">{submitStatus.message}</p>
                </div>
              )}
            </form>
          </div>

          {/* Contact Info & Availability */}
          <div
            ref={infoReveal.ref}
            className={`space-y-6 reveal reveal-right ${infoReveal.isVisible ? "revealed" : ""}`}
            style={{ transitionDelay: "400ms" }}
          >
            <div className="glass rounded-3xl p-8">
              <h3 className="text-xl font-semibold mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    target={item.label !== "Location" ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="contact-row flex items-center gap-4 p-4 rounded-xl hover:bg-surface group"
                  >
                    <div className="contact-icon-box w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">
                        {item.label}
                      </div>
                      <div className="font-medium">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Card */}
            <div className="glass rounded-3xl p-8 border border-primary/30 highlight-card">
              <div className="flex items-center gap-3 mb-4">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
                </span>
                <span className="font-medium">Currently Available</span>
              </div>
              <p className="text-muted-foreground text-sm">
                I'm currently open to new opportunities and exciting projects.
                Whether you need a full-time engineer or a freelance consultant,
                let's talk!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

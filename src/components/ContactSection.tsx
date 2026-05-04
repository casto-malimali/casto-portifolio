import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const subject = `Portfolio Contact from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    window.location.href = `mailto:castoraron255@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="relative section-padding">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[500px] w-[600px] -translate-x-1/2 rounded-full bg-primary/5 blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 font-display text-xs font-medium uppercase tracking-widest text-primary">
            Get in Touch
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Let's Build Something{" "}
            <span className="text-gradient">Amazing</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            Have a project in mind or looking for a developer who thinks in both
            code and pixels? I'd love to hear from you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 grid gap-6 sm:grid-cols-3"
        >
          <div className="group rounded-2xl border border-border bg-card p-6 text-left transition-all hover:border-primary/30 hover:shadow-[var(--shadow-glow)]">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Mail className="h-5 w-5" />
            </div>
            <h3 className="font-display text-sm font-semibold text-foreground">Email</h3>
            <p className="mt-1 text-sm text-muted-foreground break-all">castoraron255@gmail.com</p>
          </div>
          <div className="group rounded-2xl border border-border bg-card p-6 text-left transition-all hover:border-primary/30 hover:shadow-[var(--shadow-glow)]">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Phone className="h-5 w-5" />
            </div>
            <h3 className="font-display text-sm font-semibold text-foreground">Phone</h3>
            <p className="mt-1 text-sm text-muted-foreground">+255 684 694 982</p>
          </div>
          <div className="group rounded-2xl border border-border bg-card p-6 text-left transition-all hover:border-primary/30 hover:shadow-[var(--shadow-glow)]">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <MapPin className="h-5 w-5" />
            </div>
            <h3 className="font-display text-sm font-semibold text-foreground">Location</h3>
            <p className="mt-1 text-sm text-muted-foreground">Available Worldwide · Remote</p>
          </div>
        </motion.div>

        {/* Contact form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 rounded-2xl border border-border bg-card p-8 text-left"
          onSubmit={handleSubmit}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block font-display text-xs font-medium text-muted-foreground uppercase tracking-wider">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="w-full rounded-xl border border-border bg-muted px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/40 focus:outline-none focus:ring-1 focus:ring-primary/20 transition-colors"
              />
            </div>
            <div>
              <label className="mb-1.5 block font-display text-xs font-medium text-muted-foreground uppercase tracking-wider">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="you@example.com"
                className="w-full rounded-xl border border-border bg-muted px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/40 focus:outline-none focus:ring-1 focus:ring-primary/20 transition-colors"
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="mb-1.5 block font-display text-xs font-medium text-muted-foreground uppercase tracking-wider">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              placeholder="Tell me about your project..."
              className="w-full rounded-xl border border-border bg-muted px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/40 focus:outline-none focus:ring-1 focus:ring-primary/20 transition-colors resize-none"
            />
          </div>
          <button
            type="submit"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 font-display text-sm font-semibold text-primary-foreground transition-all hover:shadow-[var(--shadow-glow)]"
          >
            Send Message
            <Send className="h-4 w-4" />
          </button>
        </motion.form>

        {/* Social */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex items-center justify-center gap-4"
        >
          {[Github, Linkedin, Twitter].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-primary/40 hover:text-primary hover:bg-primary/5"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;

import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  X,
} from "lucide-react";
import { useToast } from "@/components/ToastProvider";

export const ContactSection = () => {
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch(
        "https://formsubmit.co/ajax/72a6e6979d9511189f85adaf2163c734",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      );

      const result = await res.json();

      if (result.success === "true") {
        toast({ title: "Message sent successfully!", type: "success" });
        form.reset();
      } else {
        toast({ title: "Something went wrong.", type: "error" });
      }
    } catch {
      toast({ title: "Network error. Try again later.", type: "error" });
    }
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          ese Get In Touch Let's talk! Reach out for projects, opportunities, or
          just to connect.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            n
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6 justify-center">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email </h4>
                  <a
                    href="mailto:julyanyto@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    julyanyto@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone </h4>
                  <a
                    href="tel:+573155395443"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +57 3155395443
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Colombia
                  </a>
                </div>
              </div>
            </div>
            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a href="https://linkedin.com/in/jquinteroco" target="_blank">
                  <Linkedin className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
                </a>
                <a href="">
                  <Facebook
                    className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors"
                    target="_blank"
                  />
                </a>
                <a href="">
                  <Instagram className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
                </a>
                <a
                  href="https://github.com/JnerdQ?tab=repositories"
                  target="_blank"
                >
                  <Github className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
                </a>
              </div>
            </div>
          </div>
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form
              onSubmit={handleSubmit}
              /*  action="https://formsubmit.co/72a6e6979d9511189f85adaf2163c734"
              method="POST" */
              className="space-y-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary transition-colors"
                  placeholder="Enter your name.."
                />
              </div>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary transition-colors"
                  placeholder="example@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary transition-colors"
                  placeholder="Hello, I would like to talk about..."
                />
              </div>
              <button
                type="submit"
                className="cosmic-button w-full items-center justify-center gap-2"
              >
                <Send className="inline-block mr-2 h-5 w-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

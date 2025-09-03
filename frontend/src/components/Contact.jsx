import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { FaEnvelope, FaPhone, FaCalendar } from "react-icons/fa";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const errors = [];
    if (!formData.name.trim()) errors.push("Name is required");
    if (!formData.email.trim()) {
      errors.push("Email is required");
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        errors.push("Please enter a valid email address");
      }
    }
    if (!formData.message.trim()) errors.push("Message is required");
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    const errors = validateForm();
    if (errors.length) {
      toast({
        title: "Validation Error",
        description: errors.join(", "),
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("http://localhost:8000/messages.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Success!",
          description: result.message,
        });
        setFormData({ name: "", email: "", project: "", message: "" });
      } else {
        toast({
          title: "Error",
          description: result.message,
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl lg:text-5xl font-bold mb-6 text-primaryText"
            style={{ fontFamily: "'Roboto', sans-serif" }}
          >
            Ready to Transform Your Business?
          </h2>
          <p
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            style={{ fontFamily: "'Roboto', sans-serif" }}
          >
            Let's discuss your project and turn your vision into reality
          </p>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto bg-primaryBg p-8 rounded-xl shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2 text-primaryText"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your full name"
                  autoComplete="name"
                  required
                  className="w-full bg-input border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent text-primaryText"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2 text-primaryText"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                  autoComplete="email"
                  required
                  className="w-full bg-input border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent text-primaryText"
                />
              </div>
            </div>

            {/* Project Type */}
            <div>
              <label
                htmlFor="project"
                className="block text-sm font-medium mb-2 text-primaryText"
              >
                Project Type
              </label>
              <select
                id="project"
                name="project"
                value={formData.project}
                onChange={handleInputChange}
                className="w-full bg-input border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent text-black"
              >
                <option value="">Select project type</option>
                <option value="web-app">Web Application</option>
                <option value="mobile-app">Mobile Application</option>
                <option value="mvp">MVP Development</option>
                <option value="consulting">Technical Consulting</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2 text-primaryText"
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell me about your project and goals..."
                autoComplete="off"
                required
                className="w-full bg-input border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent text-black"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-accent text-primaryBg py-4 rounded-lg font-semibold hover:bg-accent/90 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>

          {/* Contact Info */}
          <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="bg-accent/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <FaEnvelope className="text-accent w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-1 text-primaryText">Email</h3>
              <p className="text-muted-foreground text-sm">git stash
git pull origin main --rebase
git stash pop
@developer.com</p>
            </div>

            <div>
              <div className="bg-accent/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <FaPhone className="text-accent w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-1 text-primaryText">Phone</h3>
              <p className="text-muted-foreground text-sm">+1 (555) 123-4567</p>
            </div>

            <div>
              <div className="bg-accent/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <FaCalendar className="text-accent w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-1 text-primaryText">Schedule</h3>
              <p className="text-muted-foreground text-sm">
                Free 30-min consultation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

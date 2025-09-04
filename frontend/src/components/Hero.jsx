import { useState } from "react";

export default function Hero() {
  const [imgSrc, setImgSrc] = useState("assets/Picsaif.jpg");

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Text Section */}
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <h1
              className="text-5xl lg:text-7xl font-extrabold mb-6 font-sans"
              data-testid="hero-name"
            >
              <span className="text-foreground">Saif</span>
              <span className="text-primary"> Akhtar</span>
            </h1>

            <p
              className="text-2xl lg:text-3xl text-muted-foreground mb-8 font-light"
              data-testid="hero-tagline"
            >
              Helping Entrepreneurs
              <br />
              <span className="text-primary font-medium">Dreams Come True</span>
            </p>

            <p
              className="text-lg text-muted-foreground mb-8 max-w-2xl"
              data-testid="hero-description"
            >
              Full-stack developer specializing in modern web applications,
              turning innovative ideas into scalable digital solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={scrollToProjects}
                className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all transform hover:scale-105 shadow-md"
                data-testid="button-get-started"
              >
                <i className="fas fa-rocket mr-2"></i>
                Get Started
              </button>

              <button
                onClick={scrollToProjects}
                className="border border-border px-8 py-4 rounded-lg font-semibold hover:bg-muted hover:text-primary transition-all transform hover:scale-105"
                data-testid="button-view-portfolio"
              >
                <i className="fas fa-play mr-2"></i>
                View Portfolio
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2 flex justify-center">
            <img
              src={imgSrc}
              alt="Saif Developer - Professional headshot"
              onError={() =>
                setImgSrc("https://source.unsplash.com/400x400/?developer,code")
              }
              className="w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-primary shadow-2xl transition-transform hover:scale-105"
              data-testid="hero-profile-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

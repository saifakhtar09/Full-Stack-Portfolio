import { 
  FaCode, FaMobileAlt, FaCloud, FaRobot, FaPalette, 
  FaRocket, FaChartLine, FaTachometerAlt, FaShieldAlt, 
  FaExpandArrowsAlt, FaHeadset, FaJava 
} from "react-icons/fa";

export default function Services() {
  const services = [
    {
      id: 1,
      icon: <FaCode />,
      title: 'Full-Stack Development',
      description: 'Complete end-to-end applications with modern frontend and backend technologies.',
      features: [
        'React, Vite & Tailwind CSS Frontend',
        'Node.js, Express & MongoDB Backend',
        'Java & Spring Boot APIs',
        'REST & GraphQL Development',
        'Authentication & Security'
      ]
    },
    {
      id: 2,
      icon: <FaMobileAlt />,
      title: 'Responsive & Mobile-Ready',
      description: 'Seamless experiences across devices with responsive UI and cross-platform apps.',
      features: [
        'React Native Mobile Apps',
        'Pixel-Perfect Responsive Web',
        'Cross-Browser Optimization',
        'Performance Tuning'
      ]
    },
    {
      id: 3,
      icon: <FaCloud />,
      title: 'Cloud & Deployment',
      description: 'Scalable deployment pipelines for modern applications and startups.',
      features: [
        'AWS & Vercel Hosting',
        'Docker & Containerization',
        'CI/CD Pipeline Setup',
        'Monitoring & Scaling'
      ]
    },
    {
      id: 4,
      icon: <FaRobot />,
      title: 'AI-Powered Solutions',
      description: 'AI-driven features integrated into real-world applications.',
      features: [
        'Resume Analyzer with ATS Score',
        'Job Recommendation Engine',
        'OpenRouter AI Integration',
        'Predictive Dashboards'
      ]
    },
    {
      id: 5,
      icon: <FaPalette />,
      title: 'UI/UX Design',
      description: 'Modern and user-friendly designs for better engagement and conversions.',
      features: [
        'Wireframing & Prototyping',
        'Design Systems with Tailwind',
        'User-Centered Workflows',
        'Brand Identity & Styling'
      ]
    },
    {
      id: 6,
      icon: <FaRocket />,
      title: 'MVP & Startup Solutions',
      description: 'Helping entrepreneurs bring ideas to life with fast and scalable MVPs.',
      features: [
        'Rapid Prototyping',
        'Agile Development',
        'User Feedback Integration',
        'Market-Ready Launch'
      ]
    }
  ];

  const deliveryItems = [
    { icon: <FaTachometerAlt />, title: 'Fast Delivery', description: 'MVP in 30 days or less', color: 'bg-green-500/20 text-green-500' },
    { icon: <FaShieldAlt />, title: 'Quality Assurance', description: 'Bug-free, thoroughly tested code', color: 'bg-blue-500/20 text-blue-500' },
    { icon: <FaExpandArrowsAlt />, title: 'Scalable Solutions', description: 'Built for long-term growth', color: 'bg-purple-500/20 text-purple-500' },
    { icon: <FaHeadset />, title: 'Continuous Support', description: 'Reliable support & maintenance', color: 'bg-yellow-500/20 text-yellow-500' },
  ];

  return (
    <>
      {/* Services Section */}
      <section id="services" className="py-20 font-sans">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              My <span className="text-accent">Expertise</span>
            </h2>
            <p className="text-xl max-w-3xl mx-auto text-gray-300">
              Building intelligent, scalable, and user-focused applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(service => (
              <div
                key={service.id}
                className="bg-primaryBg/90 hover:bg-primaryBg/100 border border-gray-700 rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="bg-accent/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 hover:scale-110 transition-transform duration-300 text-accent text-3xl">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="mb-4 text-gray-300">{service.description}</p>
                <ul className="text-sm space-y-2">
                  {service.features.map((f, i) => (
                    <li key={i} className="hover:text-accent transition-colors duration-200">• {f}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Section */}
      <section className="py-20 font-sans">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              What I <span className="text-accent">Deliver</span>
            </h2>
            <p className="text-xl max-w-3xl mx-auto text-gray-300">
              Practical, high-performance solutions tailored for entrepreneurs & startups.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {deliveryItems.map((item, index) => (
              <div
                key={index}
                className="bg-primaryBg/90 hover:bg-primaryBg/100 border border-gray-700 rounded-2xl p-8 text-center shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className={`${item.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300 text-2xl`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

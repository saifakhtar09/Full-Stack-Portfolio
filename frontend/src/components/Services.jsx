import { FaCode, FaMobileAlt, FaCloud, FaPalette, FaRocket, FaChartLine, FaTachometerAlt, FaShieldAlt, FaExpandArrowsAlt, FaHeadset } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      id: 1,
      icon: <FaCode />,
      title: 'Web Development',
      description: 'Custom web applications built with modern frameworks and best practices',
      features: [
        'React & Vue.js Frontend',
        'Node.js & Python Backend',
        'Database Design & Optimization',
        'API Development & Integration'
      ]
    },
    {
      id: 2,
      icon: <FaMobileAlt />,
      title: 'Mobile Development',
      description: 'Cross-platform mobile apps that provide native-like user experience',
      features: [
        'React Native & Flutter',
        'iOS & Android Development',
        'App Store Optimization',
        'Push Notifications & Analytics'
      ]
    },
    {
      id: 3,
      icon: <FaCloud />,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and DevOps solutions for modern applications',
      features: [
        'AWS & Azure Deployment',
        'Docker & Kubernetes',
        'CI/CD Pipeline Setup',
        'Performance Monitoring'
      ]
    },
    {
      id: 4,
      icon: <FaPalette />,
      title: 'UI/UX Design',
      description: 'User-centered design that converts visitors into customers',
      features: [
        'User Research & Wireframing',
        'Responsive Design Systems',
        'Prototype & User Testing',
        'Brand Identity Design'
      ]
    },
    {
      id: 5,
      icon: <FaRocket />,
      title: 'MVP Development',
      description: 'Rapid prototyping and MVP development to validate your business idea',
      features: [
        'Product Strategy & Planning',
        'Agile Development Process',
        'User Feedback Integration',
        'Market Validation Support'
      ]
    },
    {
      id: 6,
      icon: <FaChartLine />,
      title: 'Consulting & Strategy',
      description: 'Technical consulting to help you make informed technology decisions',
      features: [
        'Technology Stack Selection',
        'Architecture Design Review',
        'Performance Optimization',
        'Team Training & Mentoring'
      ]
    }
  ];

  const deliveryItems = [
    { icon: <FaTachometerAlt />, title: 'Fast Delivery', description: 'MVP in 30 days or less', color: 'bg-green-500/20 text-green-500' },
    { icon: <FaShieldAlt />, title: 'Quality Assurance', description: 'Thoroughly tested code', color: 'bg-blue-500/20 text-blue-500' },
    { icon: <FaExpandArrowsAlt />, title: 'Scalable Solutions', description: 'Built for growth', color: 'bg-purple-500/20 text-purple-500' },
    { icon: <FaHeadset />, title: 'Ongoing Support', description: '24/7 technical support', color: 'bg-yellow-500/20 text-yellow-500' },
  ];

  return (
    <>
      {/* Services Section */}
      <section id="services" className="py-20 font-sans">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Full-Stack <span className="text-accent">Design Expertise</span>
            </h2>
            <p className="text-xl max-w-3xl mx-auto text-gray-300">
              Comprehensive development services to turn your vision into reality
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
              Results-driven solutions that help entrepreneurs succeed
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

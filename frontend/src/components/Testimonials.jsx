export default function Testimonials() {
  const testimonials = [
 {
  id: 1,
  name: "Sarah Saifson",
  role: "CEO, TechStart",
  image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200",
  rating: 5,
  text: "Saif transformed our startup idea into a scalable platform. His technical expertise and business understanding helped us secure our Series A funding."
},
    {
      id: 2,
      name: "Michael Chen",
      role: "Founder, InnovateLab",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200",
      rating: 5,
      text: "Working with Saif was a game-changer. He delivered our MVP in record time and helped us iterate based on user feedback. Highly recommended!"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "CTO, GrowthCo",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200",
      rating: 5,
      text: "Saif's full-stack expertise and attention to detail are exceptional. Our platform scales beautifully and our users love the experience."
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <i 
        key={i}
        className={`fas fa-star ${i < rating ? 'text-yellow-400' : 'text-gray-400'} transition-colors duration-300`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-card/30 font-sans">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-poppins">
            Client <span className="text-primary">Success Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-roboto">
            What entrepreneurs are saying about working with me
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative bg-gradient-to-br from-card/80 to-card/60 rounded-2xl p-8 shadow-xl hover:shadow-1xl transform transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              data-testid={`testimonial-card-${testimonial.id}`}
            >
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image}
                  alt={`${testimonial.name} - ${testimonial.role}`}
                  className="w-16 h-16 rounded-full object-cover border-2 border-primary mr-4"
                  data-testid={`testimonial-avatar-${testimonial.id}`}
                />
                <div>
                  <h4 className="font-semibold text-lg font-poppins" data-testid={`testimonial-name-${testimonial.id}`}>
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground font-roboto" data-testid={`testimonial-role-${testimonial.id}`}>
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <div className="flex mb-4" data-testid={`testimonial-rating-${testimonial.id}`}>
                {renderStars(testimonial.rating)}
              </div>
              <p className="text-muted-foreground font-roboto text-md" data-testid={`testimonial-text-${testimonial.id}`}>
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

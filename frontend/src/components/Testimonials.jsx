export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Product Manager, FinEdge",
      image:
        "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200",
      rating: 5,
      text: "Saif built a clean and scalable dashboard for our fintech app. He was quick to understand our requirements and suggested improvements that made the product more user-friendly. We received positive feedback from our first batch of users."
    },
    {
      id: 2,
      name: "James Miller",
      role: "Founder, EduVerse",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200",
      rating: 5,
      text: "Working with Saif was effortless. He developed our learning platform’s MVP within weeks and guided us on technical decisions that saved us time and money. His responsiveness and problem-solving skills stood out."
    },
    {
      id: 3,
      name: "Emily Rodrigue",
      role: "CTO, ShopEase",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200",
      rating: 5,
      text: "We hired Saif for our e-commerce project and he exceeded expectations. From setting up the backend APIs to designing a smooth shopping experience, everything was delivered on time. The site performance improved by 40% after his optimizations."
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <i
        key={i}
        className={`fas fa-star ${i < rating ? "text-yellow-400" : "text-gray-400"} transition-colors duration-300`}
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
            A few words from people I’ve worked with
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
                  <h4
                    className="font-semibold text-lg font-poppins"
                    data-testid={`testimonial-name-${testimonial.id}`}
                  >
                    {testimonial.name}
                  </h4>
                  <p
                    className="text-sm text-muted-foreground font-roboto"
                    data-testid={`testimonial-role-${testimonial.id}`}
                  >
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <div
                className="flex mb-4"
                data-testid={`testimonial-rating-${testimonial.id}`}
              >
                {renderStars(testimonial.rating)}
              </div>
              <p
                className="text-muted-foreground font-roboto text-md"
                data-testid={`testimonial-text-${testimonial.id}`}
              >
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Card, CardContent } from "./ui/card";
import { Star, Quote } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Johnson Enterprises",
      project: "Corporate Headquarters",
      rating: 5,
      text: "BuildCorp exceeded our expectations on every level. Their attention to detail and commitment to quality is unmatched. Our new headquarters was completed on time and within budget.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b55b?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      company: "Chen Family",
      project: "Custom Home Build",
      rating: 5,
      text: "Working with BuildCorp was a dream come true. They transformed our vision into reality and guided us through every step of the process. We couldn't be happier with our new home.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Jennifer Martinez",
      company: "TechStart Inc.",
      project: "Office Renovation",
      rating: 5,
      text: "The team at BuildCorp delivered an exceptional office renovation that perfectly reflects our company culture. Their professionalism and expertise made the entire process seamless.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }

  ];

  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">Client References</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Hear what our satisfied clients have to say 
            about their experience working with BuildCorp.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-orange-200 mb-4" />
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>

                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.company}</div>
                    <div className="text-sm text-orange-600">{testimonial.project}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-orange-50 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl mb-4">Ready to Join Our Satisfied Clients?</h3>
            <p className="text-gray-600 mb-6">
              Contact us today for a free consultation and quote for your construction project.
            </p>
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg transition-colors">
              Request Free Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
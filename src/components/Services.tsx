import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Building2, Home, Factory, Wrench, ClipboardCheck, Users } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Building2,
      title: "Commercial Construction",
      description: "Office buildings, retail spaces, and mixed-use developments built to the highest standards."
    },
    {
      icon: Home,
      title: "Residential Construction",
      description: "Custom homes, renovations, and multi-family housing projects tailored to your vision."
    },
    {
      icon: Factory,
      title: "Industrial Projects",
      description: "Manufacturing facilities, warehouses, and specialized industrial infrastructure."
    },
    {
      icon: Wrench,
      title: "Renovation & Remodeling",
      description: "Transform existing spaces with our expert renovation and remodeling services."
    },
    {
      icon: ClipboardCheck,
      title: "Project Management",
      description: "Comprehensive project oversight ensuring on-time and on-budget delivery."
    },
    {
      icon: Users,
      title: "Design-Build Services",
      description: "Integrated design and construction services for streamlined project execution."
    }
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From concept to completion, we offer comprehensive construction services 
            to meet all your building needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <service.icon className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
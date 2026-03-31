import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Projects() {
  const projects = [
    {
      title: "Skyline Commercial Complex",
      category: "Commercial",
      location: "Downtown District",
      image: "https://images.unsplash.com/photo-1568151769173-e7784208c098?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwYnVpbGRpbmclMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzU4NDc4MzczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "15-story mixed-use development featuring retail, office, and residential spaces.",
      year: "2023",
      value: "$45M"
    },
    {
      title: "Modern Family Residence",
      category: "Residential",
      location: "Suburbia Heights",
      image: "https://images.unsplash.com/photo-1580063665421-4c9cbe9ec11b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGhvdXNlJTIwY29uc3RydWN0aW9ufGVufDF8fHx8MTc1ODUwNDQyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Luxury custom home with sustainable features and smart home technology.",
      year: "2023",
      value: "$1.2M"
    },
    {
      title: "Industrial Manufacturing Plant",
      category: "Industrial",
      location: "Industrial Park East",
      image: "https://images.unsplash.com/photo-1593422146705-ea6965a1d7a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtb2Rlcm4lMjBjb25zdHJ1Y3Rpb24lMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzU4NTI1MzEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "State-of-the-art manufacturing facility with advanced automation systems.",
      year: "2022",
      value: "$28M"
    }
  ];

  return (
    <section id="projects" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">Our Featured Projects</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of successful projects that showcase our expertise 
            across residential, commercial, and industrial construction.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video relative">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-orange-600 text-white">
                    {project.category}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="space-y-2 text-sm text-gray-500">
                  <div className="flex justify-between">
                    <span>Location:</span>
                    <span>{project.location}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Completed:</span>
                    <span>{project.year}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Project Value:</span>
                    <span className="text-orange-600">{project.value}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Want to see more of our work?</p>
          <button className="text-orange-600 hover:text-orange-700 transition-colors">
            View Complete Portfolio →
          </button>
        </div>
      </div>
    </section>
  );
}
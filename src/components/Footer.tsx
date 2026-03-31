import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl text-orange-400 mb-4">BuildCorp</h3>
            <p className="text-gray-300 mb-4">
              Building excellence for over 25 years. Your trusted partner for 
              residential, commercial, and industrial construction projects.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-orange-400 transition-colors">Commercial Construction</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Residential Construction</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Industrial Projects</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Renovation & Remodeling</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Project Management</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-orange-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Our Team</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Safety</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Sustainability</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-300">
              <p>123 Construction Ave<br />Building City, BC 12345</p>
              <p>Phone: (555) 123-4567</p>
              <p>Email: info@buildcorp.com</p>
              <p className="text-orange-400">Emergency: (555) 999-9999</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 BuildCorp Construction. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400 mt-4 md:mt-0">
              <a href="#" className="hover:text-orange-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-orange-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-orange-400 transition-colors">Site Map</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
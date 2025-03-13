import { Star, Shield, Clock, ChevronRight, Award, Users, Building } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTooth } from '@fortawesome/free-solid-svg-icons';
import Appointment from './components/Appointments';
import Contact from './components/contactUs';
import Navbar from './components/Navbar';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[600px] bg-cover bg-center pt-16" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80")'
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative max-w-6xl mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-6 leading-tight">Your Smile, <br />Our Passion</h1>
            <p className="text-xl mb-8 max-w-2xl leading-relaxed">Experience world-class dental care with our team of experienced professionals. We're committed to giving you the perfect smile you deserve.</p>
            <a href="#appointment" className="inline-flex items-center bg-blue-600 text-white py-4 px-8 rounded-lg hover:bg-blue-700 transform hover:scale-[1.02] transition-all duration-200 text-lg font-medium">
              Book Appointment
              <ChevronRight className="ml-2" size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">About DentalCare</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Since 2000, DentalCare has been at the forefront of dental excellence, providing comprehensive care with a gentle touch. Our state-of-the-art facility combines advanced technology with compassionate service to ensure every patient receives the highest quality dental care.
              </p>
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">25+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">50k+</div>
                  <div className="text-gray-600">Happy Patients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                  <div className="text-gray-600">Specialists</div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Award className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Award-Winning Service</h3>
                    <p className="text-gray-600">Recognized for excellence in dental care</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Users className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Expert Team</h3>
                    <p className="text-gray-600">Highly qualified dental professionals</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Building className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Modern Facility</h3>
                    <p className="text-gray-600">State-of-the-art dental equipment</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80" 
                alt="Dental Office" 
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Clock className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Working Hours</p>
                    <p className="font-semibold">Mon - Fri: 9AM - 6PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center p-8 rounded-2xl hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FontAwesomeIcon icon={faTooth} className="text-blue-600" size="2x" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Expert Care</h3>
              <p className="text-gray-600 leading-relaxed">Our team of experienced dentists provides comprehensive dental care using the latest technology.</p>
            </div>
            <div className="text-center p-8 rounded-2xl hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="text-blue-600" size={36} />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Quality Service</h3>
              <p className="text-gray-600 leading-relaxed">We're committed to providing the highest quality dental care in a comfortable environment.</p>
            </div>
            <div className="text-center p-8 rounded-2xl hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="text-blue-600" size={36} />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Patient Safety</h3>
              <p className="text-gray-600 leading-relaxed">Your safety is our priority. We follow strict sterilization and safety protocols.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'General Dentistry',
              'Cosmetic Dentistry',
              'Orthodontics',
              'Dental Implants',
              'Teeth Whitening',
              'Emergency Care'
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <h3 className="text-2xl font-semibold mb-4">{service}</h3>
                <p className="text-gray-600 leading-relaxed">Professional care tailored to your needs with the latest dental technology.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment Section */}
      <section id="appointment" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Book an Appointment</h2>
          <Appointment />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Contact Us</h2>
          <Contact />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <FontAwesomeIcon icon={faTooth} className="h-8 w-8 text-blue-500" />
                <span className="text-2xl font-bold">DentalCare</span>
              </div>
              <p className="text-gray-400 leading-relaxed">Providing quality dental care since 2000</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Home</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors duration-200">About</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors duration-200">Services</a></li>
                <li><a href="#appointment" className="text-gray-400 hover:text-white transition-colors duration-200">Appointment</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-200">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6">Hours</h3>
              <ul className="space-y-4 text-gray-400">
                <li className="flex justify-between">
                  <span>Mon-Fri</span>
                  <span>9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday</span>
                  <span>9:00 AM - 2:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 DentalCare. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
import {
  ArrowRight,
  Clock,
  Facebook,
  Globe,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Package,
  Phone,
  Shield,
  Truck,
  Twitter,
} from 'lucide-react';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer className="bg-background text-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-primary p-2 rounded-lg">
                <Package className="w-8 h-8 " />
              </div>
              <div>
                <h3 className="text-xl font-bold">DeliveryPro</h3>
                <p className="text-sm ">Fast & Secure</p>
              </div>
            </div>
            <p className=" leading-relaxed">
              Your trusted partner for fast, secure, and reliable parcel
              delivery services worldwide. We connect people and businesses
              across the globe.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className=" p-3 rounded-lg hover:bg-primary transition-all duration-300 transform hover:-translate-y-1"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className=" p-3 rounded-lg hover:bg-primary transition-all duration-300 transform hover:-translate-y-1"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className=" p-3 rounded-lg hover:bg-primary transition-all duration-300 transform hover:-translate-y-1"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className=" p-3 rounded-lg hover:bg-primary transition-all duration-300 transform hover:-translate-y-1"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold  border-b border-primary pb-2">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className=" hover:text-primary transition-colors duration-300 flex items-center gap-2"
                >
                  <ArrowRight className="w-4 h-4" /> About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className=" hover:text-primary transition-colors duration-300 flex items-center gap-2"
                >
                  <ArrowRight className="w-4 h-4" /> Our Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className=" hover:text-primary transition-colors duration-300 flex items-center gap-2"
                >
                  <ArrowRight className="w-4 h-4" /> Track Package
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className=" hover:text-primary transition-colors duration-300 flex items-center gap-2"
                >
                  <ArrowRight className="w-4 h-4" /> Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className=" hover:text-primary transition-colors duration-300 flex items-center gap-2"
                >
                  <ArrowRight className="w-4 h-4" /> Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className=" hover:text-primary transition-colors duration-300 flex items-center gap-2"
                >
                  <ArrowRight className="w-4 h-4" /> Support
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold  border-b border-primary pb-2">
              Our Services
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className=" hover:text-primary transition-colors duration-300 flex items-center gap-2"
                >
                  <Truck className="w-4 h-4" /> Express Delivery
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className=" hover:text-primary transition-colors duration-300 flex items-center gap-2"
                >
                  <Package className="w-4 h-4" /> Standard Shipping
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className=" hover:text-primary transition-colors duration-300 flex items-center gap-2"
                >
                  <Globe className="w-4 h-4" /> International
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary transition-colors duration-300 flex items-center gap-2"
                >
                  <Shield className="w-4 h-4" /> Secure Transit
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary transition-colors duration-300 flex items-center gap-2"
                >
                  <Clock className="w-4 h-4" /> Same Day
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary transition-colors duration-300 flex items-center gap-2"
                >
                  <MapPin className="w-4 h-4" /> Local Delivery
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold border-b border-primary pb-2">
              Contact Info
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="">123 Business Avenue</p>
                  <p className="">New York, NY 10001</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p >1-800-DELIVERY</p>
                  <p className="text-sm ">24/7 Support</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p>support@deliveryapp.com</p>
                  <p className="text-sm">Customer Service</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p>Mon - Sun</p>
                  <p className="text-sm">24/7 Operations</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className=" rounded-2xl p-8">
            <div className="text-center mb-6">
              <h4 className="text-2xl font-bold text-white mb-2">
                Stay Updated
              </h4>
              <p>
                Subscribe to our newsletter for shipping tips, updates, and
                exclusive offers.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-700  placeholder-gray-400 focus:outline-none focus:border-primary"
              />
              <button className=" px-8 py-3 rounded-lg font-semibold hover:bg-primary transition-colors duration-300 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className=" border-t border-gray-800">
        <div className="container mx-auto px-4 py-5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className=" text-sm">
              © 2024 DeliveryPro. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-6 text-sm">
              <a
                href="#"
                className="hover:text-primary transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-primary transition-colors duration-300"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="hover:text-primary transition-colors duration-300"
              >
                Cookie Policy
              </a>
              <a
                href="#"
                className="hover:text-primary transition-colors duration-300"
              >
                Sitemap
              </a>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Globe className="w-4 h-4" />
              <span>English (US)</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
export default Footer;

import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";


const Footer = () => {
    return (
     <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6  grid lg:grid-cols-4 grid-cols-2 gap-10">

        {/* Logo & About */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-white">IELTS Academy</h2>
          <p className="mt-4 text-gray-400 leading-relaxed text-sm">
            Helping students achieve their dream IELTS score with expert coaching, modern techniques, 
            and personalized practice sessions.
          </p>
        </div>

        {/* Services */}
        <div className="flex-1">
          <h6 className="text-lg font-semibold text-white mb-4">Services</h6>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-500 transition">Speaking Practice</a></li>
            <li><a href="#" className="hover:text-blue-500 transition">Mock Tests</a></li>
            <li><a href="#" className="hover:text-blue-500 transition">AI Band Score</a></li>
            <li><a href="#" className="hover:text-blue-500 transition">Writing & Grammar</a></li>
          </ul>
        </div>

        {/* Company */}
        <div className="flex-1">
          <h6 className="text-lg font-semibold text-white mb-4">Company</h6>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-500 transition">About us</a></li>
            <li><a href="#" className="hover:text-blue-500 transition">Contact</a></li>
            <li><a href="#" className="hover:text-blue-500 transition">Jobs</a></li>
            <li><a href="#" className="hover:text-blue-500 transition">Press kit</a></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div className="flex-1">
          <h6 className="text-lg font-semibold text-white mb-4">Contact</h6>
          <p>📍 Dhaka, Bangladesh</p>
          <p>📞 +880 1234-567890</p>
          <p>📧 info@ieltsacademy.com</p>

          <div className="flex space-x-4 mt-4">
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-sky-500 transition">
              <FaTwitter />
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-pink-500 transition">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} IELTS Academy. All rights reserved.
      </div>
    </footer>




    );
};

export default Footer;
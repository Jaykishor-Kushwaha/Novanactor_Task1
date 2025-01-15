import { Link } from "react-router-dom";
const Footer = () => {
    return (
      <footer className="bg-gray-900 text-gray-300 py-6">
  <div className="container mx-auto text-center">
    <ul className="flex justify-center space-x-6 mb-4">
      <li>
        <Link to="/" className="hover:text-emerald-400 transition duration-200">Home</Link>
      </li>
      <li>
        <Link to="/about" className="hover:text-emerald-400 transition duration-200">About</Link>
      </li>
      <li>
        <Link to="/contact" className="hover:text-emerald-400 transition duration-200">Contact</Link>
      </li>
    </ul>
    <p className="text-sm">&copy; 2025 Jaykishor Kushwaha. All rights reserved.</p>
  </div>
</footer>

    

    );
  };
  
  export default Footer;
  
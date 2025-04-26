// src/components/Footer.jsx
function Footer() {
    return (
      <footer className="bg-gray-900 text-gray-300 py-10">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">About Us</h3>
            <p className="text-sm leading-6">
              Our Employee Management System empowers businesses to manage employee records, attendance, payroll, and much more seamlessly and efficiently.
            </p>
          </div>
  
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
              <li><a href="/profile" className="hover:text-white">Profile</a></li>
              <li><a href="/checkout" className="hover:text-white">Checkout</a></li>
            </ul>
          </div>
  
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Contact Us</h3>
            <p className="text-sm">Email: support@emsystem.com</p>
            <p className="text-sm mt-2">Phone: +1 234 567 890</p>
            <p className="text-sm mt-2">Location: New York, USA</p>
          </div>
        </div>
  
        {/* Bottom Line */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Employee Management System. All rights reserved.
        </div>
      </footer>
    );
  }
  
  export default Footer;
  
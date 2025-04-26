// src/components/HeroSection.jsx
function HeroSection() {
    return (
      <section className="bg-gray-100 py-20 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
          
          {/* Left Content */}
          <div className="text-center md:text-left md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-5xl font-bold text-gray-800 mb-4">
              Smart Employee Management System
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Effortlessly manage your company’s employees, attendance, payroll, and more — all in one place.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300">
              Get Started
            </button>
          </div>
  
          {/* Right Image/Icon */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/891/891462.png"
              alt="Employee Management"
              className="w-80 h-80 object-contain"
            />
          </div>
        </div>
      </section>
    );
  }
  
  export default HeroSection;
  
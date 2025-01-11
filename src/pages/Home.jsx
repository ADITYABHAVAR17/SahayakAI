import React from "react";
import { ToastContainer } from "react-toastify";
import { motion } from "framer-motion";
import { ArrowRight, Github, Twitter } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600">
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full opacity-20 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 100 + 50}px`,
                height: `${Math.random() * 100 + 50}px`,
                backgroundColor: "white",
                animation: `pulse ${Math.random() * 3 + 2}s infinite`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Welcome to MyApp</h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Your one-stop solution for managing your digital presence with style and efficiency
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row justify-center"
          >
            <button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold flex items-center">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold flex items-center">
              Learn More
            </button>
          </motion.div>

          {/* Feature cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {[
              { title: "Simple", description: "Easy to use interface for all your needs" },
              { title: "Secure", description: "Enterprise-grade security built-in" },
              { title: "Fast", description: "Lightning-quick performance" },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-left hover:bg-white/20 transition-all"
              >
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-blue-100">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-12 flex justify-center space-x-4"
          >
            <a href="#" className="text-white hover:text-blue-200 transition-colors">
              <Github className="h-6 w-6" />
            </a>
            <a href="#" className="text-white hover:text-blue-200 transition-colors">
              <Twitter className="h-6 w-6" />
            </a>
          </motion.div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Home;

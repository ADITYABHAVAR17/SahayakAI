    // import React, { useState, useEffect } from 'react';
    // import { ToastContainer } from 'react-toastify';
    // import { 
    // ArrowRight, Shield, Users, FileCheck, 
    // Languages, PhoneCall, Search, Clock,
    // ChevronRight, MessageSquare
    // } from 'lucide-react';

    // // Sample data for schemes
    // const schemes = [
    // {
    //     id: 1,
    //     title: "PM Kisan Samman Nidhi",
    //     category: "Agriculture",
    //     beneficiaries: "12.5M+",
    //     eligibility: "Small and marginal farmers",
    //     icon: "🌾"
    // },
    // {
    //     id: 2,
    //     title: "Pradhan Mantri Awas Yojana",
    //     category: "Housing",
    //     beneficiaries: "10M+",
    //     eligibility: "Low-income families",
    //     icon: "🏠"
    // },
    // {
    //     id: 3,
    //     title: "Sukanya Samriddhi Yojana",
    //     category: "Education",
    //     beneficiaries: "5M+",
    //     eligibility: "Girl child below 10 years",
    //     icon: "📚"
    // }
    // ];

    // const features = [
    // {
    //     title: "Multi-Language Support",
    //     description: "Access in 10+ regional languages",
    //     icon: Languages
    // },
    // {
    //     title: "24/7 Support",
    //     description: "Get help anytime via phone or chat",
    //     icon: PhoneCall
    // },
    // {
    //     title: "Quick Verification",
    //     description: "AI-powered document verification",
    //     icon: FileCheck
    // },
    // {
    //     title: "Smart Eligibility Check",
    //     description: "Instant scheme recommendations",
    //     icon: Search
    // }
    // ];

    // // Enhanced Button Component
    // const Button = ({ children, className, size = 'base', variant = 'default', ...props }) => {
    // const baseClasses = 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300';
    // const sizeClasses = size === 'lg' ? 'py-4 px-8 text-lg' : 'py-3 px-6 text-base';
    // const variantClasses = variant === 'outline'
    //     ? 'border-2 border-current hover:bg-white/10'
    //     : 'bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-indigo-700 hover:to-blue-600 text-white';

    // return (
    //     <button
    //     className={`${baseClasses} ${sizeClasses} ${variantClasses} ${className}`}
    //     {...props}
    //     >
    //     {children}
    //     </button>
    // );
    // };

    // // Scheme Card Component
    // const SchemeCard = ({ scheme }) => {
    // return (
    //     <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-xl hover:transform hover:scale-105 transition-all duration-300">
    //     <div className="text-3xl mb-4">{scheme.icon}</div>
    //     <h3 className="text-xl font-bold text-gray-800 mb-2">{scheme.title}</h3>
    //     <p className="text-gray-600 mb-4">{scheme.eligibility}</p>
    //     <div className="flex justify-between items-center">
    //         <span className="text-blue-600 font-semibold">{scheme.beneficiaries} users</span>
    //         <Button className="text-sm px-4 py-2">
    //         Check Eligibility <ChevronRight className="ml-2 h-4 w-4" />
    //         </Button>
    //     </div>
    //     </div>
    // );
    // };

    // const LandingPage = () => {
    // const [currentLanguage, setCurrentLanguage] = useState('English');
    // const [mounted, setMounted] = useState(false);

    // useEffect(() => {
    //     setMounted(true);
    // }, []);

    // return (
    //     <div className="min-h-screen relative bg-gradient-to-br from-indigo-900 via-blue-800 to-blue-600">
    //     {/* Animated Background */}
    //     <div className="absolute inset-0 overflow-hidden">
    //         <div className="absolute w-full h-full">
    //         {[...Array(20)].map((_, i) => (
    //             <div
    //             key={i}
    //             className="absolute rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"
    //             style={{
    //                 left: `${Math.random() * 100}%`,
    //                 top: `${Math.random() * 100}%`,
    //                 width: `${Math.random() * 300 + 50}px`,
    //                 height: `${Math.random() * 300 + 50}px`,
    //                 backgroundColor: ['#4f46e5', '#06b6d4', '#3b82f6'][i % 3],
    //                 animation: `pulse ${Math.random() * 3 + 2}s infinite`,
    //                 animationDelay: `${i * 0.2}s`
    //             }}
    //             />
    //         ))}
    //         </div>
    //     </div>

    //     {/* Content */}
    //     <div className="relative">
    //         {/* Header */}
    //         <header className="py-4 px-6 bg-white/10 backdrop-blur-sm">
    //         <div className="max-w-7xl mx-auto flex justify-between items-center">
    //             <h1 className="text-2xl font-bold text-white">SuvidhaAI</h1>
    //             <div className="flex items-center gap-4">
    //             <select 
    //                 className="bg-transparent text-white border border-white/30 rounded-lg px-3 py-1"
    //                 value={currentLanguage}
    //                 onChange={(e) => setCurrentLanguage(e.target.value)}
    //             >
    //                 <option value="English">English</option>
    //                 <option value="हिंदी">हिंदी</option>
    //                 <option value="मराठी">मराठी</option>
    //             </select>
    //             <Button variant="outline" className="text-white">
    //                 Login <ArrowRight className="ml-2 h-4 w-4" />
    //             </Button>
    //             </div>
    //         </div>
    //         </header>

    //         {/* Hero Section */}
    //         <section className="py-20 px-6">
    //         <div className="max-w-7xl mx-auto text-center">
    //             <div className="mb-12">
    //             <h2 className="text-5xl font-bold text-white mb-6">
    //                 Access Government Schemes Easily
    //             </h2>
    //             <p className="text-xl text-blue-100 mb-8">
    //                 Discover and apply for government schemes that match your profile. 
    //                 No more paperwork hassles.
    //             </p>
    //             <div className="flex flex-col sm:flex-row justify-center gap-4">
    //                 <Button size="lg" className="shadow-lg hover:shadow-xl">
    //                 Start Now <ArrowRight className="ml-2 h-5 w-5" />
    //                 </Button>
    //                 <Button variant="outline" size="lg" className="text-white">
    //                 <MessageSquare className="mr-2 h-5 w-5" /> Get Help
    //                 </Button>
    //             </div>
    //             </div>
    //         </div>
    //         </section>

    //         {/* Schemes Section */}
    //         <section className="py-16 px-6 bg-white/5 backdrop-blur-sm">
    //         <div className="max-w-7xl mx-auto">
    //             <h2 className="text-3xl font-bold text-white mb-12 text-center">
    //             Popular Schemes
    //             </h2>
    //             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    //             {schemes.map(scheme => (
    //                 <SchemeCard key={scheme.id} scheme={scheme} />
    //             ))}
    //             </div>
    //         </div>
    //         </section>

    //         {/* Features Grid */}
    //         <section className="py-16 px-6">
    //         <div className="max-w-7xl mx-auto">
    //             <h2 className="text-3xl font-bold text-white mb-12 text-center">
    //             Why Choose SuvidhaAI?
    //             </h2>
    //             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    //             {features.map((feature, index) => (
    //                 <div 
    //                 key={index}
    //                 className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-white hover:bg-white/20 transition-all duration-300"
    //                 >
    //                 <feature.icon className="h-12 w-12 mb-4 text-blue-300" />
    //                 <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
    //                 <p className="text-blue-100">{feature.description}</p>
    //                 </div>
    //             ))}
    //             </div>
    //         </div>
    //         </section>
    //     </div>

    //     <ToastContainer />
    //     </div>
    // );
    // };

    // export default LandingPage;



    import React, { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { 
  ArrowRight, Shield, Users, FileCheck, 
  Languages, PhoneCall, Search, Clock,
  ChevronRight, MessageSquare, Star,
  Award, ThumbsUp, Activity
} from 'lucide-react';

// Sample data for schemes
const schemes = [
  {
    id: 1,
    title: "PM Kisan Samman Nidhi",
    category: "Agriculture",
    beneficiaries: "12.5M+",
    eligibility: "Small and marginal farmers",
    icon: "🌾"
  },
  {
    id: 2,
    title: "Pradhan Mantri Awas Yojana",
    category: "Housing",
    beneficiaries: "10M+",
    eligibility: "Low-income families",
    icon: "🏠"
  },
  {
    id: 3,
    title: "Sukanya Samriddhi Yojana",
    category: "Education",
    beneficiaries: "5M+",
    eligibility: "Girl child below 10 years",
    icon: "📚"
  }
];

const features = [
  {
    title: "Multi-Language Support",
    description: "Access in 10+ regional languages",
    icon: Languages
  },
  {
    title: "24/7 Support",
    description: "Get help anytime via phone or chat",
    icon: PhoneCall
  },
  {
    title: "Quick Verification",
    description: "AI-powered document verification",
    icon: FileCheck
  },
  {
    title: "Smart Eligibility Check",
    description: "Instant scheme recommendations",
    icon: Search
  }
];

const testimonials = [
  {
    name: "Rajesh Kumar",
    location: "Bihar",
    comment: "SuvidhaAI helped me access PM Kisan benefits within days!",
    rating: 5,
    avatar: "/api/placeholder/48/48"
  },
  {
    name: "Priya Sharma",
    location: "Maharashtra",
    comment: "The multi-language support made everything so easy to understand.",
    rating: 5,
    avatar: "/api/placeholder/48/48"
  },
  {
    name: "Mohammed Ali",
    location: "Karnataka",
    comment: "Quick verification saved me multiple trips to offices.",
    rating: 4,
    avatar: "/api/placeholder/48/48"
  }
];

const stats = [
  { label: "Active Users", value: "1M+", icon: Users },
  { label: "Success Rate", value: "95%", icon: ThumbsUp },
  { label: "Schemes Available", value: "100+", icon: Award },
  { label: "Processing Time", value: "48hrs", icon: Activity }
];

// Animated Background Component
const AnimatedBackground = () => (
  <div className="fixed inset-0 -z-10">
    {/* Animated Gradient Background */}
    <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-blue-800 to-blue-600 animate-gradient" />
    
    {/* Floating Orbs */}
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(8)].map((_, i) => (
        <div
          key={`orb-${i}`}
          className="absolute rounded-full mix-blend-multiply animate-float"
          style={{
            width: `${Math.random() * 400 + 200}px`,
            height: `${Math.random() * 400 + 200}px`,
            background: `radial-gradient(circle at center, 
              ${['#4f46e5', '#06b6d4', '#3b82f6', '#8b5cf6'][i % 4]}aa,
              transparent)`,
            left: `${(i * 25) % 100}%`,
            top: `${Math.random() * 100}%`,
            animationDuration: `${20 + i * 5}s`,
            animationDelay: `${i * -3}s`
          }}
        />
      ))}
    </div>

    {/* Animated Grid */}
    <div 
      className="absolute inset-0 opacity-20"
      style={{
        backgroundImage: `
          linear-gradient(to right, #ffffff 1px, transparent 1px),
          linear-gradient(to bottom, #ffffff 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
        animation: 'moveGrid 20s linear infinite'
      }}
    />

    {/* Floating Particles */}
    {[...Array(30)].map((_, i) => (
      <div
        key={`particle-${i}`}
        className="absolute w-1 h-1 bg-white rounded-full animate-particle"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          opacity: Math.random() * 0.5 + 0.2,
          animationDuration: `${Math.random() * 10 + 10}s`,
          animationDelay: `${Math.random() * -10}s`
        }}
      />
    ))}
  </div>
);

// Enhanced Button Component
const Button = ({ children, className, size = 'base', variant = 'default', ...props }) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300';
  const sizeClasses = size === 'lg' ? 'py-4 px-8 text-lg' : 'py-3 px-6 text-base';
  const variantClasses = variant === 'outline'
    ? 'border-2 border-current hover:bg-white/10'
    : 'bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-indigo-700 hover:to-blue-600 text-white';

  return (
    <button
      className={`${baseClasses} ${sizeClasses} ${variantClasses} ${className} hover:scale-105`}
      {...props}
    >
      {children}
    </button>
  );
};

// Scheme Card Component
const SchemeCard = ({ scheme }) => (
  <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-xl hover:scale-105 transition-all duration-300">
    <div className="text-3xl mb-4 animate-bounce">{scheme.icon}</div>
    <h3 className="text-xl font-bold text-gray-800 mb-2">{scheme.title}</h3>
    <p className="text-gray-600 mb-4">{scheme.eligibility}</p>
    <div className="flex justify-between items-center">
      <span className="text-blue-600 font-semibold">{scheme.beneficiaries} users</span>
      <Button className="text-sm px-4 py-2">
        Check Eligibility <ChevronRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  </div>
);

// Testimonial Card Component
const TestimonialCard = ({ testimonial }) => (
  <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
    <div className="flex items-center mb-4">
      <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
      <div>
        <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
        <p className="text-gray-600 text-sm">{testimonial.location}</p>
      </div>
    </div>
    <p className="text-gray-700 mb-4">{testimonial.comment}</p>
    <div className="flex text-yellow-400">
      {[...Array(testimonial.rating)].map((_, i) => (
        <Star key={i} className="h-5 w-5 fill-current" />
      ))}
    </div>
  </div>
);

// Global Styles
const GlobalStyles = () => (
  <style jsx global>{`
    @keyframes moveGrid {
      0% { transform: translate(0, 0); }
      100% { transform: translate(50px, 50px); }
    }

    @keyframes float {
      0%, 100% { transform: translate(0, 0) rotate(0deg); }
      25% { transform: translate(50px, -50px) rotate(90deg); }
      50% { transform: translate(-25px, 25px) rotate(180deg); }
      75% { transform: translate(-50px, -25px) rotate(270deg); }
    }

    @keyframes particle {
      0% { transform: translate(0, 0) scale(1); }
      50% { transform: translate(100px, -100px) scale(1.5); }
      100% { transform: translate(0, 0) scale(1); }
    }

    @keyframes gradient {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }

    .animate-float {
      animation: float linear infinite;
    }

    .animate-particle {
      animation: particle linear infinite;
    }

    .animate-gradient {
      background-size: 400% 400%;
      animation: gradient 15s ease infinite;
    }

    .animate-fadeIn {
      animation: fadeIn 1s ease-out forwards;
    }

    .animate-slideUp {
      animation: slideUp 0.8s ease-out forwards;
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    @keyframes slideUp {
      from {
        transform: translateY(20px);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }
  `}</style>
);

// Main Landing Page Component
const LandingPage = () => {
  const [currentLanguage, setCurrentLanguage] = useState('English');

  return (
    <>
      <GlobalStyles />
      <div className="min-h-screen relative">
        <AnimatedBackground />
        
        {/* Header */}
        <header className="py-4 px-6 bg-white/5 backdrop-blur-md sticky top-0 z-50">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold text-white hover:scale-105 transition-transform">
              SuvidhaAI
            </h1>
            <div className="flex items-center gap-4">
              <select 
                className="bg-transparent text-white border border-white/30 rounded-lg px-3 py-1 hover:border-white/50 transition-colors"
                value={currentLanguage}
                onChange={(e) => setCurrentLanguage(e.target.value)}
              >
                <option value="English">English</option>
                <option value="हिंदी">हिंदी</option>
                <option value="मराठी">मराठी</option>
              </select>
              <Button variant="outline" className="text-white" link="/login">
                Login <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-12 animate-fadeIn">
              <h2 className="text-6xl font-bold text-white mb-6 animate-slideUp">
                Access Government Schemes Easily
              </h2>
              <p className="text-xl text-blue-100 mb-8 animate-slideUp delay-100">
                Discover and apply for government schemes that match your profile. 
                No more paperwork hassles.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 animate-slideUp delay-200">
                <Button size="lg" className="shadow-lg hover:shadow-xl">
                  Start Now <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="text-white">
                  <MessageSquare className="mr-2 h-5 w-5" /> Get Help
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 px-6 bg-white/5 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 hover:scale-105 transition-all duration-300">
                  <stat.icon className="h-12 w-12 mx-auto mb-4 text-blue-300" />
                  <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-blue-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Schemes Section */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Popular Schemes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {schemes.map((scheme, index) => (
                <div key={scheme.id} className="animate-fadeIn" style={{ animationDelay: `${index * 0.2}s` }}>
                  <SchemeCard scheme={scheme} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-6 bg-white/5 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">    
                  Why Choose SuvidhaAI?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {features.map((feature, index) => (
                    <div 
                      key={index}
                      className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-white hover:bg-white/20 transition-all duration-300 hover:transform hover:scale-105"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      <feature.icon className="h-12 w-12 mb-4 text-blue-300" />
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-blue-100">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
    
            {/* Testimonials Section (New) */}
            <section className="py-16 px-6 bg-white/5 backdrop-blur-sm">
              <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-white mb-12 text-center">
                  What Our Users Say
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="animate-fadeIn" style={{ animationDelay: `${index * 0.2}s` }}>
                      <TestimonialCard testimonial={testimonial} />
                    </div>
                  ))}
                </div>
              </div>
            </section>
    
            {/* Footer */}
            <footer className="py-12 px-6 bg-white/10 backdrop-blur-sm">
              <div className="max-w-7xl mx-auto text-center text-white">
                <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="mb-8">Join millions of Indians already benefiting from government schemes</p>
                <Button size="lg"  link="/register" className="shadow-lg hover:shadow-xl">
                  Create Account <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </footer>
          </div>
    
          {/* <ToastContainer /> */}
        </>
      );
    };
    
    export default LandingPage;
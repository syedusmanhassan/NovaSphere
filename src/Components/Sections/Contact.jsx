import React, { useState } from 'react';

const ContactPreview = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    budget: "5000",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate sending
    setTimeout(() => {
      setLoading(false);
      setForm({ name: "", email: "", phone: "", budget: "5000", message: "" });
    }, 1500);
  };

  const processSteps = [
    {
      number: 1,
      title: "Discovery Meeting",
      description: "We initiate the project with a thorough meeting to understand your vision and needs. This ensures that we align our goals and expectations right from the start."
    },
    {
      number: 2,
      title: "Requirements & Planning",
      description: "Our team will collect all requirements for your project, and if needed, we will sign an NDA to ensure the highest level of privacy and security for your project."
    },
    {
      number: 3,
      title: "Proposal & Roadmap",
      description: "Following the requirements gathering, we present a detailed proposal outlining our approach and solutions. This document serves as a roadmap for the project's success."
    }
  ];

  return (
    <div className="bg-black text-white p-6 font-sans md:min-h-[70%] min-h-screen   border-t-purple-700 border-t-1">
      <div className="max-w-6xl mx-auto py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-2">Let's move forward</h1>
          <p className="text-gray-400">Fill in this form or send us an e-mail</p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Side - Contact Form */}
          <div className="w-full lg:w-7/12">
            <div className="border border-gray-700 bg-gray-900 rounded-xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1" htmlFor="name">Name*</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1" htmlFor="email">Email*</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Your email address"
                    className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1" htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                    className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1" htmlFor="budget">
                    Budget: ${form.budget}
                  </label>
                  <input
                    type="range"
                    id="budget"
                    name="budget"
                    min="1000"
                    max="50000"
                    step="1000"
                    value={form.budget}
                    onChange={handleChange}
                    className="w-full h-2 bg-gray-700 rounded-lg  cursor-pointer"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1" htmlFor="message">Project Description</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project"
                    rows="4"
                    className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    required
                  />
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-purple-700 hover:bg-purple-600 text-white rounded-md py-3 px-4 transition-colors flex items-center justify-center gap-2 group relative overflow-hidden"
                >
                  <div className="absolute inset-0 w-0 bg-white rounded-md transform group-hover:w-full transition-all duration-300 opacity-20"></div>
                  <span className="relative z-10">{loading ? "Sending..." : "ESTIMATE PROJECT"}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 relative z-10" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
          
          {/* Right Side - Process Steps */}
          <div className="w-full lg:w-7/12 bg-gray-900 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-white mb-8">What's Next?</h2>
            
            <div className="space-y-8">
              {processSteps.map((step) => (
                <div key={step.number} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-purple-700 rounded-full flex items-center justify-center text-white font-medium">
                      {step.number}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-purple-300 mb-1">{step.title}</h3>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10 border-t border-gray-700 pt-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-purple-900 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-300" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a8 8 0 01-3.757 6.757 1 1 0 11-1.087-1.678A6 6 0 0014.243 5.757z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-300">Ready to elevate your digital presence? Let's create something exceptional together.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPreview;
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-[#9B1C1C] text-white py-10 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto text-center space-y-3 sm:space-y-4">
          <motion.h1
            whileTap={{
              textShadow: [
                "0 0 8px rgba(255,255,255,0.3)",
                "0 0 12px rgba(255,255,255,0.5)",
                "0 0 16px rgba(255,255,255,0.7)"
              ],
              transition: { duration: 0.3, repeat: Infinity, repeatType: "reverse" }
            }}
            className="text-2xl sm:text-3xl md:text-4xl font-semibold cursor-default"
          >
            About Our Placement Cell
          </motion.h1>

          <motion.p
            whileTap={{
              textShadow: [
                "0 0 8px rgba(255,255,255,0.3)",
                "0 0 12px rgba(255,255,255,0.5)",
                "0 0 16px rgba(255,255,255,0.7)"
              ],
              transition: { duration: 0.3, repeat: Infinity, repeatType: "reverse" }
            }}
            className="text-base sm:text-lg md:text-xl cursor-default px-2"
          >
            Bridging the gap between academia and industry since 2010
          </motion.p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <motion.div
            className="md:w-1/2"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">
              Our Mission
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              The Training and Placement Cell of our college is dedicated to empowering
              students with the skills, knowledge, and opportunities needed to launch
              successful careers.
            </p>
          </motion.div>

          <motion.div
            className="md:w-1/2"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
              alt="Students in discussion"
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </div>

      {/* Objectives Section */}
      <div className="bg-gray-100 py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8 sm:mb-12">
            Key Objectives
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                icon: "🎓",
                title: "Career Readiness",
                description: "Prepare students through training programs, workshops, and mock interviews"
              },
              {
                icon: "🤝",
                title: "Industry Partnerships",
                description: "Develop strong relationships with corporate recruiters"
              },
              {
                icon: "📈",
                title: "Placement Success",
                description: "Facilitate campus recruitment drives and internships"
              },
              {
                icon: "💼",
                title: "Professional Growth",
                description: "Enhance students' employability through skill development"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="relative bg-white p-5 sm:p-6 rounded-lg shadow-md overflow-hidden"
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                whileTap={{ y: -5 }}
                transition={{ duration: 0.3 }}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
              >
                <div className="text-3xl sm:text-4xl mb-3">{item.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold mb-1 text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">{item.description}</p>
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-[#9B1C1C]"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
       <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center text-[#9B1C1C] mb-8 sm:mb-12">
          Our Team
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {[
            {
              name: "Dr. Rajesh Kumar",
              role: "Placement Director",
              contact: "director@example.com",
              phone: "+91 9876543210"
            },
            {
              name: "Er. Shairy Kalra",
              role: "Placement Coordinator",
              contact: "coordinator@example.com",
              phone: "+91 9876543211"
            },
            {
              name: "Mr. Amit Patel",
              role: "Training Head",
              contact: "training@example.com",
              phone: "+91 9876543212"
            }
          ].map((member, index) => (
            <motion.div
              key={index}
              className="bg-white p-5 sm:p-6 rounded-lg shadow-md border-t-4 border-transparent"
              whileHover={{
                y: -5,
                borderColor: "#9B1C1C",
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
              }}
              whileTap={{
                y: -5,
                borderColor: "#9B1C1C",
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
              }}
              transition={{ duration: 0.3 }}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
            >
              <h3 className="text-lg sm:text-xl font-semibold text-[#9B1C1C] mb-1">
                {member.name}
              </h3>
              <p className="text-gray-600 mb-3 text-sm sm:text-base">{member.role}</p>
              <div className="text-xs sm:text-sm">
                <p className="text-gray-700">Contact: {member.contact}</p>
                <p className="text-gray-700">Phone: {member.phone}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
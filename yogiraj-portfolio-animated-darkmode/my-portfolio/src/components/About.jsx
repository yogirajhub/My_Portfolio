import React from "react";
import profilePic from "../assets/profile.jpg";

const About = () => {
  return (
    <section id="about" className="py-12 px-6 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 animate-fadeIn">
      <div className="max-w-4xl mx-auto text-center">
        <img
          src= "Profile.jpg"
          alt="Profile"
          className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-blue-400 shadow-lg"
        />
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p className="text-lg">
          I'm <strong>Yogiraj Gautam</strong> from Greater Noida, Uttar Pradesh. Currently pursuing a 
          <strong> B.Tech in Computer Science & Engineering</strong> at 
          <strong> IEC College of Engineering and Technology</strong>, in my 3rd year. 
          I am passionate about full-stack development and problem-solving.
        </p>
      </div>
    </section>
  );
};

export default About;

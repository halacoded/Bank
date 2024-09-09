import React from "react";
import "../componet/Myfoter";
const About = () => {
  return (
    <div className="font-sans m-5 leading-relaxed">
      <h1 className="text-2xl text-gray-800 mb-4">About Us</h1>
      <p className="mb-4">
        Welcome to our Bank Project, a collaborative effort by Hala Saleh and
        Hessa. This project is part of the Coded Kuwait Educational Program,
        where we aim to become full-stack developers.
      </p>

      <h2 className="text-xl text-gray-800 mb-2">Our Mission</h2>
      <p className="mb-4">
        Our mission is to create a user-friendly, secure, and efficient banking
        system that meets the needs of modern users. We applied what we have
        learned during the past weeks.
      </p>

      <h2 className="text-xl text-gray-800 mb-2">
        Our Team: role and contribution to the project
      </h2>
      <ul className="list-none p-0 mb-4">
        <li className="mb-2">
          <strong>Hala Saleh</strong>:
        </li>
        <li className="mb-2">
          <strong>Hessa</strong>:
        </li>
      </ul>

      <h2 className="text-xl text-gray-800 mb-2">Our Journey</h2>
      <p className="mb-4">
        This project is part of the Coded Kuwait Educational Program, which has
        provided us with the tools and knowledge to bring our vision to life.
        Through this project, we have learned the importance of teamwork and the
        core concepts of frontend development.
      </p>
    </div>
  );
};

export default About;

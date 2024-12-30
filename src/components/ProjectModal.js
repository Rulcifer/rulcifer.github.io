// src/components/ProjectModal.js
import React from "react";

const ProjectModal = ({ selectedProject, handleCloseModal }) => {
  return (
    <div
      className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50"
      onClick={handleCloseModal} // Close on outside click
    >
      <div
        className="bg-white rounded-2xl shadow-xl w-[90%] max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl relative p-6"
        onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside
      >
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
          {selectedProject.project_name}
        </h2>

        {/* Image */}
        <img
          src={selectedProject.image_url}
          alt={selectedProject.project_name}
          className="rounded-xl mb-4 w-full object-cover h-56 sm:h-72 md:h-96"
        />

        {/* Description */}
        <p className="text-gray-600 text-sm md:text-base mb-4">
          {selectedProject.description}
        </p>

        {/* Tech Stack (optional) */}
        {/* <h3 className="font-semibold text-sm md:text-base mb-2">
          Tech Stack:
        </h3>
        <ul className="list-disc ml-5 text-sm md:text-base mb-4">
          {selectedProject.tech_stack.map((stack, index) => (
            <li key={index}>{stack}</li>
          ))}
        </ul> */}

        {/* Project Link */}
        <a
          href={selectedProject.source_link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 hover:underline text-sm md:text-base"
        >
          View Project
        </a>

        {/* Close Button */}
        <button
          className="absolute top-2 right-4 text-4xl font-semibold text-gray-600 hover:text-gray-900 bg-transparent border-0 focus:outline-none transition-transform transform hover:scale-110"
          onClick={handleCloseModal}
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default ProjectModal;

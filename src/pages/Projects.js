import React, { useState } from "react";
import "./Projects.css";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectData = [
    //COMPANY PROFILE POHON PERINDANG
    {
      image_url:
        "https://drive.google.com/thumbnail?id=1uuFf3p2z4Og7dxj6R_pAuTu-BeRSItZG&sz=w1000-h1000",
      project_name: "Company Profile Pohon Perindang",
      description:
        "By marketing UD Pohon Perindang through a website that can make it easier for consumers or targets to find out what products are sold and the expertise of this UD to provide what consumers need. Build and develop the UD company profile website. Shade Trees for increase the companys online visibility and presence. Introduce the products offered through the company website with a strategy effective marketing to reach more consumers. Develop an efficient and effective product ordering system or process for facilitate transactions between customers and companies. As well as designing a logo based on the main products sold to strengthen the company brand identity.",
      tech_stack: ["Wordpress", "Canva", "Adobe XD"],
      source_link: "https://www.pohonperindang.com",
    },

    //FRONTEND 1010-GROUP
    {
      image_url:
        "https://drive.google.com/thumbnail?id=1ieDtg_mQfLPCPpEenG99-L-qr7oOZmNQ&sz=w1000-h1000",
      project_name: "Front-End 1010-Group",
      description:
        "By developing the website appearance for user satisfaction in introducing existing products in the company. Redeveloped the front-end of the existing 1010-Group website to improve the appearance, user experience, and strengthen the companys online presence. Update and develop existing product photo placements on the website with a new layout to improve the visual appearance and appeal to website visitors.",
      tech_stack: [
        "HTML",
        "CSS",
        "Laravel Blade",
        "jQuery",
        "Bootstrap",
        "MySQL",
        "Figma",
        "Laragon",
      ],
      source_link: "https://www.1010-group.com",
    },

    //MANAJEMEN RISIKO SPBE DISKOMINFO
    {
      image_url:
        "https://drive.google.com/thumbnail?id=1JxPi-vTTIRJL8pc8IpSSEDSYAaDx4rzE&sz=w1000-h1000",
      project_name: "Manajemen Risiko SPBE",
      description:
        "As a full-stack developer, i have re-developing SPBE Risk Management from the previous system using Microsoft Excel to a Website. Updating and developing several previous systems to be automatic, namely setting risk priorities based on the highest risk value, correcting the value based on risk appetite to carry out a handling plan. Updating and developing report monitoring that was previously via WhatsApp chat to report monitoring in the user dashboard. Creating an email notification feature for the handling plan schedule.",
      tech_stack: [
        "Laravel",
        "NodeJs",
        "jQuery",
        "MySQL",
        "Postman",
        "Bootstrap",
        "Figma",
        "Canva",
        "Laragon",
      ],
      source_link:
        "https://drive.google.com/thumbnail?id=1JxPi-vTTIRJL8pc8IpSSEDSYAaDx4rzE&sz=w1000-h1000",
    },

    //BISNISKITA BLOG
    {
      image_url:
        "https://drive.google.com/thumbnail?id=1EqzHqgdb3ez1un9CLOzfMNege5Tc36sJ&sz=w1000-h1000",
      project_name: "Bisnis Kita Blog",
      description:
        "As a full-stack developer, I have designed and built the BisnisKita Blog website. This platform serves as a blog for the latest articles and news in the business world. Visitors can read articles without logging in, while registered users can access and comment on posts. Selected users can act as authors, allowing them to write and submit articles for publication. System admins are responsible for validating submitted content and selecting eligible authors. With these features, the website aims to be a reliable and interactive source of business information, offering a platform for authors to share their insights.",
      tech_stack: [
        "Angular",
        "Laravel",
        "MySQL",
        "Postman",
        "Bootstrap",
        "Figma",
        "Canva",
        "Laragon",
      ],
      source_link:
        "https://drive.google.com/thumbnail?id=1EqzHqgdb3ez1un9CLOzfMNege5Tc36sJ&sz=w1000-h1000",
    },

    //LIBRARY KOMIKU
    {
      image_url:
        "https://drive.google.com/thumbnail?id=1IJO4_99KWxE0YZ-kYkuXM1VNOhwdUOPN&sz=w1000-h1000",
      project_name: "Library Komikku",
      description:
        "User needs, activities carried out, problems, and challenges of the project being worked on. The purpose of this user research is to find out user needs, inspire design, evaluate solutions, and measure the results/impacts. The project that I will create is to design an online comic library application that has several accesses to read books and there are several types of books, namely novels, learning, comics. The user persona here is an example of a user who really wants to read books and is lazy or cannot travel to a bookstore or library to borrow and buy books, or maybe a user who wants to read books, but the books he wants to read are too expensive, users who want to collect books but the books do not want to be damaged because they are placed for too long or displayed for too long.",
      tech_stack: ["Adobe XD", "Canva"],
      source_link:
        "https://drive.google.com/thumbnail?id=1IJO4_99KWxE0YZ-kYkuXM1VNOhwdUOPN&sz=w1000-h1000",
    },

    //APP KULIAHKU
    {
      image_url:
        "https://drive.google.com/thumbnail?id=1J2rtcTilsd0QUEil5bBN7fLJmYz4Tl1X&sz=w1000-h1000",
      project_name: "App Kuliahku",
      description:
        "I have developed a mobile application using Java with Android Studio and Firebase for database storage. For the design and coloring of the app cover, I used Canva. The application, which I call appkuliahku, includes several key features: the Schedule menu for displaying my class schedule, the List menu which allows me to add data to the schedule, and the About Me menu that contains user profile information.",
      tech_stack: ["Android Studio", "Java", "Canva"],
      source_link:
        "https://drive.google.com/thumbnail?id=1J2rtcTilsd0QUEil5bBN7fLJmYz4Tl1X&sz=w1000-h1000",
    },

    //MAMONEY
    {
      image_url:
        "https://drive.google.com/thumbnail?id=1J2rtcTilsd0QUEil5bBN7fLJmYz4Tl1X&sz=w1000-h1000",
      project_name: "Mamoney",
      description:
        "I have developed a mobile application using Java with Android Studio and Firebase for database storage. For the design and coloring of the app cover, I used Canva. The application, which I call appkuliahku, includes several key features: the Schedule menu for displaying my class schedule, the List menu which allows me to add data to the schedule, and the About Me menu that contains user profile information.",
      tech_stack: ["React JS", "Tailwind CSS", "Laravel"],
      source_link:
        "https://drive.google.com/thumbnail?id=1J2rtcTilsd0QUEil5bBN7fLJmYz4Tl1X&sz=w1000-h1000",
    },
  ];

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="projects" id="projects">
      <h1 className="title projects-title">Featured Projects</h1>
      <p className="projects-para">
        During my development journey, I have been involved in various
        interesting projects that span both frontend and backend development.
        Each project provided an opportunity to learn and develop new skills, as
        well as overcome various challenges. Here are some interesting moments
        in my development history.
      </p>
      <div className="projects-container">
        {projectData.map((project, id) => (
          <ProjectCard
            onClick={() => handleOpenModal(project)}
            key={id}
            image={project.image_url}
            title={project.project_name}
            description={project.description}
            stacks={project.tech_stack}
            source_link={project.source_link}
          />
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50"
          onClick={handleCloseModal} // Klik area luar untuk menutup modal
        >
          <div
            className="bg-gray-900 rounded-2xl shadow-xl w-[70%] max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl p-6 max-h-[60vh] relative p-6"
            onClick={(e) => e.stopPropagation()} // Hentikan klik modal menutup
          >
            {/* Title */}
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-200 mb-4">
              {selectedProject.project_name}
            </h2>

            <div className="flex flex-col md:flex-row items-center md:items-start">
              {/* Image */}
              <img
                src={selectedProject.image_url}
                alt={selectedProject.project_name}
                className="rounded-xl mb-4 w-full md:w-1/2 object-cover h-56 sm:h-72 md:h-86"
              />

              {/* Description */}
              <div className="flex-1 md:ml-6 mt-0 md:mt-0">
                <p
                  className="text-gray-200 text-sm md:text-base mb-4 overflow-hidden max-h-24 text-ellipsis"
                  style={{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 4,
                  }}
                >
                  {selectedProject.description}
                </p>

                {/* Project Link */}
                <a
                  href={selectedProject.source_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-100 hover:underline text-sm md:text-base"
                >
                  View Project
                </a>
              </div>
            </div>

            {/* Close Button */}
            <button
              className="absolute top-2 right-0 transform translate-x-2 text-4xl font-semibold text-gray-600 hover:text-gray-100 bg-transparent hover:bg-transparent border-0 hover:border-0 focus:outline-none transition-transform hover:scale-110"
              onClick={handleCloseModal}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;

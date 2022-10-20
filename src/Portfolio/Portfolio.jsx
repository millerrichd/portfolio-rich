import React from "react";
import Subsection from "./Subsection";
import Image from "./Image";

function Portfolio() {
  const portfolioImage = "image-me-prof.jpeg";
  const introduction = {
    title: "Introduction",
    description: "Hi I'm Richard Miller, a software developer living in San Diego, California.",
    bulletpoints: [],
    links: {}
  };
  const aboutMe = {
    title: "About Me",
    description: "I am a developer with a long history of Devops knowledge, from even before they called it Devops. I want to focus on becoming a developer full time, because they usually have a smaller subset of tools they can focus on, instead of more tools than I can reasonably count as a Devops engineer.",
    bulletpoints: [
      "Been in technology for over 20 years.",
      "Avid gamer, video, board, and role playing games.",
      "Game Master for my group of friends as we play through a world I created." 
    ],
    links: {}
  };
  const skills = {
    title: "Skills",
    description: "",
    bulletpoints: [
      "Frontend: HTML, CSS, JavaScript, React, jQuery, Bootstrap, Web Architecture",
      "Backend: Node.js, Express, GraphQL, MongoDB, RESTful APIs, PostgreSQL",
      "Tools: Mocha, Chai, Knex, Git, GitHub, Heroku, Node Package Manager, Python, Vercel, Visual Studio Code",
      "DevOps Tools: Ansible, Bash, Terraform, Terragrunt"
    ],
    links: {}
  };
  const contact = {
    title: "Contact",
    description: "",
    bulletpoints: [],
    links: {
      Linkden: "https://www.linkedin.com/in/richard-miller-7033282",
      Github: "https://github.com/millerrichd",
      Email: "millerrichd@gmail.com"
    }
  };

  return (
    <>
      <section className="">
        <Image data={portfolioImage} />
      </section>
      <section>
        <Subsection data={introduction} />
      </section>
      <section>
        <Subsection data={aboutMe} />
      </section>
      <section>
        <Subsection data={skills} />
      </section>
      <section>
        <Subsection data={contact} />
      </section>
    </>
  )
}

export default Portfolio;
import React from "react";
import Footer from "./Footer";
// the projects section which has a link to my github and a link to each seperate project with a thumbnail
function Projects() {
  return (
    <>
      <div>
        <a id="github" href="https://github.com/kobymarble">
          GitHub
        </a>
      </div>
      <div>
        <a
          id="poop"
          href="https://github.com/burlingtoncodeacademy-students/POOP"
        >
          Capstone Project
        </a>
        <img
          id="pooppic"
          src="/images/poop.png"
          width="200px"
          height="200px"
        ></img>
      </div>
      <div>
        <a
          id="jeopardy"
          href="https://github.com/burlingtoncodeacademy-students/jeopardy-kobymarble"
        >
          Jeopardy
        </a>
        <img
          id="jeopardypic"
          src="/images/jeopardy.png"
          width="200px"
          height="200px"
        ></img>
      </div>

      <Footer />
    </>
  );
}

export default Projects;

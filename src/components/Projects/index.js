import React from "react";
// import { capitalizeFirstLetter } from "../../utils/helpers";
import hotspot from "../../assets/projects/rvahotspot.png";
import leash from "../../assets/projects/leashleague.png";
import task from "../../assets/projects/taskmaster.png";
import password from "../../assets/projects/passwordgenerator.png";
import horizeon from "../../assets/projects/horizeon.png";
import runbuddy from "../../assets/projects/runbuddy.png";

function Projects() {
  return (
    <section id="projects">
      <div class="col-md-3 col-sm-4 col-xs-6">
      <a href="https://rockwoodc.github.io/RVA-Hotspot/" target="_blank" rel="noreferrer" class="thumbnail">
          <img
            src={hotspot}
            alt="homepage of RVA Hotspot"
            class="img-responsive"
          ></img>
        </a>
      </div>
      <div class="col-md-3 col-sm-4 col-xs-6">
      <a href="https://rockwoodc.github.io/run-buddy/" target="_blank" rel="noreferrer" class="thumbnail">
          <img
            src={runbuddy}
            alt="homepage of Runbuddy website"
            class="img-responsive"
          ></img>
        </a>
      </div>
      <div class="col-md-3 col-sm-4 col-xs-6">
      <a href="https://rockwoodc.github.io/taskmaster-pro/" target="_blank" rel="noreferrer" class="thumbnail">
          <img
            src={task}
            alt="homepage of taskmaster website"
            class="img-responsive"
          ></img>
        </a>
      </div>
      <div class="col-md-3 col-sm-4 col-xs-6">
      <a href="https://warm-plateau-73527.herokuapp.com/" target="_blank" rel="noreferrer" class="thumbnail">
          <img
            src={leash}
            alt="homepage of Leash League"
            class="img-responsive"
          ></img>
        </a>
      </div>
      <div class="col-md-3 col-sm-4 col-xs-6">
      <a href="https://rockwoodc.github.io/Password-Generator/" target="_blank" rel="noreferrer" class="thumbnail">
          <img
            src={password}
            alt="homepage of password generator"
            class="img-responsive"
          ></img>
        </a>
      </div>
      <div class="col-md-3 col-sm-4 col-xs-6">
      <a href="https://rockwoodc.github.io/Horiseon-Website-Refactoring/" target="_blank" rel="noreferrer" class="thumbnail">
          <img
            src={horizeon}
            alt="homepage of Horizeon website"
            class="img-responsive"
          ></img>
        </a>
      </div>
    </section>
  );
}
export default Projects;

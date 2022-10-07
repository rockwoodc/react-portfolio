import React from "react";
// import { capitalizeFirstLetter } from "../../utils/helpers";
import hotspot from "../../assets/projects/rvahotspot.png";
import leash from "../../assets/projects/leashleague.png";
import task from "../../assets/projects/taskmaster.png";
import password from "../../assets/projects/passwordgenerator.png";
import horizeon from "../../assets/projects/horizeon.png";
import runbuddy from "../../assets/projects/runbuddy.png";
import Card from "react-bootstrap/Card";

function Projects() {
  return (
    <div class="card-group">
      <div class="card m-4">
        <Card.Img
          variant="top"
          src={hotspot}
          alt="homepage of RVA Hotspot"
          class="img-thumbnail"
        />
        <div class="card-body">
          <h5 class="card-title">RVA Hotspot</h5>
          <p class="card-text">
            RVA Hotspot Connects foodies from all over to locals favorites here
            in Richmond. This project was made using HTML, CSS, Bulma, &
            JavaScript.
          </p>
          <Card.Link href="https://rockwoodc.github.io/RVA-Hotspot/" target="_blank" rel="noreferrer">Website</Card.Link>
          <Card.Link href="https://github.com/rockwoodc/RVA-Hotspot" target="_blank" rel="noreferrer">GitHub</Card.Link>
        </div>
      </div>
    <container>
      <div class="card m-4">
        <Card.Img
          variant="top"
          src={leash}
          alt="homepage of Leash League"
          class="img-thumbnail"
        />
        <div class="card-body">
          <h5 class="card-title">Leash League</h5>
          <p class="card-text">
            Leash League strives to connect those looking for a new dog with local shelters. This project was made using HTML, CSS, Bulma,
            JavaScript, Node, and .
          </p>
          <Card.Link href="https://warm-plateau-73527.herokuapp.com/" target="_blank" rel="noreferrer">Website</Card.Link>
          <Card.Link href="https://github.com/rockwoodc/LeashLeague" target="_blank" rel="noreferrer">GitHub</Card.Link>
        </div>
      </div>
    </container>
      <div class="card m-4">
        <Card.Img
          variant="top"
          src={task}
          alt="homepage of Task Master PRO"
          class="img-thumbnail"
        />
        <div class="card-body">
          <h5 class="card-title">Task Master PRO</h5>
          <p class="card-text">
            Task Master Pro offers an easy way to keep your To Do list handy at all times.
          </p>
          <Card.Link href="https://rockwoodc.github.io/taskmaster-pro/" target="_blank" rel="noreferrer">Website</Card.Link>
          <Card.Link href="https://github.com/rockwoodc/taskmaster-pro" target="_blank" rel="noreferrer">GitHub</Card.Link>
        </div>
      </div>

      <div class="card m-4">
        <Card.Img
          variant="top"
          src={runbuddy}
          alt="homepage of Run Buddy"
          class="img-thumbnail"
        />
        <div class="card-body">
          <h5 class="card-title">Run Buddy</h5>
          <p class="card-text">
            Run Buddy was created to help aspiring runners to trainers in their area. This project was made using basic HTML & CSS.
          </p>
          <Card.Link href="https://rockwoodc.github.io/run-buddy/" target="_blank" rel="noreferrer">Website</Card.Link>
          <Card.Link href="https://github.com/rockwoodc/run-buddy" target="_blank" rel="noreferrer">GitHub</Card.Link>
        </div>
      </div>

      <div class="card m-4">
        <Card.Img
          variant="top"
          src={password}
          alt="homepage of password generator"
          class="img-thumbnail"
        />
        <div class="card-body">
          <h5 class="card-title">Password Generator</h5>
          <p class="card-text">
            Ever run out of ideas for new passwords? Well Password Generator is the solution for you! Generate secure passwords witht he click of a button. This project was made using HTML, CSS, &
            JavaScript.
          </p>
          <Card.Link href="https://rockwoodc.github.io/Password-Generator/" target="_blank" rel="noreferrer">Website</Card.Link>
          <Card.Link href="https://github.com/rockwoodc/Password-Generator" target="_blank" rel="noreferrer">GitHub</Card.Link>
        </div>
      </div>

      <div class="card m-4">
        <Card.Img
          variant="top"
          src={horizeon}
          alt="homepage of Horiseon"
          class="img-thumbnail"
        />
        <div class="card-body">
          <h5 class="card-title">Horiseon</h5>
          <p class="card-text">
            This was a refactored website to show off flex box skills!
          </p>
          <Card.Link href="https://rockwoodc.github.io/Horiseon-Website-Refactoring/" target="_blank" rel="noreferrer">Website</Card.Link>
          <Card.Link href="https://github.com/rockwoodc/Horiseon-Website-Refactoring" target="_blank" rel="noreferrer">GitHub</Card.Link>
        </div>
        </div>
      
      
    </div>

  );
}

export default Projects;

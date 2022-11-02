import React from "react";
// import { capitalizeFirstLetter } from "../../utils/helpers";
import hotspot from "../../assets/projects/rvahotspot.png";
import leash from "../../assets/projects/leashleague.png";
import task from "../../assets/projects/taskmaster.png";
import password from "../../assets/projects/passwordgenerator.png";
import projectChoice from "../../assets/projects/pc.png";
import runbuddy from "../../assets/projects/runbuddy.png";
import Card from "react-bootstrap/Card";
import "./projects.css"

function Projects() {
  return (
    <div class="card-group">
    <container>
      <div class="card">
        <Card.Img
          variant="top"
          src={hotspot}
          alt="homepage of RVA Hotspot"
          class="img-thumbnail"
        />
        <div class="card-body">
          <h5 class="card-title">RVA Hotspot</h5>
          <p class="card-text">
            RVA Hotspot is an application to connect Richmond visitors to the
            locals favorite food spots. No more getting chain food suggestions,
            get your suggestions straight from local foodies. The user will be
            able to search restaurants by type or scroll through a list of local
            favorites. If the user would like a more personalized recommendation
            they can reach out to the RVA Hotspot creators for more information.
            If the user decides that a liquid dinner is more their speed, the
            Open Brewery API will be used to populate a brewery in RVA.
            <br></br>
            <br></br>
            This project was made using HTML, CSS, Bulma, JavaScript, & Open
            Brewery API.
          </p>
          <Card.Link
            href="https://rockwoodc.github.io/RVA-Hotspot/"
            target="_blank"
            rel="noreferrer"
          >
            Website
          </Card.Link>
          <Card.Link
            href="https://github.com/rockwoodc/RVA-Hotspot"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </Card.Link>
        </div>
      </div>
    </container>  
      <container>
        <div class="card">
          <Card.Img
            variant="top"
            src={leash}
            alt="homepage of Leash League"
            class="img-thumbnail"
          />
          <div class="card-body">
            <h5 class="card-title">Leash League</h5>
            <p class="card-text">
              Leash League was invented to help people find the perfect dog! Not
              just any dog, but a local shelter dog! Too many people resort to
              "shopping" for a dog instead of researching their local shelters
              for pets in need of a forever home. Leash League connects you with
              local shelters and allows you to research the dog breeds available
              all in one place! Our site will help you find your furry best
              friend and ensure that the breed you are choosing is best for your
              lifestyle.
              <br></br>
              <br></br>
              This project was made using HTML, CSS, Bulma, JavaScript,
              Inquirer, MySQL, Dotenv, Handlebars, Bcrypt and Dog API.
            </p>
            <Card.Link
              href="https://warm-plateau-73527.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              Website
            </Card.Link>
            <Card.Link
              href="https://github.com/rockwoodc/LeashLeague"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </Card.Link>
          </div>
        </div>
      </container>
<div className="container">
  <div className="row">
      <div class="card small-card col-6">
        <Card.Img
          variant="top"
          src={task}
          alt="homepage of Task Master PRO"
          class="img-thumbnail"
        />
        <div class="card-body">
          <h5 class="card-title">Task Master PRO</h5>
          <p class="card-text">
            Task Master Pro offers an easy way to keep your To Do list handy at
            all times. Users are able to move, delete and save tasks-- even when
            they close their browser!
            <br></br>
            <br></br>
            This project was made using HTML, CSS, & Javascript.
          </p>
          <Card.Link
            href="https://rockwoodc.github.io/taskmaster-pro/"
            target="_blank"
            rel="noreferrer"
          >
            Website
          </Card.Link>
          <Card.Link
            href="https://github.com/rockwoodc/taskmaster-pro"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </Card.Link>
        </div>
      </div>

      <div class="card small-card col-6">
        <Card.Img
          variant="top"
          src={runbuddy}
          alt="homepage of Run Buddy"
          class="img-thumbnail"
        />
        <div class="card-body">
          <h5 class="card-title">Run Buddy</h5>
          <p class="card-text">
            Run Buddy was created to help aspiring runners to trainers in their
            area.
            <br></br>
            <br></br>
            This project was made using basic HTML & CSS.
          </p>
          <Card.Link
            href="https://rockwoodc.github.io/run-buddy/"
            target="_blank"
            rel="noreferrer"
          >
            Website
          </Card.Link>
          <Card.Link
            href="https://github.com/rockwoodc/run-buddy"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </Card.Link>
          </div>
        </div>
      </div>
    <div className="row">
      <div class="card small-card col-6">
        <Card.Img
          variant="top"
          src={password}
          alt="homepage of password generator"
          class="img-thumbnail"
        />
        <div class="card-body">
          <h5 class="card-title">Password Generator</h5>
          <p class="card-text">
            Ever run out of ideas for new passwords? Well Password Generator is
            the solution for you! Generate secure passwords witht he click of a
            button. The user is asked if certain characters should be included
            and will generate the password based on their input.
            <br></br>
            <br></br>
            This project was made using HTML, CSS, & JavaScript.
          </p>
          <Card.Link
            href="https://rockwoodc.github.io/Password-Generator/"
            target="_blank"
            rel="noreferrer"
          >
            Website
          </Card.Link>
          <Card.Link
            href="https://github.com/rockwoodc/Password-Generator"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </Card.Link>
        </div>
      </div>

      <div class="card small-card col-6">
        <Card.Img
          variant="top"
          src={projectChoice}
          alt="homepage of Project Choice"
          class="img-thumbnail"
        />
        <div class="card-body">
          <h5 class="card-title">Project Choice</h5>
          <p class="card-text">
            Project Choice is an application that by filling out a simple form, users are connected to clinics closest to them, laws in their surrounding areas, and resources. There is also a shop where users can buy Project Choice Merchandise. All proceeds from the shop go to Planned Parenthood.
            <br></br>
            <br></br>
            This project was made using React, State, Stripe and Bcrypt.
          </p>
          <Card.Link
            href="https://project-choice.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            Website
          </Card.Link>
          <Card.Link
            href="https://github.com/rockwoodc/project-choice"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </Card.Link>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;

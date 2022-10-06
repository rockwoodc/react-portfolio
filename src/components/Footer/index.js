import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div>
        <a
          href="https://github.com/rockwoodc"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={require("../../assets/logos/github-logo.png")}
            alt="Github"
            className="logo"
          ></img>
        </a>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/christian-rockwood-350105223/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={require("../../assets/logos/linkedin-logo.png")}
            alt="LinkedIn"
            className="logo"
          ></img>
        </a>
      </div>
      <div>
        <a
          href="https://twitter.com/RockwoodC"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={require("../../assets/logos/twitter-logo.png")}
            alt="Twitter"
            className="logo"
          ></img>
        </a>
      </div>
    </footer>
  );
}

export default Footer;

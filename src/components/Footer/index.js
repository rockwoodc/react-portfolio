import React from "react";

function Footer() {
  return (
    <footer className="footer text-center">
    
        <a
          href="https://github.com/rockwoodc"
          target="_blank"
          rel="noopener noreferrer"
          className='m-1'
        >
          <img
            src={require("../../assets/logos/github-logo.png")}
            alt="Github"
            className="logo"
            width={50}
          
          />
        </a>
      
        <a
          href="https://www.linkedin.com/in/christian-rockwood-350105223/"
          target="_blank"
          rel="noopener noreferrer"
          className='m-1'
        >
          <img
            src={require("../../assets/logos/linkedin-logo.png")}
            alt="LinkedIn"
            className="logo"
            width={50}
          />
        </a>
     
        <a
          href="https://twitter.com/RockwoodC"
          target="_blank"
          rel="noopener noreferrer"
          className='m-1'
        >
          <img
            src={require("../../assets/logos/twitter-logo.png")}
            alt="Twitter"
            className="logo"
            width={50}
          />
        </a>

    </footer>
  );
}

export default Footer;

import React from 'react';

function Nav() {

  return (
    <header>
        <a href="/">
        {/* insert Logo in far left */}
            <span role="img"></span>
        </a>

        <nav>
            <ul className="flex-row">
                <li className="mx-2">
                    <a href="#about">About</a>
                </li>
                <li className="mx-2">
                    <a href="#projects">Projects</a>
                </li>
                <li className="mx-2">
                    <a href="#contact">Contact</a>
                </li>
                <li className="mx-2">
                    <a href="#resume">Resume</a>
                </li>
            </ul>
        </nav>
    </header>
  );
}

export default Nav;
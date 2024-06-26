import React from "react";
import "../assets/Styles/style.css";
import "../assets/Styles/responsive.css";

import heroImg from "../assets/images/hero.svg";

const Header = () => {
  return (
    <header>
      <div className="main-container">
        <div className="nav">
          <div className="logo">
            <a href="/">MIA</a>
          </div>

          <nav>
            <ul>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#portofolios">Portofolio</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <a href="/Mochammad Ibnu Abbas CV.pdf" target="_blank">
                  <button className="btn">Resume</button>
                </a>
              </li>
            </ul>
          </nav>

          <div className="burger">
            <div className="line-1"></div>
            <div className="line-2"></div>
            <div className="line-3"></div>
          </div>
        </div>

        <section id="hero">
          <div className="hero-left">
            <h3 className="pre-tittle">MY NAME IS</h3>
            <h1 className="hero-name">
              Mochammad <span>Ibnu</span> Abbas
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              sit optio culpa eveniet dicta itaque cumque impedit, laborum id
              est deleniti aspernatur illum necessitatibus quo expedita,
              veritatis consectetur reprehenderit error.
            </p>
          </div>
          <div className="hero-right">
            <img src={heroImg} alt="Person Standing" />
          </div>
        </section>
      </div>
    </header>
  );
};

export { Header };

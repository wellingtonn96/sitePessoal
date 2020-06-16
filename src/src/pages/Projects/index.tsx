import React from "react";
import { Link } from "react-router-dom";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

import "./style.css";

export default function Projects() {
  return (
    <>
      <div className="contanier">
        <header className="header">
          <h1>Wellington</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">home</Link>
              </li>
              <li>
                <Link to="/projects">projects</Link>
              </li>
              <li>
                <Link to="/contact">contact</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className="main">
          <div className="content">
            <p style={{ marginLeft: 150 }}>i am</p>
            <h1>Wellington</h1>
            <p
              style={{
                marginLeft: 500,
                textAlign: "left",
              }}
            >
              a junior <br /> web developer
            </p>
          </div>
          <div className="social-media">
            <ul>
              <li>
                <a href="#">
                  <FiGithub size={20} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FiLinkedin size={20} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FiTwitter size={20} />
                </a>
              </li>
            </ul>
          </div>
        </main>
      </div>
    </>
  );
}

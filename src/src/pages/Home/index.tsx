import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { FaBars } from "react-icons/fa";

import "./style.css";

export default function App() {
  return (
    <>
      <div className="container">
        <header className="header">
          <div className="header-menu">
            <h1>Wellington</h1>
            <div className="menu-icon">
              <FaBars size={30} onClick={() => !true} />
            </div>
          </div>

          <nav>
            <ul>
              <li>
                <Link to="/projects">projects</Link>
              </li>
              <li>
                <Link to="/contanct">contact</Link>
              </li>
              <li className="nav-social-media">
                <ul>
                  <li>
                    <Link to="#">
                      <FiGithub size={20} />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <FiLinkedin size={20} />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <FiTwitter size={20} />
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </header>
        <main className="main">
          <div className="content">
            <p style={{ marginRight: 150 }}>i am</p>
            <h1>Wellington</h1>
            <p style={{ marginLeft: 150 }}>
              a junior <br /> web developer
            </p>
          </div>
          <ul className="social-media">
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
        </main>
      </div>
    </>
  );
}

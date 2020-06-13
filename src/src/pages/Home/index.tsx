import React from "react";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

import "./style.css";

export default function App() {
  return (
    <>
      <header className="header">
        <h1>Wellington</h1>
        <nav>
          <ul>
            <li>
              <a href="#">projects</a>
            </li>
            <li>
              <a href="#">contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="main">
        <div className="content">
          <p>i am</p>
          <p
            style={{
              fontWeight: 1000,
              fontSize: 100,
              textTransform: "uppercase",
            }}
          >
            Wellington
          </p>
          <p>a junior</p>
          <p>web developer</p>
        </div>
        <div className="social-media">
          <ul>
            <li>
              <a href="#">
                <FiGithub />
              </a>
            </li>
            <li>
              <a href="#">
                <FiLinkedin />
              </a>
            </li>
            <li>
              <a href="#">
                <FiTwitter />
              </a>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}

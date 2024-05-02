import "./style.css";
import React from "react";

function Home() {
  return (
    <div className="grid">
      <div className="card card1">
        <h3>Resume</h3>
        <a href="/resume" target="_blank" rel="noopener noreferrer">
          view
        </a>
      </div>
      <div className="card card2">
        <h1>
          Hi, I'm Colin!
          <br /> Welcome to my portfolio website
        </h1>
        <h2>Previously a Scrum Master and Software Developer,</h2>
        <h2>
          Now looking for a job opportunity in IT Consultation or IT Support
        </h2>
      </div>
      <div className="card card3">
        <h3>Job motivation</h3>
        <a href="motivation" target="_blank" rel="noopener noreferrer">
          view
        </a>
      </div>
      <div className="card card4">
        <h3>My web development portfolio project (2021)</h3>
        <div className="latest-project">
          <a href="project" target="_blank" rel="noopener noreferrer">
            view
          </a>
        </div>
      </div>
      <div className="card card5">
        <h3>A proud achievement</h3>
        <a href="achievement" target="_blank" rel="noopener noreferrer">
          view
        </a>
      </div>
    </div>
  );
}

export default Home;

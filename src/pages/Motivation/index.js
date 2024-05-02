import "./style.css";
import React from "react";

function Motivation() {
  return (
    <div className="motivation">
      <div className="motivation-container">
        <h1>What am I looking for in a job?</h1>
        <br />
        <hr />
        <br />
        <div className="motivation-grid">
          <div className="motivation-left">
            <h2>Job Description </h2>
            <p>
              I am passionate about leveraging my technical skills in a role
              that involves working closely with people and making a positive
              impact. I thrive in environments where I can contribute to solving
              problems, optimize processes and assisting others, making a
              tangible difference in their work. I value roles that offer a
              balanced workload and manageable stress levels, allowing for focus
              and productivity.{" "}
            </p>
            <h2>TL;DR</h2>
            <p>A balance between interacting with technology and people.</p>
          </div>
          <div className="motivation-right">
            <h2>Work Environment</h2>
            <p>
              The ideal workplace for me is one that fosters positivity and
              growth. I thrive in environments that encourage teamwork, open
              communication, and a supportive atmosphere. An environment that
              promotes personal and professional development is essential, where
              I can continuously learn and progress in my career.
            </p>
            <h2>TL;DR</h2>
            <p>A positive, friendly, supportive environment.</p>
            <br />
            <hr className="mid-hr" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Motivation;

import "./style.css";
import React from "react";

function Motivation() {
  return (
    <div className="motivation">
      <div className="motivation-container">
        <h1>My software testing job search quest</h1>
        <br />
        <hr />
        <br />
        <div className="motivation-grid">
          <div className="motivation-left">
            <h2>What am I looking for in a job?</h2>
            <p>
              I was trained in both front end and back end technologies, but my
              preference goes to front end.
            </p>
            <p>
              I'm looking for a working environment with 3 main ingredients:
            </p>
            <p>
              1) An environment where communication isn't formal and strict, but
              open and lighthearted
            </p>
            <p>
              2) An environment where communication is professional
            </p>
            <p>
              3) Ideally a place where working remotely is possible
            </p>
          </div>
          <div className="motivation-right">
            <h2>My top 3 qualities</h2>
            <p>• Lightning fast in learning new technologies and languages</p>
            <p>• A high level of independence</p>
            <p>• No challenge feels too great for me to handle</p>
            <br />
            <hr className="mid-hr" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Motivation;

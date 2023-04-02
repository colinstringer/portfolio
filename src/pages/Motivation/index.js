import "./style.css";
import React from "react";

function Motivation() {
  return (
    <div className="motivation">
      <div className="motivation-container">
        <h1>My developer job search quest</h1>
        <br />
        <hr />
        <br />
        <div className="motivation-grid">
          <div className="motivation-left">
            <h2>What am I looking for in a job?</h2>
            <p>
              I was trained in both front end and back end technologies, but my
              preference goes to a front end job with Angular as its framework.
            </p>
            <p>
              I'm looking for a working environment with 3 main ingredients:
            </p>
            <p>
              1) An environment where working remotely is possible. From October
              2023 - March 2024 I'm planning to work from Thailand.
            </p>
            <p>
              2) An environment where communication isn't formal and strict, but
              open and lighthearted
            </p>
            <p>
              3) A place where I can expand my knowledge about Angular /
              Frontend development
            </p>
          </div>
          <div className="motivation-right">
            <h2>My top 3 qualities as a developer</h2>
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

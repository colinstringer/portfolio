import "./style.css";
import React from "react";
import { FaLinkedin, FaLanguage, FaCodepen } from "react-icons/fa";
import { FiPhone, FiBook } from "react-icons/fi";
import { GoMail } from "react-icons/go";
import { TiCalendar } from "react-icons/ti";
import { MdWork, MdLocationCity } from "react-icons/md";

function resume() {
  return (
    <div className="page">
      <div className="resume">
        <div className="header">
          <div className="header-text">
            <h1>Colin Stringer</h1>
            <h2>Junior/Medior Angular developer</h2>
            <h2>~ 2 years experience as a software developer</h2>
            <br />
            <p>
              <MdLocationCity /> • Ede, Gelderland
            </p>
            <p>
              <TiCalendar /> • Date of birth: 1st of April 1991
            </p>
            <p>
              <FiPhone /> • 06 - 3438 1491
            </p>
            <p>
              <GoMail /> • colinstringer2@gmail.com
            </p>
            <p>
              <FaLinkedin /> •{" "}
              <a
                href="https://www.linkedin.com/in/colin-stringer-608b50270/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </p>
          </div>
          <div className="header-image">
            <br />
            <img
              src="https://i.ibb.co/DV0MxMw/profile-pic.jpg"
              alt="profile pic"
              width="180px"
            />
          </div>
        </div>
        <div className="body">
          <div className="left-content">
            <h2>
              <MdWork /> Work Experience
            </h2>
            <hr />
            <h3>Working abroad in a Bed and Breakfast</h3>
            <p>
              In 2017-2018 I spent some time looking for my Scottish roots. You
              see, my grandfather that I never met was Scottish. He passed away
              before I was born. Scotland is certainly the most beautiful
              country that I've seen.
            </p>
            <p style={{ fontStyle: "italic" }}>Scotland Insch, 2017-2018</p>
            <h3>Trainer • GGD</h3>
            <p>
              In 2021 trained hundreds of new customer service agents for the
              Dutch GGD covid project (vaccinations and tests).
            </p>
            <p style={{ fontStyle: "italic" }}>Remote 2020-2021</p>
            <h3>Full stack web development • wewerken</h3>
            <p>
              My first working experience in IT was at 'wewerken'. Very shortly
              after I joined their team, I started working on their largest and
              most challenging project thus far, for an organisation called
              "SAG" which stands for Samenwerkingsverband Autisme Gelderland. In
              total, my contribution for this project was about 90% of the total
              effort.
            </p>
            <p>
              <a target="_blank" href="/project">
                View here for more details.
              </a>
            </p>
            <p style={{ fontStyle: "italic" }}>Doorwerth, 2021-2022</p>
            <h3>Frontend Angular development • Micpoint B.V.</h3>
            <p>
              My second working experience as a developer was as a frontend
              Angular developer in Micpoint. Micpoint is a small B2B oriented
              company of around 20 employees that offers solutions for fleet
              management.
            </p>
            <p>
              A fleet in this context is the total sum of vehicles that a
              company possesses. One of the main products Micpoint sells is a
              device that can keep track of all the journeys that a vehicle
              makes, which is necessary knowledge for the tax authorities. Also
              to distinguish between private and business trips so the
              auhorities know a company vehicle isn't being misused.
            </p>
            <p>
              Per day, millions of vehicle location data is uploaded, processed
              and then stored in our database. My job was to start creating a
              completely new web application in Angular for the customers to be
              able to manage their fleet data. There already exists a web app,
              but it's not unfair to call it legacy code at this point, given
              how old its technology is.
            </p>
            <p style={{ fontStyle: "italic" }}>Houten, 2022-2023</p>
            <h3>Scrum Master • Micpoint B.V.</h3>
            <p>
              After 2 months of working at Micpoint, the team recognized that I
              am highly structured in my work-flow and assertive when dealing
              with people. My communication is honest and direct. Because of
              these qualities, the team allowed me the opportunity to become the
              team's scrum master. Soon after, I had an official scrum master
              training and scrum master examination to make it official.
            </p>
            <p style={{ fontStyle: "italic" }}>Houten, 2022-2023</p>
            <br />
            <h2>
              <FaLanguage /> Languages
            </h2>
            <hr />
            <h3>Dutch • fluent</h3>
            <h3>English • fluent</h3>
            <br />
          </div>
          <div className="right-content">
            <h2>
              <FiBook /> Education{" "}
            </h2>
            <hr />
            <h3>HBO 1st year of Computer Science (informatica) • Propedeuse</h3>
            <p>Avans hogeschool • cum laude (average grade 8.8 / 10)</p>
            <p style={{ fontStyle: "italic" }}>Den Bosch, 2016-2017</p>
            <h3>Full stack web development bootcamp</h3>
            <p>Codaisseur • 3 month intensive training</p>
            <p style={{ fontStyle: "italic" }}>Amsterdam, 2020</p>
            <br />
            <h2>
              <FaCodepen /> Technical Skills
            </h2>
            <hr />
            <h3>Front-end main skills</h3>
            <p>Angular • Typescript • HTML • CSS • Redux</p>
            <h3>Familiar libraries / API's</h3>
            <p>AG Grid • Angular Material • (Angular) Leaflet • RxJS </p>
            <h3>Familiar Angular features</h3>
            <p>
              CLI • Components • Services • Modules • Routing • Pipes •
              Directives • Observables/Subjects • HTTP Client • Reactive forms •
              Apollo (GraphQL Client) • Guards • Interceptors • Global Error
              Handling • Unit Testing with Jasmine & Karma
            </p>
            <h3>Several familiar RxJS operators</h3>
            <p>
              from • of • interval • timer • map • tap • switchMap • merge •
              startWith • debounceTime • distinctUntilChanged • filter • scan •
              retry • catchError
            </p>
            <h3>Miscellaneous</h3>
            <p>
              Ubuntu (Linux) • Git + GitHub • Visual Studio Code • Docker •
              Slack • MS Teams • MS Devops
            </p>
            <br />
            <h2>
              <FaCodepen /> Soft Skills
            </h2>
            <hr />
            <h3>An unquenchable thirst for learning</h3>
            <h3>Overview</h3>
            <p>
              I easily switch between looking at the bigger picture and a
              detailed perspective.
            </p>
            <h3>Communication / Teaching skill</h3>
            <p>
              I'm great at adapting that which I need to explain to the
              understanding-level of the person who is listening. I never look
              down on someone for having less intelligence than others. Some
              people just need that one little extra bit before the light
              switches on, and there's no shame in that.
            </p>
            <h3>Highly structured</h3>
            <p>
              In my work-flow I always need things to be well organized. In
              areas where this is absent I tend to create new structures. I also
              try to optimize the efficiency and efficacy of the current
              structures and flows. Kind of similar to how good programmers
              constantly try to improve the performance, readability and
              abstraction of their code.
            </p>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default resume;

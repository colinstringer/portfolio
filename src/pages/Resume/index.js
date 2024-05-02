import "./style.css";
import React from "react";
import { FaLanguage, FaCodepen, FaCertificate } from "react-icons/fa";
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
            <br />
            <p>
              <MdLocationCity /> • Ridderkerk, Zuid-Holland
            </p>
            <p>
              <TiCalendar /> • Date of birth: 1st of April 1991
            </p>
            <p>
              <FiPhone /> • 06 2331 4710
            </p>
            <p>
              <GoMail /> • colinstringer2@gmail.com
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

            <h3 className="highlight">Scrum Master • Micpoint B.V.</h3>
            <p>
              After just 2 months at Micpoint as the team's Frontend Developer,
              my colleagues noticed my structured work-flow and assertive
              approach in interactions. They appreciated my honest and direct
              communication, which led to the opportunity for me to step into
              the role of the team's Scrum Master.
            </p>
            <p style={{ fontStyle: "italic" }}>Houten, 2022-2023</p>
            <h3 className="highlight">
              Frontend Web Development • Micpoint B.V.
            </h3>
            <p>
              My second working experience as a developer was as a Frontend
              Angular Developer in Micpoint. Micpoint is a small B2B oriented
              company of around 20 employees that offers solutions for fleet
              management.
            </p>
            <p>
              A fleet in this context is the total sum of vehicles that a
              company possesses. One of the main products Micpoint sells is a
              device that can keep track of all the journeys that a vehicle
              makes, which is necessary knowledge for the tax authorities.
            </p>
            <p>
              Per day, millions of vehicle location data are uploaded, processed
              and then stored in a database. My job was to create a new web
              application from scratch, for the customers to be able to manage
              their fleet data.
            </p>
            <p style={{ fontStyle: "italic" }}>Houten, 2022-2023</p>
            <h3 className="highlight">Helpdesk Agent • GGD</h3>
            <p>
              In 2020 I worked as a helpdesk agent for the Dutch GGD covid
              project (vaccinations and tests).
            </p>
            <p style={{ fontStyle: "italic" }}>Fully Remote, 2020</p>

            <h3 className="highlight">Math tutor</h3>
            <p>
              As a Math Tutor, I provided personalized instruction and guidance
              to students seeking to strengthen their mathematical skills.
              Tailoring my approach to each student's needs, I fostered an
              engaging and supportive learning environment that promoted
              understanding and confidence in mathematical concepts.
            </p>
            <p style={{ fontStyle: "italic" }}>Veenendaal, 2014-2021</p>
            <h3>Trainer of helpdesk agents • GGD</h3>
            <p>
              In 2020-2021 I trained hundreds of new helpdesk agents for the
              Dutch GGD covid project (vaccinations and tests). This function
              contained 2 main responsibilities.
            </p>
            <p>1. Creating and maintaining new training materials</p>
            <p>
              2. Training the new helpdesk agents; usually in a group setting
              and occasionally 1-on-1
            </p>
            <p style={{ fontStyle: "italic" }}>Fully Remote, 2021</p>
            <h3>Working abroad in a B&B • Scotland</h3>
            <p>
              In 2017-2018 I spent some time looking for my Scottish roots. You
              see, my grandfather was from Scotland.
            </p>
            <p style={{ fontStyle: "italic" }}>Scotland Insch, 2017-2018</p>

            <br />
            <h2>
              <FaLanguage /> Languages
            </h2>
            <hr />
            <h3>Dutch • native</h3>
            <h3>English • fluent</h3>
            <br />
          </div>
          <div className="right-content">
            <h2>
              <FiBook /> Education{" "}
            </h2>
            <hr />
            <h3>HBO Computer Science (informatica) • Propedeuse - cum laude</h3>
            <p>Avans hogeschool </p>
            <p style={{ fontStyle: "italic" }}>Den Bosch, 2016-2017</p>
            <h3>Full stack web development bootcamp</h3>
            <p>Codaisseur • 3 month intensive web development training</p>
            <p style={{ fontStyle: "italic" }}>Amsterdam, 2020</p>
            <br />
            <h2>
              <FaCertificate /> Certifications
            </h2>
            <hr />
            <h3>Scrum Master • IIABC</h3>
            <p>
              Certificaat Agile Business Advanced • Facilitating the Process
            </p>
            <h3>Software Tester Foundation • ISTQB</h3>
            <p>Certified Tester Foundation Level • CTFL</p>
            <br />
            <h2>
              <FaCodepen /> Soft Skills
            </h2>
            <hr />
            <h3>Overview</h3>
            <p>
              I easily switch between looking at the bigger picture and a
              detailed perspective.
            </p>
            <h3>Communication / Teaching skill</h3>
            <p>
              I'm great at adapting that which I need to explain to the
              understanding-level or experience-level of the person who is
              listening. I never look down on someone who doesn't pick up new
              ideas as fast as others. Some people just need that one little
              extra bit before the light switches on, and there's no shame in
              that. I have 7 years of experience in math tutoring - high school
              level.
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
            <h3>Process optimization</h3>
            <p>
              I'm proficient in process optimization techniques aimed at
              improving operational efficiency, reducing costs, and enhancing
              overall performance. Skilled in analyzing existing workflows,
              identifying areas for improvement, and implementing strategic
              solutions to streamline processes.
            </p>
            <h3>An unquenchable thirst for learning</h3>
            <p>
              I just love learning.
            </p>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default resume;

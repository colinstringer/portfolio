import "./style.css";
import React, { useState } from "react";

function Project() {
  const [designGifDisplay, setDesignGifDisplay] = useState("none");
  const [designButtonDisplay, setDesignButtonDisplay] = useState("block");

  const [kaartGifDisplay, setKaartGifDisplay] = useState("none");
  const [kaartButtonDisplay, setKaartButtonDisplay] = useState("block");

  const [evenementGifDisplay, setEvenementGifDisplay] = useState("none");
  const [evenementButtonDisplay, setEvenementButtonDisplay] = useState("block");

  function turnOnDesignGif() {
    setDesignGifDisplay("block");
    setDesignButtonDisplay("none");
  }

  function turnOnKaartGif() {
    setKaartGifDisplay("block");
    setKaartButtonDisplay("none");
  }

  function turnOnEvenementGif() {
    setEvenementGifDisplay("block");
    setEvenementButtonDisplay("none");
  }

  const designGifStyle = {
    display: designGifDisplay,
  };
  const designButtonStyle = {
    display: designButtonDisplay,
  };

  const kaartGifStyle = {
    display: kaartGifDisplay,
  };
  const kaartButtonStyle = {
    display: kaartButtonDisplay,
  };

  const evenementGifStyle = {
    display: evenementGifDisplay,
  };
  const evenementButtonStyle = {
    display: evenementButtonDisplay,
  };

  return (
    <div className="project">
      <div className="project-container">
        <h1>My portfolio project (2021)</h1>
        <h2>Client:</h2>
        <h2>Samenwerkingsverband Autisme Gelderland (SAG)</h2>
        <h2>
          Translation: the autism collaboration of Gelderland
          (Gelderland is the largest province in the Netherlands)
        </h2>

        <h2>
          <a href="https://autismegelderland.nl/">
            https://autismegelderland.nl/
          </a>
        </h2>
        <hr />
        <div>
          <h2>Design</h2>
          <p>We went for a clean and simple design choice</p>
          <button
            style={designButtonStyle}
            type="button"
            onClick={turnOnDesignGif}
          >
            View Design
          </button>
          <img
            style={designGifStyle}
            src="https://thumbs.gfycat.com/InsidiousDescriptiveChanticleer-size_restricted.gif"
            alt="Design"
          />
        </div>
        <hr />
        <div>
          <h2>"De sociale kaart"</h2>
          <p>
            All members who created a profile can be found in the social map.
          </p>
          <button
            style={kaartButtonStyle}
            type="button"
            onClick={turnOnKaartGif}
          >
            View social map
          </button>
          <img
            style={kaartGifStyle}
            src="https://thumbs.gfycat.com/SpitefulFarawayFairyfly-size_restricted.gif"
            alt="Sociale kaart"
          />
        </div>
        <hr />
        <div>
          <h2>Events</h2>
          <p>Members can also add events.</p>
          <button
            style={evenementButtonStyle}
            type="button"
            onClick={turnOnEvenementGif}
          >
            Bekijk evenementen
          </button>
          <img
            style={evenementGifStyle}
            src="https://thumbs.gfycat.com/TalkativeAdventurousIsabellinewheatear-size_restricted.gif"
            alt="Evenementen"
          />
        </div>
        <hr />
      </div>
    </div>
  );
}

export default Project;

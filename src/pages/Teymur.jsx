import React, { useMemo, useState } from "react";
import '../App.css';

function Teymur() {
  const [isFlipped, setIsFlipped] = useState(false);

  const containerMove = (callback) => {
    const shell = document.getElementById('shell');
    shell.style.transform = shell.style.transform === 'translateX(0%)' ? 'translateX(-50%)' : 'translateX(0%)';
    setTimeout(callback, 500);
  };

  const openCard = () => {
    const container = document.getElementById('container');
    const box1 = document.getElementById('box1');
    const box1Back = document.getElementById('box1_back');

    container.style.transform = container.style.transform === 'rotateX(0deg)' ? 'rotateX(10deg)' : 'rotateX(0deg)';
    box1.style.transform = box1.style.transform === 'rotate3d(0, 1, 0, -180deg)' ? 'rotate3d(0, 1, 0, 0deg)' : 'rotate3d(0, 1, 0, -180deg)';
    box1Back.style.transform = box1Back.style.transform === 'rotate3d(0, 1, 0, -180deg)' ? 'rotate3d(0, 1, 0, 0deg)' : 'rotate3d(0, 1, 0, -180deg)';

  };

  return (
    <div className="App">
      <div className="card">
      <div id="shell">
      <div id="container">
        <div id="box1" className="box" onClick={() => containerMove(() => openCard())}>
          <h1>Click me</h1>
        </div>
        <div id="box1_back" className="box">
              <video autoPlay muted loop className="video__container">
                <source src="https://player.vimeo.com/external/370331493.sd.mp4?s=e90dcaba73c19e0e36f03406b47bbd6992dd6c1c&profile_id=139&oauth2_token_id=57447761" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div id="box2" className="box" onClick={() => containerMove(() => openCard())}>
              <h6> blah! blah! blah!<br /> whatever<br/>blah! blah! blah! your Welcome.</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Teymur;

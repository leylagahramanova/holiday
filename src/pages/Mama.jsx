import React, { useMemo, useState } from "react";
import '../App.css';

function Mama() {
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
          <h1>Click</h1>
        </div> 
    
            <div id="box1_back" className="box">
            <div i className="video__container">
</div>
</div>
            <div id="box2" className="box" onClick={() => containerMove(() => openCard())}>
              <h2>
              Sennin heyatinda daha az axmaq insanlar və daha chox sarlamliq arzulayiram</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mama;

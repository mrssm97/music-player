import React, { useState } from "react";
import "./home.css";
export default function Home() {
  const [curTim, setCurTim] = useState(0);
  console.log(curTim);
  return (
    <div className="main">
      <div className="music-player w-25">
        <h3 className="bg-info mt-3 py-3 w- text-center bg-primary rounded-2 text-light">
          Music Player
        </h3>
        <div className="p-3 bg-info w-100 text-light d-flex flex-column align-items-center rounded-3">
          <nav className="navigation d-flex justify-content-between w-100">
            <div className="btn rounded-circle bg-light  text-primary">
              <i className="fa-solid fa-angle-left"></i>
            </div>
            <div className="rounded-circle bg-light btn text-primary">
              <i className="fa-solid fa-bars"></i>
            </div>
          </nav>
          <img src="/assets/poster.jpg" alt="" className="my-3" />
          <audio controls className="my-3">
            <source src="/assets/Despacito.mp3" type="audio/mpeg" />
          </audio>
          <input type="range" className="w-100" />
          <div className="controls w-100 d-flex justify-content-around my-3">
            <div className="backward btn btn-light text-primary  rounded-circle">
              <i className="fa-solid fa-backward"></i>
            </div>
            <div className="pause btn btn-light text-primary  rounded-circle">
              <i className="fa-solid fa-pause"></i>
            </div>
            <div className="forward btn btn-light text-primary rounded-circle">
              <i className="fa-solid fa-forward"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

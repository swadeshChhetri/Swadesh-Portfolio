import React from "react";
import "./work.css";

const ProjectSection = () => {
  return (
    <section className="project red" id="project">
      <h2 className="gf_h2 heading">
        <i className="bi bi-briefcase-fill"></i>
        Featured<span> Work</span>
      </h2>
      <div className="project-container">

        <div
          className="project-box"
          data-aos="fade-down"
          data-aos-duration="1500"
        >
          <img src="img/airesume.png" alt="" />
          <div className="project-layer">
            <h4>AI Resume Shortlisting Bot</h4>
            <p></p>
            <a
              href="https://resume-analyzer-app.vercel.app/"
              className="bi bi-box-arrow-up-right"
              style={{ fontSize: "18px", textDecoration: "none" }}
            ></a>
          </div>
        </div>

        <div
          className="project-box"
          data-aos="fade-down"
          data-aos-duration="1500"
        >
          <img src="img/QuickCart.png" alt=" " />
          <div className="project-layer">
            <h4>QuickCart</h4>
            <p></p>
            <a
              href="https://swadeshchhetri.github.io/QuickCart/"
              className="bi bi-box-arrow-up-right"
              style={{ fontSize: "18px", textDecoration: "none" }}
            ></a>
          </div>
        </div>

        <div
          className="project-box"
          data-aos="fade-down"
          data-aos-duration="1500"
        >
          <img src="img/finance.png" alt=" " />
          <div className="project-layer">
            <h4>Finance-Management-Portal</h4>
              <a
              href="https://www.tradesfairs.com/financeportal"
              className="bi bi-box-arrow-up-right"
              style={{ fontSize: "18px", textDecoration: "none" }}
            ></a>

          </div>
        </div>

        {/* New Projects  */}
        <div
          className="project-box"
          data-aos="fade-down"
          data-aos-duration="1500"
        >
          <img src="img/konnektglobe.png" alt="" />
          <div className="project-layer">
            <h4>KonnektGlobe</h4>
            <p></p>
            <a
              href="https://konnektglobe.vercel.app/"
              className="bi bi-box-arrow-up-right"
              style={{ fontSize: "18px", textDecoration: "none" }}
            ></a>
          </div>
        </div>

        <div
          className="project-box"
          data-aos="fade-down"
          data-aos-duration="1500"
        >
          <img src="img/expo.png" alt=" " />
          <div className="project-layer">
            <h4>INDTECEXPO</h4>
            <p></p>
            <a
              href="https://indtecexpo.vercel.app/"
              className="bi bi-box-arrow-up-right"
              style={{ fontSize: "18px", textDecoration: "none" }}
            ></a>
          </div>
        </div>

        <div
          className="project-box"
          data-aos="fade-down"
          data-aos-duration="1500"
        >
          <img src="img/jaguar.png" alt=" " />
          <div className="project-layer">
            <h4>Jaguar Media & Entertainment </h4>
            <a
              href="https://jaguarmedia.vercel.app/"
              className="bi bi-box-arrow-up-right"
              style={{ fontSize: "18px", textDecoration: "none" }}
            ></a>
          </div>
        </div>


        <div
          className="project-box"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <img src="img/todo.png" alt=" " />
          <div className="project-layer">
            <h4>ToDo-list App</h4>

            <a
              href="https://swadeshchhetri.github.io/Todo-list/"
              className="bi bi-box-arrow-up-right"
              style={{ fontSize: "18px", textDecoration: "none" }}
            ></a>
          </div>
        </div>

        <div
          className="project-box"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <img src="img/Calculator.png" alt=" " />
          <div className="project-layer">
            <h4>Calculator</h4>
            <a
              href="https://swadeshchhetri.github.io/Calculator/"
              className="bi bi-box-arrow-up-right"
              style={{ fontSize: "18px", textDecoration: "none" }}
            ></a>
          </div>
        </div>

        <div
          className="project-box"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <img src="img/connect4.png" alt=" " />
          <div className="project-layer">
            <h4>Connect4</h4>
            <a
              href="https://swadeshchhetri.github.io/Connect4/"
              className="bi bi-box-arrow-up-right"
              style={{ fontSize: "18px", textDecoration: "none" }}
            ></a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProjectSection;

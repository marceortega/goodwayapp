import React from "react";
import school from "../src/assets/school.png";
import icono from "../src/assets/icono.png";
import iman from "../src/assets/iman.png";
import walk from "../src/assets/walk.png";
import drive from "../src/assets/drive.png";
import transp from "../src/assets/transp.png";
import { Icon } from "@iconify/react";
import heartFilled from "@iconify/icons-ant-design/heart-filled";
import "./Tarjet.css";

const Tarjet = () => {
  return (
    <div className=" container   tarjet">
      <div class="row">
        <div className="col-9  supName ">
          <p className="pagraf mt-2">
            Mauro-Sheridan Interdistrict Magnet for Science, Technology and
            Communications
          </p>
        </div>
        <div className="col-3  ">
          <img className="supImage" src={school} alt=""></img>
        </div>
      </div>
      <div class="row ">
        <div className="col-3  pt-2  walk">
          <span>
            <img
              className=""
              style={{ width: "100%", height: "100% " }}
              src={walk}
              alt=""
            ></img>{" "}
          </span>
          <span> 10min</span>
        </div>
        <div className="col-3 pt-2 drive">
          <span>
            <img
              className=""
              style={{ width: "50%", height: "50% " }}
              src={drive}
              alt=""
            ></img>{" "}
          </span>
          <span> 5min</span>
        </div>
        <div className="col-3 pt-2 transp ">
          <span>
            <img
              className=""
              style={{ width: "50%", height: "50% " }}
              src={transp}
              alt=""
            ></img>{" "}
          </span>
          <span> 7min</span>
        </div>
        <div className="col-3 pt-3 pl-4 circle  ">
          <span>
            <img
              classname="circleTriColor"
              style={{ width: "50%", height: "50%" }}
              src={icono}
              alt=""
            ></img>{" "}
          </span>
        </div>
      </div>

      <div class="row  align-items-center">
        <div className="col pt-2  d-flex justify-content-center centerImage">
          <img
            src={iman}
            alt=""
            style={{ width: "65px", height: "55px " }}
          ></img>
        </div>
        <div className="col infoData">
          <div class="row mt-2 pl-2  ">
            <div classname="col  ">
              <p className="grade">Grades Available:</p>
            </div>
          </div>
          <div class="row pl-2 ">
            <div classname="col">
              <p className="detailsGrade"> PreK3 - 4</p>
            </div>
          </div>
        </div>
      </div>

      <div class="row mt-2 footerTarjet">
        <div className="col">
          <button type="button" class="btn btn-outline-info btnInfo">
            <a
              className=" mt-1 d-flex justify-content-center textButton"
              href="https://www.consiliumbots.com/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              EXPLORE SCHOOL
            </a>
          </button>
        </div>
        <div className="col">
          <button
            type="button"
            class="btn btn-outline-danger d-flex justify-content-center likeButton"
          >
            <Icon
              className=""
              icon={heartFilled}
              style={{ color: "#FC010A" }}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tarjet;

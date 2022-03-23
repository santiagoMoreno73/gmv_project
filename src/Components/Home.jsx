import React from "react";

// css
import "./Styles/Components/Home.css";

// link
import { Link } from "react-router-dom";

// components
import Navigation from "../Components/Shared/Navigation";

// icons
import { IoIosMenu } from "react-icons/io";
import { IoIosAttach } from "react-icons/io";
import { IoMdPin } from "react-icons/io";
import { IoIosListBox } from "react-icons/io";
import { IoIosMic } from "react-icons/io";
import { IoMdCamera } from "react-icons/io";
import { IoMdSend } from "react-icons/io";
import { IoIosStats } from "react-icons/io";
import { IoMdAddCircleOutline } from "react-icons/io";

const Home = () => {
  return (
    <>
      <Navigation />
      <div className="box-image">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/react-store-3a221.appspot.com/o/GMV-logo-221019.png?alt=media&token=220c19f4-6fa2-4efd-ab6c-5d67c6dc8398"
          alt="Cargando imagen..."
        />
      </div>
      <div className="grid-options">
        <div className="content-option">
          <div className="home-options">
            <IoIosAttach style={{ fontSize: 30, color: "white" }} />
          </div>
          <p>Mis Documentos</p>
        </div>
        <div className="content-option">
          <div className="home-options">
            <IoMdPin style={{ fontSize: 30, color: "white" }} />
          </div>
          <p>Ubicación</p>
        </div>
        <div className="content-option">
          <div className="home-options">
            <IoIosListBox style={{ fontSize: 30, color: "white" }} />
          </div>
          <p>Agenda</p>
        </div>
        <div className="content-option">
          <div className="home-options">
            <IoIosMic style={{ fontSize: 30, color: "white" }} />
          </div>
          <p>Ponentes</p>
        </div>
        <div className="content-option">
          <div className="home-options">
            <IoIosAttach style={{ fontSize: 30, color: "white" }} />
          </div>
          <p>Recursos</p>
        </div>
        <div className="content-option">
          <div className="home-options">
            <IoMdCamera style={{ fontSize: 30, color: "white" }} />
          </div>
          <p>Fotogalería</p>
        </div>
        <div className="content-option">
          <div className="home-options">
            <IoIosStats style={{ fontSize: 30, color: "white" }} />
          </div>
          <p>Encuestas</p>
        </div>
        <div className="content-option">
          <Link
            to={"/muros"}
            style={{ textDecoration: "none", color: "black" }}
          >
            <div className="home-options">
              <IoIosMenu style={{ fontSize: 30, color: "white" }} />
            </div>
          </Link>
          <p>Muros</p>
        </div>
        <div className="content-option">
          <div className="home-options">
            <IoMdSend style={{ fontSize: 30, color: "white" }} />
          </div>
          <p>Lugares</p>
        </div>
        <div className="content-option">
          <div className="home-options">
            <IoMdAddCircleOutline style={{ fontSize: 30, color: "white" }} />
          </div>
          <p>Extra</p>
        </div>
      </div>
    </>
  );
};

export default Home;

import React from "react";

// css
import "./Styles/Components/Home.css";

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
      <div>
        <div className="home-options">
          <IoIosAttach />
        </div>
        <p>Mis Documentos</p>
        <IoMdPin />
        <p>Ubicación</p>
        <IoIosListBox />
        <p>Agenda</p>
        <IoIosMic />
        <p>Ponentes</p>
        <IoIosAttach />
        <p>Recursos</p>
        <IoMdCamera />
        <p>Fotogalería</p>
        <IoIosStats />
        <p>Encuestas</p>
        <IoIosMenu />
        <p>Muros</p>
        <IoMdSend />
        <p>Lugares</p>
        <IoMdAddCircleOutline />
        <p>Extra</p>
      </div>
    </>
  );
};

export default Home;

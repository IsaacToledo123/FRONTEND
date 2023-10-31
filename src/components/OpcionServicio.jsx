import React from "react";
import { useState } from "react";
import Añadir from "../img/añadir.png";
import CabñaInfo from "./CabñaInfo";

function OpcionServicio({ aventura }) {
  const [mostrar, setMostrar] = useState(false);

  const toggleMostrar = () => {
    setMostrar(!mostrar);
  };

  return (
    <div>
      <div className="flex items-center pb-10" onClick={toggleMostrar}>
        <div className="bg-gray-200 pl-4 h-10 w-60 text-center p-1 hover:bg-gray-300">
          {aventura}
        </div>
        <img src={Añadir} className="h-10 w-10 ml-4 hover:animate-spin" />
      </div>
      {mostrar && (
        <div >
          <CabñaInfo />
        </div>
      )}
    </div>
  );
}

export default OpcionServicio;

import React from "react";
import '../App.css';
import { Edad } from "./Edad";

export const Mascota = ({name,age}) => {
return(
    <>
    <h3 className="Mascota" >Soy una mascota y me llamo {name} </h3>
    <Edad age = {age} />
</>
);
}

//export default NombreCompleto

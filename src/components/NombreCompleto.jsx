import { Edad } from "./Edad";



export const NombreCompleto = (props) => {
        console.log("props",props);
    return(
        <>
        <h2 className="App">Me llamo {props.name} </h2>
        <Edad age = {props.age} ></Edad>
    </>
    );
}

//export default NombreCompleto
//style={{display:"none"}}
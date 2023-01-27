import React from "react"
import '../App.css'
import PropTypes from 'prop-types'

export const Edad = ({age}) => {
return(
    <>
    <h3 className="App"  >mi edad es {age} años </h3>
</>
);
}

Edad.propTypes ={
    age: PropTypes.number.isRequired
}

//export default NombreCompleto

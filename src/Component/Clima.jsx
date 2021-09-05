import React from 'react';
import PropTypes from 'prop-types';

const Clima = ({resultado}) => {

    // Extraer los valores

    const {name, main} = resultado;

    // Cuando este componente se ejecuta me da un error propiedada temp
    // puedo tambien usar if(!name) return null

    // la temperatura que trae en en grado Kelvin por ende creamos esta variable
    const kelvin = 273.15;

    return ( 
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>El clima de {name} es:</h2>
                <p className="temperatura">
                    {parseFloat(main.temp - kelvin,10).toFixed(2)} <span> &#x2103;</span>
                </p>
                <p>Temperatura Maxima: 
                    {parseFloat(main.temp_max - kelvin,10).toFixed(2)} <span> &#x2103;</span>
                </p>
                <p>Temperatura Minima: 
                    {parseFloat(main.temp - kelvin,10).toFixed(2)} <span> &#x2103;</span>
                </p>
            </div>
        </div>
     );
}

Clima.propTypes = {
        resultado: PropTypes.object.isRequired
}

export default Clima;
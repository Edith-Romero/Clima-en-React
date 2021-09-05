import React, { useState } from 'react'
import Error from './Error';
import PropTypes from 'prop-types';



const Formulario = ({busqueda,setBusqueda,setConsultar}) => {

    const [error,setError] = useState(false);

    // extraer la ciudad y el pais
     const {ciudad,pais} = busqueda;  

    // funcion que coloca el elemento en el state
    const handleChange = e =>{
        // Actualizar el state
        setBusqueda({
            ...busqueda,
            [e.target.name]:e.target.value
        })
    }
    // Cuando el usuario le da submit al formato
    const handleSubmit = e => {
        e.preventDefault();
       
        // validar
        if(ciudad === '' || pais.trim() === '') {
            setError(true);
            return;    
        }
        setError(false);
        
        // pasarlo al componente principal
        setConsultar(true)
    }

    return (  
            <form 
                onSubmit={handleSubmit}
            >
                {error ? <Error mensaje = "Ambos Campos son Obligatorios"/>:null}

                <div className="input-field col s12">
                    <input
                        type="text"
                        name="ciudad"
                        id="ciudad"
                        value = {ciudad}
                        onChange={handleChange}
                    />
                <label htmlFor="ciudad">Ciudad:</label>
                </div>
                <div className="input-field col s12">
                    <select
                        name="pais"
                        id="pais"
                        value = {pais}
                        onChange={handleChange}
                    >
                        <option value="">---Seleccione un Pais---</option>
                        <option value="AR">Argentina</option>
                        <option value="CO">Colombia</option>
                        <option value="CR">Costa Rica</option>
                        <option value="ES">España</option>
                        <option value="US">Estados Unidos</option>
                        <option value="MX">México</option>
                        <option value="PE">Perú</option>
                        <option value="VE">Venezuela</option>
                    </select>
                    <label htmlFor="pais">Pais:</label>
                </div>
                <div className="input-field col s12">
                    <button
                        type="submit"
                        className="waves-effect waves-light btn-large btn-block yellow accent-4 col s12"
                    >Buscar Clima</button>
                </div>
            </form>
    );
}

Formulario.propTypes = {
    busqueda: PropTypes.object.isRequired,
    setBusqueda: PropTypes.func.isRequired,
    setConsultar: PropTypes.func.isRequired,
} 
 
export default Formulario;
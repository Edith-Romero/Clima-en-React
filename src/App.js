import { Fragment,useState,useEffect } from "react";
import Header from "./Component/Header";
import Formulario from "./Component/Formulario";
import Clima from "./Component/Clima";
import Error from './Component/Error';



function App() {

  const [busqueda,setBusqueda] = useState({
    ciudad: '',
    pais: ''
  })

  const [consultar,setConsultar] = useState(false);
  const [resultado,setResultado] = useState({});
  const [error,setError] = useState(false);


  // extraer la ciudad y el pais
  const {ciudad,pais} = busqueda;  

  // Esta esperandoque el usuario ingrese una ciudad 

  useEffect (()=>{
    consultarAPI();
    // eslint-disable-next-line
  },[consultar]);

  const consultarAPI = async ()=>{

    if(consultar){
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=723ab91104266c234d25530956fb6684`

      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
            
      setResultado(resultado);
      setConsultar(false);

      // Detecta si hubo resultado en la consulta
      
      if(resultado.cod === "404"){
        setError(true);
      }else{
        setError(false)
      }
    }

  }

  let mensaje = "";
  if(error) {
    mensaje = "No hay resultados"
  }

  const mystyle = {width: "50%", paddingLeft:"3%", paddingRight:"3%"};

  return (
    <Fragment>
      <Header
      titulo='Clima React App'
      />
      <div className="contenedor-form">
        <div className="container">
          <div className='row'>
            <div style={mystyle}>
            {(error) ?
                <Error 
                  mensaje={mensaje} 
                />
              :
                null
              }
            </div>
            <div className="col m6 s12">
              <Formulario
                busqueda={busqueda}
                setBusqueda={setBusqueda}
                setConsultar={setConsultar}
              />

              
            </div>
            <div className="col m6 s12">
              {(resultado.cod === 200) ? 
              (
                <Clima 
                  resultado={resultado}
                />
              ) 
              : null
              }
            </div>
          </div>
        </div>
      </div>       
      </Fragment>
  );
}

export default App;

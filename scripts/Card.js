function Card(props) {
//       const pseudo={
//             "&::after":{
//                 content: props.nombre, 
//                 width: "150px",
//                 height: "47px",
//             }    
//         }

    const {nombre, descripcion, ciudad, tamanio, precio, imagen, imagen2, imagen3} = props
    return <div className="card">
            <Slider  nombre={nombre} portada={imagen} imagen2={imagen2} imagen3={imagen3} alt={nombre}/>
            <div className="nombreYPrecio" >
            <p  className="nombre" >{nombre}</p>
            <p className="precio" >{precio}</p>
            </div>
            <p className="ciudad" >{ciudad}</p>
           
            <p>{descripcion}</p>
            <p className="tamanio" > {tamanio} Habitaciones</p>
            <div className="botonConteiner">   
            <button className="boton" >Reservar</button>
            </div> 

          </div>
  }
  
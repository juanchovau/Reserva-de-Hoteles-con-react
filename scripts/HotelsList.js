class HotelsList extends React.Component{

    //filter = [];
   // console.log(this.props)


    render(){
    const {where, cost, size} = this.props;
//---------candicional cuando no se ha escogido nada------------//
    if(where === "Todos los paises" && cost === "Todos los costos" && size === "Culquier tamaño"){ 
      return <div className="hotelsList" >
              {hoteles.map(element => {
                return < Card 
                   
                   nombre={element.nombre} 
                   descripcion={element.descripcion}
                   ciudad={`${element.ciudad}, ${element.pais}`}
                   tamanio={element.tamanio}
                   precio={element.precio}
                   imagen={element.imagen}
                   imagen2={element.imagen2}
                   imagen3={element.imagen3}
                   key={element.id}
               />}
       
               )} 
            </div>}
//-----------Condicional cuendo se ha selecionado pais---------//
   if(where !== "Todos los paises" && cost === "Todos los costos" && size === "Culquier tamaño"){ 
        console.log(where)
        const newHotels = hoteles.filter(element => {return element.pais === where})
        console.log(newHotels)
    return <div className="hotelsList" >
              {newHotels.map(element => {
              return < Card 
                   
                   nombre={element.nombre} 
                   descripcion={element.descripcion}
                   ciudad={`${element.ciudad}, ${element.pais}`}
                   tamanio={element.tamanio}
                   precio={element.precio}
                   imagen={element.imagen}
                   imagen2={element.imagen2}
                   imagen3={element.imagen3}
                   key={element.id}
               />})
    
    
            } 
        </div>}
//-----------Condicional cuendo se ha selecionado costo---------//
   if(where === "Todos los paises" && cost !== "Todos los costos" && size === "Culquier tamaño"){ 
    console.log(cost)
    const newHotels = hoteles.filter(element => {return element.precio === cost})
    console.log(newHotels)
   return <div className="hotelsList" >
   {newHotels.map(element => {
       return < Card 
                  
                  nombre={element.nombre} 
                  descripcion={element.descripcion}
                  ciudad={`${element.ciudad}, ${element.pais}`}
                  tamanio={element.tamanio}
                  precio={element.precio}
                  imagen={element.imagen}
                  imagen2={element.imagen2}
                  imagen3={element.imagen3}
                  key={element.id}
              />})   
   } 
  </div>
 
  }
//-----------Condicional cuendo se ha selecionado tamaño---------//
  if(where === "Todos los paises" && cost === "Todos los costos" && size !== "Culquier tamaño"){ 
    console.log(cost)
    if(size === "Pequeño"){
      const newHotels = hoteles.filter(element => {return element.tamanio <= 10})
      console.log(newHotels)
     return <div className="hotelsList" >
     {newHotels.map(element => {
         return < Card 
                    
                    nombre={element.nombre} 
                    descripcion={element.descripcion}
                    ciudad={`${element.ciudad}, ${element.pais}`}
                    tamanio={element.tamanio}
                    precio={element.precio}
                    imagen={element.imagen}
                    imagen2={element.imagen2}
                    imagen3={element.imagen3}
                    key={element.id}
                />})  
     } 
      </div>
    }
    if(size === "Mediano"){
      const newHotels = hoteles.filter(element => {return element.tamanio > 10 && element.tamanio <= 20 })
      console.log(newHotels)
     return <div className="hotelsList" >
     {newHotels.map(element => {
         return < Card 
                    
                    nombre={element.nombre} 
                    descripcion={element.descripcion}
                    ciudad={`${element.ciudad}, ${element.pais}`}
                    tamanio={element.tamanio}
                    precio={element.precio}
                    imagen={element.imagen}
                    imagen2={element.imagen2}
                    imagen3={element.imagen3}
                    key={element.id}
                />})  
     } 
      </div>
    }
    if(size === "Grande"){
      const newHotels = hoteles.filter(element => {return element.tamanio > 20 })
      console.log(newHotels)
     return <div className="hotelsList" >
     {newHotels.map(element => {
         return < Card 
                    
                    nombre={element.nombre} 
                    descripcion={element.descripcion}
                    ciudad={`${element.ciudad}, ${element.pais}`}
                    tamanio={element.tamanio}
                    precio={element.precio}
                    imagen={element.imagen}
                    imagen2={element.imagen2}
                    imagen3={element.imagen3}
                    key={element.id}
                />})  
     } 
      </div>
    }
  }
//-----------Condicional cuendo se ha selecionado paise y costo---------//
  if(where !== "Todos los paises" && cost !== "Todos los costos" && size === "Culquier tamaño"){ 
    console.log(cost)
    const newHotels = hoteles.filter(element => {return element.precio === cost && element.pais === where})
    console.log(newHotels)
   return <div className="hotelsList" >
   {newHotels.map(element => {
       return < Card 
                  
                  nombre={element.nombre} 
                  descripcion={element.descripcion}
                  ciudad={`${element.ciudad}, ${element.pais}`}
                  tamanio={element.tamanio}
                  precio={element.precio}
                  imagen={element.imagen}
                  imagen2={element.imagen2}
                  imagen3={element.imagen3}
                  key={element.id}
              />})   
   } 
  </div>
 
  }
  //-----------Condicional cuendo se ha selecionado tamaño y costo---------//
  if(where === "Todos los paises" && cost !== "Todos los costos" && size !== "Culquier tamaño"){ 
    console.log(cost)
    if(size === "Pequeño"){
      const newHotels = hoteles.filter(element => {return element.precio === cost && element.tamanio <= 10  })
      console.log(newHotels)
     return <div className="hotelsList" >
     {newHotels.map(element => {
         return < Card 
                    
                    nombre={element.nombre} 
                    descripcion={element.descripcion}
                    ciudad={`${element.ciudad}, ${element.pais}`}
                    tamanio={element.tamanio}
                    precio={element.precio}
                    imagen={element.imagen}
                    imagen2={element.imagen2}
                    imagen3={element.imagen3}
                    key={element.id}
                />})  
     } 
      </div>
    }
    if(size === "Mediano"){
      const newHotels = hoteles.filter(element => {return element.tamanio > 10 && element.tamanio <= 20 && element.precio === cost })
      console.log(newHotels)
     return <div className="hotelsList" >
     {newHotels.map(element => {
         return < Card 
                    
                    nombre={element.nombre} 
                    descripcion={element.descripcion}
                    ciudad={`${element.ciudad}, ${element.pais}`}
                    tamanio={element.tamanio}
                    precio={element.precio}
                    imagen={element.imagen}
                    imagen2={element.imagen2}
                    imagen3={element.imagen3}
                    key={element.id}
                />})  
     } 
      </div>
    }
    if(size === "Grande"){
      const newHotels = hoteles.filter(element => {return element.tamanio > 20 && element.precio === cost})
      console.log(newHotels)
     return <div className="hotelsList" >
     {newHotels.map(element => {
         return < Card 
                    
                    nombre={element.nombre} 
                    descripcion={element.descripcion}
                    ciudad={`${element.ciudad}, ${element.pais}`}
                    tamanio={element.tamanio}
                    precio={element.precio}
                    imagen={element.imagen}
                    imagen2={element.imagen2}
                    imagen3={element.imagen3}
                    key={element.id}
                />})  
     } 
      </div>
    }
  }
//-----------Condicional cuendo se ha selecionado tamaño y pais---------//
    if(where !== "Todos los paises" && cost === "Todos los costos" && size !== "Culquier tamaño"){ 
     
      if(size === "Pequeño"){
        const newHotels = hoteles.filter(element => {return element.pais === where && element.tamanio <= 10  })
        console.log(newHotels)
       return <div className="hotelsList" >
       {newHotels.map(element => {
           return < Card 
                      
                      nombre={element.nombre} 
                      descripcion={element.descripcion}
                      ciudad={`${element.ciudad}, ${element.pais}`}
                      tamanio={element.tamanio}
                      precio={element.precio}
                      imagen={element.imagen}
                      imagen2={element.imagen2}
                      imagen3={element.imagen3}
                      key={element.id}
                  />})  
       } 
        </div>
      }
      if(size === "Mediano"){
        const newHotels = hoteles.filter(element => {return element.tamanio > 10 && element.tamanio <= 20 && element.pais === where})
        console.log(newHotels)
       return <div className="hotelsList" >
       {newHotels.map(element => {
           return < Card 
                      
                      nombre={element.nombre} 
                      descripcion={element.descripcion}
                      ciudad={`${element.ciudad}, ${element.pais}`}
                      tamanio={element.tamanio}
                      precio={element.precio}
                      imagen={element.imagen}
                      imagen2={element.imagen2}
                      imagen3={element.imagen3}
                      key={element.id}
                  />})  
       } 
        </div>
      }
      if(size === "Grande"){
        const newHotels = hoteles.filter(element => {return element.tamanio > 20 && element.pais === where})
        console.log(newHotels)
       return <div className="hotelsList" >
       {newHotels.map(element => {
           return < Card 
                      
                      nombre={element.nombre} 
                      descripcion={element.descripcion}
                      ciudad={`${element.ciudad}, ${element.pais}`}
                      tamanio={element.tamanio}
                      precio={element.precio}
                      imagen={element.imagen}
                      imagen2={element.imagen2}
                      imagen3={element.imagen3}
                      key={element.id}
                  />})  
       } 
        </div>
      }
    }
    //-----------Condicional cuendo se ha selecionado todo---------//
    if(where !== "Todos los paises" && cost !== "Todos los costos" && size !== "Culquier tamaño"){ 
     
      if(size === "Pequeño"){
        const newHotels = hoteles.filter(element => {return element.precio === cost && element.pais === where && element.tamanio <= 10  })
        console.log(newHotels)
       return <div className="hotelsList" >
       {newHotels.map(element => {
           return < Card 
                      
                      nombre={element.nombre} 
                      descripcion={element.descripcion}
                      ciudad={`${element.ciudad}, ${element.pais}`}
                      tamanio={element.tamanio}
                      precio={element.precio}
                      imagen={element.imagen}
                      imagen2={element.imagen2}
                      imagen3={element.imagen3}
                      key={element.id}
                  />})  
       } 
        </div>
      }
      if(size === "Mediano"){
        const newHotels = hoteles.filter(element => {return element.tamanio > 10 && element.tamanio <= 20 && element.precio === cost && element.pais === where })
        console.log(newHotels)
       return <div className="hotelsList" >
       {newHotels.map(element => {
           return < Card 
                      
                      nombre={element.nombre} 
                      descripcion={element.descripcion}
                      ciudad={`${element.ciudad}, ${element.pais}`}
                      tamanio={element.tamanio}
                      precio={element.precio}
                      imagen={element.imagen}
                      imagen2={element.imagen2}
                      imagen3={element.imagen3}
                      key={element.id}
                  />})  
       } 
        </div>
      }
      if(size === "Grande"){
        const newHotels = hoteles.filter(element => {return element.tamanio > 20 && element.precio === cost && element.pais === where })
        console.log(newHotels)
       return <div className="hotelsList" >
       {newHotels.map(element => {
           return < Card 
                      
                      nombre={element.nombre} 
                      descripcion={element.descripcion}
                      ciudad={`${element.ciudad}, ${element.pais}`}
                      tamanio={element.tamanio}
                      precio={element.precio}
                      imagen={element.imagen}
                      imagen2={element.imagen2}
                      imagen3={element.imagen3}
                      key={element.id}
                  />})  
       } 
        </div>
      }
    }
  };

    

    
       
}
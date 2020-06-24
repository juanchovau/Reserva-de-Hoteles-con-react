
//import Test from "./Test";

// function Test(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

class MainContent extends React.Component{

  state={
    from: today,
    to:today.valueOf() + 864000000,
    where:"Todos los paises",
    cost:"Todos los costos",
    size:"Culquier tamaño"
  }

  HandleChange = (form) =>{

    //TO.DO desestructurar la info para poder utilizarla en los filtros pasandola como props  

    this.setState({from:form.from, to:form.to, where:form.where, cost:form.cost, size:form.size})
  
 
  }

   render(){
     const {from, to, where, cost, size} =this.state
    return  <div>
    <Header from={from} to={to} />
    <Filtro HandleChange= {this.HandleChange} />
    <div className="listContent" >
    <HotelsList where={where} cost={cost} size={size} /> 
    </div>

  </div> 
   } 

  // return   hoteles.map(e => {
  //   return  <div>
  //             <h1>{e.nombre}</h1>
  //             <Header name="juan" />
  //           </div>
  //     })
}

const Test1 = <MainContent />;

ReactDOM.render(
    Test1,
    document.getElementById('app')
  );

  
class Filtro extends React.Component{

    state={
        from: today,
        to:today,
        where: "Todos los paises",
        cost:"Todos los costos",
        size:"Culquier tamaño", 
        
    }
    
    setSelect = (e) =>{
        const {HandleChange} = this.props;
        const {value, name} = e.target;
        this.setState({[name]: value}, ()=> {HandleChange(this.state)} )
        
    }
 //   handleHijo = ()=>{
       //console.log(this.state.from, this.state.to, this.state.where, this.state.cost, this.state.size
  //      HandleChange();
   // }

    render(){
    
    const {from, to} = this.state
        
    return <div  className="form">
        <form /*onChange={this.handleHijo} */ >
            <input name="from" onChange={this.setSelect} value={from} type="date" />
            <input name="to" onChange={this.setSelect} value={to} type="date"/>
            <select  onChange={this.setSelect}   name="where" >
                <option value="Todos los paises" label="Todos los paises"/ >
                <option value="Colombia" label="Colombia" />
                <option value="Argentina" label="Argentina" />
                <option value="Brasil" label="Brasil" />
                <option value="Chile" label="Chile"/ >
                <option value="Uruguay" label="Uruguay"/ >
            </select>
            <select onChange={this.setSelect} name="cost" >
                <option value="Todos los costos" label="Todos los costos"/ >
                <option value="$" label="$"/ >
                <option value="$$" label="$$"/ >
                <option value="$$$" label="$$$"/ >
                <option value="$$$$" label="$$$$"/ >
               
            </select>
            <select onChange={this.setSelect} id="size"  name="size" >
            <option value="Culquier tamaño" label="Culquier tamaño"/ >
            <option value="Pequeño" label="Pequeño"/ >
            <option value="Mediano" label="Mediano"/ >
            <option value="Grande" label="Grande"/ >
            </select>

        </form>
    </div>
    }
       
}
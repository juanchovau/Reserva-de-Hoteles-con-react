class Slider extends React.Component{

state={
    left:"0px",
    primero: "active",
    segundo: "gray",
    tercero: "gray",
}

handleSlider = (e) =>{
    const {id, value} = e.target;
    this.setState({left: value})
    this.setState({primero: "gray", segundo: "gray", tercero:"gray" })
    this.setState({[id]:"active"})

    
}
    render(){        
    const {portada, imagen3, imagen2, nombre} = this.props
    return <div className="slider" >
             <div  style={{left:this.state.left}} className="slider__container">
                <img src={portada} alt={nombre} />
                <img src={imagen2} alt={nombre} />
                <img src={imagen3} alt={nombre} />
             </div>
             <div className="control" >
                <ul>
                    <li id="primero" value="0px" onClick={this.handleSlider} className={this.state.primero}></li>
                    <li id="segundo" value="-303px" onClick={this.handleSlider} className={this.state.segundo}></li>
                    <li id="tercero" value="-605px" onClick={this.handleSlider} className={this.state.tercero} ></li>
                </ul>
             </div>
            </div> 
            }

      }
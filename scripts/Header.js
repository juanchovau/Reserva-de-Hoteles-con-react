function Header(props) {

  const formatDate = (date) =>{
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' };
     let d = new Date(date).toLocaleString("es-CO", options);
     return (
      <span>
        {d}
      </span>
    )
  }
  return <div className="header">
          <div className="headerSuperior" >
            <h1 className="logo" >Cinco.Estrellas</h1>
            <div></div>
          </div>
          <div className="headerInferior" >
            <div className="headerInferior__fechas" >
              <p>HOTELES</p>
             <p>Desde el {formatDate(props.from)}</p> 
             <p>Hasta el {formatDate(props.to)}</p> 
            </div>
            <div className="headerInferior__title" >
              <p>EXPERIENCE</p>
              <p>MATTERS</p>
              <p>YOU DESERVE</p>
              <p>CINCO.ESTRELLAS</p>
            </div>

          </div>
        </div>;
}


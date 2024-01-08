import React from "react";
import '../hojas-de-estilo/Pokemon.css'

function Pokemon(props) { 

    const tipo = () => {
        const tipoPokemon = props.tipo
        return(tipoPokemon)
    }

    const tipo2 = () => {
        const tipoPokemon = props.tipo2;
        return(tipoPokemon)
    }


  return (
    <div className="pokemon">
      <p className="pokemon-id-back">{props.id}</p>
        <div className="pokemon-imagen">
            <img src={props.img} alt={props.nombre} />
        </div>
        <div className="pokemon-info">
            <div className="nombre-contenedor">
                <p className="pokemon-id">{props.id}</p>
                <h2 className="pokemon-nombre">{props.nombre}</h2>
            </div>
            <div className="pokemon-tipos">
                <p className={`${tipo()} tipo`}>{props.tipo}</p>
                <p className={`${tipo2()} tipo`}>{props.tipo2}</p>
            </div>
            <div className="pokemon-stats">
                <p className="stat">{props.height}</p>
                <p className="stat">{props.weight}</p>
            </div>
        </div>
    </div>
    )
}

export default Pokemon;
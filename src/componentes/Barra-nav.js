import React from "react";
import logo from '../imagenes/logo.png'
import '../hojas-de-estilo/Barra-nav.css'

function BarraNav({filtarPorTipo}) {

  
       
    const manejarClic = (tipo) =>{
        filtarPorTipo(tipo);
    }

    return(
        <header>
        <nav class="nav">
            <img src={logo} alt="Logo Pokédex" />
            <ul class="nav-list">
                <li class="nav-item"><button class="btn btn-header" id="ver-todos" onClick={() => manejarClic('ver-todos')}>Ver todos</button></li> 
                <li class="nav-item"><button class="btn btn-header normal" id="normal" onClick={() => manejarClic('normal')}>Normal</button></li> 
                <li class="nav-item"><button class="btn btn-header fire" id="fire" onClick={() => manejarClic('fire')}>Fire</button></li>
                <li class="nav-item"><button class="btn btn-header water" id="water" onClick={() => manejarClic('water')}>Water</button></li>
                <li class="nav-item"><button class="btn btn-header grass" id="grass" onClick={() => manejarClic('grass')}>Grass</button></li>
                <li class="nav-item"><button class="btn btn-header ice" id="ice" onClick={() => manejarClic('ice')}>Ice</button></li>
                <li class="nav-item"><button class="btn btn-header fighting" id="fighting" onClick={() => manejarClic('fighting')}>Fighting</button></li>
                <li class="nav-item"><button class="btn btn-header poison" id="poison" onClick={() => manejarClic('poison')}>Poison</button></li>
                <li class="nav-item"><button class="btn btn-header ground" id="ground" onClick={() => manejarClic('ground')}>Ground</button></li>
                <li class="nav-item"><button class="btn btn-header flying" id="flying" onClick={() => manejarClic('flying')}>Flying</button></li>
                <li class="nav-item"><button class="btn btn-header psychic" id="psychic" onClick={() => manejarClic('psychic')}>Psychic</button></li>
                <li class="nav-item"><button class="btn btn-header electric" id="electric" onClick={() => manejarClic('electric')}>Electric</button></li>
                <li class="nav-item"><button class="btn btn-header bug" id="bug" onClick={() => manejarClic('bug')}>Bug</button></li>
                <li class="nav-item"><button class="btn btn-header rock" id="rock" onClick={() => manejarClic('rock')}>Rock</button></li>
                <li class="nav-item"><button class="btn btn-header ghost" id="ghost" onClick={() => manejarClic('ghost')}>Ghost</button></li>
                <li class="nav-item"><button class="btn btn-header dark" id="dark" onClick={() => manejarClic('dark')}>Dark</button></li>
                <li class="nav-item"><button class="btn btn-header dragon" id="dragon" onClick={() => manejarClic('dragon')}>Dragon</button></li>
                <li class="nav-item"><button class="btn btn-header steel" id="steel" onClick={() => manejarClic('steel')}>Steel</button></li>
                <li class="nav-item"><button class="btn btn-header fairy" id="fairy" onClick={() => manejarClic('fairy')}>Fairy</button></li>
            </ul>
        </nav>
    </header>
    )
}

export default BarraNav;

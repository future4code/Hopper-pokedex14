import React, { useContext } from "react";
import CardPokedex from "../Components/CardPokedex";
import "../Styles/Pokedex.css"
import { GlobalContext } from "../Global/GlobalContext";
import { useNavigate } from "react-router-dom";

const Pokedex = () => {

    const navigate = useNavigate()

    const { states } = useContext(GlobalContext);
    const { pokedex, pokemons } = states


    return (
        <div className="mainPage">
            <div className="headerPokedex" onClick={() => {navigate("/")}}>
                <h1 className="titulo">Pokédex</h1>
            </div>   
            <div className="cards-container">
                {
                    pokedex && pokedex.map((pokemon) => {
                        return (
                            <CardPokedex className="cards" key={pokemon.url}
                            index={pokedex.indexOf(pokemon)}
                            indexPokemon={pokemons.indexOf(pokemon)}
                            nome={pokemon.nome}
                            url={pokemon.url}
                            />
                        )
                    })
                }
            </div> 
        </div>
    )
}

export default Pokedex;
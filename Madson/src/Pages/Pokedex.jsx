import React, { useContext } from "react";
import Header from "../Components/Header";
import CardPokedex from "../Components/CardPokedex";
import "../Styles/Home.css"
import { GlobalContext } from "../Global/GlobalContext";

const Pokedex = () => {

    const { states, setters } = useContext(GlobalContext);
    const { pokedex, request, pokemons } = states
    const { setPokedex, setRequest } = setters

    const limpaLista = () => {
        setPokedex([])
        setRequest(!request)
    }

    return (
        <>
            <Header/>
            <h1>Pokedex</h1>
            <button onClick={() => {limpaLista()}}>Limpa lista</button>
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
        </>
    )
}

export default Pokedex;
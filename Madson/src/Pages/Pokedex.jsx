import React, { useContext } from "react";
import Header from "../Components/Header";
import axios from "axios";
import { useEffect } from "react";
import CardPokedex from "../Components/CardPokedex";
import "../Styles/Home.css"
import { GlobalContext } from "../Global/GlobalContext";

const Pokedex = () => {

    const { states, setters } = useContext(GlobalContext);
    const { pokemons, pokedex, request } = states
    const { setPokemons, setPokedex, setRequest } = setters

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
                            index={pokemons.indexOf(pokemon)}
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
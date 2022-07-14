import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { GlobalContext } from "./GlobalContext";
import { useState } from "react";

export const GlobalState = (props) => {

    const [pokemons, setPokemons] = useState([])
    const [pokeBase, setPokeBase] = useState([])
    const [pokedex, setPokedex] = useState([])
    const [request, setRequest] = useState(true)

    const states = {pokemons, pokedex, pokeBase}

    const setters = {setPokemons, setPokedex, setRequest}

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon/")
        .then((res) => {
            let resp = res.data.results;
            console.log(resp);
            setPokemons(resp)
            setPokeBase(resp)
        }).catch((err) => {
            console.log(err);
        })
    },[request])

    return (
        <GlobalContext.Provider value={{states, setters}}>
            {props.children}
        </GlobalContext.Provider>
    )
}
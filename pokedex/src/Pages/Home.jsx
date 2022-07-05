import React, { useState } from "react";
import Header from "../Components/Header";
import axios from "axios";
import { useEffect } from "react";
import Card from "../Components/Card";
import "../Styles/Home.css"

const HomePage = () => {

    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon/")
        .then((res) => {
            setPokemons(res.data.results)
        }).catch((err) => {
            console.log(err);
        })
    },[])

    return (
        <>
            <Header/>
            <h1>Home</h1>
            <div className="cards-container">
                {
                    pokemons && pokemons.map((pokemon) => {
                        return (
                            <Card key={pokemon.url}
                            nome={pokemon.name}
                            url={pokemon.url}
                            />
                        )
                    })
                }
            </div>    
        </>
    )
}
export default HomePage;
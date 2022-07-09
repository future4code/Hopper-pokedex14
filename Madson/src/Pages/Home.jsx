import React, { useContext } from "react";
import Header from "../Components/Header";
import Card from "../Components/Card";
import "../Styles/Home.css"
import { GlobalContext } from "../Global/GlobalContext";

const HomePage = () => {

    const { states } = useContext(GlobalContext);
    const { pokemons } = states

    return (
        <>
            <Header/>
            <h1>Home</h1>
            <div className="cards-container">
                {
                    pokemons && pokemons.map((pokemon) => {
                        return (
                            <Card className="cards" key={pokemon.url}
                            index={pokemons.indexOf(pokemon)}
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
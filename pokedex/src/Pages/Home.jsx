
import React, { useContext } from "react";
import Card from "../Components/Card";
import "../Styles/Home.css"
import { GlobalContext } from "../Global/GlobalContext";
import { useNavigate } from "react-router-dom";

const HomePage = () => {

    const navigate = useNavigate()

    const { states } = useContext(GlobalContext);
    const { pokemons } = states

    return (
        <div className="mainPage">

            <div className="headerHome" onClick={() => {navigate("/Pokedex")}}>
                <h1 className="titulo">Pokédex</h1>
            </div>         
            
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

        </div>

    )
}
export default HomePage;
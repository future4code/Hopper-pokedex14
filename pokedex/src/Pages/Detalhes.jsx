import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../Styles/Detalhes.css"
import { GlobalContext } from "../Global/GlobalContext";



const Detalhes = () => {

    const navigate = useNavigate()
    const param = useParams()

    const { states, setters } = useContext(GlobalContext);
    const { pokedex, pokeBase, pokemons } = states
    const { setPokedex, setPokemons } = setters

    const [pokemon, setPokemon] = useState({})
    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState([])
    
    useEffect(() => {
        setLoading(true)
        axios.get(`https://pokeapi.co/api/v2/pokemon/${param.id}`)
        .then((res) => {
            setPokemon(res.data);
            setForm(res.data.forms);
            console.log(res.data.forms);
            console.log(res.data);
            setLoading(false);
        }).catch((err) => {
            console.log(err);
            setLoading(false)
        })
    },[pokedex])

    const [poke] = form
    
    const formataStat = (name) => {
        let novoNome = name.replace(/^./, name[0].toUpperCase());

        return novoNome
    }

    const onClickRemovePokedex = () => {
        let pokes = pokedex;
        let index = pokes.filter( poke => pokemon.name === poke.name).map((poke) => {
            return pokes.indexOf(poke)
        })
        pokes.splice(index, 1)
        setPokedex(pokes);
        let filteredPokemons = pokeBase.filter(pokemon => !pokes.find(pokedex => pokedex.nome === pokemon.name));
        setPokemons(filteredPokemons)   
    }
    
    const onClickPokedex = () => {               
        let pokes = pokemons
        let novaPokedex = [...pokedex, poke]
        console.log(novaPokedex);
        setPokedex(novaPokedex);
        let filteredPokemons = pokes.filter(pokemon => !novaPokedex.find(pokedex => pokedex.name === pokemon.name))
        setPokemons(filteredPokemons);
        console.log(filteredPokemons);
        
    }
    
        

    return (
        <div className="mainPagePokemon">
            <div className="mainContainer">

                <div className="headerDetalhes">

                    <div className="btnVoltar" ><button className="btn" onClick={() => {navigate("/")}}>Voltar</button></div>
                    
                    <div className="headerPokemon">
                        <h2 className="titulo"> {!loading && pokemon.name && formataStat(pokemon.name)} </h2>
                    </div>

                    { 
                        pokemons && poke && pokemons.find((pokemon) => pokemon.name === poke.name) &&
                        <div className="btnAdicionar" onClick={() => {onClickPokedex()}}><button className="btn">Adicionar à Pokedex</button></div>
                    }
                    
                    {
                        pokemons && poke && pokemons.find((pokemon) => pokemon.name === poke.name) === undefined &&
                        <div className="btnRemover" onClick={() => {onClickRemovePokedex()}}><button className="btn">Remover da Pokedex</button></div>
                    }
                
                </div>

                <div className="pageContent">
                    <div className="imgContent">
                        <div className="imgQuadro">

                           {!loading && pokemon.sprites && <img src={pokemon.sprites.front_default} alt="Front" className="imgDetalhes"/>} 
                        </div>
                        <div className="imgQuadro">
                            {!loading && pokemon.sprites && <img src={pokemon.sprites.back_default} alt="Back" className="imgDetalhes"/>}
                        </div>
                    </div>

                    <div className="statsContainer">
                        <h2 className="statTytle">Stats</h2>
                        {!loading && pokemon.stats && pokemon.stats.length > 0 && pokemon.stats.map((stat) => {
                                return <p className="stat">{formataStat(stat.stat.name)}: {stat.base_stat} </p>
                            })
                        }
                        </div>
                    <div className="movesetContainer">
                        <div><h2 className="statTytle">Type</h2></div>
                        <div className="types"> 
                            {!loading && pokemon.types && pokemon.types.map((type) => {
                                return <p className="stat">{formataStat(type.type.name)}</p>
                            })}
                        </div>

                        <div className="moves">
                            <h2 className="statTytle">Moves</h2>
                            {!loading && pokemon.moves && pokemon.moves.filter((move) => {
                                return pokemon.moves.indexOf(move) < 3
                            }).map((move) => {
                                return <p className="stat">{formataStat(move.move.name)}</p>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detalhes;
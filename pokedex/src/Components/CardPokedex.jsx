import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Card.css"
import { GlobalContext } from "../Global/GlobalContext";
import { useContext } from "react";

const Card = (props) => {

    const navigate = useNavigate()

    const {setters, states} = useContext(GlobalContext);
    const {pokedex, pokeBase} = states
    const {setPokemons, setPokedex} = setters;

    const [pokemon, setPokemon] = useState({})

    const url = props.url
    const index = props.index

    const formataStat = (name) => {
        let novoNome = name.replace(/^./, name[0].toUpperCase());

        return novoNome
    }

    const onClickRemovePokedex = (i) => {
        let pokes = pokedex;
        pokes.splice(i, 1);
        setPokedex(pokes);
        let filteredPokemons = pokeBase.filter(pokemon => !pokes.find(pokedex => pokedex.nome === pokemon.name));
        setPokemons(filteredPokemons)   
        }

    useEffect(() => {
        
        axios.get(url).then((res) => {
            setPokemon(res.data);
        }).catch((err) => {
            console.log(err);
        })
    },[])

    return (
        <div className="card">
            <p className="nomePokemon">{ pokemon.name && formataStat(pokemon.name)}</p>
            <div className="imgContainer">
                { pokemon.sprites && <img src={pokemon.sprites.front_default} className="img" alt={ pokemon.name && formataStat(pokemon.name)}/>}
            </div>
            <div className="btnPokedexCont">
                <button className="btnPokedex" onClick={() => {onClickRemovePokedex(index)}}>Remova { pokemon.name && formataStat(pokemon.name)} do seu Pokedex!</button>
            </div>
            <div className="btnDetalhesCont">
            <button className="btnDetalhes" onClick={() => {navigate(`/Detalhes/${pokemon.id}`)}}>Detalhes</button>
            </div>
        </div>
    )
}

export default Card;
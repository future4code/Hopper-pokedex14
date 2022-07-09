import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CardPokedex.css"
import { GlobalContext } from "../Global/GlobalContext";
import { useContext } from "react";

const Card = (props) => {

    const navigate = useNavigate()

    const {setters, states} = useContext(GlobalContext);
    const {pokedex, pokeBase, request} = states
    const {setPokemons, setPokedex} = setters;

    const [pokemon, setPokemon] = useState({})
    const [img, setImg] = useState("")
    const [name, setName] = useState("")

    const url = props.url
    const index = props.index

    const formataNome = () => {
        let nome = props.nome
        const novoNome = nome.replace(/^./, nome[0].toUpperCase());
        
        setName(novoNome)
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
            setPokemon(res.data)
            setImg(res.data.sprites.front_default)
            formataNome()
        }).catch((err) => {
            console.log(err);
        })
    },[request])

    return (
        <div className="card">
            <p className="nomePokemon">{name}</p>
            <div className="imgContainer">
                <img src={img} className="img" alt={name}/>
            </div>
            <div className="btnPokedexCont">
                <button className="btnPokedex" onClick={() => {onClickRemovePokedex(index)}}>Remova {name} do seu Pokedex!</button>
            </div>
            <div className="btnDetalhesCont">
            <button className="btnDetalhes" onClick={() => {navigate(`/Detalhes/${pokemon.id}`)}}>Detalhes</button>
            </div>
        </div>
    )
}

export default Card;
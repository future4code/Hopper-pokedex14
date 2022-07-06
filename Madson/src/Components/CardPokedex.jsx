import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CardPokedex.css"
import { GlobalContext } from "../Global/GlobalContext";
import { useContext } from "react";

const Card = (props) => {

    const navigate = useNavigate()

    const {setters, states} = useContext(GlobalContext);
    const {pokemons, pokedex} = states
    const {setPokedex} = setters;

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

    const onClickPokedex = () => {
        setPokedex(url)
        console.log(pokedex);
    }

    useEffect(() => {
        axios.get(url).then((res) => {
            setPokemon(res.data)
            setImg(res.data.sprites.front_default)
            formataNome()
        }).catch((err) => {
            console.log(err);
        })
    },[])

    return (
        <div className="card">
            <p className="nomePokemon">{name}</p>
            <div className="imgContainer">
                <img src={img} className="img"/>
            </div>
            <div className="btnPokedexCont">
                <button className="btnPokedex">Remova {name} do seu Pokedex!</button>
            </div>
            <div className="btnDetalhesCont">
            <button className="btnDetalhes" onClick={() => {navigate(`/Detalhes/${pokemon.id}`)}}>Detalhes</button>
            </div>
        </div>
    )
}

export default Card;
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Card.css"


const Card = (props) => {

    const navigate = useNavigate()

    const [pokemon, setPokemon] = useState({})
    const [img, setImg] = useState("")
    const [name, setName] = useState("")

    const url = props.url

    const formataNome = () => {
        let nome = props.nome
        const novoNome = nome.replace(/^./, nome[0].toUpperCase());
        
        setName(novoNome)
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
                <button className="btnPokedex">Adicione {name} ao seu Pokedex!</button>
            </div>
            <div className="btnDetalhesCont">
            <button className="btnDetalhes" onClick={() => {navigate(`/Detalhes/${pokemon.id}`)}}>Detalhes</button>
            </div>
        </div>
    )
}

export default Card;
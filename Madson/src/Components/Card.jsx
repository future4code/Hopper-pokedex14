import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Card.css"


const Card = (props) => {

    const navigate = useNavigate()

    const [pokemon, setPokemon] = useState({})
    const [img, setImg] = useState("")

    const url = props.url

    useEffect(() => {
        axios.get(url).then((res) => {
            setPokemon(res.data)
            setImg(res.data.sprites.front_default)
        }).catch((err) => {
            console.log(err);
        })
    },[])

    return (
        <div className="card">
            <p>{props.nome}</p>
            <img src={img} className="img"/>
            <div>
                <button>Adicionar ao Pokedex</button>
                <button>Ver detalhes</button>
            </div>
        </div>
    )
}

export default Card;
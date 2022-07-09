import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../Components/Header";
import "../Styles/Detalhes.css"

const Detalhes = () => {

    const navigate = useNavigate()
    const param = useParams()

    const [pokemon, setPokemon] = useState({})
    const [loading, setLoading] = useState(false)
    const [name, setName] = useState("")
    const [imgFront, setImgFront] = useState([])
    const [imgBack, setImgBack] = useState([])
    const [stats, setStats] = useState({})

    useEffect(() => {
        setLoading(true)
        axios.get(`https://pokeapi.co/api/v2/pokemon/${param.id}`)
        .then((res) => {
            setPokemon(res.data);
            console.log(res.data);
            console.log(res.data.name);
            formataNome(res.data.name);
            setImgFront(res.data.sprites.front_default);
            setImgBack(res.data.sprites.back_default);
            setStats(res.data.stats);
            console.log(stats);
            setLoading(false);
        }).catch((err) => {
            console.log(err);
            setLoading(false)
        })
    },[])

    const formataNome = (name) => {
        let novoNome = name.replace(/^./, name[0].toUpperCase());

        setName(novoNome)
    }
    
    const formataStat = (name) => {
        let novoNome = name.replace(/^./, name[0].toUpperCase());

        return novoNome
    }
    
        
    return (
        <div className="page">
            <Header/>
            <div className="mainContainer">
                <div className="header"> 
                    <button>Voltar</button>
                    <p className="nome"> {name} </p>
                    <button>Adicionar/Remover da Pokedex</button>
                </div>

                <div className="pageContent">
                    <div className="imgContent">
                        <div className="imgQuadro">

                            <img src={imgFront} alt="Front" className="imgDetalhes"/>
                        </div>
                        <div className="imgQuadro">
                            <img src={imgBack} alt="Back" className="imgDetalhes"/>
                        </div>
                    </div>

                    <div className="statsContainer">
                        <h2>Stats</h2>
                        {!loading && stats && stats.length > 0 && stats.map((stat) => {
                                return <p>{formataStat(stat.stat.name)}: {stat.base_stat} </p>
                            })
                        }
                        </div>
                    <div className="movesetContainer">
                        <div className="types"> 
                            {!loading && pokemon.types && pokemon.types.map((type) => {
                                return <p>{formataStat(type.type.name)}</p>
                            })}
                        </div>

                        <div className="moves">
                            <h2>Moves</h2>
                            {!loading && pokemon.moves && pokemon.moves.filter((move) => {
                                return pokemon.moves.indexOf(move) < 3
                            }).map((move) => {
                                return <p>{formataStat(move.move.name)}</p>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detalhes;
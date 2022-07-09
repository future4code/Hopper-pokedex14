import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../Components/Header";

const Detalhes = () => {

    const navigate = useNavigate()
    const param = useParams()

    const [pokemon, setPokemon] = useState({})

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${param.id}`)
        .then((res) => {
            setPokemon(res.data)
            console.log(res.data);
        }).catch((err) => {
            console.log(err);
        })
    },[])
    return (
        <>
            <Header/>

            <h1>Detalhes</h1>
        </>
    )
}

export default Detalhes;
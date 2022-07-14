import {useNavigate} from "react-router-dom";

const Header = () => {

    const navigate = useNavigate();

    return <div>
        <button onClick={() => {navigate("/")}}>Home</button>
        <button onClick={() => {navigate("/Pokedex")}}>Pokedex</button>
        <button onClick={() => {navigate("/Detalhes/:id")}}>Detalhes</button>

    </div>
}

export default Header;
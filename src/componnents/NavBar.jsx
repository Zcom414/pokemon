import { Link } from "react-router-dom"
/*CSS*/
import '../assets/scss/_navbar.scss'
export const NavBar = () =>{
    return(
        <nav>
            <Link to="/">Home</Link> | 
            <Link to="/pokelist">Pokémon List</Link>
        </nav>
    )
}
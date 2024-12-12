import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { deleteFromTeam } from "../features/team/teamSlice";
import axios from "axios";
import { Link } from "react-router-dom";
<<<<<<< HEAD
=======

/*CSS*/
import "../assets/scss/_team.scss"
>>>>>>> 534fa8e880116eccf5a571c675bd0290c36ffd86

/*CSS*/
import "../assets/scss/_team.scss"

export const Team = () => {
    const team = useSelector((state) => state.team.value);
   const [pokemons, setPokemons] = useState([]);
   const [ loading, setLoading ] = useState(true); 
   const [ err, setErr ] = useState(false);
   
   const dispatch = useDispatch();

    useEffect(()=>{

        const fetchData = async () => {
            try {
                const responses = await Promise.all( //Récupére toutes les réponses et on crée un arrêt
                    team.map((pokemon) =>
                        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
                    )
                );
                // Stockez les données des pokémons dans l'état
                setPokemons(responses.map((res) => res.data));
            } catch (error) {
                console.error("Cannot fetch pokemons", error);
                setErr(true);
            } finally {
                setLoading(false);
            }
        };
        
        fetchData()
    }, [team])
    
    if (loading)
        return <p>Chargement des données ...</p>

    if (err)
        return <p>Une erreur est survenue .</p>

    return (
        <aside>
            <h2>Your Team</h2>
            {pokemons.length > 0 ? (
                <ul className="team_list">
                {pokemons.map((pokemon) => (
                    <li key={pokemon.id}>

                        <Link to={`/pokemon/${pokemon.id}`}>
                            <img src={pokemon.sprites.front_default} alt={`sprite_of_${pokemon.name}`}/>
                                <span>{pokemon.name}</span>
                        </Link> 

                        <button onClick={() => dispatch(deleteFromTeam(pokemon.id))}>Delete</button> 
                    </li>
                ))}
                </ul>
            ) : (
                <p>Aucun Pokémon dans l'équipe.</p>
            )}
           
        </aside>
    )
}
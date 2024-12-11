import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";


export const Team = () => {
    const team = useSelector((state) => state.team.value);
   const [pokemons, setPokemons] = useState([]);
   const [ loading, setLoading ] = useState(true); 
   const [ err, setErr ] = useState(false);

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
        <>
            <h2>La team</h2>
            <ul>
               
                     {pokemons.length > 0 ? (
                        pokemons.map((pokemon) => (
                            <li key={pokemon.id}>{pokemon.name}</li>
                        ))
                    ) : (
                        <p>Aucun Pokémon dans l'équipe.</p>
                    )}
                    
                    {/* // pokemons.length > 0 &&
                    // pokemons.map((pokemon) => (
                    //     <li key={pokemon.id}>{pokemon.name}</li>
                    // )) */}
                
            </ul>
        </>
    )
}
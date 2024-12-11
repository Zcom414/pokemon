import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom";

export const PokeList = () => {
    const [ pokemons, setPokemons ] = useState([]); 
    const [ loading, setLoading ] = useState(true); 
    const [ error, setError ] = useState(false);

    // const id = pokemon.url.match(/\/pokemon\/(\d+)\//)[1]

    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                const response = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=151");
                setPokemons(response.data.results) 
            } catch (err) {
                console.error(err);
                setError(true);
            } finally {
                setLoading(false);
            }
        }

        fetchPokemon();
    }, [ ]);

    if (loading)
        return <p>Chargement des données ...</p>

    if (error)
        return <p>Une erreur est survenue.</p>

    return (
        <section>
            <h2>Liste des pokémons</h2>
            <ul className="poke_list">
                { pokemons.map((pokemon, index) => {
                    const id = pokemon.url.match(/\/pokemon\/(\d+)\//)[1];
                    return <li key={index}><Link to={`/pokemon/${id}`}>{pokemon.name}</Link></li>
                }) }
            </ul>
        </section>
    )
}
import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom";

/*CSS*/
import '../assets/scss/_poke_list.scss'

export const PokeList = () => {
    const [ pokemons, setPokemons ] = useState([]); 
    const [ loading, setLoading ] = useState(true); 
    const [ error, setError ] = useState(false);

    // const id = pokemon.url.match(/\/pokemon\/(\d+)\//)[1]

    useEffect(() => {

        const fetchPokemon = async () => {
            try {
                const list = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=151");
                //setPokelist(list.data.results) //La "Liste" est vide (comme si const [list , setList] = useState([]) )
                
                const responses = await Promise.all( //Récupére toutes les réponses et on crée un array
                    list.data.results.map((pokemon) =>
                        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
                    )
                );
                
                // Stockez les données des pokémons dans l'état
                setPokemons(responses.map((res) => res.data)); //On reprend la list pour afficher le result. des requêtes 
                
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
                    //const id = pokemon.url.match(/\/pokemon\/(\d+)\//)[1];
                    return <li key={index}>
                                <Link to={`/pokemon/${pokemon.id}`}>
                                    <img src={pokemon.sprites.front_default} alt={`sprite_of_${pokemon.name}`}/>
                                    {pokemon.name}
                                </Link>
                            </li>
                }) }
            </ul>
        </section>
    )
}
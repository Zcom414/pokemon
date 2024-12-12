import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToTeam, deleteFromTeam } from "../features/team/teamSlice";
import axios from "axios";

/*CSS*/
import '../assets/scss/_poke_details.scss'

export const PokeDetails = () =>{
    const [data, setData] = useState([]);
    const [types, setTypes] = useState([])
    const [err, setErr] = useState(false);
    const [loading, setLoading] = useState(true);
    
    const dispatch = useDispatch(); //Pas besoin d'importer un dispatch depuis un autre fichier
    
    const team = useSelector((state) => state.team.value);
    const {id} = useParams();
   

        useEffect(()=>{
            const fetchData = async() => {

                try{
                    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
                    setData(response.data)
                    
                    const responses = await Promise.all( 
                        response.data.types.map((type) => {
                            const id = type.type.url.match(/\/type\/(\d+)\//)[1]
                            return axios.get(`https://pokeapi.co/api/v2/type/${id}`)
                        }
                        )
                    );
                    setTypes(responses.map((res) => res.data));
                }
                
                catch(err){
                    console.error('Cannot catch pokemons')
                    setErr(true)
                }

                finally{
                    setLoading(false)
                }
            }
            fetchData()
        }, [id])
        if (loading){
            return <p>On charge ici...</p>
        }
    
        if (err){
            return <p>Error Lavenville : Cannot catch pokemons</p>
        }

        return(
        <section>
            <h2>{`${data.name}`}'s details</h2>
            <img src={data.sprites.front_default} alt={`sprite_of_${data.name}`}/>
            
            <div className="detail">
                <ul className="detail_list">

                    <li>Name : {data.species.name}</li>
                    {types.map((value , index) =>
                        (<li key={index}><img src={value.sprites["generation-viii"]["brilliant-diamond-and-shining-pearl"].name_icon} alt={`sprite_of_${data.name}`} /></li>)
                    )}
                </ul> 

                <div className="button_container">
                    <button onClick={() => dispatch(addToTeam(data.id))}>Add</button>
                    {team.includes(data.id) && 
                        <button className="btn-delete" onClick={() => dispatch(deleteFromTeam(data.id))}>Delete</button>
                    }
                </div>
            </div>
        </section>
        )
    
} 
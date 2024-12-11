import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export const PokeDetails = () =>{
    const [data, setData] = useState();
    const [err, setErr] = useState(false);
    const [loading, setLoading] = useState(true);

    const {id} = useParams();
   

        useEffect(()=>{
            const fetchData = async() => {

                try{
                    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
                    setData(response.data)
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
            <img src={data.sprites.front_default} alt="bulbisar"/>
                <div>
                    <ul>

                        <li>Name : {data.species.name}</li>
                        {data.types.map((value , index) =>
                            (<li>Type {index} : {value.type.name}</li>))
                        }

                    </ul>
                </div>
        </section>
        )
    
} 
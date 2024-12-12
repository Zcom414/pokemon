import { Link } from "react-router-dom"

export const Home = () => {

    return(
        <section>
            <h1> <strong>Welcome</strong> and create your dream team !!!</h1>  

            <p>
                Fan of the firts generations ? Don't wait anymore !!!<br/> Start create your team NOW and take
                on new challenge !!!
            </p> 
            
            <button><Link to="/pokelist">POKEMON LIST</Link></button>   

        </section>
    )
}
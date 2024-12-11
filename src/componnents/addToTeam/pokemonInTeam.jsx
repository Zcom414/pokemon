import { useDispatch } from "react-redux";
import { addToTeam , deleteFromTeam } from "../../features/team/teamSlice";

const pokemonInteam = () =>{
    const dispatch = useDispatch(); //Dispatch peut modifier en distribuant

    return(
        <div>
            <button onClick={() => dispatch(addToTeam())}>Add</button>
            <button onClick={() => dispatch(deleteFromTeam())}>Delete</button>
        </div>
    )
}
export default pokemonInteam
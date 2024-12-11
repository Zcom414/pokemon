import { useSelector } from "react-redux";
import { useState } from "react";
export const Team = () => {
    const team = useSelector((state) => state.team.value);


    return (
        <>
            <h2>La team</h2>
            <ul>
                {
                    team.map((pokemon) => {
                    return  <li>{pokemon}</li>
                    })
                }
            </ul>
        </>
    )
}
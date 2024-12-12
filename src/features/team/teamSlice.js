import { createSlice } from "@reduxjs/toolkit";

const teamSlice = createSlice({
    name: 'team',
    initialState: {
        value: [] // Le slice, par défaut, est un tableau à vide
    },
    reducers: {
        addToTeam: (state, action) => {
            if (state.value.length < 6) {
                state.value.push(action.payload);
            }
        },

        deleteFromTeam: (state, action) =>{
            console.log("delete")

            const index = state.value.indexOf(action.payload); //Set un index de l'ID
            state.value.splice(index, 1); //Suppression d'un seul élément depuis l'index (donc l'ID lui même)
        }
    }
});

export const { addToTeam , deleteFromTeam} = teamSlice.actions; //Action d'add et de del


export default teamSlice.reducer;
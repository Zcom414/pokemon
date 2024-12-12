import { createSlice } from "@reduxjs/toolkit";

const teamSlice = createSlice({
    name: 'team',
    initialState: {
        value: [] // Le slice, par défaut, est un tableau à vide
    },
    reducers: {
        addToTeam: (state, action) => {
            state.value.push(action.payload);
        },

        deleteFromTeam: (state, action) =>{
            console.log("delete")
            const index = state.value.indexOf(action.payload);
            state.value.splice(index, 1);
        }
    }
});

export const { addToTeam , deleteFromTeam} = teamSlice.actions;


export default teamSlice.reducer;
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
            state.value.pop(action.payload)
        }
    }
});

export const { addToTeam , deleteFromTeam} = teamSlice.actions;


export default teamSlice.reducer;
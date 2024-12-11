import { createSlice } from "@reduxjs/toolkit";

const teamSlice = createSlice({
    name: 'team',
    initialState: {
        value: []
    },
    reducers: {
        addToTeam: (state, action) => {
            state.value.push(action.payload);
        }
    }
});

export const { addToTeam } = teamSlice.actions;

export default teamSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: { nickname: null, places: [] },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {

    // enregistrer le nom
    updateNickname: (state, action) => {
      state.value.nickname = action.payload;
    },

    // ajouter et supprimer un lieu
    addPlace: (state, action) => {
      state.value.places.push(action.payload);  
    },
    removePlace: (state, action) => {
      state.value.places = state.value.places.filter(e => e.name !== action.payload);
    },

    // afficher les endroits enregistrés en BDD, pour ne pas faire de "doublon" on ne push pas on met =
    
    bddPlaces: (state, action) => {
      state.value.places = action.payload;
    },
  },
});

export const { updateNickname, addPlace, removePlace, bddPlaces } = userSlice.actions;
export default userSlice.reducer;

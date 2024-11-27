import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bouquets: [],
  likedBouquets: [],
  userLikes: {}, // { bouquetId: [userId1, userId2, ...] }
};

const bouquetsSlice = createSlice({
  name: "bouquets",
  initialState,
  reducers: {
    setBouquets: (state, action) => {
      state.bouquets = action.payload;
    },
    likeBouquet: (state, action) => {
      const { bouquetId, userId } = action.payload;
      if (!state.userLikes[bouquetId]) {
        state.userLikes[bouquetId] = [];
      }
      state.userLikes[bouquetId].push(userId);
      state.likedBouquets.push(bouquetId);
    },
    unlikeBouquet: (state, action) => {
      const { bouquetId, userId } = action.payload;
      state.userLikes[bouquetId] = state.userLikes[bouquetId].filter(
        (id) => id !== userId
      );
      state.likedBouquets = state.likedBouquets.filter(
        (id) => id !== bouquetId
      );
    },
  },
});

export const { setBouquets, likeBouquet, unlikeBouquet } =
  bouquetsSlice.actions;
export default bouquetsSlice.reducer;

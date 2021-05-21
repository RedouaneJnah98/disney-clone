import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  recommend: null,
  newDisney: null,
  original: null,
  trending: null,
}

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.recommend = action.payload.recommend
      state.newDisney = action.payload.newDisney
      state.original = action.payload.original
      state.trending = action.payload.trending
    },
  },
})

export const { setMovies } = movieSlice.actions

const selectRecommend = (state) => state.movie.recommend
const selectNewDisney = (state) => state.movie.newDisney
const selectOriginal = (state) => state.movie.original
const selectTrending = (state) => state.movie.trending

export { selectNewDisney, selectTrending, selectOriginal, selectRecommend }

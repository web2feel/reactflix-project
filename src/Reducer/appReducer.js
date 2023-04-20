export const initialState = {
  page:1,
  favorites: [],
};

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_FAVORITE":
      return { ...state, favorites: [...state.favorites, payload] };
    case "REMOVE_FAVORITE":
      return {
        ...state,
        favorites: state.favorites.filter((item) => item.id !== payload),
      };
    default:
      return state;
  }
};

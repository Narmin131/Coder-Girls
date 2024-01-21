const initialState = localStorage.getItem("Blogs")
  ? JSON.parse(localStorage.getItem("Blogs"))
  : [];

export const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_BLOG":
      return [...state, action.payload];
    default:
      return state;
  }
};

import { configureStore } from "@reduxjs/toolkit";
import { CounterReducer } from "../reducer/AppReducer";

export const store = configureStore({
  reducer: {
    CounterReducer
  },
});

// store

// |

// reducer(state, action);

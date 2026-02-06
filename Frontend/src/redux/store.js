import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    _dummy: (state = {}) => state,
  },
});

export default store;
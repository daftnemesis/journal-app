import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";
import journalSlice from "./journal/journalSlice";


// se crea el store donde se almacenan los datos que estaran disponibles para toda la app
export const store = configureStore({
  reducer: {
    auth: authSlice,
    journal: journalSlice,
  }
});
import { configureStore } from "@reduxjs/toolkit";
import petAnimalsReducer from "./features/PetAnimals/PetAnimalsSlice"
import petCategoriesReducer from "./features/PetAnimals/PetCategorySlice"

export const store = configureStore({
    reducer:{
        animal : petAnimalsReducer,
        category : petCategoriesReducer
    
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
import { createSlice } from "@reduxjs/toolkit";

export const PetCategorySlice = createSlice({
    name:'category',
    initialState:{
        petCategories:[
            {id:1, name:'Dog', image:require('../../../assets/dog.png')},
            {id:2, name:'Cat', image:require('../../../assets/cat.png')},
            {id:3, name:'Rabbit', image:require('../../../assets/rabbit.png')},
            {id:4, name:'Birds', image:require('../../../assets/bird.png')},
        ],
    },

    reducers:{
        petCategoriesReducer:(state = initialState , action)=>{
            switch(action.type){
                default:
                    return state;
            }
        }
    }
 });

 export const petAnimalCategory = PetCategorySlice.actions;
 export default PetCategorySlice.reducer;
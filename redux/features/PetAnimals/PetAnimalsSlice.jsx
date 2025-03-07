import { configureStore, createSlice } from "@reduxjs/toolkit";


const SET_SELECTED_PET = 'SET_SELECTED_PET';

export const PetAnimalsSlice = createSlice({
    name:'animal',
    initialState:{
        petAnimals:[
            {id:1, name:'Bruno', category:'dog', image: require('../../../assets/dog.png'), description:'Friendly and playful dog.'},
            {id:2, name:'Rosieeeeeeeeee', category:'cat', image: require('../../../assets/cat.png'), description:'Loves to nap in the sun.'},
            {id:3, name:'Coco', category:'bird', image: require('../../../assets/bird.png'), description:'A talkative and colorful bird.'},
            {id:4, name:'bunny', category:'rabbit', image: require('../../../assets/rabbit.png'), description:'Loves to hop around all day.'},
            {id:5, name:'Beagle', category:'dog', image: require('../../../assets/dog2.png'), description:'Friendly and playful dog.'},
            {id:6, name:'Cheeku', category:'cat', image: require('../../../assets/cat2.png'), description:'Friendly and playful cat.'},
            {id:7, name:'browny', category:'rabbit', image: require('../../../assets/rabbit2.png'), description:'Loves to hop around all day.'},
            {id:8, name:'Foxy', category:'dog', image: require('../../../assets/dog3.png'), description:'Friendly and playful dog.'},
            {id:9, name:'milky', category:'rabbit', image: require('../../../assets/rabbit3.png'), description:'Loves to hop around all day.'},
        ],
        selectedPet: null
    },
    reducers:{
        petAnimalsReducer: (state = initialState, action)=>{
            switch(action.type){
                case 'SET_SELECTED_PET':
                    return{
                        ...state,
                        selectedPet: action.payload
                    };
                    default:
                        return state;
            }
        
        },
    }
})

// const store = configureStore({
//     reducer: PetAnimalsSlice.reducer
// })

export const setSelectedPet = PetAnimalsSlice.actions;

export default PetAnimalsSlice.reducer;
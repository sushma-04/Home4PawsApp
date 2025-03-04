import {createStore, combineReducers } from 'redux';
const SET_SELECTED_PET = 'SET_SELECTED_PET';

const initialState ={ 
    petAnimals:[
    {id:1, name:'Bruno', category:'dog', image: require('../assets/dog.png'), description:'Friendly and playful dog.'},
    {id:2, name:'Cheeku', category:'cat', image: require('../assets/cat.png'), description:'Loves to nap in the sun.'},
    {id:3, name:'Coco', category:'bird', image: require('../assets/bird.png'), description:'A talkative and colorful bird.'},
    {id:4, name:'bunny', category:'rabbit', image: require('../assets/rabbit.png'), description:'Loves to hop around all day.'},
    ],
    selectedPet: null
};

const petAnimalsReducer = (state=initialState, action)=>{
    switch(action.type){
        case 'SET_SELECTED_PET':
            return{
                ...state,
                selectedPet: action.payload
            };
            default:
                return state;
    }

}

const rootReducer = combineReducers({
    animal : petAnimalsReducer
})

export const store = createStore(rootReducer)

export const setSelectedPet = (pet) => ({
    type: SET_SELECTED_PET,
    payload: pet
});
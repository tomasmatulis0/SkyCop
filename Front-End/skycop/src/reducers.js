import { CHANGE_RESPONSE } from './constants.js';

const initalState = {
    response: ''
}

export const getResponse = (state=initalState, action={}) => {
    switch(action.type){
        case CHANGE_RESPONSE:
            return Object.assign({}, state, {response: action.payload});
        default:
            return state;
        
    }
}
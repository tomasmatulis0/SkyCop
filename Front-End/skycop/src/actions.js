import { CHANGE_RESPONSE } from './constants.js';

export const setResponse = (data) => ({
    type: CHANGE_RESPONSE,
    payload: data

})
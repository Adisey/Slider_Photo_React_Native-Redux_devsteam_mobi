//Core
import { fromJS, List } from 'immutable';
// Types
import { type } from './types';


const initalState = fromJS([{id: 'a'},{id: 'b'},{id: 'c'}]);

export const photosReducer = (state = initalState, action) => {

    console.log(`photosReducer <---> "action.type" <---> `, action.type );
    switch (action.type) {
        case type.FILL_PHOTOS:
            console.log(`FILL_PHOTOS --- OLD STATE -> "state" -> `, state);
            console.log(`FILL_PHOTOS -> "action.payload" -> `, action.payload);
            const newState = fromJS(action.payload);
            console.log(`FILL_PHOTOS --- NEW STATE -> "state" -> `, newState);
            return newState;

        default:
            return state;
    }
};

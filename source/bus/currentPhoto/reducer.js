//Core
import { fromJS, List } from 'immutable';
// Types
import { type } from './types';

const initalState = fromJS({});

export const currentPhotoReducer = (state = initalState, action) => {
    switch (action.type) {
        case type.SET_CURRENT_PHOTO:
            return fromJS(action.payload);

        case type.CLEAN_CURRENT_PHOTO:
            return state.clear();

        default:
            return state;
    }
};

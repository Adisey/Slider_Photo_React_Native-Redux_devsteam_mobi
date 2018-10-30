// Core
import { combineReducers } from 'redux';
// Reducers
import { photosReducer as photos } from '../bus/photos/reducer';
import { currentPhotoReducer as current } from '../bus/currentPhoto/reducer';

export const rootReducer = combineReducers({
    photos,
    current,
});

import { type } from './types';

export const currentPhotoActions = {
    // Sync
    setCurrentPhoto: (photo) => {
        return {
            type:    type.SET_CURRENT_PHOTO,
            payload: photo,
        };
    },
    cleanCurrentPhoto: () => {
        return {
            type:    type.CLEAN_CURRENT_PHOTO,
        };
    },
    // Async
};

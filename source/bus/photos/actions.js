import { type } from './types';

export const photosActions = {
    // Sync
    fillPhotos: (photos) => {
        console.log(`fillPhotos -> "photos" -> `, photos);
        return {
            type:    type.FILL_PHOTOS,
            payload: photos,
        };
    },
    // Async
    fetchPhotosAsync: () => {
        console.log(`fetchPhotosAsync -------------> "Start" <-------> `);
        return {
            type: type.FETCH_PHOTOS_ASYNC,
        };
    },
};

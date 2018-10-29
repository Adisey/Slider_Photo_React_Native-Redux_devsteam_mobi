// Core
import { put } from 'redux-saga/effects';

//import { api } from '../../../../REST';
import { photosActions } from '../../actions';

export function* fillPhotos() {
    console.log(`Worker fillPhotos -> ++++++++ -> ` );
// ToDo:  Тут неполохо было бы запустиь спинер
    try {
        // const response = yield apply(api, api.photo.fetch);
        // const photos = yield apply(response, response.json);
        // if (response.status !== 200) {
        //     throw new Error(message);
        // }
        const photos = [
            { id: 'd' },
            { id: 'e' },
            { id: 'f' },
            ];

        console.log (`---------------------------- fillPhotos() -> "photos" -> `, photos);
        // ToDo: Порезать объекты, оставив нужные поля
        yield put (photosActions.fillPhotos (photos));
    }
    catch
        (error)
        {
            // ToDo:  Тут неполохо было бы дать сообщение пользователю о невозможности получить данные
        }
    finally
        {
            // ToDo:  Тут неполохо было бы остановить спинер
        }
    }

import { takeEvery, call, put, all } from 'redux-saga/effects';
import { ShopActionTypes } from './shop.types';
import { firestore, convertCollectionsSnapShotToMap } from '../../firebase/firebase.utils';
import { fetchCollectionSuccess, fetchCollectionFailure } from './shop.actions'


export function* fetchCollectionAsync() {
    yield console.log('I am fired');

    try {
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get()
        const collectionMap = yield call(convertCollectionsSnapShotToMap, snapshot)
        yield put(fetchCollectionSuccess(collectionMap));

    } catch (error) {
        yield put(fetchCollectionFailure(error.message))
    }



    // collectionRef
    //     .get()
    //     .then(snapshot => {
    //         const collectionMap = convertCollectionsSnapShotToMap(snapshot);
    //         dispatch(fetchCollectionSuccess(collectionMap));

    //     })
    //     .catch(error => dispatch(fetchCollectionFailure(error.message)));
}

export function* fetchCollectionStart() {
    yield takeEvery(
        ShopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionAsync);
}

export function* shopSaga() {
    yield all([
        call(fetchCollectionStart)])
}
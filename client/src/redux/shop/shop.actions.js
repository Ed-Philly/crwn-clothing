import { ShopActionTypes } from './shop.types'
import { firestore, convertCollectionsSnapShotToMap } from '../../firebase/firebase.utils'

export const fetchCollectionStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START,

});
export const fetchCollectionSuccess = collectionMap => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionMap
})

export const fetchCollectionFailure = errorMessage => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
})

//dispatch function enabled using redux thunk i.e dispatch actions based on events
//if redux thunk middleware is enabled, anytime you attempt to dispatch a function instead of
// an object, it will call that function with a dispatch method itself as the first argument

export const fetchCollectionStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections');

        dispatch(fetchCollectionStart());

        collectionRef
            .get()
            .then(snapshot => {
                const collectionMap = convertCollectionsSnapShotToMap(snapshot);
                dispatch(fetchCollectionSuccess(collectionMap));

            })
            .catch(error => dispatch(fetchCollectionFailure(error.message)));
    }
}


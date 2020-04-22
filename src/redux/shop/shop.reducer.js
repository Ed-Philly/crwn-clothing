
import { ShopActionTypes } from './shop.types';

const INITIAL_STATE = {
    collections: null,
    isFecthing: true,
    errorMessage: ''
};


const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ShopActionTypes.FETCH_COLLECTIONS_START:
            console.log('... loading');
            return {
                ...state,
                isFecthing: true
            };
        case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
            console.log('success');
            return {
                ...state,
                isFecthing: false,
                collections: action.payload
            };
        case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
            return {
                ...state,
                isFecthing: false,
                errorMessage: action.payload
            };

        default:
            return state;
    }

}

export default shopReducer;

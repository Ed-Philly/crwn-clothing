import React, { useEffect } from 'react'
import './shop.style.css'
import { Route } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'

//components
import CollectionViewsContainer from '../../components/collection-overview/collection-overview.container'
import CollectionPage from '../collection/collection.component'


import { selectIsCollectionFetching, selectIsCollectionLoaded } from '../../redux/shop/shop.selectors'
import { connect } from 'react-redux'
import { fetchCollectionStart } from '../../redux/shop/shop.actions'
import WithSpinner from '../../components/with-spinner/with-spinner.component'

//wrapped components
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = ({ match, isFecthingCollection, fetchCollectionStart }) => {

    useEffect(() => {
        fetchCollectionStart();
    }, [fetchCollectionStart]);


    //FETCH PATTERN REST API CALL: return value of collection is very nested
    //fetch('https://firestore.googleapis.com/v1/projects/crwn-db-775e5/databases/(default)/documents/collections')
    // .then(response => response.json())
    // .then(collections => console.log(collections))

    //PROMISE PATTERN moved to redux for extensibility 
    // collectionRef.get().then(snapshot => {
    //     const collectionMap = convertCollectionsSnapShotToMap(snapshot)
    //     updateCollections(collectionMap);
    //     this.setState({ loading: false });
    // }, error => console.log('data not loaded', error));

    //FIREBASE OBSERVER 
    //this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
    //    const collectionMap = convertCollectionsSnapShotToMap(snapshot)
    //    updateCollections(collectionMap);
    //    this.setState({ loading: false });
    //});

    //using a HOC to wrap our HOC WithSpinner then we dont need render to pass in prop


    return (
        <div className='collection-page'>
            <Route exact path={`${match.path}`} component={CollectionViewsContainer} />
            <Route exact path={`${match.path}/:collectionId`}
                render={(props) =>
                    <CollectionPageWithSpinner isLoading={isFecthingCollection} {...props} />} />
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    fetchCollectionStart: () => dispatch(fetchCollectionStart())
})

const mapStateToProps = createStructuredSelector({

    isFecthingCollection: selectIsCollectionFetching,
    isCollectionLoaded: selectIsCollectionLoaded
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
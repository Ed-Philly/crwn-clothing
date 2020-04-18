import React from 'react'
import './shop.style.css'
import { Route } from 'react-router-dom'

import CollectionViews from '../../components/collection-overview/collection-overview.component'
import CollectionPage from '../collection/collection.component'

const ShopPage = ({ match }) => {
    console.log(match);
    return (
        <div className='collection-page'>
            <Route exact path={`${match.path}`} component={CollectionViews} />
            <Route exact path={`${match.path}/:collectionId`} component={CollectionPage} />
        </div>
    )
};


export default ShopPage;


import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors'
import WithSpinner from '../with-spinner/with-spinner.component'
import CollectionViews from './collection-overview.component'
import { compose } from 'redux'

const mapStateToprops = createStructuredSelector({
    isLoading: selectIsCollectionFetching
})

//const CollectionViewsContainer = connect(mapStateToprops)(WithSpinner(CollectionViews) )

const CollectionViewsContainer = compose(
    connect(mapStateToprops),
    WithSpinner
)(CollectionViews);

export default CollectionViewsContainer;
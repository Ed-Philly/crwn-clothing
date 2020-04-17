import React from 'react'
import './shop.style.css'
import CollectionPreview from '../../components/preview-collection/collection-preview.component'
import { connect } from 'react-redux';



const ShopPage = ({ collections }) => (
    <div className='shop-page'>
        {collections.map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
    </div>
);




const mapStateToProps = ({ shop: { collections } }) => ({
    collections
})
export default connect(mapStateToProps)(ShopPage);
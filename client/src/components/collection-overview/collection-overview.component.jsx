import React from 'react'
import './collection-overview.style.scss'
import CollectionPreview from '../../components/preview-collection/collection-preview.component'
import { connect } from 'react-redux';


const CollectionViews = ({ collections }) => {

    const catalog = Object.values(collections)

    return (
        <div className='collections-overview'>
            {
                catalog.map(({ id, ...otherCollectionProps }) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))}
        </div>
    )
};




const mapStateToProps = ({ shop: { collections } }) => ({
    collections
})
export default connect(mapStateToProps)(CollectionViews);
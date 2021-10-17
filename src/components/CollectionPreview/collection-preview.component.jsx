import React from 'react'
import './collection-preview.styles.scss'
import CollectionItem from "../CollectionItem/collection-item.component";

const CollectionPreview = ({title, items})=>(
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {items.filter((item,index)=> index < 4).map(({id,...itemProps})=>(
                <div key={id}>
                <CollectionItem {...itemProps}/>
                </div>
            ))}
        </div>
    </div>
)

export default CollectionPreview;

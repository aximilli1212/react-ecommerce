import React from 'react'
import SHOP_DATA from "../DataSet/ShopData";
import CollectionPreview from "../components/CollectionPreview/collection-preview.component";

class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state= {
            collections: SHOP_DATA
        }
    }

    render(){
       const {collections} = this.state;
        return (<div>
            {
                collections.map(({id, ...collectionProps})=>{
                    return <CollectionPreview key={id} {...collectionProps} />
                })
            }
        </div>)
    }
}

export default ShopPage;

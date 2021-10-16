import React from 'react'
import SHOP_DATA from "../DataSet/ShopData";

class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state= {
            collections: SHOP_DATA
        }
    }

    render(){
        return <div>
            Shop Data Displayed here
        </div>
    }
}

export default ShopPage;

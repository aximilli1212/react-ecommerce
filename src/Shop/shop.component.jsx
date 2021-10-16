import React from 'react'
import SHOP_DATA from "../DataSet/ShopData";

class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state= {
            collection: SHOP_DATA
        }
    }
}

export default ShopPage;

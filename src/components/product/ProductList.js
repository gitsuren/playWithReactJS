import React, {Component} from 'react';
import PropTypes from 'prop-types';
import productData from "./productData";
import Product from "./Product";

class MyComponent extends Component {
    render() {
        let products = productData.map(p => <Product key={p.id} product={p}/>);

        return (
            <div>
                {products}
            </div>
        );
    }
}

MyComponent.propTypes = {};

export default MyComponent;

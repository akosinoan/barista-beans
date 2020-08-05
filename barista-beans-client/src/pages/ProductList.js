import React from 'react'
import Product from '../components/Product';

class ProductList extends React.Component{
    
    
    render (){
        return (
            <div className="product-list">
                <Product 
                name="Product1" 
                price="123" 
                imgsrc="https://coffeebeansshop.com.au/wp-content/uploads/2019/09/coffee-beans-shop-australia-logo-online-best-buy-YES.svg"/>
                <Product name="Product2" price="123" imgsrc="test" />
        
                <Product name="Product3" price="123" imgsrc="test" />
        
                <Product name="Product4" price="1233" imgsrc="test" />
        
                <Product name="Product5" price="1323" imgsrc="test" />
        
                <Product name="Product6" price="2123" imgsrc="test" />
                <Product name="Product7" price="1235" imgsrc="test" />
                <Product name="Product8" price="1263" imgsrc="test" />
                <Product name="Product9" price="1273" imgsrc="test" />
            </div>
        );
    }
}

export default ProductList
import React ,{Component} from 'react'
import Product from '../components/Product';
import ActualProducts from '../components/ActualProducts'



function ProductList(props) {

        return (

            
            <div className="product-list">
                {ActualProducts.map( product => (
                    <Product
                        key={product.id}
                        product={product}
                        handleAddItem={props.handleAddItem}
                        handleRemoveItem={props.handleRemoveItem}
                        quantity={props.itemsInCart.find(ele=>ele.id === product.id ) 
                            ? props.itemsInCart[props.itemsInCart.findIndex(ele=>ele.id === product.id)].quantity : 0 }
                    />
                
                ))}
            </div>
        );
}


export default ProductList
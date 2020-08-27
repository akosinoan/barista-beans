import React from 'react'
import Product from '../components/Product';
import ActualProducts from '../components/ActualProducts'



class ProductList extends React.Component{
    
    

    
    render (){
        return (
            <div className="product-list">
                
                {ActualProducts.map( product => (
                    <Product 
                        name={product.name} 
                        price={product.price} 
                        imgsrc={product.imgsrc}
                    />
                
                ))}
            </div>
        );
    }
}

export default ProductList
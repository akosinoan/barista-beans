import React , {useState} from 'react';
import ProductList from './pages/ProductList';
import NavBar from './components/NavBar';

const appStyle= {
  backgroundImage: `url(${process.env.PUBLIC_URL}/images/baristaBackground.jpg)`, 
  backgroundSize:'cover',
  bacgroundRepeat: 'no-repeat',
}
function App() {

  const [cartItemCount, setCartItemCount] = useState(0);
  const [itemsInCart, setItemsInCart] = useState([]);
  
  function handleAddItem(product){
    setCartItemCount(cartItemCount +1);
    let updItemsInCart = [...itemsInCart];
    if(updItemsInCart.find(ele => ele.id === product.id )){
      updItemsInCart[updItemsInCart.findIndex(ele => ele.id===product.id)].quantity++;

      setItemsInCart(updItemsInCart);
    }else{
      product.quantity = 1;
      setItemsInCart([...itemsInCart,product])
    }    
  }

  function handleRemoveItem(product){
    setCartItemCount(cartItemCount-1);
    let updItemsInCart = [...itemsInCart];
    const currentIndex = updItemsInCart.findIndex(ele => ele.id===product.id);
    
    if(updItemsInCart[currentIndex].quantity>0){
      updItemsInCart[currentIndex].quantity--;
      
    }
    if(updItemsInCart[currentIndex].quantity == 0){
      updItemsInCart.splice(currentIndex,1,);
    }
    setItemsInCart(updItemsInCart);
  }

  return (
    <>
        <NavBar itemsInCart={itemsInCart} 
                cartItemCount={cartItemCount}
                handleAddItem={handleAddItem}  
                handleRemoveItem={handleRemoveItem}  />
                
        <div className="App" style={appStyle}>
                       <ProductList handleAddItem={handleAddItem}  
                       handleRemoveItem={handleRemoveItem} 
                       itemsInCart={itemsInCart}
                       />

                    
        </div>
      </>
  );
}

export default App;
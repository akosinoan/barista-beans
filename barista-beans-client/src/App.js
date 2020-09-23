import React from 'react';
import ProductList from './pages/ProductList'
const appStyle= {
  backgroundImage: `url(${process.env.PUBLIC_URL}/images/baristaBackground.jpg)` , 
  backgroundSize:'cover',
  backgroundRepeat:'no-repeat'
}
function App() {
  return (
    <div className="App" style={appStyle}>
        <ProductList />
    </div>
  );
}

export default App;

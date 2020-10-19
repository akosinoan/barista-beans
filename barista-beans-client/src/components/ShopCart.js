import React,{ useState, useRef }  from 'react';
import {CSSTransition} from 'react-transition-group';
import {useForm} from 'react-hook-form';


function ShopCart(props) {
    const [showButton, setShowButton] = useState(true);
    const [showMenu, setShowMenu] = useState(false);

    const {register , handleSubmit} = useForm();

    const onSubmit = (data) => {
      let formData = {...data};
      formData.cart = props.itemsInCart;
      
      console.log(formData);
    };

    //const nodeRef = useRef(null);
    

    function handleAddItem(e,product){
      e.preventDefault();
      props.handleAddItem(product)
    }

    function handleRemoveItem(e,product){
      e.preventDefault();
      props.handleRemoveItem(product)
    }

    return (
        <>
        {showButton && (       
          <div className="shopCartDiv" onClick={() => setShowMenu(true)}> 
            <span className="cartCount">
                {props.cartItemCount}
            </span>
            <img className="shopCartImg"
                    alt="Cart"
                    src={process.env.PUBLIC_URL + "/images/shopcart.png"} />
            
            </div>
        )}
        
        <CSSTransition
          in={showMenu}
         
          timeout={300}
          classNames="shopCartMenu"
          unmountOnExit
          onEnter={() => setShowButton(false)}
          onExited={() => setShowButton(true)}
        >
            <>
            <div className="shopCartMenu"
            onClose={() => setShowMenu(false)}
            >  
               
                <div className="cartCloseButtonDiv">
                    <button className="cartCloseButton" onClick={() => setShowMenu(false)}>
                        Close
                    </button>
                </div>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="contactInfoContainer cartBackground">
                    <h3>
                      Contact Info
                    </h3>
                    
                   
                    <input type="text" ref ={register} name="name" placeholder="Name..." required />
                    <input type="tel" placeholder="Phone number..." name="phone" ref={register} required/>
                    <input type="email" ref ={register} name="email" placeholder="Email..." required/>
                    <textarea name="address" ref ={register} placeholder="Address..." required/>
                </div>
                
                <div className="orderDetailContainer cartBackground">
                    <h3>
                      Order Details
                    </h3>
                    {
                  (props.itemsInCart === undefined || props.itemsInCart == 0) ? 
                  
                    <h4> No Items in cart... </h4> 
                    :
                      <div className="orderDetailContainer">
                       { props.itemsInCart.map((product)=>(
                        <h4>    
                            {product.name} x {product.quantity}pcs
                            <div> 
                              <button className="product-plus" onClick={(e)=>handleAddItem(e,product)}> + </button>
                              <button className="product-minus"onClick={(e)=>handleRemoveItem(e,product)}> - </button>
                            </div>
                        </h4>    

                        ))}
                        <div style={{margin : '1em'}} >
                          <label> <h3>Grind Size: </h3>
                          <select ref ={register} name="grindsize">
                            <option value="wholebeans">Whole Beans</option>
                            <option value="medium">Medium Grind</option>
                            <option value="fine"> Fine Grind</option>
                            
                          </select>
                        </label>

                          <textarea ref ={register} name="specialnote" placeholder="Special Note..." />
                          </div>
                          <button>Submit</button>
                      </div>
                  }
 
                    
                </div>
                
                
                
                
            </form>    
            </div>
  
  {//          <div className="shopCartMask" onClick={() => setShowMenu(false)} onClose={() => setShowMenu(false)}>
    //       </div>
  }         
           
            </>
        </CSSTransition>
      
      </>
    );
  }

export default ShopCart;
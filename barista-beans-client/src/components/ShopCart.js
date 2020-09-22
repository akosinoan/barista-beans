import React from 'react';

class ShopCart extends React.Component{
    
    constructor(props) {
        super(props)
    
        this.state = {
          menuOpen: false,
        }
    }

    toggleMenu(){
        this.setState({menuOpen: !this.state.menuOpen})
    }

    render (){

        const shopCartStyle = {
            position: 'fixed',
            right: 0,
            left: 'inherit',
            top: 0,
            zIndex: 1002,
            width: '300px',
            maxwidth: '80%',
            height: '100%',
            transition: 'transform 0.3s ease 0s',
            transform: 'translate3d(0px, 0px, 0px)',
            backgroundColor: 'white',
            visibility: this.state.menuOpen ? 'visible' : 'hidden'
        };

        return (
            <div className="ShopCart" style={shopCartStyle}>
                TESTS
                
            </div>
        );
    }
}

export default ShopCart;
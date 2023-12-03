import React from "react";
import './Cart.css'

const Cart = (props) => {

    const {cart, chooseOne, chooseAgain} = props;
    


    
    return (
        <div className='cart'>
            <h3>Choosen products:</h3>
            {
                cart.map(product=> <CartNew
                    product={product}
                    key={product.id}
                ></CartNew>)
            }
            <button className="button-design" onClick={()=>chooseOne()}>
                <p>Choose One</p>
            </button>
            <button className="button-design" onClick={()=>chooseAgain()}>
                <p>Choose Again</p>
            </button>
        </div>
    );
};
//choosen cart
const CartNew =({product})=>{
    const {name,img} =product;
    return(
        <div className='cart-choose'>
            <img className="image-size" src={img} alt="" />
            <h4>{name}</h4>
            
        </div>
    )
}
export default Cart;

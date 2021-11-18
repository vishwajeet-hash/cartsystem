
import React from 'react';
import CartItem from './CartItem';
const Cart=(props)=>{
    
    
    const{products}=props;
    return(
        <div className="cart">
            {products.map((product) => {                                  //using map to loop over the products array.
                return (
                <CartItem 
                product={product} 
                key={product.id}                                          //key for making react differentiate between the given items.
                onIncreaseQuantity={props.onIncreaseQuantity}
                onDecreaseQuantity={props.onDecreaseQuantity}
                onDeleteProduct={props.onDeleteProduct}
                />
                )
            })}
        </div>
    );
    

}   

export default Cart;    
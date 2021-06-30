      
import React from 'react';

const CartItem = (props) =>{
    
    const{price,title,qty}=props.product;
    const{product,
        onIncreaseQuantity,
        onDecreaseQuantity,
        onDeleteProduct
    }=props;
    return(
        <div className="cart-item">
            <div className="left-block">
                <img style={styles.image} src={product.img}/>
            </div>
            <div className="right-block">
                <div style={{fontSize:25}}>{title}</div>
                <div style={{color:'#777'}}>{price}</div>
                <div style={{color:'#777'}}>{qty}</div>
                <div classname="cart-item-actions">
                    {/* {Buttons} */}
                    <img 
                    style={{height:30, padding:2}} 
                    alt="increase" 
                    className="action-icons" 
                    src="https://image.flaticon.com/icons/png/128/148/148764.png"
                    onClick={() => onIncreaseQuantity(product)}
                    />
                    <img 
                    style={{height:30, padding:2 }} 
                    alt="decrease" 
                    className="action-icons" 
                    src="https://image.flaticon.com/icons/png/128/334/334047.png"
                    onClick={() => onDecreaseQuantity(product)}
                    />
                    <img 
                    style={{height:30, padding:2}} 
                    alt="delete" 
                    className="action-icons" 
                    src="https://image.flaticon.com/icons/png/128/3096/3096687.png"
                    onClick={() => onDeleteProduct(product.id)}/>
                </div>
            </div>
        </div>
    )
    
}

const styles={
    image: {
        height:110,
        width:110,
        borderRadius: 4,
        background:'#ccc'
    }    
}

export default CartItem;    
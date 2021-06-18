
import React from 'react';

class CartItem extends React.Component{
    constructor(){
        super(); // calls constructor of the parent class. 
        this.state={
            price:999,
            title:'Phone',
            qty: 1,
            img:''
        }
        this.increaseQuantity=this.increaseQuantity.bind(this)
    }
    increaseQuantity= () => {    //arrow function automatically binds the value of this to the instance of this class    
        // this.state.qty += 1;
        // console.log('test',this.state);
        //calling set state we can render or rerender our component value. We can set state in 2 forms
        //set state form 1()...the 1st form is by giving it an object.
        //react takes up the last call and it takes up the last object that we are passing i.e, if we call setstate 3 times in our code
        //it woon't rerender 3 times. It would take only the last call and last object that is sent.This is called batching. 
        // this.setState({
        //       qty:this.state.qty + 1 
        // });

        //set state form 2...here instead of passing a object we pass a function. (if we require the preious state we will use 2nd form else 1st form only .)
        /*Batching happens in 2nd form also hence render would happen once only even if u write the form 3 times,but qty will increase by 3
        since prevstate is being used here. */
        this.setState((prevState) => {
            return{
                qty:prevState.qty + 1
            }
      });
    }
      decreaseQuantity= () => {      
          const{qty} =this.state;
          if(qty===0){
              return;   
          }
        this.setState((prevState) => {
            return{
                qty:prevState.qty - 1
            }
      });


    }
    render(){
        const{price,title,qty}=this.state;//object destructuring(so that we can dierectly use price,title,qty)
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}/>
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
                        onClick={this.increaseQuantity}
                        />
                        <img 
                        style={{height:30, padding:2 }} 
                        alt="decrease" 
                        className="action-icons" 
                        src="https://image.flaticon.com/icons/png/128/334/334047.png"
                        onClick={this.decreaseQuantity}
                        />
                        <img 
                        style={{height:30, padding:2}} 
                        alt="delete" 
                        className="action-icons" 
                        src="https://image.flaticon.com/icons/png/128/3096/3096687.png"/>
                    </div>
                </div>
            </div>
        )
    };
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
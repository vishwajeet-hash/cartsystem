import React from 'react'
import Cart from './Cart';
import Navbar from './Navbar'
class App extends React.Component{

  constructor(){
    super(); // calls constructor of the parent class. 
    this.state={
      //An array containing the list of products.
        products: [
           { 
            price:999,
            title:'Watch',
            qty: 1,
            img:'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
            id :1
           },
           { 
            price:6700,
            title:'Phone',
            qty: 1,
            img:'https://images.unsplash.com/photo-1534536281715-e28d76689b4d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
            id :2
           },
           { 
            price:5000,
            title:'Laptop',
            qty: 1,
            img:'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2089&q=80',
            id: 3   
           }
        ]
    }
}
      //Callback function for increasing quantity of the particular product that's clicked. 
    handleIncreaseQuantity= (product) => {
        console.log();
        const {products}=this.state;
        const index=products.indexOf(product);
        
        products[index].qty += 1;

        this.setState({
            products
        })
    }
        //Callback function for decreasing quantity of the particular product that's clicked. 
    handleDecreaseQuantity= (product) => {
        console.log();
        const {products}=this.state;
        const index=products.indexOf(product);
        
        if (products[index].qty === 0){
            return;
        }
        products[index].qty -= 1;

        this.setState({
            products
        })
    }
      //Callback function for deleating quantity of the particular product that's clicked. 
    handleDeleteProduct = (id) =>{
        const{products}= this.state;
        const items=products.filter((item) => item.id !==id);
        this.setState({
            products: items
        })
    }
      //Function for adding the total quantity of items added in cart.
    getCartCount=() =>{
      const{products}=this.state;
      let count=0;
      products.forEach((product) =>{
        count +=product.qty;
      })

      return count;
    }
      //Function for totalling the amount.
    getCartTotal =() =>{
      const{products}=this.state;

      let cartTotal=0;
      products.map((product) => {
        cartTotal =cartTotal + product.qty * product.price
      })

      return cartTotal;
    }

  render(){
    const{products}=this.state;
  return (
      <div className="App"> 
      <Navbar count={this.getCartCount()} />
        <Cart
        products={products}
        onIncreaseQuantity={this.handleIncreaseQuantity}
        onDecreaseQuantity={this.handleDecreaseQuantity}
        onDeleteProduct={this.handleDeleteProduct}
        />
        <div style={{padding: 10,fontSize:20}}>TOTAL:{this.getCartTotal()}</div>
      </div>
   );
  }
}
export default App;

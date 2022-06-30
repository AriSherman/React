import React, { useState } from 'react';
import { useContext } from 'react';
import './Cart.css';
import { Context } from '../../shared/Context';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';



const Cart = (props) => {
    const[orderCompleted, setOrderCompleted] = useState(false);
    const[Qty, setQty] = useState(1)
    console.log("State Qty " + Qty);
    const[selectedOption, setSelOp] = useState(1)
    const ctx = useContext(Context);
    const navigate = useNavigate();

    const getSum = () =>{ //Total cost of all products in the cart
        let sum = 0.0;
        for (let i of ctx.cart){
            sum+= i.product.price * i.quantity
        }
        return sum.toFixed(2);
    }

    const getQuantity = () =>{ //Count the products added to the cart
        let quant = 0;
        for (let i of ctx.cart){
            quant+= i.quantity
        }
        return quant;
    }

    const emptyCartMessage = () =>{ //Displays a message when the cart is empty
        let emptyMessage = "The Cart is empty";
        if (ctx.cart == 0){
            return emptyMessage;
        }
    }
      
    const updateQty = (product) =>{
        ctx.updateQtyCart(product, Qty);
        console.log("updateQty" + product.name + " & " + Qty);
    }

    const creatOrders = () =>{
        const order = {
            orderItems: ctx.cart, 
            total: getSum(), 
            quantity: getQuantity(),
            email: ctx.getUser().email,
            orderNum: new Date().getTime()
        };
        if (order.quantity < 1){
            toast("Oops, you forgot to add the products to the cart. Add Products Try again.")
            return 
        } else{
            ctx.addOrUpdateOrders(order);
            toast("✔️ Order completed successfully!")
            setOrderCompleted(true)
            emptyCartMessage()
        }
    }

    const handleCreatOrder = () =>{
        if (ctx.isLogdIn === true){
            creatOrders()
        } else{
            navigate('/login');
        }
    }
    
if (orderCompleted === true){
    return(
        <div>
            Order completed successfully!
        </div>
    )
}
    return (
        <div className='item'>
           {
                ctx.cart.map( item => {
                    return <div  key={item.product.id}>
                        <h3 className='title'>{item.product.name}</h3>
                        <img className='img_c' src={item.product.img}/>
                        <div >
                            <h5 className='line'>Qty: {item.quantity}</h5>
                            <h5 className='line'>Price: {item.product.price} ₪</h5>
                        </div>
                        <div className='qtyButtons'>
                            <label >Qty: </label>
                                <select className='form-control' value={Qty} onChange={(e) => {setQty(e.target.value);ctx.updateQtyCart(item.product, e.target.value)}}>
                                    {ctx.options.map((option) => (
                                        <option value={option.value}>{option.label}</option>
                                    ))}
                                </select>
                        </div>
                    </div>
                })
            }
            <h3 className='emptyMessage'>{emptyCartMessage()} </h3> 
           <h2 className='total'>Total ({getQuantity()} items): {getSum()}₪</h2>
           <button onClick={handleCreatOrder}>Place yuor order</button>
           <div></div>
           <ToastContainer />
        </div>
    );
    
};

export default Cart;
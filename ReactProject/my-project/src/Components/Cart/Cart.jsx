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
            quant+= Number(i.quantity)
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
        <div className='order-completed'>
            <h3 className='text-capitalize'>Order completed successfully!</h3>            
        </div>
    )
}
    return (
        <div className='item d-flex flex-fill flex-row'>
            <div className='items d-flex flex-fill flex-column p-2'>
            {
                    ctx.cart.map( item => {
                        return <div className='card mb-3 p-2' key={item.product.id}>
                                    <div className='row no-gutters'>
                                        <div className='col-md-4'>
                                            <img className='img_c' src={item.product.img}/>
                                        </div>
                                        <div className='col-md-6'>
                                            <div className='card-body'>
                                                <h3 className='title card-title text-capitalize'>{item.product.name}</h3>
                                                <h5 className='card-text'>Qty: {item.quantity}</h5>
                                                <h5 className='card-text'>Price: {item.product.price} ₪</h5>
                                            </div>
                                        </div>
                                        <div className='qtyButtons card-body col-md-2'>
                                            <label className='card-text'>Qty: </label>
                                            <select className='form-control card-text' value={Qty} onChange={(e) => {setQty(e.target.value);ctx.updateQtyCart(item.product, e.target.value)}}>
                                                {ctx.options.map((option) => (
                                                    <option value={option.value}>{option.label}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                        })
                }
                <h3 className='text-capitalize emptyMessage'>{emptyCartMessage()} </h3> 
            </div>
            <div className='info flex-fill p-2'>
                <h2 className='total text-capitalize'>Total ({getQuantity()} items): {getSum()}₪</h2>
                <button id='placeOrder' disabled='' className='btn btn-success btn-lg text-capitalize' onClick={handleCreatOrder}>Place your order</button>
            </div>
           <div></div>
           <ToastContainer />
        </div>
    );
    
};

export default Cart;
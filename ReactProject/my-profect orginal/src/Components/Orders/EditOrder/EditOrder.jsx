import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../../../shared/Context';


const EditOrder = () => {
    const[modifyOrder, setModifyOrder] = useState({orderItems:[]})
    const ctx = useContext(Context);
    const params = useParams();

    useEffect(()=>{
        const userOrders = ctx.getOrders({email: params.email});
        const order = userOrders.find(o => o.orderNum === +params.orderNum);
        console.log(userOrders);
        console.log(order);
        console.log('params', params);
        setModifyOrder(order);
    },[])

    const getQuantity = () =>{ 
        let quant = 0;
        for (let i of modifyOrder.orderItems){
            quant+= i.quantity
        }
        return quant;
    }

    const getSum = () =>{
        let sum = 0.0;
        for (let i of modifyOrder.orderItems){
            sum+= i.product.price * i.quantity
        }
        return sum.toFixed(2);
    }

    const addItem = (product) =>{
        const exist = modifyOrder.orderItems.find( x=> x.product.id === product.id );
        const tempOrder = {...modifyOrder};
        tempOrder.orderItems = tempOrder.orderItems.map(x=> x.product.id === product.id ? {...exist,quantity:exist.quantity + 1} : x);
        setModifyOrder(tempOrder);
        toast("The quantity was update")
    }

    const removeItem = (product) =>{
        const exist = modifyOrder.orderItems.find( x=> x.product.id === product.id );
        const tempOrder = {...modifyOrder};
        if (exist.quantity > 1)
        {
            tempOrder.orderItems = tempOrder.orderItems.map(x=> x.product.id === product.id ? {...exist,quantity:exist.quantity - 1} : x);
            toast("The quantity was update")
            setModifyOrder(tempOrder);
        }
        else if (exist.quantity === 1)
        {
            tempOrder.orderItems = tempOrder.orderItems.map(x=> x.product.id === product.id ? onRemoveItem(x.product) : x);
        }
        else if (exist.quantity === 0) 
        {
            onRemoveItem(product)
        }
    }

    const onRemoveItem = (product) =>{
        const tempOrderToRemove = {...modifyOrder};
        tempOrderToRemove.orderItems = tempOrderToRemove.orderItems.filter(x=> x.product.id !== product.id);
        setModifyOrder(tempOrderToRemove);
        toast("The Item was removed")

    } 

    const uptadeOrders = () =>{
        const order = {
            ...modifyOrder,
            total: getSum(), 
            quantity: getQuantity(),
        };
        ctx.addOrUpdateOrders(order);
        toast("The order was updated successfully ")
    }

    const orderNotFound = () =>{ 
        let emptyMessage = "orderNotFound";
        if (modifyOrder.orderItems.length == 0){
            return emptyMessage;
        }
    }


    return (
        <div className='item'>
           {
                modifyOrder.orderItems.map( item => {
                    return <div  key={item.product.id}>
                        <h3 className='title'>{item.product.name}</h3>
                        <img className='img_c' src={item.product.img}/>
                        <div >
                            <h5 className='line'>Qty: {item.quantity}</h5>
                            <h5 className='line'>Price: {item.product.price} ₪</h5>
                        </div>
                        <button onClick={() => removeItem(item.product)}>-</button>
                        <button onClick={() => addItem(item.product)}>+</button>
                    </div>
                })
            }
            <h3 className='emptyMessage'>{orderNotFound()} </h3> 
           <h2 className='total'>Total ({getQuantity()} items): {getSum()}₪</h2>
           <button onClick={uptadeOrders}>Update order</button>
           <div></div>
           <ToastContainer />
        </div>
    );
};

export default EditOrder;
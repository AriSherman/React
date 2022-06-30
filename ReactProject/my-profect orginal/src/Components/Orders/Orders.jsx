import React, {useContext} from 'react';
import './Orders.css';
import {Context} from '../../shared/Context';
import { useParams, useNavigate } from 'react-router-dom';


const Orders = (props) => {
    const params = useParams();
    const ctx = useContext(Context);
    const navigate = useNavigate();
    if (ctx.getOrders({email: params.email}).length === 0)
        return(
            <div>
                The order list is empty
            </div>
        )
    return(
        <div className='item'>
        {
             ctx.getOrders({email: params.email}).map( order => {
                 return <div key={order.date}>
                     {
                         order.orderItems.map( item => {
                                return <div  key={item.product.id}>
                                    <h3 className='title'>{item.product.name}</h3>
                                    <img className='img_c' src={item.product.img}/>
                                    <div >
                                        <h5 className='line'>Qty: {item.quantity}</h5>
                                        <h5 className='line'>Price: {item.product.price} ₪</h5>
                                    </div>
                                </div>
                            }
                         )
                     }
                    <h3 className='line'>{order.date}</h3>
                    <h5 >Qty: {order.quantity}</h5>
                    <h5 className='total'>total: {order.total} ₪</h5>
                    {ctx.getUser().userType === "admin" && <button onClick={()=>navigate(`/EditOrder/${params.email}/${order.orderNum}`)}>Edit order</button>}
                    <hr/>
                 </div>
             })
         }
     </div>

    )
 
};

export default Orders;
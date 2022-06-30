import React, { useContext } from 'react';
import './Orders.css';
import { Context } from '../../shared/Context';
import { useParams, useNavigate } from 'react-router-dom';


const Orders = (props) => {
    const params = useParams();
    const ctx = useContext(Context);
    const navigate = useNavigate();
    if (ctx.getOrders({ email: params.email }).length === 0)
        return (
            <div>
                The order list is empty
            </div>
        )
    return (
        <div className='item d-flex flex-fill flex-column'>
            {
                ctx.getOrders({ email: params.email }).map(order => {
                    return <div className='card mb-3 p-2' key={order.date}>
                        <div className='row no-gutters'>
                            <div className='col-md-3 card-header dark-header'>
                                <h5 className='line'>{order.date}</h5>
                                <h5 >Qty: {order.quantity}</h5>
                                <h5 className='total'>Total: {order.total} ₪</h5>
                            </div>

                            <div className='d-flex flex-row col-md-9 align-items-center'>
                                {
                                    order.orderItems.map(item => {
                                        return <div className='order-item p-2' key={item.product.id}>
                                            <h3 className='title text-capitalize'>{item.product.name}</h3>
                                            <img className='img_c' src={item.product.img} />
                                            <div >
                                                <h6 className='line'>Qty: {item.quantity}</h6>
                                                <h6 className='line'>Price: {item.product.price} ₪</h6>
                                            </div>
                                        </div>
                                    }
                                    )
                                }

                                {ctx.getUser().userType === "admin" && <button onClick={() => navigate(`/EditOrder/${params.email}/${order.orderNum}`)}>Edit order</button>}
                            </div>
                            <hr />
                        </div>
                    </div>
                })
            }
        </div>

    )

};

export default Orders;
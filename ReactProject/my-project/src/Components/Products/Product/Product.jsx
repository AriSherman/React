import './Product.css';
import React, {useState} from 'react';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Context } from '../../../shared/Context';

const Product = (props) => {
    const[Qty, setQty] = useState(1)
    const ctx = useContext(Context);
    const navigate = useNavigate(); //Switch from addToCart button to cart

    const removeButten = () =>{
        if (Qty >= 2)
        {
            setQty(Qty-1)
        }
    }

    const handleQtySelect = (e) =>{
        setQty(e.target.value);
    }

    const clickHandler = () => {
        ctx.addToCart({id: props.id, name: props.name, price: props.price, img: props.img}, Qty);
        navigate("/cart");//Switch from addToCart button to cart
    }

    return (
        <div className='card text-center'>
            <h3 className='name text-capitalize' ><Link to={'/viewproduct/'+props.id}>{props.name}</Link></h3>
            <img className='card-img-top img-fluid' src={props.img} alt={props.name}/>
            <h3 className='price'>Price: {props.price} ₪</h3>
            <p className='card-text'>SKU: {props.id}</p>
            <button onClick={clickHandler} className='btn btn-primary btn-lg btn-block'>Add to cart</button>
            {ctx.isLogdIn === true && ctx.getUser().userType === "admin" && <Link to={'/prd/'+props.id}>Edit Product</Link>}
        </div>
    );
};

export default Product;
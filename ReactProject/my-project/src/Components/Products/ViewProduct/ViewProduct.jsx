import React, {useState, useEffect} from 'react';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Context } from '../../../shared/Context';
import { useParams } from 'react-router-dom';
import './ViewProduct.css';

const ViewProduct = (props) => {
    const[Qty, setQty] = useState(1)
    const[prd, setPrd] = useState({})
    const ctx = useContext(Context);
    const params = useParams();
    const navigate = useNavigate(); //Switch from addToCart button to cart

    useEffect( ()=>{
        if (params.id !== '0'){
            const viewPro = ctx.productArr.find((p)=> p.id === +params.id)
            if (viewPro)
                setPrd(viewPro)
        };
    },[])

    const handleQtySelect = (e) =>{
        setQty(e.target.value);
    }

    const clickHandler = () => {
        ctx.addToCart(prd, Qty);
        navigate("/cart");//Switch from addToCart button to cart
    }

    return (
        <div className='container view-product-container'>
            <div className='row'>
                <div className='col'>
                    <img className='product-img' src={prd.img} alt={prd.name}/>
                </div>
                <div className='col'>
                    <div className='card view-producr-card'>
                        <h3 className='name'> {prd.name}</h3>
                        <h3 className='price'>Price: {prd.price} ₪</h3>
                        <p className='id'>SKU: {prd.id}</p>
                        <button onClick={clickHandler} className='btn btn-primary'>Add to cart</button>
                        {ctx.isLogdIn===true && ctx.getUser().userType === "admin" && <Link to={'/prd/'+prd.id}>Edit Product</Link>}
                    </div>
                </div>
            </div>
            
            
        </div>
    );
};

export default ViewProduct;
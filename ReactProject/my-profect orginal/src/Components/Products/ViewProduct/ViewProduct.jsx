import React, {useState, useEffect} from 'react';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Context } from '../../../shared/Context';
import { useParams } from 'react-router-dom';

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

    // const removeButten = () =>{
    //     if (Qty >= 2)
    //     {
    //         setQty(Qty-1)
    //     }
    // }

    const handleQtySelect = (e) =>{
        setQty(e.target.value);
    }

    const clickHandler = () => {
        ctx.addToCart(prd, Qty);
        navigate("/cart");//Switch from addToCart button to cart
    }

    return (
        <div className='card'>
            <h3 className='name'> {prd.name}</h3>
            <img className='img' src={prd.img} alt={prd.name}/>
            <h3 className='price'>Price: {prd.price} ₪</h3>
            <p className='id'>SKU: {prd.id}</p>
            {/* <div className='qtyButtons'>
            <label >Qty: </label>
                <select className='form-control' value={Qty} onChange={handleQtySelect}>
                    {ctx.options.map((option) => (
                        <option value={option.value}>{option.label}</option>
                    ))}
                </select>
                <button onClick={() => setQty(Qty + 1)} className="plusMinusButten plusMinusButten2">+</button>
                <h5 className='qty' >Qty: {Qty} </h5>
                <button onClick={() => removeButten()} className="plusMinusButten plusMinusButten2">-</button>
            </div> */}
            <button onClick={clickHandler} className='btn btn-primary'>Add to cart</button>
            {ctx.isLogdIn===true && ctx.getUser().userType === "admin" && <Link to={'/prd/'+prd.id}>Edit Product</Link>}
        </div>
    );
};

export default ViewProduct;
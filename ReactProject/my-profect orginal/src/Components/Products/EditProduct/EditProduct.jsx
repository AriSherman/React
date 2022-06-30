import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../../../shared/Context';
import { useParams, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import './EditProduct.css';

const editMsg = 'Please edit the field to update the product';
const addMsg = 'Please fill th field to add a new product';

const EditProduct = () => {
    const params = useParams();
    const ctx = useContext(Context);
    const navigate = useNavigate();

    const[newPro, setNewPro] = useState({
        "id": 0,
        "category":"",
        "price": 0,
        "name": "",
        "img": ""
    });

    useEffect( ()=>{
        if (params.id !== '0'){
            const editPro = ctx.productArr.find((p)=> p.id === +params.id)
            if (editPro)
                setNewPro(editPro)
        };
    },[])

    const updatePro = (e) =>{
        const temp = {...newPro};
        temp[e.target.id] = e.target.value;
        setNewPro(temp);
    }

    const savePro = () => {
        const p = {...newPro}
            p.id = +p.id;
            p.price = +p.price;
        if(params.id !== '0'){
            ctx.updateProduct(p)
            toast("✅ The product has been updated")
        }else{
            ctx.addProduct(p)
            toast("✅ The product is added")
        }
        navigate('/prd');
    }

    return (
        <div className='edit-peroduct'>
            <h2>{params.id !== '0' ? editMsg : addMsg}</h2>
            <label>ID
            <input id='id' value={newPro.id} onChange={updatePro}/></label>
            <label>Price
            <input id='price' value={newPro.price} onChange={updatePro}/></label>
            <label>Name
            <input id='name' value={newPro.name} onChange={updatePro}/></label>
            <label>IMG
            <input id='img' value={newPro.img} onChange={updatePro}/></label>
            <label>Select Category
            <select id='category' value={newPro.category} onChange={updatePro}>
            {ctx.ctg.map((category) =>{
                return(
                    <option key={category} value={category}>{category}</option>
                )
            })}
            </select></label>
            <button onClick={savePro}>save</button>
            <ToastContainer />
        </div>
    );
};

export default EditProduct;
import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../../../shared/Context';
import { useParams, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const EditCategory = () => {
    const params = useParams();
    const ctx = useContext(Context);
    
    const[newCtg, setNewCtg] = useState(params.cat);
    const navigate = useNavigate();

    useEffect( ()=>{
        if (params.cat === '-')
            setNewCtg('')
    },[])

    const saveCategory = () => {
        console.log(params.cat);
        if(params.cat === '-'){
            ctx.addCategory(newCtg)
            toast("✅ The category has been added")
        }else{
            ctx.updateCategory(params.cat, newCtg)
            toast("✅ The category has been updated")
        }
        navigate('/ctg');
    }
    return (
        <div>
            <input value={newCtg} onChange={(e)=>setNewCtg(e.target.value)} type="text" />
            <button onClick={saveCategory}>save</button>
            <ToastContainer />
        </div>
    );
};

export default EditCategory;
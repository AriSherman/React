import React, {useState, useContext} from 'react';
import './SearchBar.css';
import { Context } from '../../../shared/Context';
import { ToastContainer, toast } from 'react-toastify';

const SearchBar = () => {
    const ctx = useContext(Context);
    const[min, setMin] = useState(0)
    const[max, setMax] = useState(0)

    const handleOnChange = (e) =>{
        ctx.setSearch(e.target.value)
    }

    const clearSearch = () =>{
        ctx.setSearch('')
        ctx.setMinMaxPrice({min:0, max:0})
        setMax(0);
        setMin(0);
        toast("✅ The search was reset successfully!")
    }
     
    // const setMin = (e) =>{
    //     // if(!priceValid(e))
    //     //     return
    //     const tempMin = {...ctx.minMaxPrice};
    //     tempMin.min = +e.target.value
    //     ctx.setMinMaxPrice(tempMin)
    // }

    // const setMax = (e) =>{
    //     // if(!priceValid(e))
    //     //     return
    //     const tempMax = {...ctx.minMaxPrice};
    //     tempMax.max = +e.target.value
    //     ctx.setMinMaxPrice(tempMax)
    // }
    const isValid = () =>{
        if (priceValid(min, "Minimum") === false)
            return 
        if (priceValid(max, "Maximum") === false)
            return 
        ctx.setMinMaxPrice({min:+min,max:+max})
        toast(`✅ The filter was applies `)
    }

    const priceValid = (input, inputType) =>{
        if (isNaN(input)){
            toast(`❌ ${inputType} must be a number!`)
            return false;
        }
        if (input < 0){
            toast(`❌ ${inputType} must be positive number!`)
            return false;
        }
        if (inputType === "Minimum" && +input > max && max > 0){
            toast(`❌ Maximum must be greater than Minimum!`)
            return false;
        } else if (inputType === "Maximum" && +input < min && max > 0) {
            toast(`❌ Maximum must be greater than Minimum!`)
            return false;
        }
        return true;
    }

    return (
        <div>
            <div className="form-inline my-2 my-lg-0 d-flex justify-content-end">
                <input className='form-control mr-sm-2 box_search' style={{ }} type='text' value={ctx.search} onChange={handleOnChange} placeholder="Enter a product name to search &#128270;"/> 
                <button className='btn btn-success my-2 my-sm-0 box_apply'  onClick={clearSearch}>Clear ❎</button>
            </div>
            <div className="input-group my-2 my-lg-0 d-flex justify-content-end minmax">
                <div className="input-group-prepend">
                    <input className='form-control mr-sm-2 box_min' id="Minimum" type="text" value={min === 0 ? '' : min} onChange={(e)=>setMin(e.target.value)} placeholder="Min"/>
                    <input className='form-control mr-sm-2 box_max' id="Maximum" type="text" value={max === 0 ? '' : max} onChange={(e)=>setMax(e.target.value)} placeholder="Max"/>
                </div>                
                <button className='btn btn-secondary my-2 my-sm-0 box_apply' onClick={isValid}>Apply</button>
            </div>
            <ToastContainer />
        </div>
        // <div>
        //     <div>
        //     <input className='box_search' style={{ }} type='text' value={ctx.search} onChange={handleOnChange} placeholder="Enter a product name to search &#128270;"/> <button className='box_apply' style={{float:"right"}} onClick={clearSearch}>Clear ❎</button>
        //     </div>
        //     <div>
        //     <input className='box_min' id="Minimum" type="text" value={min === 0 ? '' : min} onChange={(e)=>setMin(e.target.value)} placeholder="Min"/><input className='box_max' id="Maximum" type="text" value={max === 0 ? '' : max} onChange={(e)=>setMax(e.target.value)} placeholder="Max"/><button className='box_apply' onClick={isValid}>Apply</button>
        //     </div>
        //     <ToastContainer />
        // </div>
    );
};

export default SearchBar;
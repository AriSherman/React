import React, { useContext } from 'react';
import { Context } from '../../../shared/Context';
import { Link } from 'react-router-dom';
import './Catergoreis.css';

function Catergoreis(props) {
    const ctx = useContext(Context);
    return (
        <div>
            {ctx.ctg.map((category) =>{
                return(
                    <div  key={category}>
                        <Link to={"/ctg/"+category}>{category}</Link>
                    </div>
                )
            })}
        </div>
    );
}

export default Catergoreis;
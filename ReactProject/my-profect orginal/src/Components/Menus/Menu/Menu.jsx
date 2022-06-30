import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../../../shared/Context';
import './Menu.css';
import SearchBar from '../SearchBar/SearchBar';

const Menu = () => {
    const ctx = useContext(Context);

    return (
        <div className='menu'>
            <ul>
                <li><Link className="active" to={"/"}>HomePage</Link></li>
                {ctx.ctg.map((cat) =>
                    <li key={cat}><Link to={`/productsview/${cat}`}>{cat}</Link></li>
                    )}
                    <li style={{backgroundColor: '#008CBA'}}><Link style={{color: "white"}} to={"/about"}>About us</Link></li>
                <li style={{float:"right", backgroundColor: '#008CBA'}}><Link style={{color: "white"}} to={"/cart"}>🛒 Cart</Link></li>
                <li style={{float:"right"}}><SearchBar/></li>
            </ul>

        </div>
    );
};

export default Menu;



import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../../../shared/Context';
import './Menu.css';
import SearchBar from '../SearchBar/SearchBar';

const Menu = () => {
    const ctx = useContext(Context);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className='items d-flex flex-fill flex-column'>
                <div className="collapse navbar-collapse p-2">
                    <Link className="navbar-brand active" to={"/"}>HomePage</Link>
                    <ul className="navbar-nav mr-auto p-2">
                        {ctx.ctg.map((cat) =>
                            <li className="nav-item" key={cat}><Link className="nav-link" to={`/productsview/${cat}`}>{cat}</Link></li>
                        )}
                        <li className="nav-item"><Link className="nav-link" to={"/about"}>About us</Link></li>
                    </ul>
                    <Link className='btn btn-outline-light btn-cart' to={"/cart"}>🛒 Cart</Link>                   
                    <i className="bi bi-filter-square-fill" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation"></i>

                </div>
                <div className="collapse p-2" id="navbarToggleExternalContent">
                    <SearchBar /> 
                </div>
            </div>
        </nav>
    );
};

export default Menu;



import React from 'react';
import { Link } from 'react-router-dom';

const MenuAdmin = () => {
    return (
        <div className='menu'>
            <ul>
                <li><Link to={"/ctg"}>Categories</Link></li>
                <li><Link to={"/ctg/-"}>Add Category</Link></li>
                <li><Link to={"/prd"}>Products</Link></li>
                <li><Link to={"/prd/0"}>Add Product</Link></li>
                <li><Link to={'/usersview'}>Users View</Link></li>
            </ul>

        </div>
    );
};

export default MenuAdmin;
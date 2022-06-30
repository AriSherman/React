import React from 'react';
import { useContext } from 'react';
import { Context } from '../../shared/Context';
import {Routes, Route} from 'react-router-dom';
import MenuAdmin from '../../Components/Menus/MenuAdmin/MenuAdmin';
import UsersView from '../../Components/UsersView/UsersView';
import Catergoreis from '../../Components/Category/Categories/Catergoreis';
import ProductsList from '../../Components/Products/ProductsList/ProductsList';
import EditCategory from '../../Components/Category/EditCategory/EditCategory';
import EditProduct from '../../Components/Products/EditProduct/EditProduct';
import Orders from '../../Components/Orders/Orders';
import "./AdminPage.css";
import EditOrder from '../../Components/Orders/EditOrder/EditOrder';


const AdminPage = () => {
    const ctx = useContext(Context);
    return(
        <div>
            <h1>Lorem ipsum</h1>
            <button onClick={() => ctx.logout()} className='btn-logout btn btn-primary'>Log out</button>
            {ctx.getUser().userType === "admin" && <MenuAdmin/>}
            {/* <image></image> */}
            <Routes>
                <Route path='/usersview' element = {<UsersView />}/>
                <Route path='/ctg/:cat' element = {<EditCategory />}/>
                <Route path='/ctg' element = {<Catergoreis />}/>
                <Route path='/prd' element = {<ProductsList />}/>
                <Route path='/prd/:id' element = {<EditProduct />}/>
                <Route path='/orders/:email' element = {<Orders/>}/>
                <Route path='/EditOrder/:email/:orderNum' element = {<EditOrder/>}/>
            </Routes>
        </div>
    )
};

export default AdminPage;
import './HomePage.css';
import { useContext } from 'react';
import {Link, Routes, Route, useNavigate} from 'react-router-dom';
import { Context } from '../../shared/Context';
import Menu from '../../Components/Menus/Menu/Menu';
import Cart from '../../Components/Cart/Cart';
import Orders from '../../Components/Orders/Orders';
import ProductsList from '../../Components/Products/ProductsList/ProductsList';
import ViewProduct from '../../Components/Products/ViewProduct/ViewProduct';
import LoginPage from '../../Components/LoginPage/LoginPage';
import AdminPage from '../AdminPage/AdminPage';
import About from '../../Components/About/About';

const HomePage = (props) =>{
    const ctx = useContext(Context);
    const navigate = useNavigate();
    //console.log(ctx.productArr);
    const u = ctx.getUser();
    const handleUserConnection = () => {
        if(ctx.isLogdIn===true){
            ctx.logout();
        }
        navigate('/login');
        
    }
    return(
        <div className='main'>
            <img src="../../../public/images/Logo.jpg" alt="Logo" />
            <h1>Shermans Market</h1>
            {<button onClick={handleUserConnection} className='button'>{ctx.isLogdIn===true ? "Log out" : "Log in"}</button>}
            {ctx.isLogdIn===true && <Link to={'/orders/'+ ctx.getUser().email} className='user'>Hallo {ctx.getUser().userName} </Link>}
            <Menu/>
            {/* <image></image> */}
            <Routes>
                <Route path='/' element = {<ProductsList />}/>
                <Route path='/about' element = {<About/>}/>
                <Route path='productsview/:cat' element = {<ProductsList />}/>
                <Route path='/viewproduct/:id' element = {<ViewProduct />}/>
                <Route path='/cart' element = {<Cart/>}/>
                <Route path='/orders/:email' element = {<Orders/>}/>
                <Route path='/login' element = {<LoginPage login={ctx.login} logout={ctx.logout}/>}/>
            </Routes>
        </div>
    )
}

export default HomePage;





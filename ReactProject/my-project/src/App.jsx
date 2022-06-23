import './App.css';
import LoginPage from './Components/LoginPage/LoginPage';
import HomePage from './Pages/HomePage/HomePage';
import AdminPage from './Pages/AdminPage/AdminPage';
import {Context} from './shared/Context'
import {useState, useEffect} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { Route, Routes, useNavigate } from 'react-router-dom';

function App() {
  const[isLogdIn, setIsLogdIn] = useState(false)
  const[users, setUsers] = useState([])
  const[ctg, setCtg] = useState([]) //Catergoreis
  const[productArr, setProductArr] = useState([])
  const [search, setSearch] = useState('')
  const[minMaxPrice, setMinMaxPrice] = useState({min:0, max:0})
  const[cart, setCart] = useState([
    
  ])
  const navigate = useNavigate();

  useEffect( ()=>{
    fetchUsers();
    const savedLogedIn = localStorage.getItem("isLogdIn")
    if (savedLogedIn && savedLogedIn === "True"){
      setIsLogdIn(true);
    }
    fetchProduct();
    fetchCtg();
      
  }, []) //useEffect runing once on mount
  
  const login = (username, password) => {
    console.log(username, password, users);
  /* for (let i = 0; i < users.length; i++){
     if (users[i].username == username && users[i].password == password)
     return true;
  } 
  return false;
 */
  const u = users.find((i) => {
    if (i.userName === username && i.password === password){
      return true;
    }
    else return false;
  }) 
  if (u)
  {
    localStorage.setItem("isLogdIn", "True");
    localStorage.setItem("activUser", JSON.stringify(u));
    toast(`Welcome back ${username} 😀`)
    navigate('/')
    setIsLogdIn(true);
    return true;
  }
  else return false;
}

const getUser = () =>{
  const user = localStorage.getItem("activUser")
  if (user){
    return JSON.parse(user)
  }
}

//loggingIn
  const logout = () => { 
    localStorage.setItem("isLogdIn", "False");
    localStorage.removeItem("activUser");
    setIsLogdIn(false);
    navigate('/')
    toast(`Waiting to see you again ❤️`)
  }

  const fetchUsers = async() => {
    const data = await fetch('users.json');
    const tempUsers = await data.json();
    setUsers(tempUsers);
    localStorage.setItem("users", JSON.stringify(tempUsers))
  }

  const fetchProduct = async() => {
    let tempProducts;
    const checkProduct = localStorage.getItem("products");
    if (!checkProduct){
      const data = await fetch('products.json');
      tempProducts = await data.json();
      localStorage.setItem("products", JSON.stringify(tempProducts));
    }else{
      tempProducts = JSON.parse(checkProduct);
    }
    setProductArr(tempProducts);
  }

  const fetchCtg = async() => {
    let tempCtg;
    const checkCtg = localStorage.getItem("ctg");
    if (!checkCtg){
      const data = await fetch('ctg.json');
      tempCtg = await data.json(); //convert from json toLowerCase(); array 
      localStorage.setItem("ctg", JSON.stringify(tempCtg));
    }else{
      tempCtg = JSON.parse(checkCtg);
    }
    setCtg(tempCtg);
  }
  
  const addProduct = (newProduct) =>{
    if (productArr.findIndex((i)=> i.id === newProduct.id) > -1)
      return false;
    const tempProduct = [...productArr];
    tempProduct.push(newProduct);
    setProductArr(tempProduct);
    localStorage.setItem("products", JSON.stringify(tempProduct));
    return true;
  }
  
  const updateProduct = (updateProduct) =>{
    const index = productArr.findIndex((i)=> i.id === updateProduct.id);
    if (index === -1)
      return false;
    const tempProduct = [...productArr];
    tempProduct[index] = updateProduct;
    setProductArr(tempProduct);
    localStorage.setItem("products", JSON.stringify(tempProduct));
    return true;
  }

  const addToCart = (product, quantity) => {
    const exist = cart.find( x=> x.product.id === product.id );
    if(exist){
      setCart(cart.map(x=> x.product.id === product.id ? {...exist,quantity:exist.quantity + quantity} : x));
    }else{
      setCart([...cart,{product:product,quantity:quantity}]);
      toast(`✅ The item was addad to the cart!`)
    }
  }

  const onRemove = (product, quantity) =>{
    const exist = cart.find((x)=>x.product.id === product.id)
    if(exist.quantity === 1){
      setCart(cart.filter((x)=>x.product.id !== product.id))
    }else{
      setCart(cart.map(x=> x.product.id === product.id ? {...exist,quantity:exist.quantity - 1} : x))
    }
    toast(`✅ The item was remove from the cart!`)
  }

  const addOrUpdateOrders = (order) =>{
    order.date = new Date().toLocaleString(); //Updates and adds the order date
    let orders = [];
    const localOrders = localStorage.getItem("orders"); //Imports orders from local storage
    if (localOrders){
      orders = JSON.parse(localOrders) //If any, conversion
    }
    const index = orders.findIndex(o => o.orderNum === order.orderNum);
    if (index === -1){
      orders.push(order);
    }
    else{
      orders[index] = order;
    }
    // if (index.quantity === 0){
    //   orders = orders.filter(o => o.orderNum !== order.orderNum)
    // }
    localStorage.setItem("orders", JSON.stringify(orders));
    setCart([])
  }

  const getOrders = (user) =>{
    let orders = [];
    const localOrders = localStorage.getItem("orders");
    if (localOrders){
      orders = JSON.parse(localOrders)
    }
    if(!user)
      user = getUser();
    return orders.filter(o => o.email === user.email);
  }
  
  const updateCategory = (origCatergory, newCategory) =>{
    const index = ctg.findIndex((c) => c === origCatergory);
    ctg[index] = newCategory;
    const newCtg = [...ctg];
    setCtg(newCtg);
    localStorage.setItem("ctg", JSON.stringify(newCtg));
  }

  const addCategory = (newCategory) =>{
    const index = ctg.findIndex((c) => c === newCategory);
    if (index > -1)
      return
    const newCtg = [...ctg];
    newCtg.push(newCategory);
    setCtg(newCtg);
    localStorage.setItem("ctg", JSON.stringify(newCtg));
  }

  const options  = [
    { label: 1, value: 1 },
    { label: 2, value: 2 },
    { label: 3, value: 3 },
    { label: 4, value: 4 },
    { label: 5, value: 5 },
    { label: 6, value: 6 },
    { label: 7, value: 7 },
    { label: 8, value: 8 },
    { label: 9, value: 9 },
    { label: 10, value: 10 }
]

  return (
    <div className="App">
      <Context.Provider
        value={{getOrders, cart, addToCart, onRemove, logout, login, getUser, addOrUpdateOrders, users, updateProduct, addProduct, productArr, ctg, updateCategory, addCategory, search, setSearch, minMaxPrice, setMinMaxPrice,isLogdIn,options}}>
        {isLogdIn===true && getUser().userType==="admin" ?<AdminPage/> : <HomePage/>}

      </Context.Provider>
      <ToastContainer />
      <div className='footer_css'>
      <footer>Copyright 2022 ©️ Shermans Markat, All rights reserved</footer>
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import { useContext } from 'react';
import './UsersView.css';
import { Link } from 'react-router-dom';
import { Context } from '../../shared/Context';

const UsersView = (props) => {
    const ctx = useContext(Context);


    return (
        <div>
            {ctx.users.map(user =>{
                return(
                    <div key={user.email}>
                        <h3>name {user.userName}</h3>   
                        <h3>email {user.email}</h3>   
                        <img src={user.pic} alt={user.userName}></img>   
                        <h3>Type {user.userType}</h3>  
                        <Link to={`/orders/${user.email}`}>Show Orders</Link>
                        <hr/> 
                    </div>
                )
            }
            )}

        </div>
    );
};

export default UsersView;
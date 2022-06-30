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
                    <div  key={user.email}>
                        <ul className='list-unstyled'>
                            <li class="media">
                                <img className='media mt-3 img' src={require('../../assets/' + user.pic + '.jpg')} alt={user.userName + " profile img"}></img>   
                                <div className='w-100 p-3'>
                                    <h5>User Name: {user.userName}</h5>
                                    <h5>email {user.email}</h5>
                                    <h5>UserType: {user.userType}</h5>
                                    <h4><Link className='btn btn-outline-secondary' to={`/orders/${user.email}`}>Show Orders</Link></h4>
                                </div>                                       
                            </li>
                        </ul>
                        <div>
                        </div>
                        <hr/> 
                    </div>
                )
            }
            )}

        </div>
    );
};

export default UsersView;
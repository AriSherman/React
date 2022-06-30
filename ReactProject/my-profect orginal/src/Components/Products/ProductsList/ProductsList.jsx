import Product from '../Product/Product';
import { useParams } from 'react-router-dom';
import { useContext, useState } from 'react';
import { Context } from '../../../shared/Context';
import './ProductsList.css';

const ProductsList = (props) => {
    const ctx = useContext(Context);
    const params = useParams();

    const filterCategory = () =>{
        if( ctx.productArr.length == 0) return [];

        if (!params.cat && window.location.pathname === '/'){
            const randomProducts = [];
            let count = 0;
            while(count < 12){
                const i = Math.floor(Math.random() * ctx.productArr.length); //מחזיר ערך בין 0 לגודל המערך
                const prodId = ctx.productArr[i].id; //Return the ID of the item on the while
                if(randomProducts.findIndex(p => p.id === prodId) === -1){ //check if the random gett duplicate prod
                    randomProducts.push(ctx.productArr[i]);
                    count++;
                }
            }
            return randomProducts;
        }
        else if (window.location.pathname === '/prd')
            return ctx.productArr;
        else
            return ctx.productArr.filter((p)=> p.category === params.cat);
    }

    const filterSearch = () => {
        if(ctx.search.length === 0){
            return filterCategory();
        }else{
            return filterCategory().filter((p)=> p.name.toLowerCase().search(ctx.search.toLowerCase()) > -1)
        }
    }

    const filterPrice = () => {
        if(ctx.minMaxPrice.min === 0 && ctx.minMaxPrice.max === 0){
            return filterSearch();
        } else if (ctx.minMaxPrice.max === 0){
            return filterSearch().filter((p)=> p.price >= ctx.minMaxPrice.min)
        }else{
            return filterSearch().filter((p)=> p.price >= ctx.minMaxPrice.min && p.price <= ctx.minMaxPrice.max)
        }
    }
    
    return (
        <div className="container card-columns mt-5 products">
            {filterPrice().map((i) => {
                return(
                    <Product key={i.id} id={i.id} price={i.price} name={i.name} img={i.img}/>
                )
            })}
        </div>
    )
}

export default ProductsList
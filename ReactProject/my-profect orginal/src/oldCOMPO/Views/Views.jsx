import Product from '../Product/Product';
import { useContext } from 'react';
import { Context } from '../../shared/Context';
import './Views.css';

    const views = [
        {id: 2001, price: 10.12, name: "Kapuz Kanyonu", img: "https://thisisantalya.com/wp-content/uploads/IMG_4985.jpg"},
        {id: 2002, price: 10.00, name: "Zell Am See", img: "https://d18z89ggtjsooz.cloudfront.net/cache-buster-1598281478/website/var/tmp/image-thumbnails/320000/321182/thumb__lightbox/hauptmotiv-sommer-in-zell-am-see-kaprun-c-nikolaus-faistauer-photography.jpeg"},
        {id: 2003, price: 10.00, name: "Grindelwald", img: "https://media-cdn.tripadvisor.com/media/photo-s/18/9e/f6/f4/beautiful-grindelwald.jpg"},
        {id: 2004, price: 10.00, name: "Praia Espiñeirido", img: "https://www.inspain.org/imgs3/playas/2/2/8/j5m236ib2wfr56ciluyu2fozdu_2000.jpg"},
        {id: 2005, price: 10.00, name: "Miradouro do Pico do", img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/21/aa/b1/pico-carvao.jpg?w=1200&h=-1&s=1"},
        {id: 2006, price: 10.00, name: "Parque Nacional Madidi", img: "https://previews.123rf.com/images/mathess/mathess1608/mathess160801359/60971601-r%C3%ADo-beni-en-el-parque-nacional-madidi-bolivia.jpg"},
        {id: 2007, price: 10.00, name: "Playa Chivilingo", img: "https://lh5.googleusercontent.com/p/AF1QipN8DDBZjDgaWKAEfmSJ4JqnEM4oKprp-b8KvxLe=w500-h500-k-no"},
        {id: 2008, price: 10.00, name: "Manzano Amargo", img: "https://live.staticflickr.com/2914/32574143214_74aaf97f4e_b.jpg"},
    ];
localStorage.setItem("views", JSON.stringify(views))
    const Views = (props) => {
        const ctx = useContext(Context);

    return (
        <div className="products">
            {ctx.product.views.map((i) => {
                return(
                    <Product key={i.id} id={i.id} price={i.price} name={i.name} img={i.img}/>
                )
            })}
        </div>
    )
}
export default Views;
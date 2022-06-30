import './Cities.css';
import Product from '../Product/Product';

const cities = [
    {id: 3001, price: 10.13, name: "Concepción", img: "https://www.latercera.com/resizer/jHpSqQZBl1pxjhM5Y62IFPdHDWY=/900x600/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/PLZ4OSMEGVC33HYVJNCOHZQJMM.jpg"},
    {id: 3002, price: 10.00, name: "Santiago", img: "https://media.istockphoto.com/photos/aerial-view-of-financial-district-picture-id547146110?s=612x612"},
    {id: 3003, price: 10.00, name: "Rosario", img: "https://thecityfix.com/wp-content/uploads/2021/06/panoramica-Rosario.jpg"},
    {id: 3004, price: 10.00, name: "Porto Alegre", img: "https://assets.nationbuilder.com/icf/pages/382/attachments/original/1462463049/Porto5.jpg?1462463049"},
    {id: 3005, price: 10.00, name: "Brasília", img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/70/e5/4a/photo0jpg.jpg?w=500&h=300&s=1"},
    {id: 3006, price: 10.00, name: "Новосибирск", img: "http://vseon.com/media/zoo/images/007_f1fd6aed6c693def57b36a2fcf19e376.jpg"},
    {id: 3007, price: 10.00, name: "Hannover", img: "https://a.cdn-hotels.com/gdcs/production83/d1575/29722be0-68ce-11e8-bbf2-0242ac110009.jpg"},
    {id: 3008, price: 10.00, name: "Nantes", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Nantes_a%C3%A9rien_ch%C3%A2teau3.jpg/800px-Nantes_a%C3%A9rien_ch%C3%A2teau3.jpg"},
];

const Cities = (props) =>{

    return(
        <div className="products">
            {cities.map((i) => {
                return(
                    <Product key={i.id} id={i.id} price={i.price} name={i.name} img={i.img}/>
                )
            })}
        </div>
    )
}
export default Cities;
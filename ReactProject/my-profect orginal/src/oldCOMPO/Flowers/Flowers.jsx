import './Flowers.css';
import Product from '../Product/Product';

const flowers = [
    {id: 1001, price: 10.11, name: "Cactus", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Singapore_Botanic_Gardens_Cactus_Garden_2.jpg/1280px-Singapore_Botanic_Gardens_Cactus_Garden_2.jpg"},
    {id: 1002, price: 10.00, name: "Geranium", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Geranium_February_2008-1.jpg/1280px-Geranium_February_2008-1.jpg"},
    {id: 1003, price: 10.00, name: "Pentas lanceolata", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Cologne_Germany_Flora-K%C3%B6ln-Pentas-lanceolata-01.jpg/120px-Cologne_Germany_Flora-K%C3%B6ln-Pentas-lanceolata-01.jpg"},
    {id: 1004, price: 10.00, name: "Tagetes", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc3E9XRWhuS1pkMrU5KWg67UuEUAgmECpajd1bUZuNypWM-FxrCMYF7naeAc3Jgghsihk&usqp=CAU"},
    {id: 1005, price: 10.00, name: "Petunia", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Smithsoniangardens4.jpg/1024px-Smithsoniangardens4.jpg"},
    {id: 1006, price: 10.00, name: "Vinca", img: "https://floraupload.s3.amazonaws.com/files2/172/17227.jpeg"},
    {id: 1007, price: 10.00, name: "Dahlia", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Dahlia_Woodland_Merinda.jpg/1024px-Dahlia_Woodland_Merinda.jpg"},
    {id: 1008, price: 10.00, name: "Hypoestes", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4smw8Rr9K4nkgKi2ban1ww-BWbsqkUOaW0Q&usqp=CAU"},
];

const Flowers = (props) =>{

    return(
        <div className="products">
            {flowers.map((i) => {
                return(
                    <Product key={i.id} id={i.id} price={i.price} name={i.name} img={i.img}/>
                )
            })}
        </div>
    )
}
export default Flowers;
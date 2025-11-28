import ProductCard from "./ProductCard";
import date from "../data/products.json";

const Product = () => {
    const products=DataTransfer.products;
  return (
    <div className="product">
        {
            products.map((item)=>{
                return <ProductCard key={item.id} title={item.title} price={item.price} imgSrc={item.img}/>
            })
        }
    </div> 
  )
}

export default Product
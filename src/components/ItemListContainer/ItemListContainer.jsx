import { Item } from "./Item";
import "./itemlistcomtainer.css";

export const ItemListContainer=({products}) => (
    <div className="container">
        {products.map((product) =>(
            <Item
            key={product.id}
            id={product.id}
            img={product.img}
            category={product.category}
            title={product.title}
            price={product.price}
            />
        ))}
    </div>
)
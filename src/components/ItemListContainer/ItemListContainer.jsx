import { Item } from "./Item";


export const ItemListContainer=({products}) => (
    <div>
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
import { useState } from "react";

import { addOrder } from "../lib/orders.requests";
import { updateManyPCs } from "../lib/pc.requests";
import { useCartContext } from "../state/Cart.context";

export const CartPage = () => {
    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[email2,setEmail2]=useState('');
    const[phone,setPhone]=useState('');
    
    const { cart, cleanCart, getTotalPrice, removeProduct } = useCartContext();
   
    const createOrder= async () => {
        const items=cart.map(({id,title,qty,price})=>({
            id,
            title,
            qty,
            price,
        }));
        
        const order = {
            buyer: {name, phone, email},
            items,
            total: getTotalPrice,
        }
        const id= await addOrder(order);

        await updateManyPCs(items);
        console.log(id); //mostrar id de la orden al usuario

        cleanCart();
    }

    return <div>
        <button onClick={cleanCart}>Vaciar Carrito</button>
        <span>Total {getTotalPrice}</span>
        {cart.map((item) => (
            <div style={{
                padding: 50,
                background: "#121212",
                margin: "10px 0"
            }}
                key={item.id} onClick={() => removeProduct(item.id)}>
                Nombre {item.title}</div>))}
        <div className="form">
            <div>
                <span>Nombre</span>
                <input onChange={(e) => setName(e.target.value)}/>
            </div>
            <div>
                <span>Correo</span>
                <input onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div>
                <span>Repetir Correo</span>
                <input onChange={(e) => setEmail2(e.target.value)}/>
            </div>
            <div>
                <span>Teléfono</span>
                <input onChange={(e) => setPhone(e.target.value)}/>
            </div>
            <div>
                <button onClick={createOrder}>Realizar Pedido</button>
            </div>
        </div>
    </div>
}
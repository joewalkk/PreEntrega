import { useState } from "react";
import { addOrder } from "../lib/orders.requests";
import { updateManyPCs } from "../lib/pc.requests";
import { useCartContext } from "../state/Cart.context";
import "./cartpage.css";
//import "./index.js";

import Table from 'react-bootstrap/Table';



export const CartPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [email2, setEmail2] = useState('');
    const [phone, setPhone] = useState('');

    const habilitar=()=>{
        
    
        let val=0;
    
        if(name==""){
            val++;
        }
        if(email==""){
            val++;
        } 
        if(!email.includes("@")){
            val++;
        }
        if(email2!=email){
            val++;
        }
        if(phone==""){
            val++;
        }
    
        if(val==0){
            document.getElementById("btn").disabled=false;
        }else{
            document.getElementById("btn").disabled=true;
        }
    }
 
    
    
    const { cart, cleanCart, getTotalPrice, removeProduct } = useCartContext();
   
    const createOrder = async () => {
        
        const items = cart.map(({ id, title, qty, price }) => ({
            id,
            title,
            qty,
            price,
        }));

        const order = {
            buyer: { name, phone, email },
            items,
            total: getTotalPrice,
        }
        const id = await addOrder(order);

        await updateManyPCs(items);
        
        alert("Pedido Realizado!! Tu orden es "+ id);
        cleanCart();

    }
    
    

    return (
        <div>
            <div className="cart__container">
                {cart.length ? (
                    <>
                        <div>
                            <div >
                                <div className="container-button">
                                    <button className="button-vaciar" onClick={cleanCart}>Vaciar Carrito</button>
                                </div>
                                <div className="table">
                                    <Table striped bordered hover variant="dark">
                                        <thead>
                                            <tr>
                                                <th>Producto</th>
                                                <th>Cantidad</th>
                                                <th>Precio</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {cart.map((item) => (
                                                <tr>
                                                    <td>{item.title}</td>
                                                    <td>{item.qty}</td>
                                                    <td>{item.price}</td>
                                                    <td>
                                                        <span className="span" onClick={() => removeProduct(item.id)}>Quitar</span>
                                                    </td>
                                                </tr>
                                            ))}
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td>Total</td>
                                                <td>{getTotalPrice}</td>
                                            </tr>

                                        </tbody>
                                    </Table>
                                </div>

                            </div>
                            <div className="form" onChange={habilitar}>
                                <div className="form-input" >
                                    <input id="nombree" placeholder="Nombre" onChange={(e) => setName(e.target.value)} required/>
                                </div>
                                
                                <div className="form-input" >
                                    <input type="emaile" id="email" placeholder="Correo" onChange={(e) => setEmail(e.target.value)} required />
                                </div>
                                <div className="form-input" >
                                    <input id="emaile2" placeholder="Repetir Correo" onChange={(e) => setEmail2(e.target.value)} required />
                                </div>
                                <div className="form-input" >
                                    <input id="phonee" placeholder="Teléfono" onChange={(e) => setPhone(e.target.value)} required minLength={10}/>
                                </div>
                                <div>
                                    <button id="btn" type="submit"  className="button-pedir" onClick={createOrder}>Realizar Pedido</button>

                                </div>
                            </div>

                        </div>
                    </>
                ) : (
                    <>
                        <h3 className="h3">El Carrito está vacío</h3>
                        
                    </>
                )}
            </div>
        </div>
       
    );
}
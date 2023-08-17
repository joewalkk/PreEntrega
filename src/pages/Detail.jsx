import { useEffect, useCallback } from "react";
import { useState } from "react"
import { ItemCount } from "../components/ItemCount/ItemCount";
import { getPC } from "../lib/pc.requests";
import { useParams } from "react-router-dom";
import "./detail.css";
import { useCartContext } from "../state/Cart.context";
import { Loader } from "../components/Loader/Loader";


export const Detail = () => {
    const { id } = useParams();
    const [pc, setPc] = useState({});
    const {addProduct,itemInCart} = useCartContext();

    useEffect(() => {
        getPC(id).then((res) => {
            setPc(res);
        })
    }, []);

    // const handleAdd =(qty) => {
    //     addProduct(pc,qty)
    // }
    const handleAdd = useCallback(
        (qty) => {
            addProduct(pc, qty);
        },
        [addProduct, pc]
    );

    if (!Object.keys(pc).length) return <Loader/>

    return (
        <div>
            <div className="container-detail">
                <div>
                    <img src={pc.img} />
                </div>
                <div className="info">
                    <span className="titulo">{pc.title}</span>
                    <p className="description">Descripción:</p>
                    <p className="description-info"> {pc.description}</p>
                    <span className="price">
                        $
                        {pc.price}
                    </span>
                    <div className="stock">
                        <span className="stock-span">Quedan {pc.stock} unidades!!</span>
                        <div className="counter">
                            <ItemCount
                                stock={pc.stock - (itemInCart?.(id)?.qty || 0)}
                                onAdd={handleAdd}
                            />
                        </div>
                    </div>

                </div>


            </div>

        </div>
    )
}
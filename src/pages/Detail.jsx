import { useEffect } from "react";
import { useState } from "react"
import { ItemCount } from "../components/ItemCount/ItemCount";
import { getPC } from "../lib/pc.requests";
import { useParams } from "react-router-dom";
import "./detail.css";


export const Detail = () => {
    const { id } = useParams();
    const [pc, setPc] = useState({});

    useEffect(() => {
        getPC(+id).then((res) => {
            setPc(res);
        })
    }, []);

    if (!Object.keys(pc).length) return

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
                            <ItemCount stock={pc.stock} onAdd={() => alert("Comprados")} />
                        </div>
                    </div>

                </div>


            </div>

        </div>
    )
}
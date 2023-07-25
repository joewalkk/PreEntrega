import { useEffect } from "react";
import { useState } from "react"
import { ItemCount } from "../components/ItemCount/ItemCount";
import { getPC } from "../lib/pc.requests";
import {useParams} from "react-router-dom";


export const Detail= () => {
    const {id} = useParams();
    const [pc,setPc] = useState({});

    useEffect(() => {
        getPC(+id).then((res) => {
            setPc(res);
        })
    },[]);

    if(!Object.keys(pc).length) return

    return(
        <div>
            <div>
                <div>
                    <img src={pc.img}/>
                </div>
                <div>
                    <span>{pc.title}</span>
                    <p>{pc.description}</p>
                    <span>
                        $
                        {pc.price}
                    </span>
                    <span>Quedan {pc.stock} unidades</span>

                    <ItemCount stock={pc.stock} onAdd={() => alert("Comprados")}/>
                </div>
            </div>
        </div>
    )
}
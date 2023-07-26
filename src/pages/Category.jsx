import { useEffect } from "react";
import { useState } from "react";
import { getPcs } from "../lib/pc.requests";

import {useParams} from "react-router-dom";
import { ItemListContainer } from "../components/ItemListContainer/ItemListContainer";

export const Category=()=>{
    const {id} =useParams();
    const [products, setProducts]=useState([]);
    const [isLoading, setIsLoading]= useState(true);
    useEffect(() => {
        getPcs(id)
        .then(res => {
            setIsLoading(false);
            setProducts(res)}
        )
    },[id]);

    return (
        <div>
            <div>
                {/* <h5>{isLoading ? "Cargando..." : "Listo"}</h5> */}
                <ItemListContainer products={products} />
            </div>
        </div>
    )
}
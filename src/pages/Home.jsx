import { useEffect } from "react";
import { useState } from "react"
import { ItemListContainer } from "../components/ItemListContainer/ItemListContainer";
import { getPcs } from "../lib/pc.requests";


export const Home=()=>{
    const [products, setProducts]= useState([]);
    const [isLoading, setIsLoading]= useState(true);

    useEffect(()=>{
        getPcs()
        .then(res => {
            setIsLoading(false);
            setProducts(res)
        })
    },[]);

    return(
        <div>
            <div>
                {/* <h5>{isLoading ? "Cargando..." : "Listo"}</h5> */}
                <ItemListContainer products={products}/>
            </div>
        </div>
    )
}
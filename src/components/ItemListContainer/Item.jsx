import { useNavigate } from "react-router-dom";
import "./item.css";



export const Item = ({ img, category, title,id,price }) => {
    const navigate = useNavigate();
    return (
        <div onClick={() => navigate(`/item/${id}`)}>
            <div>
                <img src={img}/>
            </div>
            <div>
                <div>
                    <span color="black">Categoría: {category}</span>
                    <span>{title}</span>
                </div>
                <span>${price}</span>
            </div>
           
        </div>
    );
}
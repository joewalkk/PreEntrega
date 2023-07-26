import { useNavigate } from "react-router-dom";
import "./item.css";



export const Item = ({ img, category, title,id,price }) => {
    const navigate = useNavigate();
    return (
        <div className="item" onClick={() => navigate(`/item/${id}`)}>
            <div className="item-image">
                <img src={img}/>
            </div>
            <div className="item__content">
                <div className="item__content-info">
                    <span className="item__content-category">Categoría: {category}</span>
                    <br/>
                    <span className="item__content-title">{title}</span>
                    <br/>
                    <span className="item__content-price">${price}</span>
                </div>
                
            </div>
           
        </div>
    );
}
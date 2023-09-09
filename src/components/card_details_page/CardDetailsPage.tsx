import { Form, useLoaderData } from "react-router-dom";
import axiosInstance from "../../axiosInstance";
import "./CardDetailsPage.css";


export async function loader({ params }) {
    const { cardId } = params;
    const { data } = await axiosInstance.get(`/cards?q=id:${cardId}`);
    const card = data.data[0];
    return card;
}

export default function CardDetailsPage() { 
    const card = useLoaderData();

    return (
        <div>
            <h1>CardDetailsPage</h1>
            <h3>{card.name}</h3>
            <div className="contain">
                <div className="card">
                    <div className="shine">
                        
                    </div>
                    <img className="large-pokemon-image" src={card.images.large} alt="" />
                </div>
                <div className="shadow"></div>
            </div>
            
        </div>
    )
}
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
            <h3>{ card.name }</h3>
        </div>
    )
}
import { useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import { useError } from "../../routes/root/Root";
import axiosInstance from "../../axiosInstance";
import { usePageLoader } from "../../contexts/PageLoaderProvider/PageLoaderProvider";
import "./CardDetailsPage.css";


export async function loader({ params }) { 
    const { cardId } = params;
    const { data } = await axiosInstance.get(`/cards?q=id:${cardId}`);
    const card = data.data[0];
    return card;
}

export default function CardDetailsPage() {
    const [shadowAnimationPlayState, setshadowAnimationPlayState] = useState(false);
    const [card, setCard] = useState({ images: {}});
    const showError = useError();
    const { finishLoading } = usePageLoader();


    useEffect(() => { 
        const url = new URL(window.location.href);
        // get the last part of the url
        const cardId = url.pathname.split("/").pop();
        if (!cardId) {
            return;
        }
        axiosInstance.get(`/cards?q=id:${cardId}`)
            .then((response) => {
                setCard(response.data.data[0]);
            })
            .catch((error) => {
                console.log(error);
                showError();
            })
            .finally(() => {
                finishLoading();
            })
    }, [showError, finishLoading])

    return (
        <div>
            <h1>CardDetailsPage</h1>
            <h3>{card.name}</h3>
            <div className="contain">
                <div className="card" onMouseEnter={() => setshadowAnimationPlayState(true)}
                onMouseLeave={() => setshadowAnimationPlayState(false)}>
                    <div className="shine"></div>
                    <img className="large-pokemon-image" src={card.images.large} alt="" />
                </div>
                <div className={`shadow ${shadowAnimationPlayState ? 'paused' : ""}`}></div>
            </div>
            
        </div>
    )
}
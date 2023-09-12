import { useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import { useError } from "../../routes/root/Root";
import { usePageLoader } from "../../contexts/PageLoaderProvider/PageLoaderProvider";
import axiosInstance from "../../axiosInstance";
import Tree from "../card_tree_node/CardTreeNode";
import "./CardDetailsPage.css";
import "./CardAnimation.css";


export default function CardDetailsPage() {
    const [shadowAnimationPlayState, setshadowAnimationPlayState] = useState<boolean>(false);
    const [card, setCard] = useState(null);
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
    }, [])

    return (
        <>
            {
                card &&
                (
                    <div className="details-page-container">
                        <div className="pokemon-card-detailed-container">
                            <div className="details-page-header">
                                <h1>{card.name}</h1>
                            </div>
                            <div className="contain">
                                <div className="card" onMouseEnter={() => setshadowAnimationPlayState(true)}
                                onMouseLeave={() => setshadowAnimationPlayState(false)}>
                                    <div className="shine"></div>
                                    <img className="large-pokemon-image" src={card.images.large} alt="" />
                                </div>
                                <div className="shadow-container">
                                    <div className={`shadow ${shadowAnimationPlayState ? 'paused' : ""}`}></div>
                                </div>
                                <div className="card-information">
                                    <h2>Information</h2>
                                    <Tree data={card} />
                                </div>
                            </div>
                        </div>
                </div>
                )
            }
        </>
    )
}
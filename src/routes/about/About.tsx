import { useEffect } from "react";
import { usePageLoader } from "../../contexts/PageLoaderProvider/PageLoaderProvider";
import "./About.css";


export default function About() {
    const { finishLoading } = usePageLoader();
    
    useEffect(() => {
        finishLoading();
    }, []);

    return (
        <main className="about-page-container">
            <div className="about-page-content">
                <h1>About</h1>
                <p>
                    This is a simple application that displays Pokemon cards. 
                    The application is built with React and uses the Pokemon TCG API.
                </p>
                <p>
                    You can find the source code for this application on <a target="_blank" href="https://github.com/FatihAksoy530/PokemonUI">GitHub</a>.
                    </p>
            </div>
        </main>
    )
}
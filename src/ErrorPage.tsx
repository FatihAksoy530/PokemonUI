import "./ErrorPage.css";

export default function ErrorPage() { 
    return (
        <div className="empty-page-container">
            <h1>404</h1>
            <h2>Whoops! Charmander's Misadventure!</h2>
            <p>While camping under the stars, Charmander got distracted eating marshmallows and the webpage you're looking for got toasted by his tail flame!</p>
            <p>Try going back to the <a className="to-home-page" href="/">home page</a> and starting over.</p>
            <img src="/public/gifs/charizard-404.gif" alt="" />
        </div>
    )
}


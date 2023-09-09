import Navbar from "../../components/navbar/Navbar"
import PokemonSearchBar from "../../components/pokemon_search_bar/PokemonSearchBar"
import HomePage from "../../components/home_page/HomePage"
import { Outlet } from "react-router-dom";

export default function Root() { 
    return (
        <div>
            <Navbar />
            <Outlet/>
        </div>
    )
}
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import "./Navbar.css";

export default function Navbar() {
    const [navbarOpenClass, setNavbarOpenClass] = useState<string>("");
    const [overlayClass, setOverlayClass] = useState<string>("");

    const handleNavbarOpenClassChange = (open: boolean) => {
        if (open) {
            setNavbarOpenClass("navbar-open");
            setOverlayClass("overlay-open");
        } else {
            setNavbarOpenClass("");
            setOverlayClass("");
        }
    }
    

    return (
        <>
            <div className= {`overlay ${overlayClass}`} id='overlay' onClick={()=>{handleNavbarOpenClassChange(false)}}></div>
            <div className={`navbar-container ${navbarOpenClass}`}>
                <nav className="navbar">
                    <Link className='navbar-btn' to="/">Home</Link>
                    <Link className='navbar-btn' to="/about">About</Link>
                </nav>
            </div>
            <div className='sidebar-icon-container' onClick={()=>{handleNavbarOpenClassChange(true)}}>
                <button className='sidebar-icon'><ArrowForwardIosIcon/></button>
            </div>
        </>
    )
}
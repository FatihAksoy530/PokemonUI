import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';
import "./Footer.css";


export default function Footer() {
    return (
        <footer>
            <ul className="social-links-container">
                <li id='github-link'><a href="https://github.com/FatihAksoy530" target='_blank'><GitHubIcon /></a></li>
                <li id='linkedin-link'><a href="https://www.linkedin.com/in/fatih-aksoy-3458a6146/" target='_blank'><LinkedInIcon /></a></li>
            </ul>
            <ul className='page-links-container'>
                <li id='home-link'><Link to="/">Home</Link></li>
                <li id='about-link'><Link to="/about">About</Link></li>
            </ul>            
        </footer>
    );
}
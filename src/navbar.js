import './navbar.css'
import home from './images/home.png'
import about from './images/about.png'
import contact from './images/contact.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return ( 
        <div className="nav">
            <div className="navMain">
                <h1>SeriesCenter</h1>
                    <div className="links">
                        <ul>
                            <Link to="/"><img className="img1" src={home} alt="" /></Link>
                        </ul>
                        <ul>
                            <Link to="/about"><img className="img1" src={about} alt="" /></Link>
                        </ul>
                        <ul>
                            <Link to="/movieForm_Nav"><img className="img1" src={contact} alt="" /></Link>
                        </ul>
                        <ul>
                            <Link to="/popluarMovies"><img className="img1" src={contact} alt="" /></Link>
                        </ul>
                    </div>
            </div>
        </div>
     );
}
 
export default Navbar;
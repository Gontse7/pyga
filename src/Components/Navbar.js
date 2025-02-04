
import { MenuItems } from "./menuItems"
import "./Navbar.css"

const Navbar = () => {
    state = {clicked:false};
    handleClick = () => {this.setState({clicked: !this.state.clicked})};
    return(
        <nav className="navbarItems">
            <h1 className="nav-logo">PYGA</h1>
            <div className="menu-icons" onClick={this.handleClick}>
                <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                
            </div>
            <ul className="nav-menu">
                {MenuItems.map((item, index) => {
                    return (
                        <li key = {index}>
                            <a href="{item.url}" className="{item.cName}">
                            {item.tittle}</a>
                        </li>
                    )
                })}
            </ul>
            <button>Contact</button>
        </nav>
    )
}
export default Navbar
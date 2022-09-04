import PrimaryBtn from "../others/PrimaryBtn"
import { FaTimes } from 'react-icons/fa'

const NavMenu = ({ menu, setMenu }) => {
  return (
    <div className="nav-menu" style={{width: menu ? "100%" : "0"}}>
        <button className="close-btn" onClick={() => setMenu(false)}><FaTimes /></button>
        <div className="nav-menu-items">
                <ul className="nav-list">
                    <li>Products</li>
                    <li>Features</li>
                    <li>About</li>
                    <li>contact</li>
                </ul>
                <div className="nav-menu-btn">
                    <a href="/">Login</a>
                    <span className="center-border"></span>
                    <PrimaryBtn text="Register" />
                </div>
            </div>
    </div>
  )
}

export default NavMenu
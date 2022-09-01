import PrimaryBtn from "../others/PrimaryBtn"
import "./nav.css"

const Navbar = () => {
  return (
    <nav>
        <div className="container">
            <a href="/">
                <img src="/img/logo.svg" alt="" />
            </a>
            <div className="nav-items">
                <ul className="nav-list">
                    <li>Products</li>
                    <li>Features</li>
                    <li>About</li>
                    <li>contact</li>
                </ul>
                <div>
                    <a href="/">Login</a>
                    <span className="center-border"></span>
                    <PrimaryBtn text="Register" />
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
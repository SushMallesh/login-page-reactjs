import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="navbar-bg">
    <div className="nav-logo-container">
      <img
        className="website-logo"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
      />
      <img
        className="nav-logout"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
        alt="nav logout"
      />
    </div>
    <div className="nav-items-logos">
      <img
        className="nav-item-logo"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
        alt="nav home"
      />

      <img
        className="nav-item-logo"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png "
        alt="nav products"
      />
      <img
        className="nav-item-logo"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png "
        alt="nav cart"
      />
    </div>

    <ul className="nav-items-container">
      <Link className="link-item" to="/">
        <li className="nav-item">Home</li>
      </Link>
      <Link className="link-item" to="/products">
        <li className="nav-item">Products</li>
      </Link>
      <Link className="link-item" to="/cart">
        <li className="nav-item">Cart</li>
      </Link>
      <li className="nav-item">
        <button className="button" type="button">
          Logout
        </button>
      </li>
    </ul>
  </nav>
)

export default Header

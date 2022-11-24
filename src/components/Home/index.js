import Header from '../Header'
// import {Link} from 'react-router-dom'
import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="home-container">
      <div className="fashion-details">
        <h1 className="heading">Clothes That Get YOU Noticed</h1>
        <img
          className="fashion-image-1"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="clothes that get you noticed"
        />
        <p className="description">
          Fashion is part of the daily air and it does not quite help that it
          changes all the time.Clothes have always been a marker of the era and
          we are in a revolution.Your fashion makes you been seen and heard that
          way you are.So,celebrate the seasons new and exciting fashion in your
          way.
        </p>
        <button type="button" className="shop-now-button">
          Shop Now
        </button>
      </div>
      <img
        className="fashion-image-2"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
        alt="clothes that get you noticed"
      />
    </div>
  </>
)

export default Home

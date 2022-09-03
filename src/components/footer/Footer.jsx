import { footerLinks } from '../../constants/data'
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa'
import "./footer.css"

const Footer = () => {
  
  const footerLinkEl = footerLinks.map(links => {
    return (
      <div key={links.title} className="links">
        <h3>{links.title}</h3>
        { 
          links.links.map(link => (
            <a href="/" key={link.name}>{link.name}</a>
          ))
        }
      </div>
    )
  })

  return (
    <footer>
        <div className="container">
            <div className="footer-grid">
              <a href="/">
                <img src="/img/logo.svg" alt="" />
              </a>
              { footerLinkEl }
              <div>
                <h2>We accept the following payment systems</h2>
                <div className="payment-cards">
                  <img src="/img/visa.svg" alt="" />
                  <img src="/img/mastercard.svg" alt="" />
                  <img src="/img/bitcoin.svg" alt="" />
                </div>
              </div>
            </div>
            <div className="bottom-footer">
              <h5>2021 CRAPPO. All rights reserved</h5>
              <div className="social-links">
                <a href="/">
                  <FaFacebook />
                </a>
                <a href="/">
                  <FaInstagram />
                </a>
                <a href="/">
                  <FaYoutube />
                </a>
                <a href="/">
                  <FaTwitter />
                </a>
                <a href="/">
                  <FaLinkedin />
                </a>
              </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
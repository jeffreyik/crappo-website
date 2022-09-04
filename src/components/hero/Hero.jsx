import PrimaryBtn from "../others/PrimaryBtn"
import "./hero.css"

const Hero = () => {
  return (
    <header className="hero">
        <div className="container">
            <div>
                <div className="deal">
                    <span className="white">75% SAVE</span>
                    <p>For the Black Friday weekend</p>
                </div>
                <h1>Fastest & secure 
                    platform to invest
                    in crypto
                </h1>
                <p>Buy and sell cryptocurencies, trusted by 10M 
                    wallets with over $30 billion in transactions.
                </p>
                <PrimaryBtn text="Try for FREE" icon="/img/arrow-right.svg" />
            </div>
            <img src="/img/illustration1.svg" alt="" className="hero-img" />
        </div>
    </header>
  )
}

export default Hero
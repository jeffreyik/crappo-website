import PrimaryBtn from "../others/PrimaryBtn"
import "./content.css"

const Content = () => {
  return (
    <section className="content">
        <div className="container">
            <img src="/img/illustration2.svg" alt="" />
            <div className="text">
                <h2>Why you should choose CRAPPO</h2>
                <p>Experience the next generation cryptocurrency
                    platform. No financial borders, extra fees, and
                    fake reviews.
                </p>
                <PrimaryBtn text="Learn More" />
            </div>
        </div>
    </section>
  )
}

export default Content
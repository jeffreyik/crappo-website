import Calculator from "./Calculator"
import "./index.css"

const Earning = () => {
  return (
    <section className="earning">
        <div className="container">
            <div className="text">
                <h2>Check how much you can earn</h2>
                <p>Let's check hash rate to see how much you will
                    earn today. Exercitation veniam consequat sunt nostrud amet.
                </p>
            </div>
            <Calculator />
        </div>
    </section>
  )
}

export default Earning
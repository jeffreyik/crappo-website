import Cards from "./Cards"
import "./trade.css"

const Trade = () => {
  return (
    <section className="trade">
        <div className="container">
            <h2>Trade securely and market the high 
                growth cryptocurrencies.
            </h2>
            <div className="card-container">
                <Cards />
            </div>
        </div>
    </section>
  )
}

export default Trade
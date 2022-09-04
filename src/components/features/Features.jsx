import PrimaryBtn from "../others/PrimaryBtn"
import "./features.css"

const Features = () => {
  return (
    <section className="features">
        <div className="container">
            <h2>Market sentiments, portfolio, and run the infrastructure of your choice</h2>
            <div className="row">
                <div className="text">
                    <h3>Invest Smart</h3>
                    <p>Get full statistic information about the behaviour
                        of buyers and sellers will help you to make the decision.
                    </p>
                    <PrimaryBtn text="Learn More" />
                </div>
                <img src="/img/chart.svg" alt="" />
            </div>
            <div className="row reverse">
                <img src="/img/statistic.svg" alt="" />
                <div className="text">
                    <h3>Detailed Statistics</h3>
                    <p>View all mining related information in realtime.
                        at any point at any location and decide which polls you
                        want to mine in.
                    </p>
                    <PrimaryBtn text="Learn More" />
                </div>
            </div>
            <div className="row">
                <div className="text">
                    <h3>Grow your profit and track your investments</h3>
                    <p>Use advanced analytical tools. Clear 
                        TradingView charts let you track current and historical profit investments.
                    </p>
                    <PrimaryBtn text="Learn More" />
                </div>
                <img src="/img/table.svg" alt="" />
            </div>
        </div>
    </section>
  )
}

export default Features
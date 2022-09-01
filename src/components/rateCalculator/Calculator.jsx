import PrimaryBtn from "../others/PrimaryBtn"

const Calculator = () => {
  return (
    <div className="calculator">
        <form>
            <input type="text" placeholder="Enter your hash rate" />
            <select name="" id="">
                <option value="TH/s">TH/s</option>
                <option value="TH/s">H/s</option>
                <option value="TH/s">KH/s</option>
                <option value="TH/s">MH/s</option>
                <option value="TH/s">GH/s</option>
            </select>
            <PrimaryBtn text="Calculate" />
        </form>
        <div>
            <h3>ESTIMATED 24 HOUR REVENUE</h3>
            <h2>0.55 130 59 ETH <span className="blue-text">($1275)</span></h2>
            <p>Revenue will change based on mining difficulty and Ethereum price.</p>
        </div>
    </div>
  )
}

export default Calculator
import SecBtn from "../others/SecBtn"

const Join = () => {
  return (
    <div className="join">
        <div className="text">
            <h2>Start mining now</h2>
            <p>Join now with CRAPPO to get the 
                latest news and start mining now
            </p>
        </div>
        <form>
            <input type="email" placeholder="Enter your email" />
            <SecBtn text="Subscribe" />

        </form>
    </div>
  )
}

export default Join
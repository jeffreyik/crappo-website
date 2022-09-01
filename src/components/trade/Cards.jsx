import { useState } from "react"

import { trade } from "../../constants/data"
import PrimaryBtn from "../others/PrimaryBtn"
import Btn from "../others/Btn"

const Cards = () => {
  const [coins, setCoins] = useState(trade)
  const [active, setActive] = useState(1)

  const toggleActive = (id) => {
    setActive(id)
  }

  const cardEl = coins.map(coin => {
    return (
      <div onClick={() => toggleActive(coin.id)} className={active === coin.id ? "card active" : "card"} key={coin.id}>
        <img src={coin.icon} alt="" />
        <div className="title">
          <h3>{coin.name}</h3>
          <p>{coin.abbr}</p>
        </div>
        <p>{coin.description}</p>
        { active === coin.id ? <PrimaryBtn text="Start mining" icon="/img/arrow-right.svg" /> : <Btn/> }
      </div>
    )
  })

  return (
    <>
      { cardEl }
    </>
  )
}

export default Cards
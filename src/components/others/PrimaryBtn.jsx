const PrimaryBtn = ({ text, icon }) => {
  return (
    <button className="primary-btn">
        { text }
        { icon && <img src={icon} alt="" /> }
    </button>
  )
}

export default PrimaryBtn
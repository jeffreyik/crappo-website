import { metrics } from "../../constants/data"
import { useState } from "react"

const Metrics = () => {
  
  const [metricsData, setMetricsData] = useState(metrics)

  const metricEl = metricsData.map(metric => {
    return (
        <div className="metric" key={metric.id}>
            <img src={metric.icon} alt="" />
            <div>
                <h2>{metric.value}</h2>
                <p>{metric.name}</p>
            </div>
        </div>
    )
  })

  return (
    <div className="metrics">
        <div className="container">
            { metricEl }
        </div>
    </div>
  )
}

export default Metrics
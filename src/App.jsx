import Content from './components/crappo/Content'
import Features from './components/features/Features'
import Hero from './components/hero/Hero'
import Navbar from './components/nav/Navbar'
import Metrics from './components/others/Metrics'
import Earning from './components/rateCalculator/Earning'
import Trade from './components/trade/Trade'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Metrics />
      <Content />
      <Earning />
      <Trade />
      <Features />
    </>
  )
}

export default App

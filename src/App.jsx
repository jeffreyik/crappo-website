import Content from './components/crappo/Content'
import Features from './components/features/Features'
import Footer from './components/footer/Footer'
import Hero from './components/hero/Hero'
import Navbar from './components/nav/Navbar'
import Newsletter from './components/newsletter/Newsletter'
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
      <Newsletter />
      <Footer />
    </>
  )
}

export default App

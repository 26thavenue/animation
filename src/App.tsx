import { BrowserRouter as Router,Routes,Route } from "react-router-dom"

import Day1 from "./pages/Day1-AwwardsBottomNav"
import MouseTrail from "./pages/Day2-Cursor"
import Home from "./pages/Home"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/day1" element={<Day1/>} />
        <Route path="/day2" element={<MouseTrail/>} />
      </Routes>

    </Router>
  )
}

export default App
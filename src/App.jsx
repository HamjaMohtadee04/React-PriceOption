
import { LineChart } from 'recharts'
import './App.css'
import Nav from './Components/Navbar/Nav'
import NewNav from './Components/Navbar/NewNav/NewNav'
import NewPriceoption from './Components/NewPriceoption/NewPriceoption'
import PriceOption from './Components/PriceOption/PriceOption'
import Linechart from './Components/Linechart/Linechart'

function App() {


  return (
    <>
   <NewNav></NewNav>
<PriceOption></PriceOption>
<Linechart></Linechart>
    </>
  )
}

export default App


import { LineChart } from 'recharts'
import './App.css'
import Nav from './Components/Navbar/Nav'
import NewNav from './Components/Navbar/NewNav/NewNav'
import NewPriceoption from './Components/NewPriceoption/NewPriceoption'
import PriceOption from './Components/PriceOption/PriceOption'
import Linechart from './Components/Linechart/Linechart'
import Phones from './Components/Phones/Phones'

function App() {


  return (
    <>
   <NewNav></NewNav>
<PriceOption></PriceOption>
<Linechart></Linechart>
<Phones></Phones>
    </>
  )
}

export default App

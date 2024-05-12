import BarGraph from './Components/BarGraph/index'
import PieGraph from './Components/PieGraph/index'

import './App.css';

const App=() => {
  return(
    <div className='container'>
<PieGraph/>
<BarGraph/>
    </div>
  )

}

export default App;
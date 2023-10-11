
import './App.css'
import Bdstor from './components/bdjs'
import bddata from "./components/bd stor/bddata.json"
import "./components/bd stor/bdcss.css"

const storbd=[]
 storbd.push(bddata.map((stordata,index)=><><Bdstor key={index} image={stordata.image} title={stordata.title} prize={stordata.prize} rating={stordata.rating} desc={stordata.desc}/></>))

function App() {

  return (
    <>
      {storbd}
    </>
  )
}

export default App



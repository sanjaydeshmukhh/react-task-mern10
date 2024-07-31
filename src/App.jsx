import About from "./components/About"
import Gallery from "./components/Gallery"
import Homepage from "./components/Homepage"
import Nav from "./components/Nav"
import { Routes,Route } from "react-router-dom"



const App = () => {
  return (
    <div className="h-screen w-full bg-zinc-200">
        <Nav/>  
        <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/gallery" element={<Gallery/>}/>
            <Route path="/about" element={<About/>}/>   
            
        </Routes>
    </div>
  )
}

export default App
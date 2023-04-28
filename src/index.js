import ReactDOM from "react-dom"
import '../src/index.css'

import Data from "./components/data"
import Contact from "./components/contact"
import Main from "./components/main"
import Footer from "./components/footer"
function App(){
  return(
    <div className="App">  
      <Data/>
      <Contact/>
      <Main/>
      <Footer/>
    </div>
    
  )
}

ReactDOM.render(<App/>,document.getElementById("root"))
import Highlight from "./components/Hero/Highlight"
import Navbar from "./components/Hero/Navbar"
import Introduction from "./components/Overview/Introduction"

const App = () => {
  return (
    <>
    <div className="hero">
      <Navbar /> 
      <Highlight /> 
    </div>
    <div className="overview">
      <Introduction />
    </div>
    </>
  )
}

export default App
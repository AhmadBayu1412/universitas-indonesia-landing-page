import History from "./components/About-Campus/History"
import Highlight from "./components/Hero/Highlight"
import Navbar from "./components/Hero/Navbar"
import Introduction from "./components/Overview/Introduction"
import VideoCampus from "./components/Overview/VideoCampus"

const App = () => {
  return (
    <>
    <div className="hero">
      <Navbar /> 
      <Highlight /> 
    </div>
    <div className="overview">
      <Introduction />
      <VideoCampus />
    </div>
    <div className="about-campus">
      <History />
    </div>
    </>
  )
}

export default App
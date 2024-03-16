import Footer from "./component/Footer"
import Menu from "./component/Menu"
import NavBar from "./component/NavBar"
import Card from "./component/ui/Card"

function App() {

  return (
    <>
      <NavBar/>
      <Menu/>
        <div className="px-10 md:px-20 py-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
              <Card/>
            </div>
        </div>
      <Footer/>
    </>
  )
}

export default App

import Footer from "./component/Footer"
import NavBar from "./component/NavBar"
import Card from "./component/ui/Card"

function App() {

  return (
    <>
      <NavBar/>
      
        <div className="px-10 md:px-20 mt-20 py-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
            </div>
        </div>
      <Footer/>
    </>
  )
}

export default App

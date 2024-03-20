import Banner from "./component/ui/Banner"
import Card from "./component/ui/Card"

function App() {

  return (
    <div>
      <div className="flex className='">
        <div className="px-20 py-10 w-3/4 ">
            <Banner/>
        </div>
        <div className="bg-green-500 w-full h-full">

        </div>
      </div>
      <Card/>
    </div>
  )
}

export default App

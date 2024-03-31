import Banner from "./component/ui/Banner"
import Card from "./component/ui/Card"
import Cards from "./component/ui/Cards";

function App() {

  return (
    <div>
      <div className="flex flex-col md:flex-row px-20 py-10 gap-5">
        <div className="h-[400px] w-4/6">
            <Banner/>
        </div>
        <div className="bg-gray-100 w-2/6 h-[400px] rounded-md">
            <div>  </div>
        </div>
      </div>
      <Card title="New"/>
      <Card title="Popular"/>
      
    </div>
  )
}

export default App;

import LeftSideBar from "./component/LeftSideBar"
import Table from "./component/Table"
import TopHeaderBar from "./component/TopHeaderBar"

function App() {

  return (
    <div className="bg-[#f4f8f9]">
      <TopHeaderBar/>
      <div className="flex gap-5 sm:gap-10">
      <div>
      <LeftSideBar />
      </div>
        <Table/>
      </div>
    </div>
  )
}

export default App

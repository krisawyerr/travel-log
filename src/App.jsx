import BodyProps from "./BodyProps"
import Navbar from "./Navbar"
import data from "./data"

export default function App() {
  let Trips = data.map(function (item){
    return (
      <body 
        item={item}
      />
    )
  })

  return (
    <div>
      <Navbar />
      <BodyProps />
    </div>
  )
}


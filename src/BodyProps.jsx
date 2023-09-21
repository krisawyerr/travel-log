import Body from "./Body"
import data from "./data"

export default function BodyProps() {
    let Trips = data.map(function (item){
        return <Body 
            item={item}
        />
    })

    return (
        <div>
            {Trips}
        </div>
    )
}
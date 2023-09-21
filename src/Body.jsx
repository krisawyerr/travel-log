export default function Body(props) {
    return (
        <div className="Body">
            <div className="LeftRight">
                <div>
                    <img src={props.item.pic} className="img"/>
                </div>
                <div>
                    <div className="Country">
                        <img src="src\assets\icons8-location-50.png"width={17} height={17}/>
                        <p className="CountryName">{props.item.country}</p>
                        <a href={props.item.google} className="GoogleEarth">View on Google Earth</a>
                    </div>
                    <h1 className="City">{props.item.city}</h1>
                    <h3 className="Date">{props.item.timeframe}</h3>
                    <p className="Description">{props.item.description}</p>
                </div>
            </div>
        </div>
    )
}
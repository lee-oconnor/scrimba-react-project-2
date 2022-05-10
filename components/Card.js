import React from "react"


export default function Card(props) {
    return(
        <div className="card-div">
            <div className="img-div">
                <img src= {props.card.imageUrl} alt="Display Image" className="travel-img" width="125px" height="168px"/>
            </div>
            <div className="card-info-div">
                <p className="country-title">
                    <img src="../images/dropPin.png" className="dropPin-img"/>
                    <span className="country-title">{props.card.location}</span>
                    <a href={props.googleMapsUrl} className="view-on-google" target="_blank">View on Google Maps</a>
               </p>
                <h2 className="famous-site">{props.card.title}</h2>
                <h4 className="start-end-dates">{props.card.startDate} - {props.card.endDate}</h4>
                <p className="card-description">{props.card.description}</p>
            </div>
        
        </div>
        
        
        
        
    )
}
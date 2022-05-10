import React from "react"
import data from "./data"
import Navbar from "./components/Navbar"
import Card from "./components/Card"

export default function App() {
    
    const cardComponents = data.map(card => {
        return(
            <Card 
                key={card.id}
                card={card}
            />
        )
    })
    
    return(
        <div>
            <Navbar />
                <div className="cards-list">
                    {cardComponents}
                </div>
        </div>
        
    )
}
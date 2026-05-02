import React from "react"
import Slime from "./components/Slime"

export default function App() {
    function getRandomInt(min, max) {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
    }

    const defaultSlime = {
        colorRed: 128,
        colorGreen: 128,
        colorBlue: 128,
        count: 0
    }

    function duplicateSlime(slime) {
        const newSlime = {
            colorRed: Math.max(Math.min(slime.colorRed + getRandomInt(-10,10),255),0),
            colorBlue: Math.max(Math.min(slime.colorBlue + getRandomInt(-10,10),255),0),
            colorGreen: Math.max(Math.min(slime.colorGreen + getRandomInt(-10,10),255),0),
            count: slime.count + 1
        }
        setSlimeArr((prevArr) => [newSlime, ...prevArr].slice(0,8))
    }

    const [slimeArr, setSlimeArr] = React.useState([defaultSlime])

    const slimeMap = slimeArr.map(
        function (thisSlime, index) {
            return (
                <Slime 
                    key = {index}
                    colorRed={thisSlime.colorRed} 
                    colorBlue={thisSlime.colorBlue} 
                    colorGreen={thisSlime.colorGreen}
                    count={thisSlime.count}
                    duplicateSlime={duplicateSlime}
                />
            )
        }
    )

    return (
        <>
        <link rel="stylesheet" href="App.css"/>
        <div className="container">
            {slimeMap}
        </div>
        </>
    )
    
}
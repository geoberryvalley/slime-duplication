import React from "react"
import Slimepage from "./pages/Slimepage"
import Lobbypage from "./pages/Lobbypage"
import Settingspage from "./pages/Settingspage"

export default function App() {
    

    //default the slime to being grey.
    const defaultSlime = {
        colorRed: 128,
        colorGreen: 128,
        colorBlue: 128,
        face: "._.",
    }

    //array of current slimes. current cap is 8
    const [slimeArr, setSlimeArr] = React.useState([defaultSlime])

    

    //Represents the current menu
    const [curMenu, setCurMenu] = React.useState(0) //0 = lobby, 1 = game, 2 = settings



    const defaultSettings = { 
        "showRGB": true,
        "showFaces": false,
    }

    const [settings, setCurSettings] = React.useState(defaultSettings)

    const gameButton = { setVal: setCurMenu, newVal: 1, text: "Go to Game", cssClass: "btn btn-settings" }
    const lobbyButton = { setVal: setCurMenu, newVal: 0, text: "Go to Lobby", cssClass: "btn btn-settings" }
    const settingsButton = { setVal: setCurMenu, newVal: 2, text: "Go to Settings", cssClass: "btn btn-settings" }

    return (
        <>
            <link rel="stylesheet" href="App.css"/>
            {(() => {
                switch (curMenu) {
                    case 0: //lobby
                        return (
                            <Lobbypage goToGameButton={{ setVal: setCurMenu, newVal: 1, text: "Go to Game", cssClass: "btn btn-primary" }}/>
                        )
                    case 1: //game
                        return (
                            <Slimepage 
                                slimeArr={slimeArr} 
                                setSlimeArr={setSlimeArr} 
                                showRGB={settings.showRGB} 
                                showFaces={settings.showFaces} 
                                settingsButton={settingsButton} 
                                lobbyButton={lobbyButton}
                            />
                        )
                    case 2: //settings
                        return (
                            <Settingspage 
                                settingsObj={settings} 
                                setSettings={setCurSettings}
                                gameButton ={gameButton}
                                lobbyButton={lobbyButton}
                            />
                        )
                    default: //should never happen
                        return null
                }
            })()}
        </>
    )
}

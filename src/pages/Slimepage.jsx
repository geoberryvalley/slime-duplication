import Slime from "../components/Slime";
import StateButton from "../components/StateButton";

export default function Slimepage({slimeArr, setSlimeArr, showRGB, showFaces, settingsButton, lobbyButton}) {
    function getRandomInt(min, max) {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
    }


    const slimeEyes = ["o", "O", "-", "^", "T", "0", ">", "<", "U"]
    const slimeMouths = ["_", ".", "w"] 

    //add a clone of the given slime with slightly different color and possibly a different face.
    function duplicateSlime(slime) {
        const newSlime = {
            colorRed: Math.max(Math.min(slime.colorRed + getRandomInt(-10,10),255),0),
            colorBlue: Math.max(Math.min(slime.colorBlue + getRandomInt(-10,10),255),0),
            colorGreen: Math.max(Math.min(slime.colorGreen + getRandomInt(-10,10),255),0),
            face: Math.random() > 0.1 ? slime.face : (() => {
                const editIndex = getRandomInt(0,3)
                if (editIndex === 0) {
                    return slimeEyes[getRandomInt(0, slimeEyes.length)] + slime.face[1] + slime.face[2]
                } else if (editIndex === 1) {
                    return slime.face[0] + slimeMouths[getRandomInt(0, slimeMouths.length)] + slime.face[2]
                } else {
                    return slime.face[0] + slime.face[1] + slimeEyes[getRandomInt(0, slimeEyes.length)]
                }
            })(),
        }
        setSlimeArr((prevArr) => [newSlime, ...prevArr].slice(0,8))
    }
    
    const slimeMap = slimeArr.map(
        function (thisSlime, index) {
            return (
                <Slime 
                    key = {index}
                    colorRed={thisSlime.colorRed} 
                    colorBlue={thisSlime.colorBlue} 
                    colorGreen={thisSlime.colorGreen}
                    duplicateSlime={duplicateSlime}
                    face = {thisSlime.face}
                    showRGB={showRGB}
                    showFaces={showFaces}
                />
            )
        }
    )
    
    return (
        <>
            <div className="navigation-buttons">
                <StateButton setVal={settingsButton.setVal} newVal={settingsButton.newVal} text={settingsButton.text} cssClass={settingsButton.cssClass}/>
                <StateButton setVal={lobbyButton.setVal} newVal={lobbyButton.newVal} text={lobbyButton.text} cssClass={lobbyButton.cssClass}/>
            </div>
            <div className="container">
                {slimeMap}
            </div>
        </>
    );
}
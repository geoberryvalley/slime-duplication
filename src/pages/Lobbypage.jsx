import StateButton from "../components/StateButton";

export default function Lobbypage({goToGameButton}) {
    return (
        <div className="lobby">
            <h1>Slime Duplication</h1>
            <h2>Created by Geoberryvalley</h2>
            <StateButton setVal={goToGameButton.setVal} newVal={goToGameButton.newVal} text={goToGameButton.text} cssClass={goToGameButton.cssClass}/>
        </div>
    );
}
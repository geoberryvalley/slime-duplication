import StateButton from "../components/StateButton";

export default function Settingspage({settingsObj, setSettings, gameButton, lobbyButton}) {

    const settingsArr = Object.keys(settingsObj).map(
        function (settingName) {
            return {
                settingName: settingName,
                setVal: (x) => setSettings((prevSettings) => ({...prevSettings, [settingName]: x})),
                newVal: !settingsObj[settingName],
                text: settingsObj[settingName] ? "On" : "Off",
                cssClass: settingsObj[settingName] ? "btn btn-success" : "btn btn-danger"
            }
        }
    )

    const settingsMap = settingsArr.map(
        function (thisSetting, index) {
            return (
                <div key={index} className="settings-item">
                    <h2>{thisSetting.settingName}</h2>
                    <StateButton setVal={thisSetting.setVal} newVal={thisSetting.newVal} text={thisSetting.text} cssClass={thisSetting.cssClass}/>
                </div>
            )
        }
    )

    return (
        <>
        <div className="settings">
            <div className="navigation-buttons">
                <StateButton setVal={gameButton.setVal} newVal={gameButton.newVal} text={gameButton.text} cssClass={gameButton.cssClass}/>
                <StateButton setVal={lobbyButton.setVal} newVal={lobbyButton.newVal} text={lobbyButton.text} cssClass={lobbyButton.cssClass}/>
            </div>
            <div className="settings-header">
                <h1>Settings</h1>
            </div>
            
            <div className="settings-list">
                {settingsMap}
            </div>
        </div>
        
        </>
        
    );
}
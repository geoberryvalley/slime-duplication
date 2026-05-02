export default function Slime(slime) {
    const slimeColor = "rgb(" + slime.colorRed + ", " + slime.colorGreen + ", " + slime.colorBlue + ")"

    const countString = "Slime #" + slime.count

    return (
        <div style={{backgroundColor : slimeColor}} className="box" onClick={() => slime.duplicateSlime(slime)}>
            <p>{slimeColor}<br/>{countString}</p>
        </div>
    )
}
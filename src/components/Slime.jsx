export default function Slime(slime) {
    const slimeColor = "rgb(" + slime.colorRed + ", " + slime.colorGreen + ", " + slime.colorBlue + ")"

    return (
        <div style={{backgroundColor : slimeColor}} className="box" onClick={() => slime.duplicateSlime(slime)}>
            <p>{slimeColor}</p>
            <p></p>
        </div>
    )
}
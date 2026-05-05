export default function Slime(slime) {
    const slimeColor = "rgb(" + slime.colorRed + ", " + slime.colorGreen + ", " + slime.colorBlue + ")"


    return (
        <div style={{backgroundColor : slimeColor}} className="slimebox" onClick={() => slime.duplicateSlime(slime)}>
            {slime.showRGB && (
                <p>RGB: {slime.colorRed}, {slime.colorGreen}, {slime.colorBlue}</p>
            )}
            {slime.showFaces && (
                <p>{slime.face}</p>
            )}
        </div>
    )
}
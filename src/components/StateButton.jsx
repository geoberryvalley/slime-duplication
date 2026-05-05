export default function StateButton({setVal, newVal, text, cssClass}) {
    return (
        <button className={cssClass} onClick={() => setVal(newVal)}>
            {text}
        </button>
    )
}
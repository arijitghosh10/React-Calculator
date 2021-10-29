import './Output.css';
const Output = ({ inputValue, answer, colour, bgcolor }) => {
    return (
        <div className="output-wrapper"
            style={{ backgroundColor: bgcolor, color: colour }}>
            <div className="userInput">
                {inputValue}
            </div>
            <div className="result">
                {answer}
            </div>
        </div>
    )
}
export default Output
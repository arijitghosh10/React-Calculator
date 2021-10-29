import './Button.css';
const Button = ({ symbol, num, color, btnClickHandler, bgcolor }) => {
    return (
        <div className="button-wrapper"
            onClick={()=>{btnClickHandler(symbol)} }
            style={{ gridColumn: `span ${num}` , color: color , background: bgcolor }}>
            {symbol}
        </div>
    )
}
export default Button;
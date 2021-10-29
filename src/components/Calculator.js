import { useState } from 'react';
import Button from './Button';
import './Calculator.css';
import Output from './Output';
import * as math from "mathjs";
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Calculator = () => {
    const [inputValue, setInputValue] = useState("");
    const [answer, setAnswer] = useState("");
    const [flag, setFlag] = useState(0);
    const [icon, setIcon] = useState(faSun)
    const [theme, setTheme] = useState("#E8F0F2");
    const [bgcolor, setBgColor] = useState("black");
    const [outputColor, setOutputColor] = useState("#fffffe");
    const [outputBgcolor, setOutputBgColor] = useState("#000");

    const addToInput = (val) => {
        if (inputValue === '' && (val === '+' || val === '/' || val === '*' || val === '%' || val === '^')) return;
        if (val === 'sqrt') {
            setInputValue(inputValue => [...inputValue, val + "("])
        } else {
            if ((isNaN(+inputValue[inputValue.length - 1]) && inputValue[inputValue.length - 1] !== '(' && inputValue[inputValue.length - 1] !== ')' && inputValue[inputValue.length - 1] !== '^') && (val === '%' || val === '+' || val === '-' || val === '*' || val === '/' || val === '^')) {
                setInputValue(inputValue => [...inputValue.slice(0, -1), val + ""])
            } else {
                setInputValue(inputValue => [...inputValue, val + ""])
            }
        }
    }
    const calculate = () => {
        setFlag(1)
        if (inputValue === "") return;
        if(inputValue[inputValue.length-1] === '+' || inputValue[inputValue.length-1] === '^' || inputValue[inputValue.length-1] === '+'|| inputValue[inputValue.length-1] === '*' || inputValue[inputValue.length-1] === '/' || inputValue[inputValue.length-1] === '-') return;
        const input = inputValue.join("") 
        setAnswer(`=${math.evaluate(input)}`)
        if (input === " ") {
            setFlag(0)
        }
    }
    const reset = () => {
        setAnswer("")
        setInputValue("")
        setFlag(0)
    }
    const backspace = () => {
        const updatedAns = inputValue.slice(0, -1)
        setInputValue(updatedAns)
        if (!isNaN(updatedAns[updatedAns.length - 1]) && flag === 1) {
            setAnswer(`=${math.evaluate(updatedAns.join(""))}`)
        } else {
            setAnswer('')
        }
    }
    const themeHandler = () => {
        if (theme === "#E8F0F2") {
            setTheme("black")
        } else {
            setTheme("#E8F0F2")
        }
        if (bgcolor === "black") {
            setBgColor("#E8F0F2")
        } else {
            setBgColor("black")
        }
        if (outputBgcolor === "#000") {
            setOutputBgColor("#fffffe")
        } else {
            setOutputBgColor("#000")
        }
        if (outputColor === "#fffffe") {
            setOutputColor("#000")
        } else {
            setOutputColor("#fffffe")
        }
        if (icon === faSun) {
            setIcon(faMoon)
        } else {
            setIcon(faSun)
        }
    }
    return (
        <div className="calculator">
            <button className="themeBtn" onClick={themeHandler}>
                Change Theme <FontAwesomeIcon icon={icon} />
            </button>
            <div className="calc-wrapper">
                <Output inputValue={inputValue} answer={answer} colour={outputColor} bgcolor={outputBgcolor} />
                <div className="buttons">
                    <Button symbol="AC" color="rgb(216, 32, 0)" btnClickHandler={reset} bgcolor={bgcolor} />
                    <Button symbol="Del" color="rgb(216, 32, 0)" btnClickHandler={backspace} bgcolor={bgcolor} />
                    <Button symbol="(" color="orange" btnClickHandler={addToInput} bgcolor={bgcolor} />
                    <Button symbol=")" color="orange" btnClickHandler={addToInput} bgcolor={bgcolor} />
                    <Button symbol="sqrt" color="orange" btnClickHandler={addToInput} bgcolor={bgcolor} />
                    <Button symbol="^" color="orange" btnClickHandler={addToInput} bgcolor={bgcolor} />
                    <Button symbol="%" color="orange" btnClickHandler={addToInput} bgcolor={bgcolor} />
                    <Button symbol="+" color="orange" btnClickHandler={addToInput} bgcolor={bgcolor} />
                    <Button symbol="7" color={theme} btnClickHandler={addToInput} bgcolor={bgcolor} />
                    <Button symbol="8" color={theme} btnClickHandler={addToInput} bgcolor={bgcolor} />
                    <Button symbol="9" color={theme} btnClickHandler={addToInput} bgcolor={bgcolor} />
                    <Button symbol="-" color="orange" btnClickHandler={addToInput} bgcolor={bgcolor} />
                    <Button symbol="4" color={theme} btnClickHandler={addToInput} bgcolor={bgcolor} />
                    <Button symbol="5" color={theme} btnClickHandler={addToInput} bgcolor={bgcolor} />
                    <Button symbol="6" color={theme} btnClickHandler={addToInput} bgcolor={bgcolor} />
                    <Button symbol="*" color="orange" btnClickHandler={addToInput} bgcolor={bgcolor} />
                    <Button symbol="1" color={theme} btnClickHandler={addToInput} bgcolor={bgcolor} />
                    <Button symbol="2" color={theme} btnClickHandler={addToInput} bgcolor={bgcolor} />
                    <Button symbol="3" color={theme} btnClickHandler={addToInput} bgcolor={bgcolor} />
                    <Button symbol="/" color="orange" btnClickHandler={addToInput} bgcolor={bgcolor} />
                    <Button symbol="." color={theme} btnClickHandler={addToInput} bgcolor={bgcolor} />
                    <Button symbol="0" color={theme} btnClickHandler={addToInput} bgcolor={bgcolor} />
                    <Button symbol="=" num="2" color="rgb(216, 32, 0)" btnClickHandler={calculate} bgcolor={bgcolor} />
                </div>
            </div>
        </div>
    )
}
export default Calculator;
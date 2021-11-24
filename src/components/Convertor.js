import React, { useState } from 'react';
import './Convertor.css';
import * as convert from 'convert-units';
import Select from 'react-select';

const Convertor = () => {
    const [enteredVal, setEnteredVal] = useState('');
    const [selectedUnit, setSelectedUnit] = useState('');
    const [selectedOutputUnit, setSelectedOutputUnit] = useState('');
    const [answer, setAnswer] = useState('')
    const [fromOptions, setFromOptions] = useState([])
    const unitOptions = [
        { value: 'length', label: 'Length' },
        { value: 'area', label: 'Area' },
        { value: 'volume', label: 'Volume' },
        { value: 'pressure', label: 'Pressure' },
        { value: 'angle', label: 'Angle' },
        { value: 'temp', label: 'Temperature' },
        { value: 'VolFlow', label: 'Volume Flow Rate' },
        { value: 'time', label: 'Time' }
    ]

    const changeConvertor = (event) => {
        if (event.value === 'length') {
            setFromOptions([
                { value: 'in', label: 'Inches' },
                { value: 'ft', label: 'Foot' },
                { value: 'm', label: 'Metres' },
                { value: 'km', label: 'Kilometre' },
                { value: 'cm', label: 'Centimetre' },
                { value: 'yd', label: 'Yard' },
                { value: 'mm', label: 'Millimetre' },
                { value: 'mi', label: 'Mile' }
            ])
        }
        if (event.value === 'temp') {
            setFromOptions([
                { value: 'R', label: 'Rankine' },
                { value: 'C', label: 'Celsius' },
                { value: 'K', label: 'Kelvin' },
                { value: 'F', label: 'Fahrenheit' }
            ])
        }
        if (event.value === 'time') {
            setFromOptions([
                { value: 'ns', label: 'nanoseconds' },
                { value: 'ms', label: 'milliseconds' },
                { value: 's', label: 'seconds' },
                { value: 'min', label: 'Minutes' },
                { value: 'h', label: 'Hours' },
                { value: 'd', label: 'Days' },
                { value: 'week', label: 'Week' },
                { value: 'month', label: 'Month' }
            ])
        }
        if (event.value === 'area') {
            setFromOptions([
                { value: 'mm2', label: 'millimetre square' },
                { value: 'cm2', label: 'centimetre square' },
                { value: 'm2', label: 'metre square' },
                { value: 'ha', label: 'hectare' },
                { value: 'km2', label: 'kilometre square' },
                { value: 'in2', label: 'square inch' },
                { value: 'ft2', label: 'square foot' },
                { value: 'ac', label: 'acre' }
            ])
        }
        if (event.value === 'volume') {
            setFromOptions([
                { value: 'mm3', label: 'millimetre cube' },
                { value: 'cm3', label: 'centimetre cube' },
                { value: 'ml', label: 'millilitre' },
                { value: 'l', label: 'litre' },
                { value: 'kl', label: 'kilolitre' },
                { value: 'm3', label: 'metre cube' },
                { value: 'km3', label: 'Kilometre cube' },
                { value: 'gal', label: 'Gallon' },
                { value: 'tsp', label: 'Tea spoon' },
                { value: 'Tbs', label: 'Table spoon' },
                { value: 'cup', label: 'Cup' },
                { value: 'in3', label: 'cubic inch' },
                { value: 'ft3', label: 'cubic foot' }
            ])
        }
        if (event.value === 'pressure') {
            setFromOptions([
                { value: 'Pa', label: 'Pascal' },
                { value: 'bar', label: 'Bar' },
                { value: 'torr', label: 'Torr' },
                { value: 'psi', label: 'Pound per square inch' },
                { value: 'ksi', label: 'Kilopound per square inch' },
                { value: 'hPa', label: 'Hectopascal' },
                { value: 'kPa', label: 'Kilopascal' },
            ])
        }
        if (event.value === 'angle') {
            setFromOptions([
                { value: 'deg', label: 'Degree' },
                { value: 'rad', label: 'Radian' },
                { value: 'grad', label: 'Gradian' },
                { value: 'arcmin', label: 'Arcsminute' },
                { value: 'arcsec', label: 'Arcsecond' }
            ])
        }
        if (event.value === 'VolFlow') {
            setFromOptions([
                { value: 'mm3/s', label: 'millimetrecube per sec' },
                { value: 'cm3/s', label: 'centimetrecube per sec' },
                { value: 'ml/s', label: 'millilitre per sec' },
                { value: 'l/s', label: 'litre per sec' },
                { value: 'kl/s', label: 'kilolitre per sec' },
                { value: 'l/min', label: 'metre cube per minute' },
                { value: 'kl/min', label: 'Kilometrecube per minute' },
                { value: 'kl/h', label: 'Kilometrecube per hour' },
                { value: 'm3/s', label: 'metrecube per sec' },
                { value: 'm3/min', label: 'metrecube per minute' },
                { value: 'Tbs/s', label: 'Tablespoon per sec' },
                { value: 'tsp/s', label: 'Teaspoon per sec' },
                { value: 'cup/s', label: 'cup per sec' },
                { value: 'gal/min', label: 'gallon per minute' },
                { value: 'gal/h', label: 'gallon per hour' },
                { value: 'ft3/s', label: 'Cubicfoot per sec' },
                { value: 'ft3/min', label: 'cubicfoot per minute' },
                { value: 'yd3/s', label: 'cubicyard per sec' },
                { value: 'yd3/min', label: 'cubicyard per minute' }
            ])
        }
    }
    const valChangeHandler = (event) => {
        setEnteredVal(event.target.value)
    }
    const unitChangeHandler = (event) => {
        setSelectedUnit(event.value)
    }
    const OutputUnitChangeHandler = (event) => {
        setSelectedOutputUnit(event.value)
    }
    const resetHandler = () => {
        setEnteredVal('')
        setAnswer('')
    }
    const answerHandler = () => {
        if (!selectedUnit || !selectedOutputUnit || enteredVal==='') return
        setAnswer(convert(enteredVal).from(`${selectedUnit}`).to(`${selectedOutputUnit}`))
    }
    return (
        <React.Fragment>
            <div className="switchConvertor">
                <span>Choose a measurement</span>
                <Select
                    options={unitOptions}
                    className="custom-select-measurement"
                    placeholder="Select a measurement"
                    onChange={changeConvertor} />
            </div>
            <div className="convertor">
                <div className="userInputDiv">
                    <h2>Enter a value</h2>
                    <div className="select">
                        <input type="number" min="0" value={enteredVal} onChange={valChangeHandler} />
                        <Select
                            options={fromOptions}
                            className="custom-select-unit"
                            placeholder="Select a unit"
                            onChange={unitChangeHandler}
                            isSearchable />
                    </div>
                </div>
                <div className="outputDiv">
                    <h2>Convert To</h2>
                    <div className="select">
                        <Select
                            options={fromOptions}
                            className="custom-select-unit"
                            placeholder="Select a unit"
                            onChange={OutputUnitChangeHandler}
                            isSearchable />
                        <button className="go" onClick={answerHandler}>Go!</button>
                    </div>
                </div>
                <div className="answerDiv">
                    <div>
                        <h2>Answer</h2>
                        <div className="convertedValue">{answer}</div>
                    </div>
                    <div className="resetBtn">
                        <button className="reset" onClick={resetHandler}>Reset</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Convertor;
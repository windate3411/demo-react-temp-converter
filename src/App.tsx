import React, { useState } from 'react'

import { convertDegree } from './utils'
import './App.css'

function App() {
  const [type, setType] = useState('Fahrenheit')
  const [value, setValue] = useState('')
  const [result, setResult] = useState('The result will be shown here')
  const [errorMessage, setErrorMessage] = useState('')

  const onClick = () => {
    setResult(convertDegree(type, Number(value)))
  }

  const onDegreeInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setErrorMessage(
      `${isInputValid(e.target.value) ? '' : 'Please input a valid number'}`
    )
  }

  const isInputValid = (value: string) => {
    return Number(value) && value !== ''
  }

  const onDegreeChange = (e: React.FocusEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    setErrorMessage(
      `${isInputValid(e.target.value) ? '' : 'Please input a valid number'}`
    )
  }

  return (
    <div className="App">
      <div className="container">
        <div className="input-container">
          <div className="input-box degree">
            <div className="label">Degrees</div>
            <input
              type="text"
              onChange={onDegreeChange}
              onBlur={onDegreeInputBlur}
              onFocus={() => setResult('')}
            />
          </div>
          <div className="input-box type">
            <div className="label">Type</div>
            <select
              name="type"
              id="type"
              onChange={(e) => setType(e.target.value)}
            >
              <option value="Fahrenheit">Fahrenheit</option>
              <option value="Celsius ">Celsius</option>
            </select>
          </div>
          <button
            className={`convert-btn ${!isInputValid(value) ? 'disabled' : ''}`}
            onClick={onClick}
            disabled={!isInputValid(value)}
          >
            Convert
          </button>
        </div>
        <div className="err-message">{errorMessage}</div>
        <div className="result-box">
          <div className="label">Result</div>
          <div className="result">{result}</div>
        </div>
      </div>
    </div>
  )
}

export default App

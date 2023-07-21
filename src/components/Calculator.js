import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { calculate } from '../actions/calculatorActions';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operator, setOperator] = useState('+');
  const dispatch = useDispatch();
  const { result, error } = useSelector((state) => state.calculator);

  const handleOperatorChange = (event) => {
    setOperator(event.target.value);
  };

  const handleCalculate = () => {
    dispatch(calculate(operator, Number(num1), Number(num2)));
  };

  return (
    <div>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Enter number 1"
      />
      <select value={operator} onChange={handleOperatorChange}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Enter number 2"
      />
      <button onClick={handleCalculate}>Calculate</button>
      {error && <div>{error}</div>}
      {result && <div>Result: {result}</div>}
    </div>
  );
};

export default Calculator;

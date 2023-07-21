import React from 'react';
import { useSelector } from 'react-redux';

const Result = () => {
  const { result } = useSelector((state) => state.calculator);

  return (
    <div>
      {result && <div>Result: {result}</div>}
    </div>
  );
};

export default Result;

export const calculate = (operator, num1, num2) => {
    if (isNaN(num1) || isNaN(num2)) {
      return { type: 'CALCULATE_FAILURE', payload: 'One or both fields are empty' };
    }
  
    switch (operator) {
      case '+':
        return { type: 'CALCULATE_SUCCESS', payload: num1 + num2 };
      case '-':
        return { type: 'CALCULATE_SUCCESS', payload: num1 - num2 };
      case '*':
        return { type: 'CALCULATE_SUCCESS', payload: num1 * num2 };
      case '/':
        return { type: 'CALCULATE_SUCCESS', payload: num1 / num2 };
      default:
        return { type: 'CALCULATE_FAILURE', payload: 'Invalid operator' };
    }
  };
  
const initialState = {
    result: null,
    error: null,
  };
  
  const calculatorReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'CALCULATE_SUCCESS':
        return { ...state, result: action.payload, error: null };
      case 'CALCULATE_FAILURE':
        return { ...state, result: null, error: action.payload };
      default:
        return state;
    }
  };
  
  export default calculatorReducer;
  
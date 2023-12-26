import { useState } from "react";
export function useInput(defaultValue, validationFn) {
  const [enteredValue, setEnteredValue] = useState(defaultValue);
  const [didEdit, setDidEdit] = useState(false);

  const valueIsValid = validationFn(enteredValue);
  function handleInputBlur(identifier) {
    setDidEdit(true);
  }

  function handleValueChange(identifier, value) {
    setEnteredValue(event.target.value);

    setDidEdit(false);
  }

  return {
    value: enteredValue,
    handleInputBlur,
    handleValueChange,
    hasError: didEdit && !valueIsValid,
  };
}

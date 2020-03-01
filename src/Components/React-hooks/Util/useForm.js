// creating custom hook for from
import { useState } from 'react';
export const useForm = () => {
  const [values, setValue] = useState({});
  // to not mutate the previous values or overriding the old object we get a shallow copy using spread operator
  // second item in the array is onchange function that we will pass later to the input field
  // Based on the input field we are going to update the value [e.target.name]

  const onChangeHandler = e => {
    setValue({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  return [values, onChangeHandler];
};

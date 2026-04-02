import { useState } from "react";

export const useGlobalState = (key, defaultValue) => {
  const stored = localStorage.getItem(key);
  let initialValue;

  try {
    initialValue = stored ? JSON.parse(stored) : defaultValue;
  } catch (error) {
    initialValue = defaultValue;
  }

  const [value, setValue] = useState(initialValue);

  const updateValue = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, updateValue];
};


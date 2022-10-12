import { useState } from "react";

export function AddCategory({ onNewCategory }) {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;

    // setCategories((categories) => [...categories, inputValue]); // de esta forma lo hizo Fernando
    onNewCategory( inputValue.trim() );
    setInputValue("");
    // setCategories([...categories, inputValue]); Asi lo hice yo y categories esta pasado como prop
    // console.log(inputValue);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
}

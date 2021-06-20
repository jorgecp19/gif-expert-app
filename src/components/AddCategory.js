import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {
  const [inputValue, setInputValue] = useState('')

  const handleInput = (event) => {
    setInputValue(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length > 2) {
      setCategories(currentCategories => [inputValue, ...currentCategories])
      setInputValue('')
    }
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Category</h2>
      <input 
        type="text"
        value={inputValue}
        onChange={handleInput} />
      <button>Add</button>
    </form>
  )
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}
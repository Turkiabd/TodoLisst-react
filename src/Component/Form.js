import React from 'react';


// this form takes one input n btn
const Form = ({ onChange, todoItem, onClick }) => {
  return (
    <>
    {/* using onChanfe the input feild to detect any change occur */}
      <input
        onChange={onChange}
        type='text'
        className='form-control mt-3 p-3'
        placeholder='Enter your task'
        value={todoItem}
      />
      {/* using onClick to perform an action when btn is clicked */}
      <button
        onClick={onClick}
        type='button'
        className='btn btn-secondary mt-3 w-100 p-3'
      >
        Add new Task
      </button>
    </>
  );
};

export default Form;
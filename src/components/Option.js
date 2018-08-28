import React from 'react';

const Option = (props) => {
  const { option, handleDeleteOption } = props;
  return (
    <div>
      {option}
      <button
        onClick={(e) => handleDeleteOption(option)}>
        Remove
      </button>
    </div>
  );
}

export default Option;
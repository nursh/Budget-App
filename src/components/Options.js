import React from 'react';

import Option from './Option';

const Options = (props) => {
  const { options, handleDeleteOptions, handleDeleteOption } = props;
  return (
    <div>
      <button onClick={handleDeleteOptions}>Remove all</button>
      { options.length === 0 && <p>Please add an option</p>}
      { options.map(option => 
        <Option 
          key={option}
          option={option}
          handleDeleteOption={handleDeleteOption}
        />) 
      }
    </div>
  );
}

export default Options;
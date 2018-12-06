import React from 'react';

const Option = (props) => (
  <div>
    {props.text}
    <button
      className="button button--link"
      onClick={() => {
        props.handleDeleteOption(props.text)
      }}
    >
      Remove
    </button>
  </div>
);

export default Option;


import React from 'react'


export const Input = ({ option, handleChanage, readOnly = false }) => {
  return (
    <div className="input">
      {option.heading && <p>{option.heading}</p>}
      {option?.type === "file" ? (
        <input type={option.type} />
      ) : (
        <input
          type={option.type || "text"}
          name={option.name}
          onChange={handleChanage}
          value={option.value}
          placeholder={option.placeholder}
          readOnly={readOnly}
        />
      )}
    </div>
  );
};

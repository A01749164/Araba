// Autora: Aleny

import { useRef } from "react";

const FormGroup2 = (props) => {
  const inputRef = useRef();

  const handleClick = () => {
    const nuevoInput = {
      id: props.id,
      value: inputRef.current.value,
    };
    props.onChange(nuevoInput);
  };

  return (
    <div className="form-group">
      <div className="mb-2">
        <label htmlFor={props.id} className="form-label">
          {props.label}
        </label>
        <input
          id={props.id}
          ref={inputRef}
          type={props.type}
          className="form-control form-control-sm"
          onChange={handleClick}
          required
        />
      </div>
    </div>
  );
};

export default FormGroup2;

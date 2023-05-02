// Autora: Aleny

import { useRef } from "react";

const FormGroup = (props) => {
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
      <div className="row g-2 align-items-center mb-2">
        <div className="col-5">
          <label htmlFor={props.id} className="form-label">
            {props.label}
          </label>
        </div>
        <div className="col">
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
    </div>
  );
};

export default FormGroup;

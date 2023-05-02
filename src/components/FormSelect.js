// Autora: Aleny

const FormSelect = (props) => {
  return (
    <div className="form-group">
      <div className="row g-2 align-items-center mb-2">
        <div className="col-5">
          <label htmlFor={props.id} className="form-label form-label">
            {props.label}
          </label>
        </div>
        <div className="col">
          <select id={props.id} className="form-select form-select-sm" required>
            <option disabled value="">
              {props.disabledValue}
            </option>
            <option value={props.op1}>{props.op1}</option>
            <option value={props.op2}>{props.op2}</option>
            <option value={props.op3}>{props.op3}</option>
            <option value={props.op4}>{props.op4}</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FormSelect;

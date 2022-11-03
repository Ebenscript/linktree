import { Util } from "../../shared/util";
import "./input.css";

export function Input(props) {
  const { label, id, error, hint, className, ...inputProps } = props;
  const hasError = !!error;
  const classNames = Util.classNames("input", className, {
    "input--error": hasError,
  });

  return (
    <div className={classNames}>
      <label htmlFor={id}>{label}</label>

      <input id={id} {...inputProps} />

      {(!!hint || hasError) && <span>{hasError ? error : hint}</span>}
    </div>
  );
}

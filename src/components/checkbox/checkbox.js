import { useId } from "react";
import { Util } from "../../shared/util";
import "./checkbox.css";

export function Checkbox(props) {
  const id = useId();
  const { children, ...inputProps } = props;
  const classNames = Util.classNames("checkbox", {
    "checkbox--disabled": props.disabled,
  });

  return (
    <label htmlFor={id} className={classNames} tabIndex={0}>
      <input type="checkbox" id={id} {...inputProps} hidden />
      <span className="checkbox__check"></span>

      <span className="checkbox__text">{children}</span>
    </label>
  );
}

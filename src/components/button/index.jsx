import React from "react";
import classNames from "classnames";

function Button({
  label,
  type,
  endIcon,
  iconOnly,
  startIcon,
  children,
  classNameButton,
  color = "amber",
  percent = 500,
  circle = false,
  disabled = false,
  textColor = "black",
  roundedSize = "rounded-sm",
  ...props
}) {
  const _label = () => (!iconOnly ? <span>{label}</span> : null);
  const _startIcon = () => (React.isValidElement(startIcon) ? startIcon : null);
  const _endIcon = () => (React.isValidElement(endIcon) ? endIcon : null);

  const classes = classNames(
    "inline-flex justify-center items-center gap-2 p-2",
    classNameButton,
    circle ? "rounded-full" : roundedSize,
    `bg-${color}-${percent}`,
    `text${textColor}`,
    {
      "bg-gray-200": disabled,
      "cursor-not-allowed": disabled,
    }
  );

  return (
    <button className={classes} type={type} {...props}>
      {_startIcon()}
      {_label()}
      {children}
      {_endIcon()}
    </button>
  );
}

export default Button;

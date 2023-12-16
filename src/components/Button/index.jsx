import "./button.scss";

const Button = ({ children, className, onClick, ...rest }) => {
  return (
    <button
      onClick={onClick}
      className={`button ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};
export default Button;

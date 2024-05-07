//
export const Button = ({ className, icon, children, disabled, type, onClick, id }) => {
  return (
    <button className={`btn ${className}`} disabled={disabled} type={type} onClick={onClick} id={id}>
      {icon}
      {children}
    </button>
  );
};

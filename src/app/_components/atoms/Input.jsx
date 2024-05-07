export const Input = ({ classname, type, placeholder, name, value, id, required }) => {
  return (
    <input
      className={`form-control ${classname}`}
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      id={id}
      required={required}
    />
  );
};

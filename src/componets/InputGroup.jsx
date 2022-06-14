import { timeZone } from "../data";
import { Error } from "../styleComponents/Error";
import { Input, Label, Select } from "../styleComponents/Input";

const InputGroup = ({
  label,
  type = "text",
  name,
  error,
  placeholder,
  event,
  handleChange,
  value,
  disabled,
}) => {
  return (
    <div className="group">
      <Label htmlFor="">{label}</Label>
      {type === "select" ? (
        <Select
          onChange={handleChange}
          disabled={disabled}
          value={value}
          name={name}
        >
          {timeZone.map((item, i) => (
            <option key={i} value={`${item.GMT}, ${item.form}`}>
              {item.name}
            </option>
          ))}
        </Select>
      ) : (
        <Input
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
          disabled={disabled}
        />
      )}
      {error && <Error>{error}</Error>}
    </div>
  );
};

export default InputGroup;

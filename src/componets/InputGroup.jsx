import { Input, Label, Select } from "../styleComponents/Input";

const initZone = [
  {
    name: "Dhaka/Bangladesh",
    zone: "+0600",
  },
  {
    name: "New_Dali/India",
    zone: "+0530",
  },
  {
    name: "New_York/USA",
    zone: "-0700",
  },
  {
    name: "Canberra/Australia",
    zone: "+1000",
  },
];

const InputGroup = ({
  label,
  type = "text",
  name,

  placeholder,
  event,
  handleChange,
  value,
}) => {
  return (
    <div className="group">
      <Label htmlFor="">{label}</Label>
      {type === "select" ? (
        <Select onChange={handleChange} value={value} name={name}>
          {initZone.map((item, i) => (
            <option key={i} value={`${item.zone}, ${item.name}`}>
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
        />
      )}
    </div>
  );
};

export default InputGroup;

import { Select, Option } from "@material-tailwind/react";

type CitySelectProps = {
  cities: string[];
  label: string;
  onChange: (field: "from" | "to", value: string) => void;
};

export const CitySelect: React.FC<CitySelectProps> = ({
  cities,
  label,
  onChange,
}) => {
  return (
    <Select
      label={label}
      onChange={(value) => onChange(label as "from" | "to", value as string)}
    >
      {cities.map((city) => (
        <Option value={city}>{city}</Option>
      ))}
    </Select>
  );
};

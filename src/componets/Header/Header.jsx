import { formatInTimeZone } from "date-fns-tz";
import { useEffect, useState } from "react";
import { timeZone } from "../../data";
import { Select } from "../../styleComponents/Input";
import { Container } from "../../styleComponents/Layout";

const Header = ({ handleZoneTime, zoneTime }) => {
  const [date, setDate] = useState(new Date());
  const time = formatInTimeZone(date, `${zoneTime}`, "yyyy-MM-dd HH:mm:ss zzz");

  useEffect(() => {
    setInterval(() => {
      setDate(new Date());
    }, 1000);
  }, [date]);

  return (
    <Container>
      <h1>Time Zone Tracking Application for Time Management</h1>
      <header
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: "20px 0",
        }}
      >
        <Select
          onChange={handleZoneTime}
          name=""
          id=""
          style={{ width: "30%" }}
        >
          {timeZone.map((item, i) => (
            <option key={i} value={item.zone}>
              {item.name}
            </option>
          ))}
        </Select>
        <h2>{time} </h2>
        <h2>{date.toLocaleTimeString()}</h2>
      </header>
    </Container>
  );
};

export default Header;

import { formatDistance } from "date-fns";
import { formatInTimeZone } from "date-fns-tz";
import { Button } from "../../styleComponents/Button";
import { Col, Row } from "../../styleComponents/Layout";
import { date } from "../../utils/date";

const ViewEvent = ({
  data,
  zoneTime,
  handleUpdate,
  handleDelete,
  handleCreateNew,
}) => {
  return (
    <>
      <Row>
        {data?.map((item) => {
          const dateTime = date(item);
          return (
            <Col key={item.id}>
              <h2>{item.title}</h2>
              <p>
                <small>
                  Meeting with{" "}
                  <strong style={{ color: "#0b6e45" }}>{item.name}</strong> from{" "}
                  <strong style={{ color: "#920d66" }}>
                    {item.zone.split(" ")[1]}
                  </strong>
                </small>
              </p>
              <p>My Time {new Date(dateTime).toLocaleTimeString()}</p>
              <p>
                Event Time{" "}
                {formatInTimeZone(
                  dateTime,
                  `${zoneTime}`,
                  "yyyy-MM-dd HH:mm:ss zzz"
                ).toString()}
              </p>
              <p>Meeting Date {new Date(dateTime).toDateString()}</p>
              <p>
                Distance of meeting{" "}
                {formatDistance(new Date(), new Date(dateTime))}
              </p>
              <Button
                style={{ fontSize: "16px", padding: "8px 10px" }}
                onClick={() => handleUpdate(item)}
              >
                Update
              </Button>{" "}
              <Button
                style={{ fontSize: "16px", padding: "8px 10px" }}
                onClick={() => handleDelete(`${item.id}`)}
              >
                Delete
              </Button>
            </Col>
          );
        })}
      </Row>
      <Button onClick={handleCreateNew}>Create New</Button>
    </>
  );
};

export default ViewEvent;

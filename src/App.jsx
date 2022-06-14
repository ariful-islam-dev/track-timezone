import { formatDistance } from "date-fns";
import { useState } from "react";
import "./App.css";
import MyForm from "./componets/Form/MyForm";
import { meeting } from "./data";
import { Button } from "./styleComponents/Button";
import { Col, Container, Row } from "./styleComponents/Layout";
import { date } from "./utils/date";
import { uid } from "./utils/uid";

const init = {
  title: "",
  name: "",
  date: "",
  eventTime: "",
  zone: "",
};

function App() {
  const [data, setData] = useState(meeting);
  const [event, setEvent] = useState(init);
  const [open, setOpen] = useState(false);

  const [errors, setErrors] = useState(null);

  const handleChange = (e) => {
    setEvent((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { error, isValid } = validate(event);

    if (isValid) {
      setErrors(error);
    } else {
      setEvent(init);
      const meet = {
        id: uid(),
        ...event,
      };
      setData((prev) => [...prev, meet]);
      setErrors(null);
    }
  };
  console.log(data);
  console.log(errors);

  const validate = (event) => {
    const error = {};
    let isValid = false;
    if (event.title === "") {
      error.title = "Title Is Require";
      isValid = true;
    }
    if (event.name === "") {
      error.name = "Name Is Require";
      isValid = true;
    }
    if (event.date === "") {
      error.date = "Date is Require";
      isValid = true;
    }
    if (event.eventTime === "") {
      error.eventTime = "Event Time is Require";
      isValid = true;
    }

    if (event.zone === "") {
      error.zone = "Zone is Require";
      isValid = true;
    }

    return {
      error,
      isValid,
    };
  };

  const handleDelete = (id) => {
    console.log(id);
    if (id) {
      const newData = data.filter((item) => item.id !== id);
      setData(newData);
    } else {
      setData(data);
    }
  };
  const handleUpdate = (item) => {
    setOpen(true);
    setEvent(item);
  };

  return (
    <div>
      <Container>
        {open && (
          <MyForm
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            event={event}
            setOpen={setOpen}
          />
        )}
      </Container>
      <Container>
        <Row>
          {data?.map((item) => {
            const dateTime = date(item);
            return (
              <Col key={item.id}>
                <h2>{item.title}</h2>
                <p>
                  <small>
                    Meeting with {item.name} from {item.zone.split(" ")[1]}
                  </small>
                </p>
                <p>My Time {new Date(dateTime).toLocaleTimeString()}</p>
                <p>Event Time {new Date(dateTime).toTimeString()}</p>
                <p>Meeting Date {new Date(dateTime).toDateString()}</p>
                <p>
                  Distance of meeting{" "}
                  {formatDistance(new Date(), new Date(dateTime))}
                </p>
                <Button onClick={() => handleUpdate(item)}>Edit</Button>{" "}
                <Button onClick={() => handleDelete(`${item.id}`)}>
                  Delete
                </Button>
              </Col>
            );
          })}
        </Row>
        <Button
          onClick={() => {
            setOpen(true);
            setEvent(init);
          }}
        >
          Create New
        </Button>
      </Container>
    </div>
  );
}

export default App;

import { Button } from "../../styleComponents/Button";
import { Form, FormModal } from "../../styleComponents/Form";
import InputGroup from "../InputGroup";

const MyForm = ({ handleChange, handleSubmit, event, setOpen }) => {
  return (
    <FormModal>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>{event.id ? "Update" : "Create New"}</div>
        <div onClick={() => setOpen(false)}>X</div>
      </div>
      <Form onSubmit={handleSubmit}>
        <InputGroup
          label={"Event title or Subject"}
          name={"title"}
          type={"text"}
          placeholder={"Enter your Event Title"}
          value={event.title}
          handleChange={handleChange}
        />

        <InputGroup
          label={"Your Client Name"}
          name={"name"}
          type={"text"}
          placeholder={"Enter your client Name"}
          value={event.name}
          handleChange={handleChange}
        />
        <InputGroup
          label={"Select Event Date"}
          name={"date"}
          type={"date"}
          placeholder={"Event date"}
          value={event.date}
          handleChange={handleChange}
        />
        <InputGroup
          label={"Chose Event time"}
          name={"eventTime"}
          type={"time"}
          placeholder={"Event title"}
          value={event.eventTime}
          handleChange={handleChange}
        />
        <InputGroup
          label={"Select Event Zone"}
          name={"zone"}
          type={"select"}
          placeholder={"select your option"}
          value={event.zone}
          handleChange={handleChange}
        />

        <Button type="submit">Submit</Button>
      </Form>
    </FormModal>
  );
};

export default MyForm;

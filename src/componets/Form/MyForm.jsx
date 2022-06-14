import { Button } from "../../styleComponents/Button";
import { Form, FormModal } from "../../styleComponents/Form";
import InputGroup from "../InputGroup";

const MyForm = ({ handleChange, handleSubmit, event, closeModal, errors }) => {
  return (
    <FormModal>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          color: "#fff",
        }}
      >
        <h2>{event.id ? "Update" : "Create New"}</h2>
        <h2 style={{ cursor: "pointer" }} onClick={closeModal}>
          X
        </h2>
      </div>
      <Form onSubmit={handleSubmit}>
        <InputGroup
          label={"Event title or Subject"}
          name={"title"}
          type={"text"}
          placeholder={"Enter your Event Title"}
          value={event.title}
          handleChange={handleChange}
          error={errors.title}
          disabled={event.id}
        />

        <InputGroup
          label={"Your Client Name"}
          name={"name"}
          type={"text"}
          placeholder={"Enter your client Name"}
          value={event.name}
          error={errors.name}
          handleChange={handleChange}
          disabled={event.id}
        />
        <InputGroup
          label={"Select Event Date"}
          name={"date"}
          type={"date"}
          placeholder={"Event date"}
          value={event.date}
          error={errors.date}
          handleChange={handleChange}
        />
        <InputGroup
          label={"Chose Event time"}
          name={"eventTime"}
          type={"time"}
          placeholder={"Event title"}
          value={event.eventTime}
          error={errors.eventTime}
          handleChange={handleChange}
        />
        <InputGroup
          label={"Select Event Zone"}
          name={"zone"}
          type={"select"}
          placeholder={"select your option"}
          value={event.zone}
          error={errors.zone}
          handleChange={handleChange}
          disabled={event.id}
        />

        <Button type="submit">{event.id ? "Update" : "Submit"}</Button>
      </Form>
    </FormModal>
  );
};

export default MyForm;

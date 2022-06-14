import "./App.css";
import MyForm from "./componets/Form/MyForm";
import Header from "./componets/Header/Header";
import ViewEvent from "./componets/ViewEvent/ViewEvent";
import { useApp } from "./hooks/useApp";
import { Container } from "./styleComponents/Layout";

function App() {
  const {
    open,
    errors,
    zoneTime,
    handleZoneTime,
    handleChange,
    handleSubmit,
    handleDelete,
    handleUpdate,
    data,
    event,
    closeModal,

    handleCreateNew,
  } = useApp();
  return (
    <div>
      <Container>
        <Header handleZoneTime={handleZoneTime} zoneTime={zoneTime} />
      </Container>
      <Container>
        {open && (
          <MyForm
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            event={event}
            closeModal={closeModal}
            errors={errors}
          />
        )}
      </Container>
      <Container>
        <ViewEvent
          data={data}
          zoneTime={zoneTime}
          handleUpdate={handleUpdate}
          handleDelete={handleDelete}
          handleCreateNew={handleCreateNew}
        />
      </Container>
    </div>
  );
}

export default App;

import { useState } from "react";
import { formInit, meeting } from "../data";
import { uid } from "../utils/uid";
import { validate } from "../utils/validate";
export const useApp = ()=>{
  const [data, setData] = useState(meeting);
  const [event, setEvent] = useState(formInit);
  const [open, setOpen] = useState(false);

  const [errors, setErrors] = useState({});
  const [zoneTime, setZoneTime] = useState("Asia/Dhaka");

  const handleZoneTime = (e) => {
    setZoneTime(e.target.value);
  };

  const handleChange = (e) => {
    setEvent((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { error, isValid } = validate(event);

    if (isValid) {
      setErrors(error);
    } else {
      if (event.id) {
        const updateItem = data.find((item) => item.id === event.id);
        updateItem.date = event.date;
        updateItem.eventTime = event.eventTime;
        setEvent(formInit);
        setOpen(false);
      } else {
        setEvent(formInit);
        const meet = {
          id: uid(),
          ...event,
        };
        setData((prev) => [...prev, meet]);
        setErrors({});
        setOpen(false);
      }
    }
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
    setErrors({});
  };
  const handleCreateNew = ()=>{
    setOpen(true);
            setEvent(formInit);
            setErrors({});
  }
  const closeModal = ()=>{
    setOpen(false)
  }

  return {
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
    handleCreateNew,
    closeModal
  }

}
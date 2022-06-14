export const validate = (event) => {
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

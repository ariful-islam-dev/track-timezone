

export const date = (item) => {
    let string = new Date(
      `${item.date} ${item.eventTime} GMT ${item.zone.split(" ")[0]}`
    );
    string = string
    return string
  };




export const date = (item) => {
    let string = new Date(
      `${item.date} ${item.eventTime} GMT ${item.zone.split(" ")[0]}`
    );
    return string
  };



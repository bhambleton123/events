const artist = document.createElement("P");
artist.append(events.Items[0].EventName);
artist.classList.add("artist");
document.getElementById("events").append(artist);

const reRender = events => {
  const list = document.getElementById("events").lastChild;
  document.getElementById("events").removeChild(list);
  renderEvents(events);
};

const renderEvents = events => {
  const list = document.createElement("DIV");
  list.classList.add("event-list");
  document.getElementById("events").append(list);

  events.Items.forEach(event => {
    const item = document.createElement("DIV");
    item.classList.add("event-list-item");
    item.append(
      event.Date +
        " " +
        event.Time +
        " " +
        event.VenueCity +
        " at the " +
        event.VenueName +
        " " +
        event.MinPrice
    );
    list.append(item);
  });
};

filterByLocation(events);
renderEvents(events);

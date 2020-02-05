const filterByLocation = events => {
  const description = document.createElement("P");
  description.append("Location:");
  document.getElementById("events").append(description);
  const select = document.createElement("SELECT");

  const locations = events.Items.reduce((locations, item) => {
    if (!locations[item.VenueCity]) {
      locations[item.VenueCity] = true;
    }
    return locations;
  }, {});

  Object.keys(locations).forEach(location => {
    const locationOption = document.createElement("OPTION");
    select.append(locationOption);
    locationOption.append(location);
  });

  select.onchange = function() {
    const location = this.value;
    const newEvents = {
      Items: events.Items.filter(item => item.VenueCity === location)
    };
    reRender(newEvents);
  };

  select.selectedIndex = -1;
  document.getElementById("events").append(select);
};

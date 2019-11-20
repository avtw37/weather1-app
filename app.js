window.addEventListener("load", () => {
  let long;
  let lat;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      long = position.coords.longitude;
      lat = position.coords.latitude;

      const api = `https://api.darksky.net/forecast/3227e3ee173f36abf41f0b7835f415fc/${lat},${long}`;

      fetch(api)
        .then(response => {
          return response.json();
        })
        .then(data => {
          console.log(data);
        });
    });
  }
});

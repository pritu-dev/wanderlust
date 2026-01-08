
mapboxgl.accessToken = window.mapToken;

const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v12",
  center: window.listingData.geometry.coordinates,
  zoom: 9,
});

new mapboxgl.Marker({ color: "red" })
  .setLngLat(window.listingData.geometry.coordinates)
  .setPopup(
    new mapboxgl.Popup({ offset: 25 }).setHTML(
      `<h4>${window.listingData.title}</h4>
       <p>Exact Location Provided after booking</p>`
    )
  )
  .addTo(map);


 










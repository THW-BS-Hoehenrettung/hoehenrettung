export function setMap(
  mapElement: HTMLElement,
  {
    latitude,
    longitude,
    zoom,
    markerMarkup = "",
  }: {
    latitude: number;
    longitude: number;
    zoom: number;
    markerMarkup?: string;
  }
) {
  (async () => {
    const {
      map: leafletMap,
      marker: leafletMarker,
      tileLayer,
    } = await import("leaflet");

    const map = leafletMap(mapElement).setView([latitude, longitude], zoom);

    tileLayer("https://{s}.tile.osm.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 19,
      detectRetina: true,
    }).addTo(map);

    if (markerMarkup !== "") {
      leafletMarker([latitude, longitude])
        .bindPopup(markerMarkup)
        .addTo(map)
        .openPopup();
    } else {
      leafletMarker([latitude, longitude]).addTo(map);
    }
  })();
}

import { onMount, createSignal } from "solid-js";

export default function MapView() {
  const [location, setLocation] = createSignal<string>("Detecting location…");

  onMount(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const lat = pos.coords.latitude.toFixed(4);
          const long = pos.coords.longitude.toFixed(4);
          setLocation(`Latitude: ${lat}, Longitude: ${long}`);
        },
        () => {
          setLocation("Unable to retrieve your location.");
        }
      );
    } else {
      setLocation("Geolocation is not supported in your browser.");
    }
  });

  return (
    <div class="location">{location()}</div>
  );
};
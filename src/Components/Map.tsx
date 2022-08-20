import { useEffect, useMemo, useState, useRef } from "react"
import { GoogleMap, MarkerF, DirectionsRenderer } from "@react-google-maps/api";
import "./Map.css";

type DirectionsResult = google.maps.DirectionsResult;

function Map(location:any){
	const center = useMemo(() => ({
		lat: -36.88288692065761,
		lng: 174.77691315740879
	  }), []);

	const asbuilt = useMemo(() => ({
		lat: -36.80480322828371,
		lng: 174.7408660846596
	}), []);

  const [directions, setDirections] = useState<DirectionsResult>();

  const service = new google.maps.DirectionsService();

	if (location['from'] == "Mangere Town Centre") {
    service.route(
      {
        origin: "Mangere Town Centre",
        destination: "5 Mahuru Street",
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === "OK" && result) {
          setDirections(result);
        }
      }
    );
		return (
			<GoogleMap
				zoom={12}
				center={center}
				mapContainerClassName="map-container"
			>
				<MarkerF position={asbuilt} />
        {directions && (
            <DirectionsRenderer
              directions={directions}
              options={{
                polylineOptions: {
                  zIndex: 50,
                  strokeColor: "#1976D2",
                  strokeWeight: 5,
                },
              }}
            />
          )}
			</GoogleMap>
		)
	}
	else {
    service.route(
      {
        origin: "11 Cortina Place",
        destination: "5 Mahuru Street",
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === "OK" && result) {
          setDirections(result);
        }
      }
    );
		return (
			<GoogleMap
				zoom={12}
				center={center}
				mapContainerClassName="map-container"
			>
				<MarkerF position={asbuilt} />
        {directions && (
            <DirectionsRenderer
              directions={directions}
              options={{
                polylineOptions: {
                  zIndex: 50,
                  strokeColor: "#1976D2",
                  strokeWeight: 5,
                },
              }}
            />
          )}
			</GoogleMap>
		)
	}
}

export default Map;
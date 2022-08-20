import React from 'react'
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useMemo } from "react"
import { GoogleMap, useLoadScript } from "@react-google-maps/api";

import DropDownTop from '../Components/DropDownTop';
import "./MainApp.css";

function MainApp() {
	const [selectedSignOut, setSelectedSignOut] = useState<boolean>(false);
    const [fromLocation, setFromLocation] = useState<string>("");
    const [toLocation, setToLocation] = useState<string>("");

	document.title = "Not Implemented";
	const { isLoaded } = useLoadScript(
		{"googleMapsApiKey": process.env.REACT_APP_PUBLIC_GOOGLE_MAPS_API_KEY||""}
	)

	if (!isLoaded) return <div>Loading...</div>

	return (
		<div className="MainAppPage">
			{selectedSignOut ? <Navigate to={"/"} /> : <></>}
			<DropDownTop setFrom={setFromLocation} setTo={setToLocation} />
			<Map />
			<button onClick={() => setSelectedSignOut(true)} />
		</div>
	);
}

function Map(){
	const center = useMemo(() => ({
		lat: -36.88288692065761,
		lng: 174.77691315740879
	  }), []);
	  
	const [map, setMap] = React.useState(null)

	const onLoad = React.useCallback(function callback(map:any) {
		const bounds = new window.google.maps.LatLngBounds(center);
		map.fitBounds(bounds);
		setMap(map)
	}, [])

	const onUnmount = React.useCallback(function callback(map:any) {
		setMap(null)
	}, [])

	return (
		<GoogleMap
			zoom={12}
			center={center}
			mapContainerClassName="map-container"
		></GoogleMap>
	)
}

export default MainApp;
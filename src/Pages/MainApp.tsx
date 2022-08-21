import React from 'react'
import { useState } from "react";
import { Navigate } from "react-router-dom";
import DropDownTop from '../Components/DropDownTop';
import DropDownBottom from '../Components/DropDownBottom';
import Map from '../Components/Map';
import { useLoadScript } from "@react-google-maps/api";
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
			<Map from={fromLocation} to={toLocation}/>
			<DropDownBottom cost={null} timeTaken={null} bus={null} setSelectSignOut={setSelectedSignOut} /> 
		</div>
	);
}

export default MainApp;
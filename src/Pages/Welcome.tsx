import { useState } from "react";
import { Navigate } from "react-router-dom";

import "./Welcome.css";

enum ButtonPressed {
	None = 0,
	SignUp = 1,
	LogIn = 2
}

function Welcome() {
	const [selected, setSelected] = useState<ButtonPressed>(ButtonPressed.None);

	return (
		<div className="WelcomePage">
			{selected === 0 ? <></> : <Navigate to={`/${selected === 1 ? "signup" : "login"}`} />}
			<h1>
				Welcome to the Park and Ride App!!
			</h1>
			<button onClick={() => setSelected(ButtonPressed.LogIn)}>
				Log In
			</button>
			<button onClick={() => setSelected(ButtonPressed.SignUp)}>
				Sign Up
			</button>
		</div>
	);
}

export default Welcome;
import { useState } from "react";
import { Navigate } from "react-router-dom";

import "./LogIn.css";

function LogIn() {
	const [selected, setSelected] = useState<boolean>(false);
	const [username,  setUsername] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [error, setError] = useState<string>("");

	document.title = "Log In!";

	const handleClick = () => {
		if(username.length === 0) setError("Please enter your email!");
		else if(password.length === 0) setError("Please enter your password!");
		else {
			setSelected(true)
		}
	}

	return (
		<div className="LogInPage">
			{selected ? <Navigate to={"/app"} /> : <></>}
			<h1>
				Log In!
			</h1>
			{error.length > 0 ? <h3 style={{color: "#ff0000"}}>{error}</h3> : <></>}
			<h4>
				Your Email:
			</h4>
			<input 
				className="NameEntry" 
				placeholder="Your Email" 
				maxLength={32} 
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => {setUsername(e.target.value)}} 
			/>
			<h4>
				Your Password:
			</h4>
			<input 
				className="NameEntry" 
				placeholder="Password" 
				maxLength={32} 
				type="password" 
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => {setPassword(e.target.value)}}
			/>
			<div style={{width: "100%", height: "25px"}} />
			<button onClick={() => handleClick()}>
				Log In!
			</button>
			<p>No account? Sign up by clicking <a href="/signup">here!</a></p>
		</div>
	);
}

export default LogIn;
import { useState } from "react";
import { Navigate } from "react-router-dom";

import "./SignUp.css";

function SignUp() {
	const [selected, setSelected] = useState<boolean>(false);
	const [username,  setUsername] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [confirmPassword, setConfirmPassword] = useState<string>("");
	const [error, setError] = useState<string>("");

	document.title = "Sign Up";

	const handleClick = () => {
		if (username.length === 0) setError("Please enter an Email!");
		else if (password !== confirmPassword) setError("Passwords does not match!");
		else {
			localStorage.setItem("email", username);
			setSelected(true);
		}
	}

	return (
		<div className="SignUpPage">
			{selected ? <Navigate to={"/app"} /> : <></>}
			<h1>
				Sign Up Page!
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
			<h4>
				Confirm Password:
			</h4>
			<input 
				className="NameEntry" 
				placeholder="Confirm Password" 
				maxLength={32} 
				type="password" 
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => {setConfirmPassword(e.target.value)}}
			/>
			<div style={{width: "100%", height: "25px"}} />
			<button onClick={() => handleClick()}>
				Sign Up!
			</button>
		</div>
	);
}

export default SignUp;
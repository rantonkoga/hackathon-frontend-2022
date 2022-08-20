import { useState } from "react";
import { Navigate } from "react-router-dom";

import "./Welcome.css";

function Welcome() {
	const [selected, setSelected] = useState<boolean>(false);

	document.title = "Not Implemented";

	return (
		<div className="WelcomePage">
			{selected ? <Navigate to={"/"} /> : <></>}
			<h1>
				Page Not Found!!!
			</h1>
			<button onClick={() => setSelected(true)} />
		</div>
	);
}

export default Welcome;
import { useState } from "react";
import { Navigate } from "react-router-dom";

import "./MainApp.css";

function MainApp() {
	const [selected, setSelected] = useState<boolean>(false);

	document.title = "Not Implemented";

	return (
		<div className="MainAppPage">
			{selected ? <Navigate to={"/"} /> : <></>}
			<h1>
				Page Not Found!!!
			</h1>
			<button onClick={() => setSelected(true)} />
		</div>
	);
}

export default MainApp;
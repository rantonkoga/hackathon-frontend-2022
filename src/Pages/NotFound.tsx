import { useState } from "react";
import { Navigate } from "react-router-dom";

import "./NotFound.css";

function NotFound() {
	const [selected, setSelected] = useState<boolean>(false);

	document.title = "404: Not Found!";

	return (
		<div className="NotFoundPage">
			{selected ? <Navigate to={"/"} /> : <></>}
			<h1>
				Page Not Found!!!
			</h1>
			<button onClick={() => setSelected(true)} />
		</div>
	);
}

export default NotFound;
import { useState } from "react";

import "./DropDownTop.css";

interface IProps {
    setFrom: (o: string) => void,
    setTo: (o: string) => void
}

function DropDownTop({setFrom, setTo} : IProps) {
    const [loadContent, setLoadContent] = useState<boolean>(false);
    const [location, setLocation] = useState<string>("");
    const [destination, setDestination] = useState<string>("");

    const handleClick = () => {
        if(location.length > 0 && destination.length > 0) {
            setFrom(location);
            setTo(destination);
        }

        setLoadContent(false);
    }

    if (!loadContent) {
        return (
            <div 
                className={"DropDownTopWidth DropDownTopClosed"}
                onClick={() => setLoadContent(true)}
            >
                <div style={{width: "100%", height: "2px"}} />
                <img src={`${process.env.PUBLIC_URL}/assets/down_arrow.png`} alt="Going Down"/>
            </div>
        )
    }
    return (
        <div className={"DropDownTopWidth DropDownTopOpened"}>
            <div style={{width: "100%", height: "15px"}} />
            <input 
				className="DropDownLocation" 
				placeholder="Your Location" 
				maxLength={100} 
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => {setLocation(e.target.value)}} 
			/>
            <div style={{width: "100%", height: "15px"}} />
            <input 
				className="DropDownDestination" 
				placeholder="Your Destination" 
				maxLength={100} 
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => {setDestination(e.target.value)}} 
			/>
            <div style={{width: "100%", height: "15px"}} />
            <button onClick={() => handleClick()}>
				{location.length === 0 || destination.length === 0 ? "Back to Map" : "Confirm Addresses"}
			</button>
        </div>
    )
}

export default DropDownTop;
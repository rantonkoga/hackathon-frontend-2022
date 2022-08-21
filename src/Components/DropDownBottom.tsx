import { useState } from "react";

import "./DropDownBottom.css";

interface IProps {
    cost: string|null,
    timeTaken: string|null,
    bus: string|null,
    co2Saved: string|null,
    setSelectSignOut: (o: boolean) => void
}

function DropDownBottom({cost, timeTaken, bus, co2Saved, setSelectSignOut}: IProps) {
    const [loadContent, setLoadContent] = useState<boolean>(false);
    
    if (!loadContent) {
        return (
            <div 
                className={"DropDownBottomWidth DropDownBottomClosed"}
                onClick={() => setLoadContent(true)}
            >
                <div style={{width: "100%", height: "2px"}} />
                <img src={`${process.env.PUBLIC_URL}/assets/up_arrow.png`} alt="Going Up"/>
            </div>
        )
    }
    return (
        <div className={"DropDownBottomWidth DropDownBottomOpened"}>
            <div style={{width: "100%", height: "20px"}} />
            <h3>ESTIMATED COST FOR 2-WAY TRIP:</h3>
            <h4>{cost ? cost : "$5:00"}</h4>
            <h3>TIME TAKEN TO DESTINATION:</h3>
            <h4>{timeTaken ? timeTaken : "23 minutes"}</h4>
            <h3>CURRENT BUS TO TAKE:</h3>
            <h4>{bus ? bus : "966"}</h4>
            <h3>TOTAL CARBON SAVED THIS WEEK:</h3>
            <h4>{co2Saved ? co2Saved : "7 kg "}</h4>
            <div className={"DropDownBottomButtons"}>
                <button onClick={() => setSelectSignOut(true)}>
                    Sign Out
                </button>
                <button onClick={() => setLoadContent(false)}>
                    Minimize
                </button>
            </div>
        </div>
    )
}

export default DropDownBottom;
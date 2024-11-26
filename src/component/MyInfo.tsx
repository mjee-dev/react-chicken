import React from "react";
import { useParams } from "react-router-dom";

function MyInfo() {
    const { userId } = useParams();
    return (
        <div className="contain-content">
            My Info <br></br>
            Hi, ${userId}

            <br></br>
        
            <button className="btn btn-primary">Button</button>
            <button className="btn w-64 rounded-full">버튼</button>
        </div>
    );
}

export default MyInfo;
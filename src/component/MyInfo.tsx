import React from "react";
import { useParams } from "react-router-dom";

function MyInfo() {
    const { userId } = useParams();
    return (
        <div className="contain-content">
            My Info <br></br>
            Hi, ${userId}
        </div>
    );
}

export default MyInfo;
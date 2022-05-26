import React from "react";
import '../styles/LoadingSkeleton.css'

function LoadingSkeleton(){
    return(
        <div className="Skeleton">
            <div className="bar"></div>
            <div className="bar-2"></div>
            <div className="bar"></div>
        </div>
    )
}

export { LoadingSkeleton }
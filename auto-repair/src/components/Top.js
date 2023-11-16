import React from "react";
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

function Top() {
    const jump = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    return(    
        <a href="#" className="back-to-top" onClick={jump}>
            <ArrowCircleUpIcon className="i"></ArrowCircleUpIcon>
        </a>
    ); 
}

export default Top;
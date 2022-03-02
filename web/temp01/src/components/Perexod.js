import React from "react";

export const Perexod = (props) => {
    const atrFirst = props.address
    const atrSecond = props.text


    return <div>
        <a href={atrFirst}>{atrSecond}</a>
    </div>

}



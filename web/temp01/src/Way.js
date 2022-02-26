import React from "react";

export const Way = (props) => {
    const atrFirst = props.adress
    const atrSecond = props.text


    return <div>
        <a href={atrFirst}>{atrSecond}</a>
    </div>

}

export  const Way1 = (props) => {
    const poisk = props.search
    return <div>
         {poisk}
    </div>
}

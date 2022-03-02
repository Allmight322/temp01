import {useState} from "react";


export  const Search = (props) => {
    const poisk = props.search
    const event = props.event


    return <div>
        <input type='text' value={poisk}>
    </input>

    <button type='submit'
        id = 'sumbit'
        onClick={
        ()=> event()
    }
    >Push</button>

    </div>




}





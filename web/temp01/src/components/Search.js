import {useState} from "react";


export  const Search = (props) => {
    const poisk = props.search
    const f = props.f


    return <div>
        <input type='text' value={poisk}>
    </input>

    <button type='submit'
        id = 'sumbit'
        onClick={
        ()=> f()
    }
    >Push</button>

    </div>




}





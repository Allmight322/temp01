import {useState} from "react";


export  const Search = (props) => {
    const poisk = props.search
    const event = props.event
    const textHandler = (event) => {
        console.log(event.target.value)
    }


    return <div>
        <input type='text' onClick = {textHandler}>
    </input>

    <button type='submit'
        id = 'sumbit'
        onClick={
        ()=> event()
    }

    >Push</button>

    </div>




}





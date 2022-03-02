import {useState} from "react";


export  const Search = (props) => {
    const poisk = props.search
    const f = props.f
    const [lake, lake2] = useState()

    return <div><input type='text' value={poisk}>
    </input>

    <button type='submit'
        id = 'sumbit'
        onClick={
        ()=> f()
    }
        onChange={
            ()=> lake2()
        }
    >Push</button>

    </div>




}






import {onclick} from './App'
export  const Search = (props) => {
    const poisk = props.search

    return <div><input type='text' value={poisk}>
    </input>

    <button type='submit'
        id = 'sumbit'
        onClick={
        ()=> {onclick}
    }>Push</button>

    </div>




}





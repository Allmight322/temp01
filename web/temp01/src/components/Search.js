import {useState} from "react";


export  const Search = (props) => {
    const poisk = props.search
    const event = props.event
    const pour1 = props.pour1
    const setPour1 = props.setPour1

    const textHandler = (zxc) => {
        setPour1(zxc.target.value)

    }

    return <div>
        <input type='text' onChange={textHandler}>
        </input>

    <button type='submit'
        id = 'sumbit'
        onClick={
             ()=> {
                 event()
                 console.log(pour1)
             }

        }

    >Push</button>

    </div>


}
export default Search;






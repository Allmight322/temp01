import {useState} from "react";


export  const Search = (props) => {
    const poisk = props.search
    const event = props.event
    const end = props.pour1
    const begin = props.setPour1

   const textHandler = (zxc) => {
        setInputText(zxc.target.value)
   }


    return <div>
        <input type='text' onChange={textHandler}>
        </input>

    <button type='submit'
        id = 'sumbit'
        onClick={
             ()=> {
                 event()
                 console.log(end)
             }

        }

    >Push</button>

    </div>


}
export default Search;






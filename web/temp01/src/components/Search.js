import {useState} from "react";


export  const Search = (props) => {
    const poisk = props.search
    const event = props.event
   const  [pour, setPour] = useState([])

    const textHandler = () => {
        setPour(event.target.value)

    }



    return <div>
        <input type='text' onChange={textHandler}>
        </input>



    <button type='submit'
        id = 'sumbit'
        onClick={
             ()=> (
                 event())
             (
                 console.log({pour})
             )

        }

    >Push</button>

    </div>




}





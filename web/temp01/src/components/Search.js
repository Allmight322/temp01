import {useState} from "react";


export  const Search = (props) => {
    const poisk = props.search
    const event = props.event
    const pour1 = props.went
    const setPour1 = props.gone
    const [inputText, setInputText] = useState([])

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
                 console.log(inputText)
             }

        }

    >Push</button>

    </div>


}
export default Search;






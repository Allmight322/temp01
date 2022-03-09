import './App2.css';
import {useState} from "react";
function App2() {



const [inputText, setInputText] = useState('')
    const [result, setResult] = useState('')

const handler = (zxc) =>{
    setInputText(zxc.target.value)
}
const fotler =() =>{
    setResult(inputText)
}


    return<div className='App2'>

    <div className='vvod'>
        <input type ='text' onChange={handler}/>

    <button type = 'sumbit' onClick={fotler
    }>PUSH
    </button>
    </div>
           <textarea className='area' defaultValue={result} />

    </div>






}
export default App2
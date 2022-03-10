import './App2.css';
import {useState} from "react";

function App2() {

    const [inputText, setInputText]=useState('')
    const [result, setResult]=useState('')

    const handler=(zxc)=>{
        setInputText(zxc.target.value)
    }

    const foot=()=>{
        setResult(inputText.split(' ').map(function(item){return item[0]}).join(''))
        }



    return <div className='App2'>
        <div className='input'>
            <input type='text' onChange={handler}/>
            <button type='submit' onClick={foot}>
                PUSH
            </button>
        </div>
        <textarea className='area' value={result} onChange = {() => {}}/>
    </div>
}
export default App2
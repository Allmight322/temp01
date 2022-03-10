import './App2.css';
import {useState} from "react";

function App2() {

    const [inputText, setInputText]=useState('')
    const [result, setResult]=useState('')

    const handler=(zxc)=>{
        setInputText(zxc.target.value)
    }

    const foot=()=>{
        let hook = '';
        for (let count =1; count<inputText.length; count+=2){
            hook+=inputText[count]

        }
        if (inputText.length>1)
            setResult(hook)
        else
            setResult(inputText)

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
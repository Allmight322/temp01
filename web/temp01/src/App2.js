import './App2.css';
import {useState} from "react";

function App2() {

    const [inputText, setInputText]=useState('')
    const [result, setResult]=useState('')

    const handler=(zxc)=>{
        setInputText(zxc.target.value)
    }

    /*const foot=()=> {

    }*/

    function checking() {
        let kick = JSON.parse(inputText)
        let b = (kick[0].name + ' ' + kick[1].name + ' ' + kick[2].name)


        try {
            JSON.parse(inputText);
        } catch (e) {
            return setResult('')
        }
        return setResult(b)
    }









    return <div className='App2'>
        <div className='input'>
            <input type='text' onChange={handler}/>
            <button type='submit' onClick={checking}>
                PUSH
            </button>
        </div>
        <textarea className='area' value={result} onChange = {() => {}}/>
    </div>
}
export default App2
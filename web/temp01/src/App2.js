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
        let beer = ''


        for (let i = 0; i < kick.length;i++){
            if(!('name' in  kick)) {continue}
            beer += kick[i].name + ' '}


        try {
            JSON.parse(inputText);
        } catch (e) {
            return setResult('')
        }
          return setResult(beer)
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
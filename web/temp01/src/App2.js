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
        let kick
        let beer = []

        try {
            kick = JSON.parse(inputText)
            kick.forEach((e) => {           /* beer = kick.map(e => {      beer = kick.filter(e=> e.id <= 2)
                                            return e.name                  setResult(beer)
                                            setResult(beer)*/
                beer.push(e.name+'\n')

            setResult(beer.join(''))
            })
        } catch (e) {
            setResult('ошибка')

        }

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
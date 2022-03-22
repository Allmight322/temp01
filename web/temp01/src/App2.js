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
            beer = kick.map((e, index) =>{
                return   (index+1)+'.' + e.name


            })
            setResult(beer.join('\n'))

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
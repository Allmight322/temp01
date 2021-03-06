import './App.css';
import {useState} from "react";
import {Perexod} from "./components/Perexod";
import {Search} from "./components/Search";
import {Rezult} from "./components/Rezult";


function App() {

    const searchResult =[
        {id: 1,title: 'статья первая', description: 'рассказ про науку'},
        {id: 2,title: 'статья вторая', description: 'рассказ про спорт'},
        {id: 3,title: 'статья третья', description: 'рассказ про искусство'},
    ]


    const  [resultArray, setResultArray] = useState([])
    const [inputText, setInputText] = useState('')



        /*  const zapros = () =>
             fetch( "http://alwertus.zapto.org:9010",{ method:'GET'})
             .then(rs => rs.json())
             .then(rs => setHour(rs))
              .catch(e => console.log("текст ошибки", e)) */

    const zaprosWith = () => {
        const tmp = {findText: inputText }
        console.log(tmp)
        fetch("http://alwertus.zapto.org:9010", {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(tmp)
        })
            .then(rs => rs.json())
            .then(rs => setResultArray(rs))
            .catch(e => console.log("текст ошибки", e))
    }

    return(<div
            className="App">
            <div className="top">
                <div className="left">
                    <Perexod address="https://yandex.ru/soft/win/startpage?from=prov_yaru&banerid=" text='Сделать стартовой'/>
                </div>
                <div className="right">
                    <Perexod address="https://passport.yandex.ru/auth/welcome?from=mail&origin=hostroot_homer_auth_L_ru&retpath=https%3A%2F%2Fmail.yandex.ru%2F&backpath=https%3A%2F%2Fmail.yandex.ru%3Fnoretpath%3D1" text="Пользователь" />
                    <Perexod address="https://yandex.ru/soft/win/startpage?from=prov_yaru" text="Меню" />
                    <Perexod address="https://yandex.ru/soft/win/startpage?from=prov_yaru" text="Еще" />
                </div>
            </div>
            <div className="mid">

                <div className='poisk'>
                    <Search search='введите текст' event ={zaprosWith} pour1 = {inputText} setPour1 ={setInputText}
                    />
                </div>

                <div className='vivod'>
                    <div className='vivod2'>
                        {
                            resultArray.map( e=> <Rezult key ={e.title}  element1 = {e.title}  zag = {e.description} />)
                        }
                    </div>
                </div>
            </div>
            <div className="bot">
                <a className="floot" href="https://ya.ru/"> </a>
            </div>
        </div>

    )
}

export default App;
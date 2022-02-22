import './App.css';
import lupa from "./img/lupa.jpg"
import {useState} from "react";



function App() {
    /* document.querySelector('button').onclick = myClick;
     function myClick() {
         const x = document.querySelector(".i-1").value;
         if(x==""){
             document.querySelector(".out").innerHTML = 'вы ничего не ввели';
         }
                 else{
             document.querySelector(".out").innerHTML = x;
             }}
             */
    const [text, setText] = useState("Пока что пусто")
    const [isShowError, setText2] =  useState(false)

    return (
        <div className="App">
            <div className="top">
                <div className="left">
                    <a className="box" href="https://yandex.ru/soft/win/startpage?from=prov_yaru">Сделать стартовой</a>
                </div>
                <div className="right">
                    <a className="di di1"  href="https://passport.yandex.ru/passport?mode=passport"> Пользователь</a>
                    <a className="di di2"  href="https://mail.yandex.ru/">Почта</a>
                    <a className="di di3"  href="https://ya.ru/">Выход</a>
                </div>
            </div>
            <div className="mid">
                <div>{text}</div>
                {isShowError &&<div>Ошибка</div>}
                <div className="str">
                    <input type="text" onChange={(MY222)  => setText(MY222.target.value)}/>
                    <button type="submit" id="submit" onClick={(isShowError)=>setText2(true)}>Push</button>
                </div>



            </div>
            <div className="bot">
                <a className="floot" href="https://ya.ru/"> </a>
            </div>


        </div>

    )
}

export default App;
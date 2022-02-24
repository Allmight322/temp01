import './App.css';
import lupa from "./img/lupa.jpg"
import {useState} from "react";
import {Way} from "./Way";



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
    const [text, setText] = useState("")
    const [isShowError, setText2] =  useState(false)

    return (
        <div className="App">
            <div className="top">
                <div className="left">
                    <Way adress="https://yandex.ru/soft/win/startpage?from=prov_yaru&banerid=" text='Сделать стартовой'/>
                </div>
                <div className="right">
                    <Way adress="https://passport.yandex.ru/auth/welcome?from=mail&origin=hostroot_homer_auth_L_ru&retpath=https%3A%2F%2Fmail.yandex.ru%2F&backpath=https%3A%2F%2Fmail.yandex.ru%3Fnoretpath%3D1" text="Пользователь" />
                    <Way adress="https://yandex.ru/soft/win/startpage?from=prov_yaru" text="Меню" />
                    <Way adress="https://yandex.ru/soft/win/startpage?from=prov_yaru" text="Еще" />
                </div>
            </div>
            <div className="mid">
                <div>{text}</div>
                {isShowError&&<div>Ошибка</div>}
                <div className="str">
                    <input type="text"
                           onChange={
                               (MY222)  =>
                               {setText(MY222.target.value)
                                   setText2(false)}}
                    />
                    <button type="submit"
                            id="submit"
                            onClick={
                                ()=> {

                                    if (text==='')
                                        setText2(true)
                                    else
                                        setText2(false)
                                }
                            }
                    >
                        Push
                    </button>
                </div>



            </div>
            <div className="bot">
                <a className="floot" href="https://ya.ru/"> </a>
            </div>


        </div>

    )
}

export default App;
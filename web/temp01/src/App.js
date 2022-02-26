import './App.css';
import lupa from "./img/lupa.jpg"
import {useState} from "react";
import {Way, Way1} from "./Way";



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

                <div className='poisk'>
                    <Way1 search="введите текст"/>
                </div>
                <div className='vivod'>
                    <div className='vivod2'>
                        <div>Элемент1</div>
                        <div>Элемент2</div>
                        <div>Элемент3</div>
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
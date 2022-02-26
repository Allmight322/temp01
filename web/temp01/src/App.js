import './App.css';
import lupa from "./img/lupa.jpg"
import {useState} from "react";
import {Way} from "./components/Way";
import {Search} from "./components/Search";
import {El1} from "./components/El1";
import {El2} from "./components/el2";
import {El3} from "./components/el3";


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
                    <Search search='введите текст'/>
                </div>
                <div className='vivod'>
                    <div className='vivod2'>
                        <El1 zag = 'статья первая' element1='рассказ про науку'/>
                        <El2 zag = 'статья вторая 'element1='рассказ про спорт'/>
                        <El3 zag = 'статья третья' element1='рассказ про искусство'/>
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
import './App.css';
import lupa from "./img/lupa.jpg"
import {useState} from "react";
import {Way} from "./components/Way";
import {Search} from "./components/Search";
import {El1} from "./components/El1";



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
    const searchResult =[
        {id: 1,title: 'статья первая', description: 'рассказ про науку'},
        {id: 2,title: 'статья вторая', description: 'рассказ про спорт'},
        {id: 3,title: 'статья третья', description: 'рассказ про искусство'},
    ]

    for ( let i = 0; i < searchResult.length; i++) {
    console.log(searchResult[i])}

    searchResult.forEach(element => console.log(element))



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
                    <button type='submit'
                            id = 'sumbit'
                            onClick={
                                ()=> console.log('click')
                            }>Push</button>

                </div>
                <div className='vivod'>
                    <div className='vivod2'>
                        {
                            searchResult.map( e=> <El1 element1 = {e.title} zag = {e.description} />)
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
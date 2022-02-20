import './App.css';
import lupa from "./img/lupa.jpg"

function App() {
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
            <div className="str">
                <input className="search" placeholder="Искать здесь..." type="search"/>
                <button
                    className="but" type="submit"><span
                    className="but1">Найти</span>
                </button>
            </div>



        </div>
        <div className="bot">
            <a className="floot" href="https://ya.ru/"> </a>
        </div>


    </div>

  );
}

export default App;

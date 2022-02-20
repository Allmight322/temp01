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
                <a className="di1"  href="https://passport.yandex.ru/passport?mode=passport"> Пользователь</a>
                <a className="di2"  href="https://mail.yandex.ru/">Почта</a>
                <a className="di3"  href="https://ya.ru/">Выход</a>
            </div>
        </div>
        <div className="mid">
            <input className="search" placeholder="Искать здесь..." type="search"/>

        </div>
        <div className="bot">
            <a className="floot" href="https://ya.ru/"> </a>
        </div>


    </div>

  );
}

export default App;

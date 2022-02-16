import './App.css';
import lupa from "./img/lupa.jpg"

function App() {
  return (
    <div className="App">
        <a className="way-way" href="https://yandex.ru/soft/win/startpage?from=prov_yaru&banerid=">Сделать стартовой</a>
        <img className="image-txt" src={lupa} alt="nothing"/>
        <a className="yan-dex" target="_blank" href="//yandex.ru">ЯНДЕКС</a>
        <div className="search-box">
            <input className="search-txt" type="text" name="" placeholder="Type to search"/>
        </div>


    </div>

  );
}

export default App;

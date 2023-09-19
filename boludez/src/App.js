
import { useState } from 'react';
import './App.css';

import Game from './components/game/Game';

const muchacha = "Muchacha ojos de papel A dónde vas Quédate hasta el alba Muchacha pequeños pies No corras más quédate hasta el alba Sueña un sueño despacito entre mis manos Hasta que por la ventana suba el sol Muchacha piel de rayón No corras más tu tiempo es hoy Y no hables más muchacha Corazón de tiza Cuando todos duerman Te robaré un color Y no hables más muchacha Corazón de tiza Cuando todos duerman Te robaré un color Muchacha voz de gorrión A dónde vas Quédate hasta el día Muchacha pechos de miel No corras más quedate hasta el día Duerme un poco y yo entre tanto construiré Un castillo en tu vientre hasta que el sol Muchacha te haga reír Hasta llorar hasta llorar Y no hables más muchacha Corazón de tiza Cuando todos duerman Te robaré un color Y no hables más muchacha Corazón de tiza Cuando todos duerman Te robaré un color"

function App() {
  const muchachaArray = muchacha.split(" ");

  const [newArray, setNewArray] = useState(muchachaArray)

  const setNewArrayHandler = (value) => {
    setNewArray(value)
  }

  return (
    <div className="App">
      <Game muchachaArray={newArray} setNewArrayHandler={setNewArrayHandler}/>
    </div>
  );
}

export default App;

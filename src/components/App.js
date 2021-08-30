import "bootstrap/dist/css/bootstrap.min.css";
import EmotionMeter from "./EmotionMeter";

import Greeting from './Greeting';
import Profile from "./Profile";
import ToDoList from "./ToDoList";

// Não se esqueça de importar os componentes!

function App() {
  return (
    <div className="container mt-5 mb-5 col-6">
      {/* Não se esqueça de invocar seus componentes aqui! */}
      <small>Interpolação de variáveis</small>
      <Greeting /> <br/>
      <small>Imagens</small>
      <hr />
      <Profile /> <br/>

      <small>Renderização de listas</small>
      <hr />
      <ToDoList /> <br/>

      <small>Renderização condicional</small>
      <hr />
      <EmotionMeter />
    </div>
  );
}

export default App;

import { useState } from 'react';
import './index.css';

function App() {

  const [status, setStatus] = useState(true);

  function rotate(){
    setStatus(!status);
  }

  return (
    <div className="App">
      <div className= {status? "square" : "squareRotate"} onClick={rotate}>
        <h1 className={status? "noOpacity" : "showOpacity"}>A</h1>
      </div>
      <div className= {status? "square" : "squareRotate"}>
        <h1 className={status? "noOpacity" : "showOpacity"}>B</h1>
      </div>
      <div className= {status? "square" : "squareRotate"}>
        <h1 className={status? "noOpacity" : "showOpacity"}>C</h1>
      </div>
    </div>
  );
}

export default App;

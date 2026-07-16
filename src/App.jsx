import { useState } from "react";

function App() {

  const [contador, setContador] = useState(0);

  return (
    <div>
      <h1>{contador}</h1>
    </div>
  );
}

export default App;
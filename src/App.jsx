import { ListaProductos } from "./ListaProductos";
import { useState } from "react";

function App() {
  const [isDark, setIsDark] = useState(false);

  const cambiarModo = () => {
    setIsDark(!isDark);
  };

  return (
    <div>
      <button onClick={cambiarModo}>SWITCH COLOR MODE</button>
      <ListaProductos isDark={isDark} />
    </div>
  );
}

export default App;

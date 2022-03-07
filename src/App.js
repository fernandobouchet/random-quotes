import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import randomColor from "./components/Utils/RandomColors";
import { useState } from "react";

function App() {
  const [color, setRandomColor] = useState(randomColor);

  function changeColor() {
    setRandomColor(randomColor);
  }

  return (
    <div>
      <Main color={color} changeColor={() => changeColor()} />
      <Footer color={color} />
    </div>
  );
}

export default App;

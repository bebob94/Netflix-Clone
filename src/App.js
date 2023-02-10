import "./App.css";
import MyBody from "./Components/MyBody";
import MyFooter from "./Components/MyFooter";
import MyNavBar from "./Components/MyNavBar";

function App() {
  return (
    <div className="App">
      <MyNavBar />
      <MyBody />
      <MyFooter />
    </div>
  );
}

export default App;

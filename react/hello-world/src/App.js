import logo from "./logo.svg";
import "./App.css";
// import { Greet, Greet2, Greet3 } from "./components/Greet";
// import { Welcome, Welcome2 } from "./components/welcome";
import Message from "./components/message";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      {/* <Greet name="April" nickname="Ape">
        <button>Visit Website</button>
        <p>Hello World! Look what I did!</p>
        </Greet> */}
      {/* <Message /> */}
      {/* <Counter /> */}
      {/* <Greet name="Vicki" nickname="Vic"/>
      <Greet2 name="Lilly" nickname="Lilz" />
      <Greet3 name="Vanessa" namenames="Van ess" />
      <Welcome name="April" nickname="Ape" />
      <Welcome name="Vicki" nickname="Vic"/>
      <Welcome2 name="Lilly" nickname="Lilz" />
      <Welcome2 name="Vanessa" namenames="Van ess" /> */}
      <Message />
      <Counter />
    </div>
  );
}

export default App;

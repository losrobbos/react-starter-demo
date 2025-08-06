import { useState } from "react";
import "./App.css";

// props = 
function Header(props: { title: string, age: string }) {
  console.log(props)
  return <h1>{ props.title }</h1>;
}

function Footer({ setTitle }: { setTitle: (title: string) => void }) {

  return <>
    <h1>Footer geht auch schnell</h1>
    <button onClick={() => setTitle("Neuer Titel")}>
      Titel ändern
    </button>
  </>
}

// LAYOUT meiner App
function App() {

  // const title = "Meine App";

  // State variable
  const [title, setTitle] = useState("Meine App");

  // JSX
  return <div>
      <Header title={title} age="40" />
      <main>
        <h2>Hier ist der Hauptinhalt</h2>
        <p>Das ist ein Beispieltext im Hauptbereich.</p>
      </main>
      <Footer setTitle={setTitle} />
    </div>
}

export default App;

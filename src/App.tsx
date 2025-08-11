import { useState } from "react";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import Chat from "./pages/Chat";

// component Header
function Header(props: { title: string; age: string }) {
  return <h2>{props.title}</h2>;
}

// component Footer
function Footer({ setTitle }: { setTitle: (title: string) => void }) {
  return (
    <>
      <h4>Footer geht auch schnell</h4>
      <button onClick={() => setTitle("Neuer Titel")}>Titel ändern</button>
    </>
  );
}

type User = {
  name: string; 
  age?: number;
  email: string;
}

// LAYOUT meiner App
function App() {
  // const title = "Meine App";

  // State variable
  const [title, setTitle] = useState("Meine App");

  const [user, setUser] = useState<User>()
  // setUser({
  //   name: "Wladimir",
  //   email: "whatecer@bla.com",
  // })

  // JSX
  return (
    <div>
      <Header title={title} age="40" />
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">Über uns</Link>
      </nav>
      {/* ROUTES */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/chat/:roomName" element={<Chat />} />
        </Routes>
      </main>
      {/* <main>
        <h2>Hier ist der Hauptinhalt</h2>
        <p>Das ist ein Beispieltext im Hauptbereich.</p>
      </main> */}
      <Footer setTitle={setTitle} />
    </div>
  );
}

export default App;

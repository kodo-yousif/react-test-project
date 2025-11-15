import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"

function Item({ name }) {
  return (
    <div className="item">
      {name}
    </div>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className="header">
        <div className="logos">
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1 id="VR">Vite + React</h1>
        <h2 className="subtitle">Welcome to My Custom React App</h2>
      </header>

      <section className="items-section">
        <Item name="Sample Item 1" />
        <Item name="Sample Item 2" />
        <Item name="Sample Item 3" />
        <Item name="Sample Item 4" />
      </section>

      <div className="card">
        {count % 2 === 0 ? <p>Even Count</p> : <p>Odd Count</p>}
        <button onClick={() => setCount(count + 1)}>Count is {count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <footer className="footer">
        Click on the Vite and React logos to learn more
      </footer>
    </>
  )
}

export default App

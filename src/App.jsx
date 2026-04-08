import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="app">
      <header>
        <h1>Coder Demo</h1>
        <p className="subtitle">AI-powered development platform</p>
      </header>
      <main>
        <div className="card">
          <h2>Status</h2>
          <p className="time">{time.toLocaleTimeString()}</p>
          <p>System operational</p>
        </div>
      </main>
    </div>
  )
}

export default App

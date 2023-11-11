import { useState, useEffect } from 'react'
import apiLogo from '/api.svg'
import githubLogo from '/github.svg'
import './App.css'

function App() {
  const [frase, setFrase] = useState("")
  const [chiste, setChiste] = useState("")

  const getFrase = async() => {
    try{
      const res = await fetch(
        "https://quote-garden.onrender.com/api/v3/quotes/random"
      );
      const data = await res.json();
      setFrase(data.data[0].quoteText);
    } catch(e){
      alert("Ocurrió un error al traer la frase");
    } finally{
      console.log("Ejecución completada");
    }
  }

  
  const getChiste = async() => {
    try{
      const res = await fetch("https://icanhazdadjoke.com/", {headers: {Accept: "application/json"},}
      );
      const data = await res.json();
      setChiste(data.joke);
    } catch(error){
      alert("Ocurrió un error al traer el chiste");
    } finally{
      console.log("Ejecución completada");
    }
  }
  

  useEffect(() => {
    getFrase();
    setFrase("");
  }, [])

  
  useEffect(() => {
    getChiste();
    setChiste("");
  }, [])
  

  return (
    <>
      <div>
        <a href="https://github.com/pprathameshmore/QuoteGarden" target="_blank">
          <img src={githubLogo} className="logo github" alt="Github logo" />
        </a>
        <a href="https://icanhazdadjoke.com/api" target="_blank">
          <img src={apiLogo} className="logo Api" alt="Api logo" />
        </a>
      </div>
      <h1>Ejercicio de frases</h1>
      <div className="card">
        <button onClick = {getFrase}>
          La frase es: {frase}
        </button>
        <button onClick={getChiste}>
          El chiste es: {chiste}
        </button>
        <p>
          Da click en los botones para obtener un chiste o frase célebre
        </p>
      </div>
      <p className="read-the-docs">
        Da click en los logos para obtener información
      </p>
    </>
  )
}

export default App

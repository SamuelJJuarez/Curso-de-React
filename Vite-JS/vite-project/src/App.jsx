import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const[countByTwo, setCountByTwo] = useState(0);
  const[seconds, setSeconds] = useState(0);

  //UseEffect sin dependencias, se ejecuta en cada renderizado
  /*
  useEffect(()=>{
    console.log(
      `Renderizado con count = ${count} y countByTwo = ${countByTwo}`
    );
  });
  */

  //UseEffect con dependencias, se ejecuta solo en el primer renderizado
  /*
  useEffect(()=>{
    console.log(
      `Renderizado con count = ${count} y countByTwo = ${countByTwo}`
    );
  }, []);
  */

  //UseEffect con arreglo de dependencias, se ejecuta cada
  /* 
  useEffect(()=>{
    console.log(
      `Renderizado con count = ${count} y countByTwo = ${countByTwo}`
    );
  }, [countByTwo]);
  */

  //Función de limpieza con useEffect
  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => setCountByTwo((countByTwo) => countByTwo + 2)}>
          count by two is {countByTwo}
        </button>
        <p>
          <strong>Segundos transcurridos:</strong> {seconds}
        </p>
      </div>
      <p className="read-the-docs">
        Da click en los logos para obtener información
      </p>
    </>
  )
}

export default App

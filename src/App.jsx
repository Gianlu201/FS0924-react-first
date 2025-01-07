import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import FunctionalComponent from './components/FunctionalComponent';
import ClassComponent from './components/ClassComponent';
import SayHello from './components/SayHello';

// Un componente React, nella sua forma più semplice, è una funzione che ritorna un componente dotato di una sintassi MOLTO SIMILE a HTML

// questa sintassi si chiama JSX

// Principali differernza tra JSX e HTML
// 1) le classi CSS non si attribuiscono con "class" ma con "className"
// 2) <laber for=""> diventa <label htmlFor="">

function App() {
  const [count, setCount] = useState(0);

  return (
    // react FRAGMENT (tag vuoto)
    // un fragment è un contenitore "fittizio"  che serve unicamente a fornire un unico "padre" a diversi elementi JSX (in quanto non è possibile ritornare MULTIPLI figli da un componente React)

    <>
      <FunctionalComponent />
      <ClassComponent title='CIAO!' />

      <SayHello personName='Gianluca' personSkills={['Dance', 'Sing']} />
      {/* personName è una Prop */}
      <SayHello personName='Topolino' />
      <SayHello personName='Paperino' />

      <div>
        <a href='https://vite.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;

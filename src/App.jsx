import { useState } from 'react'
import './App.css'


import UseState from './aulas/01-useState/UseState'
import UseEffect from './aulas/02-useEffect/UseEffect'
import UseRef from './aulas/03-useRef/UseRef'
import UseContext from './aulas/04-useContext/UseContext'
import UseContext2 from './aulas/04-useContext/UseContext2'
import UseReducer from './aulas/05-useReducer2/UseReducer2'
import UseMemo from './aulas/06-useMemo/UseMemo'
import UseCallback from './aulas/07-useCallback/UseCallback'
import UseLayoutEffect from './aulas/08-useLayoutEffect/UseLayoutEffect'



function App() {
  const [aulaAtual, setAulaAtual] = useState('useState')

  return (
    <div>
      <h1>React Hooks</h1>

      <nav>
        <button onClick={() => setAulaAtual('useState')}>
          useState
        </button>

        <button onClick={() => setAulaAtual('useEffect')}>
          useEffect
        </button>

        <button onClick={() => setAulaAtual('useRef')}>
          useRef
        </button>

        <button onClick={() => setAulaAtual('useContext')}>
          useContext
        </button>

        <button onClick={() => setAulaAtual('useContex2')}>
          useContext2
        </button>

        <button onClick={() => setAulaAtual('useReducer')}>
          useReducer
        </button>

        <button onClick={() => setAulaAtual('useMemo')}>
          useMemo
        </button>

        <button onClick={() => setAulaAtual('useCallback')}>
          useCallback
        </button>

        <button onClick={() => setAulaAtual('useLayoutEffect')}>
          useLayoutEffect
        </button>
      </nav>

      <main>
        {aulaAtual === 'useState' && <UseState />}
        {aulaAtual === 'useEffect' && <UseEffect />}
        {aulaAtual === 'useRef' && <UseRef />}
        {aulaAtual === 'useContext' && <UseContext />}
        {aulaAtual === 'useContext2' && <UseContext2 />}
        {aulaAtual === 'useReducer' && <UseReducer />}
        {aulaAtual === 'useMemo' && <UseMemo />}
        {aulaAtual === 'useCallback' && <UseCallback />}
        {aulaAtual === 'useLayoutEffect' && <UseLayoutEffect />}
      </main>
    </div>
  )
}

export default App
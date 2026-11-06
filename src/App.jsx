import Titulo from "./components/Titulo/Titulo"
import Relogio from "./components/Relogio/Relogio"
import Seletor from "./components/SeletorDeCores/Seletor"
import './App.css'

function App(){
  return (
    <>
      <header>
        <div></div>
        <Titulo/>
        <Seletor/>
      </header>
      <main>
        <Relogio/>
      </main>
    </>
  )
}
export default App
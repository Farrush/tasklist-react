import './App.css';
import { useState } from 'react';
import { AiFillCloseSquare } from 'react-icons/ai'
function App() {
  //Lista de tarefas
  const [tarefas,setTarefas] = useState([
    {
      nome: "Dar comida pro cachorro"
    },
    {
      nome: "Programar"
    }
  ])
  //valor do input de texto
  const [valor,setValor] = useState("")

  //Deleta a tarefa clicada
  const deletarTarefa = (nomeTarefa) =>{
    setTarefas(tarefas.filter(tarefa => tarefa.nome !== nomeTarefa))
  }
  return (
    <div className="App">

      <input type="text" value={valor} onChange={event => setValor(event.target.value)}/>

      <button onClick={()=>{
          setTarefas([...tarefas,{nome: valor}])
          setValor("")
        }}>Adicionar</button>
      
      {tarefas.map(tarefa => 
          <div className='item'>
            <AiFillCloseSquare className='btn-fechar' size={30} color={'red'} onClick={() => deletarTarefa(tarefa.nome)}/>
            <h4>{tarefa.nome}</h4>
          </div>
      )}
    </div>
  );
}

export default App;

import './App.css';
import { useState } from 'react';
import Task from './components/task';

function App() {
  //Lista de tarefas
  const [tarefas,setTarefas] = useState([
    {
      titulo: "Dar comida pro cachorro",
      desc: "Na hora do almoço"
    },
    {
      titulo: "Programar",
      desc: "React"
    }
  ])
  //valor do input de texto
  const [title,setTitle] = useState("")
  const [desc,setDesc] = useState("")

  //Deleta a tarefa clicada
  const deletarTarefa = (nomeTarefa) =>{
    setTarefas(tarefas.filter(tarefa => tarefa.titulo !== nomeTarefa))
  }
  return (
    <div className="App">

      <h1>Lista de Tarefas</h1>
      <input type="text" placeholder='Título' value={title} onChange={event => setTitle(event.target.value)}/>
      <input type="text" placeholder='Descrição' value={desc} onChange={event => setDesc(event.target.value)}/>

      <button onClick={() => {
          if(title !== ""){
            setTarefas([...tarefas,{titulo: title, desc: desc}])
            setTitle("")
            setDesc("")
          }
        }}>Adicionar</button>
      
      {tarefas.map(tarefa => 
          <Task titulo={tarefa.titulo} desc={tarefa.desc} deletar={valor => deletarTarefa(valor)}/>
      )}
    </div>
  );
}

export default App;

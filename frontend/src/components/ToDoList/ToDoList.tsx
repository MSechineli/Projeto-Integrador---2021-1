import React from 'react'
import { Title, Box, ContainerTask, ListTask } from './ToDoListStyle'



const ToDoList: React.FC = () => {

  var teste = [
    {
      id: 1,
      nome: "Tarefas1",
      descricao: "Fazer funcionar",
      data: "11/07/2017"
    },
    {
      id: 2,
      nome: "Tarefas2",
      descricao: "Fazer funcionar",
      data: "11/07/2017"
    },
    {
      id: 3,
      nome: "Tarefas3",
      descricao: "Fazer funcionar",
      data: "11/07/2017"
    }
  ]

  let listaDeTarefas = teste.map((tarefa) => {
    var color = tarefa.id%2 ? "#DBE6FD" : "#0055ff"

    return (
      <ContainerTask key={tarefa.id.toString()}>
        <input type="checkbox"></input>
        <p style={{color: color}}>{tarefa.nome}</p>
        
      </ContainerTask>
    )
  }) 
  
  return (
    <Box>
      <Title>Tasks</Title>
      <ListTask>{listaDeTarefas}</ListTask>
    </Box>
  )
}

export default ToDoList
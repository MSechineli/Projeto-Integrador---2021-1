import React, { useEffect, useState } from 'react'
import { Title, Box, ContainerTask, ListTask, Button, TaskTitle } from './ToDoListStyle'
import axios, { AxiosResponse } from 'axios'

interface TypeTarefa{
  id: Number;
  nome: String;
  descricao: String;
  data: String;
}

const ToDoList: React.FC = () => {
  const [dados, setDados] = useState<TypeTarefa[]>([]);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    async function getTarefas(){
      await axios.get("http://localhost:3333/tarefas").then((response: AxiosResponse) =>{
        setDados(response.data);
      }).catch((err) => console.log(err));
    }
    getTarefas()
  }, [update])

  async function AddTarefa(){

    await axios.post("http://localhost:3333/tarefas", {
      nome: "Veio do front",
      descricao: "Ihul",
      data:"2a3s1das321d"
    }).then((response:AxiosResponse) => {
      setUpdate(!update);
    })
  }

  async function DeleteTarefa(id:Number){

    await axios.delete("http://localhost:3333/tarefas").then((response:AxiosResponse) => {
      setUpdate(!update);
    })
  }

  async function UpdateTarefa(id:Number) {
    
    await axios.put("http://localhost:3333/tarefas", {
      nome: "teste do update",
      descricao: "descricao trocada",
      data:"23fdf2"
    }).then((response:AxiosResponse) => {
      setUpdate(!update);
    })
  }

  return (
    <Box>
      <Title>Tasks</Title>
      <ListTask>{dados.map((tarefa:TypeTarefa) => {
        return (
          <ContainerTask key={tarefa.id.toString()}>
            <input type="checkbox"></input>
            <TaskTitle>{tarefa.nome}</TaskTitle>
            <Button onClick = {() => DeleteTarefa(tarefa.id)}>X</Button>
          </ContainerTask>
        )
      })}</ListTask>
      <Button onClick={() => AddTarefa()}>Criar tarefa</Button>
    </Box>
  )
  
}

export default ToDoList
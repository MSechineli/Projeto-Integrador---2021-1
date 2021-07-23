import React, { Fragment, useEffect, useState } from 'react'
import { Title, BoxListar, ContainerTask, ListTask, Button, TaskTitle, ButtonDelete, BoxAdicionar } from './ToDoListStyle'
import axios, { AxiosResponse } from 'axios'

interface TypeTarefa{
  id: Number;
  nome: String;
  descricao: String;
  data: String;
}

const ToDoList: React.FC = () => {
  const [dados, setDados] = useState<TypeTarefa[]>([]);
  const [nomeNovaTarefa, setNomeNovaTarefa] = useState("");
  const [descricaoNovaTarefa, setDescricaoNovaTarefa] = useState("");
  const [dataNovaTarefa, setDataNovaTarefa] = useState("");
  const [update, setUpdate] = useState(false);
  const [modalCriarTarefa, setModalCriarTarefa] = useState(false);  

  useEffect(() => {
    async function getTarefas(){
      await axios.get("http://localhost:3333/tarefas").then((response: AxiosResponse) =>{
        setDados(response.data);
      }).catch((err) => console.log(err));
    }
    getTarefas()
  }, [update])

  function showModalAddTarefa(){
    setModalCriarTarefa(true)
  }

  async function addTarefa(){
    await axios.post(`http://localhost:3333/tarefas`, {
      nome: nomeNovaTarefa,
      descricao: descricaoNovaTarefa,
      data:dataNovaTarefa
    }).then((response:AxiosResponse) => {
      setNomeNovaTarefa("")
      setDescricaoNovaTarefa("")
      setDataNovaTarefa("")
      setUpdate(!update);
      setModalCriarTarefa(false);
    }).catch((err) => console.log(err))
  }

  async function deleteTarefa(id:Number){

    await axios.delete(`http://localhost:3333/tarefas/${id}`).then((response:AxiosResponse) => {
      setUpdate(!update);
    })
  }

  async function UpdateTarefa(id:Number) {
    await axios.put(`http://localhost:3333/tarefas`, {
      nome: "teste do update",
      descricao: "descricao trocada",
      data:"23fdf2"
    }).then((response:AxiosResponse) => {
      setUpdate(!update);
    })
  }

  return (
    <Fragment>
      <BoxAdicionar style={{visibility: modalCriarTarefa ? "visible" : "hidden"}}>
        <Title>Nova Tarefa</Title>
        <input value={nomeNovaTarefa} onChange={e => setNomeNovaTarefa(e.target.value)} placeholder="Nome"/>
        <input value={descricaoNovaTarefa} onChange={e => setDescricaoNovaTarefa(e.target.value)} placeholder="Descrição"/>
        <input value={dataNovaTarefa} onChange={e => setDataNovaTarefa(e.target.value)}placeholder="Data"/>
        <Button onClick = {() => addTarefa()}></Button>
      </BoxAdicionar>
      <BoxListar>
        <Title>Tasks</Title>
        <ListTask>{dados.map((tarefa:TypeTarefa) => {
          return (
            <ContainerTask key={tarefa.id.toString()}>
              {/* <input type="checkbox"></input> */}
              <TaskTitle>{tarefa.nome}</TaskTitle>
              <ButtonDelete onClick = {() => deleteTarefa(tarefa.id)}>X</ButtonDelete>
            </ContainerTask>
          )
        })}</ListTask>
        <Button onClick={() => showModalAddTarefa()}>Criar tarefa</Button>
      </BoxListar>
    </Fragment>
  )
  
}

export default ToDoList
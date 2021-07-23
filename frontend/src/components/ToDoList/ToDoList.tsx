import React, { Fragment, useEffect, useState } from 'react'
import { Title, BoxListar, ContainerTask, ListTask, Button, TaskTitle, ButtonDelete, BoxAdicionar, BoxEditar, ButtonCriar } from './ToDoListStyle'
import axios, { AxiosResponse } from 'axios'

interface TypeTarefa{
  id: number;
  nome: string;
  descricao: string;
  data: string;
}

const ToDoList: React.FC = () => {
  const [dados, setDados] = useState<TypeTarefa[]>([]);
  const [nomeNovaTarefa, setNomeNovaTarefa] = useState("");
  const [descricaoNovaTarefa, setDescricaoNovaTarefa] = useState("");
  const [dataNovaTarefa, setDataNovaTarefa] = useState("");
  const [idNovaTarefa, setIdNovaTarefa] = useState<Number>();
  const [update, setUpdate] = useState(false);
  const [modalCriarTarefa, setModalCriarTarefa] = useState(false);  
  const [modalEditarTarefa, setModalEditarTarefa] = useState(false);  

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
  function closeModalAddTarefa(){
    setModalCriarTarefa(false);
    setNomeNovaTarefa("")
    setDescricaoNovaTarefa("")
    setDataNovaTarefa("")
  }

  function showModalUpdateTarefa(tarefa: TypeTarefa){
    setModalEditarTarefa(true)
    setIdNovaTarefa(tarefa.id)
    setNomeNovaTarefa(tarefa.nome)
    setDescricaoNovaTarefa(tarefa.descricao)
    setDataNovaTarefa(tarefa.data)
  }

  function closeModalUpdateTarefa(){
    setModalEditarTarefa(false)
    setIdNovaTarefa(NaN)
    setNomeNovaTarefa("")
    setDescricaoNovaTarefa("")
    setDataNovaTarefa("")
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

  async function DeleteTarefa(id:Number){

    await axios.delete(`http://localhost:3333/tarefas/${id}`).then((response:AxiosResponse) => {
      setUpdate(!update);
    })
  }

  async function UpdateTarefa() {
    await axios.put(`http://localhost:3333/tarefas`, {
      id: idNovaTarefa,
      nome: nomeNovaTarefa,
      descricao: descricaoNovaTarefa,
      data:dataNovaTarefa
    }).then((response:AxiosResponse) => {
      setNomeNovaTarefa("")
      setDescricaoNovaTarefa("")
      setDataNovaTarefa("")
      setUpdate(!update);
      setModalEditarTarefa(false);
    }).catch((err) => console.log(err))
  }

  return (
    <Fragment>
      <BoxEditar style={{visibility: modalEditarTarefa ? "visible" : "hidden"}}>
        <Title>Editar Tarefa</Title>
        <input value={nomeNovaTarefa} onChange={e => setNomeNovaTarefa(e.target.value)} placeholder="Nome"/>
        <input value={descricaoNovaTarefa} onChange={e => setDescricaoNovaTarefa(e.target.value)} placeholder="Descrição"/>
        <input value={dataNovaTarefa} onChange={e => setDataNovaTarefa(e.target.value)}placeholder="Data"/>
        <Button onClick = {() => UpdateTarefa()}>Confirmar</Button>
        <Button onClick = {() => closeModalUpdateTarefa()}>Cancelar</Button>
      </BoxEditar>
      <BoxAdicionar style={{visibility: modalCriarTarefa ? "visible" : "hidden"}}>
        <Title>Nova Tarefa</Title>
        <input value={nomeNovaTarefa} onChange={e => setNomeNovaTarefa(e.target.value)} placeholder="Nome"/>
        <input value={descricaoNovaTarefa} onChange={e => setDescricaoNovaTarefa(e.target.value)} placeholder="Descrição"/>
        <input value={dataNovaTarefa} onChange={e => setDataNovaTarefa(e.target.value)}placeholder="Data"/>
        <Button onClick = {() => addTarefa()}>Adicionar</Button>
        <Button onClick = {() => closeModalAddTarefa()}>Cancelar</Button>
      </BoxAdicionar>
      <BoxListar>
        <Title>Tasks</Title>
        <ListTask>{dados.map((tarefa:TypeTarefa) => {
          return (
            <ContainerTask key={tarefa.id.toString()}>
              {/* <input type="checkbox"></input> */}
              <TaskTitle>{tarefa.nome}</TaskTitle>
              <TaskTitle>{tarefa.descricao}</TaskTitle>
              <TaskTitle>{tarefa.data}</TaskTitle>
              <Button onClick = {() => showModalUpdateTarefa(tarefa)}>Editar</Button>
              <ButtonDelete onClick = {() => DeleteTarefa(tarefa.id)}>X</ButtonDelete>
            </ContainerTask>
          )
        })}</ListTask>
        <ButtonCriar onClick={() => showModalAddTarefa()}>Criar tarefa</ButtonCriar>
      </BoxListar>
    </Fragment>
  )
  
}

export default ToDoList
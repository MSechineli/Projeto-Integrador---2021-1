import React, { Fragment, useEffect, useState } from 'react'
import { Title, BoxListar, ContainerTask, ListTask, Button, TaskTitle, ButtonDelete, BoxAdicionar, BoxEditar, ButtonCriar } from './ToDoListStyle'
import axios, { AxiosResponse } from 'axios'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

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
  const [dataNovaTarefa, setDataNovaTarefa] = useState(new Date());
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
    setDataNovaTarefa(new Date())
  }

  function showModalUpdateTarefa(tarefa: TypeTarefa){
    setModalEditarTarefa(true)
    setIdNovaTarefa(tarefa.id)
    setNomeNovaTarefa(tarefa.nome)
    setDescricaoNovaTarefa(tarefa.descricao)
    setDataNovaTarefa(new Date())
  }

  function closeModalUpdateTarefa(){
    setModalEditarTarefa(false)
    setIdNovaTarefa(NaN)
    setNomeNovaTarefa("")
    setDescricaoNovaTarefa("")
    setDataNovaTarefa(new Date())
  }

  async function addTarefa(){
    await axios.post(`http://localhost:3333/tarefas`, {
      nome: nomeNovaTarefa,
      descricao: descricaoNovaTarefa,
      data:dataNovaTarefa
    }).then((response:AxiosResponse) => {
      setNomeNovaTarefa("")
      setDescricaoNovaTarefa("")
      setDataNovaTarefa(new Date())
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
    console.log(idNovaTarefa, nomeNovaTarefa, descricaoNovaTarefa, dataNovaTarefa.toString());
    await axios.put(`http://localhost:3333/tarefas`, {
      id: idNovaTarefa,
      nome: nomeNovaTarefa,
      descricao: descricaoNovaTarefa,
      data:dataNovaTarefa.toString()
    }).then((response:AxiosResponse) => {
      setNomeNovaTarefa("")
      setDescricaoNovaTarefa("")
      setDataNovaTarefa(new Date)
      setUpdate(!update);
      setModalEditarTarefa(false);
    }).catch((err) => console.log(err))
  }

  return (
    <Fragment>
      <BoxEditar style={{visibility: modalEditarTarefa ? "visible" : "hidden"}}>
        <Title>Editar Tarefa</Title>
        <label>Nome:</label>
        <input value={nomeNovaTarefa} onChange={e => setNomeNovaTarefa(e.target.value)} placeholder="Nome"/>
        <label>Descrição:</label>
        <input value={descricaoNovaTarefa} onChange={e => setDescricaoNovaTarefa(e.target.value)} placeholder="Descrição"/>
        <label>Data:</label>
        <DatePicker dateFormat="yyyy/MM/dd" selected={dataNovaTarefa} onChange={(date:Date) => setDataNovaTarefa(date)}/>
        <Button onClick = {() => UpdateTarefa()}>Confirmar</Button>
        <Button onClick = {() => closeModalUpdateTarefa()}>Cancelar</Button>
      </BoxEditar>
      <BoxAdicionar style={{visibility: modalCriarTarefa ? "visible" : "hidden"}}>
        <Title>Nova Tarefa</Title>
        <label>Nome:</label>
        <input value={nomeNovaTarefa} onChange={e => setNomeNovaTarefa(e.target.value)} placeholder="Nome"/>
        <label>Descrição:</label>
        <input value={descricaoNovaTarefa} onChange={e => setDescricaoNovaTarefa(e.target.value)} placeholder="Descrição"/>
        <label>Data:</label>
        <DatePicker dateFormat="yyyy/MM/dd" selected={dataNovaTarefa} onChange={(date:Date) => setDataNovaTarefa(date)}/>
        <Button onClick = {() => addTarefa()}>Adicionar</Button>
        <Button onClick = {() => closeModalAddTarefa()}>Cancelar</Button>
      </BoxAdicionar>
      <BoxListar>
        <Title>Tasks</Title>
        <ListTask>{dados.map((tarefa:TypeTarefa) => {
          return (
            <ContainerTask key={tarefa.id.toString()}>
              {/* <input type="checkbox"></input> */}
              <TaskTitle style={{color:"white"}}>{tarefa.nome}</TaskTitle>
              <TaskTitle>{tarefa.descricao}</TaskTitle>
              <TaskTitle style={{color:"gray"}}>{tarefa.data}</TaskTitle>
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
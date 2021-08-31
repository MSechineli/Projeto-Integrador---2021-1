import React, { Fragment, useEffect, useState } from 'react'
import moment from 'moment'
import { 
  Title, 
  BoxListar, 
  ListTask, 
  TaskTitle, 
  InputCriarTask, 
  ListItem, 
  ModalTask, 
  ContainerTask, 
  CheckBoxList,
  ButtonDeleteTarefa
} from './ToDoListStyle'
import axios, { AxiosResponse } from 'axios'
import {DatePicker, Input, Row} from "antd";
import { DeleteOutlined } from "@ant-design/icons"

import "react-datepicker/dist/react-datepicker.css";

interface TypeTarefa{
  id: number;
  nome: string;
  descricao: string;
  dataDefinida: string;
  status: boolean; 
}

const ToDoList: React.FC = () => {
  const [dados, setDados] = useState<TypeTarefa[]>([]);
  const [nomeNovaTarefa, setNomeNovaTarefa] = useState("");
  const [nomeTarefa, setNomeTarefa] = useState("");
  const [descricaoTarefa, setDescricaoTarefa] = useState("");
  const [idTarefa, setIdTarefa] = useState<Number>();
  const [update, setUpdate] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [dataTarefa, setDataTarefa] = useState<string | undefined>(undefined);

  useEffect(() => {
    async function getTarefas(){
      await axios.get("http://localhost:3333/tarefas").then((response: AxiosResponse) =>{
        setDados(response.data);
      }).catch((err) => console.log(err));
    }
    getTarefas()
  }, [update])

  const handleModal = (tarefa: TypeTarefa) => {
    console.log("Teste", tarefa)
    setModalVisible(true)
    setIdTarefa(tarefa.id)
    setNomeTarefa(tarefa.nome)
    setDescricaoTarefa(tarefa.descricao)
    setDataTarefa(tarefa.dataDefinida)
  }

  const closeModal = () => {
    setModalVisible(false)
    setIdTarefa(NaN)
    setNomeTarefa("")
    setDescricaoTarefa("")
    setDataTarefa(undefined)
  }

  async function addTarefa(e: React.KeyboardEvent<HTMLDivElement>){
    if(nomeNovaTarefa === "") return
    if(e.key === 'Enter'){
      await axios.post(`http://localhost:3333/tarefas`, {
        nome: nomeNovaTarefa,
        descricao: "",
        data: null,
        status:false
      }).then((response:AxiosResponse) => {
        setNomeNovaTarefa("")
        setUpdate(!update);
      }).catch((err) => console.log(err))
    }
  }

  const DeleteTarefa = async(idTarefa:number) => {
    await axios.delete(`http://localhost:3333/tarefas/${idTarefa}`).then((response:AxiosResponse) => {
      setUpdate(!update);
      setModalVisible(false);
    })
  }

  const updateStatusTarefa = async(idTarefa:number, novoStatus:boolean) => {
    console.log("UPDATE STATUS")
    await axios.put(`http://localhost:3333/tarefas`, {
      id: idTarefa,
      status: novoStatus
    }).then((response:AxiosResponse) => {
      console.log("status trocado")
    }).catch((err) => console.log("não deu", err))
  }

  const UpdateTarefa = async() => {
    console.log("UPDATE TAREFA",idTarefa, nomeNovaTarefa, descricaoTarefa, dataTarefa);
    await axios.put(`http://localhost:3333/tarefas`, {
      id: idTarefa,
      nome: nomeTarefa,
      descricao: descricaoTarefa,
      dataDefinida:dataTarefa
    }).then((response:AxiosResponse) => {
      setNomeTarefa("")
      setDescricaoTarefa("")
      setDataTarefa(undefined)
      setUpdate(!update);
      setModalVisible(false);
    }).catch((err) => console.log(err))
  }

  return (
    <Fragment>
      <BoxListar>
        <Title>Tasks</Title>
        <InputCriarTask 
          placeholder="Digite uma nova Tarefa..." 
          value={nomeNovaTarefa} 
          onChange={(e) => setNomeNovaTarefa(e.target.value)} 
          onKeyPress={(e: React.KeyboardEvent<HTMLDivElement>) => addTarefa(e)}/>
        <ListTask>{dados.map((tarefa:TypeTarefa) => {
          return (
            <ListItem key={tarefa.id.toString()} >
              <CheckBoxList onChange={(e) => updateStatusTarefa(tarefa.id, e.target.checked)} defaultChecked={tarefa.status}></CheckBoxList>
              <ContainerTask onClick={() => handleModal(tarefa)}>
                <TaskTitle style={{color:"white"}}>{tarefa.nome}</TaskTitle>
              </ContainerTask>
              <ButtonDeleteTarefa onClick = {() => DeleteTarefa(tarefa.id)}><DeleteOutlined /></ButtonDeleteTarefa>
            </ListItem>
          )
        })}</ListTask>
      </BoxListar>
      <ModalTask title="Editar Tarefa" visible={modalVisible} onOk={UpdateTarefa} onCancel={closeModal}>
        <label>Tarefa:</label>
        <Input
          value={nomeTarefa}
          onChange={(e) => {setNomeTarefa(e.target.value)}}
        />
        <label>Descricao:</label>
        <Input 
          placeholder="Digite..." 
          value={descricaoTarefa}
          onChange={(e) => {setDescricaoTarefa(e.target.value)}}
        />
        <label>Agende uma data:</label>
        <Row>
          <DatePicker
            onChange={(date, dateString) => { setDataTarefa(dateString) }}
            value={
              dataTarefa === null ? dataTarefa: moment(dataTarefa) 
            }
            showTime={true}
          />
        </Row>
      </ModalTask>
    </Fragment>
  )
}

export default ToDoList
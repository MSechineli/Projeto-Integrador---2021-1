import React, { Fragment, useEffect, useState } from 'react'
import axios, { AxiosResponse } from 'axios'
import { Button, ButtonCriar, BoxEditar, BoxAdicionar, ContainerProjeto, Title, NomeProjeto, Sidebar } from "./MenuStyle"
import "react-datepicker/dist/react-datepicker.css";
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Modal } from 'antd';
import 'antd/dist/antd.css';

interface TypeProjeto{
    id: number;
    nome: string;
  }

const MenuProjetos: React.FC = () => {
    const [dados, setDados] = useState<TypeProjeto[]>([]);
    const [nomeNovoProjeto, setNomeNovoProjeto] = useState("");
    const [idNovoProjeto, setIdNovoProjeto] = useState<Number>();
    const [update, setUpdate] = useState(false);
    const [modalCriarProjeto, setModalCriarProjeto] = useState(false);  
    const [modalEditarProjeto, setModalEditarProjeto] = useState(false);  
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [erroInput, setErroInput] = useState(false);  

    useEffect(() => {
        async function getProjetos(){
          await axios.get("http://localhost:3333/projetos").then((response: AxiosResponse) =>{
            setDados(response.data);
          }).catch((err) => console.log(err));
        }
        getProjetos()
      }, [update])

      function showModalAddProjeto(){
        setModalCriarProjeto(true)
        setModalEditarProjeto(false)
      }
      function closeModalAddProjeto(){
        setModalCriarProjeto(false);
        setModalEditarProjeto(false)
        setNomeNovoProjeto("")
        setErroInput(false)
      }
    
      function showModalUpdateProjeto(projeto: TypeProjeto){
        setModalCriarProjeto(false)
        setModalEditarProjeto(true)
        setIdNovoProjeto(projeto.id)
        setNomeNovoProjeto(projeto.nome)
        setErroInput(false)
      }
    
      function closeModalUpdateProjeto(){
        setModalCriarProjeto(false)
        setModalEditarProjeto(false)
        setIdNovoProjeto(NaN)
        setNomeNovoProjeto("")
        setErroInput(false)
      }

      async function AddProjeto(){
        if(nomeNovoProjeto == "") return setErroInput(true)
        await axios.post(`http://localhost:3333/projetos`, {
          nome: nomeNovoProjeto
        }).then((response:AxiosResponse) => {
          setNomeNovoProjeto("")
          setUpdate(!update);
          setModalCriarProjeto(false);
          setModalEditarProjeto(false);
          setErroInput(false)
        }).catch((err) => console.log(err))
      }
    
      async function DeleteProjeto(id:Number){
    
        await axios.delete(`http://localhost:3333/projetos/${id}`).then((response:AxiosResponse) => {
          setUpdate(!update);
          setModalCriarProjeto(false);
          setModalEditarProjeto(false);
        })
      }
    
      async function UpdateProjeto() {
        console.log(idNovoProjeto, nomeNovoProjeto);
        if(nomeNovoProjeto == "") return setErroInput(true)
        await axios.put(`http://localhost:3333/projetos`, {
          id: idNovoProjeto,
          nome: nomeNovoProjeto,
        }).then((response:AxiosResponse) => {
          setNomeNovoProjeto("")
          setUpdate(!update);
          setModalCriarProjeto(false);
          setModalEditarProjeto(false);
          setErroInput(false)
        }).catch((err) => console.log(err))
      }

    return(
        <Fragment>
            <Sidebar>
                <Menu>
                    <MenuItem >Semana</MenuItem>
                        <SubMenu title="Projetos" > {dados.map((projeto:TypeProjeto) => {
                                return(
                                    <ContainerProjeto key={projeto.id.toString()}>{
                                        <MenuItem style = {{color : "white"}}>{projeto.nome}</MenuItem>}
                                        <Button onClick={()=> showModalUpdateProjeto(projeto)}>Editar</Button>
                                        <Button onClick = {() => DeleteProjeto(projeto.id)}>X</Button>
                                    </ContainerProjeto>
                                )
                            })}
                            <ButtonCriar onClick={() => showModalAddProjeto()}>Criar Projeto</ButtonCriar>
                        </SubMenu> 
                </Menu>
            </Sidebar>
            <Modal title="Editar projeto" visible={modalEditarProjeto} onOk={()=> UpdateProjeto()} onCancel={closeModalUpdateProjeto}>
              <label style={{color : "black"}}> Nome:</label>
              <input value={nomeNovoProjeto} onChange={e => setNomeNovoProjeto(e.target.value)} placeholder="Nome"/>
            </Modal>    
            <Modal title="Criar projeto" visible={modalCriarProjeto} onOk={()=> AddProjeto()} onCancel={closeModalAddProjeto}>
              <label style={{color : "black"}}> Nome:</label>
              <input value={nomeNovoProjeto} onChange={e => setNomeNovoProjeto(e.target.value)} placeholder="Nome"/>
            </Modal>              
        </Fragment>
    )
}

export default MenuProjetos;
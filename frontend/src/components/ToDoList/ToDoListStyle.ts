import styled from "styled-components"
import { Button, Modal, Input, Checkbox } from 'antd'

export const CheckBoxList = styled(Checkbox)`
  align-self: center;
  margin-left: 5px;
  margin-right: 5px;
  size: 10px;
`

export const BoxListar = styled.div`
  text-align: center;
  display:block;
  position: absolute;
  /* margin: 2vh; */
  margin-left: 20%;
  box-sizing: border-box;
  /* border-radius: 20px; */
  width: 80%;
  height: 100.0vh;
  background-color: #47597E;
`
export const InputCriarTask = styled(Input)`
  width: 80%;
  margin-bottom: 15px;
  /* margin: auto; */
  padding: 10px;
`

export const ModalTask = styled(Modal)`
  
`

export const Title = styled.h1`
  padding: 10px;
  margin: 0;
  /* text-align: center; */
  color:#DBE6FD;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`

export const ContainerTask = styled.div`
  width: 100%;
  display: flex;
  :hover{
    background-color: #B2AB8C;
  };
`



export const ListTask = styled.ul`
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  height: 80.0vh;
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
  position: relative;
`

export const TaskTitle = styled.p`
  align-self: center;
  margin-left: 10px;
  margin-bottom: 0px;
  margin-top: 0px;
  text-align: left;
`

export const ButtonTask = styled(Button)`
  
`
export const ButtonDeleteTarefa = styled(Button)`
  text-align: center;
  align-content: center;
  color: red;
  height: 100%;
  background-color: transparent;
  border-color: transparent;
  :hover{
    color: red;
    border-color: white;
    background-color: #B2AB8C;
  }
`  
export const InputDescricao = styled(Input)`

` 

// Button.defaultProps = {
//   theme: {
//     main: "palevioletred"
//   }
// }

export const ButtonDelete = styled(Button)`

`

export const ListItem = styled.li`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  margin-left: 10%;
  width: 80%;
  height: 5%;
  margin-bottom: 5px;
  /* box-sizing: content-box;   */
  background-color: #293B5F;
  list-style: none;
  /* justify-content: space-between; */
  
`
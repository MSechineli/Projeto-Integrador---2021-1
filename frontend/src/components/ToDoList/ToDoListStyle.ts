import styled from "styled-components"

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
export const InputCriarTask = styled.input`
  width: 80%;
  /* margin: auto; */
  padding: 10px;
`
export const BoxAdicionar = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  margin: 2vh;
  box-sizing: border-box;
  border-radius: 20px;
  width: 30%;
  height: 96.0vh;
  background-color: #47597E;
  z-index: 9;
`

export const BoxEditar = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  margin: 2vh;
  box-sizing: border-box;
  border-radius: 20px;
  width: 30%;
  height: 96.0vh;
  background-color: #47597E;
  z-index: 9;
`

export const Title = styled.h1`
  padding: 10px;
  margin: 0;
  text-align: center;
  color:#DBE6FD;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`

export const ListTask = styled.ul`
  height: 80.0vh;
  margin: 0;
  padding: 0;
  overflow-y: scroll;
  scroll-behavior: smooth;
  position: relative;
`

export const ContainerTask = styled.li`
  box-sizing: content-box;
  border-radius: 10px;
  margin: 10px;
  background-color: #293B5F;
  list-style: none;
  justify-content: space-between;
  height: 20%;
` 

export const TaskTitle = styled.p`
  margin-left: 10px;
  margin-bottom: 0px;
  margin-top: 0px;
  text-align: left;
`

export const Button = styled.button`
  cursor: pointer;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 6px;
  right: 69%;
  bottom: 1%;
  margin-right: 10px;
  margin-bottom: 15px;

  /* Color the border and text with theme.main */
  color: ${props => props.theme.main};
  border: 2px solid ${props => props.theme.main};
`;

Button.defaultProps = {
  theme: {
    main: "palevioletred"
  }
}

export const ButtonDelete = styled.button`
  cursor: pointer;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 6px;

  /* Color the border and text with theme.main */
  color: ${props => props.theme.main};
  border: 2px solid ${props => props.theme.main};
`

export const ButtonCriar = styled.button`
  cursor: pointer;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 6px;
  right: 69%;
  bottom: 1%;
  margin-right: 10px;
  margin-bottom: 15px;

  /* Color the border and text with theme.main */
  color: ${props => props.theme.main};
  border: 2px solid ${props => props.theme.main};
`;

ButtonCriar.defaultProps = {
  theme: {
    main: "palevioletred"
  }
}
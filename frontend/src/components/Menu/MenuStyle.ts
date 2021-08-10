import styled from "styled-components"

export const BoxEditar = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  margin-top: 2vh;
  margin-bottom: 2vh;
  box-sizing: border-box;
  border-radius: 20px;
  width: 270px;
  height: 35vh;
  background-color: #261C2C;
  z-index: 9;
`
export const BoxAdicionar = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  margin-top: 2vh;
  margin-bottom: 2vh;
  box-sizing: border-box;
  border-radius: 20px;
  width: 270px;
  height: 35vh;
  background-color: #055052;
  z-index: 9;
`
export const ContainerProjeto = styled.li`
  box-sizing: content-box;
  border-radius: 10px;
  margin: 10px;
  background-color: dimgray;
  list-style: none;
  justify-content: space-between;
  height: 20%;
` 

export const Title = styled.h1`
  padding: 10px;
  margin: 0;
  text-align: center;
  color:#DBE6FD;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
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

export const NomeProjeto = styled.input`
  background-color: dimgray;
  color: black;
  /* padding: 15px 32px; */
  text-align: left;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  border: dimgray;

`

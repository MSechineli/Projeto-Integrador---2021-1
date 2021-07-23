import styled from "styled-components"

export const Box = styled.div`
  position: absolute;
  margin: 2vh;
  box-sizing: border-box;
  border-radius: 20px;
  width: 30%;
  height: 96.0vh;
  background-color: #47597E;
`

export const BoxAdicionarTarefa = styled.div`
  position: absolute;
  margin: 10vh;
  box-sizing: border-box;
  border-radius: 20px;
  width: 30%;
  height: 96.0vh;
  background-color: red;
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
  height: 90.0vh;
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
  display: flex;
  justify-content: space-between;
` 

export const TaskTitle = styled.h2`
  margin: 0;
  text-align: left;
`

export const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 6px;
  position: absolute;
  right: 69%;;
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

export const Button_Delete = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 6px;

  /* Color the border and text with theme.main */
  color: ${props => props.theme.main};
  border: 2px solid ${props => props.theme.main};
`

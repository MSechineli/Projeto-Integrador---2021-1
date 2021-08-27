import styled from "styled-components";
import { Collapse } from "antd";

export const CollapseWeeks =  styled(Collapse)`
    background: transparent;
    border: transparent;
    border-radius: 20px;
`;

export const Table =  styled.table`
  width: max-content;
  overflow-y: auto;

  ::-webkit-scrollbar {
    margin: 30px;
    width:5px;
  }
      
  ::-webkit-scrollbar-track {
      border-radius: 20px;
      background: #293B5F;
  }
      
  ::-webkit-scrollbar-thumb {
      border-radius: 20px;
      background: #DBE6FD;
  }
`;

export const Box = styled.div`
  padding: 0% 5% 5% 5%;
  flex-direction: column;
  margin-right: 8px;
  margin-left: 8px;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 20px;
  width: 200px;
  height: 94.0vh;
  background-color: #47597E;
`
export const BoxInternal = styled.div`
  height: 82.0vh;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width:10px;
  }
      
  ::-webkit-scrollbar-track {
      border-radius: 20px;
      background: #293B5F;
  }
      
  ::-webkit-scrollbar-thumb {
      border-radius: 20px;
      background: #DBE6FD;
  }
`

export const Title = styled.h1`
  padding: 10px;
  margin: 0;
  text-align: center;
  color:#DBE6FD;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`

export const ListTask = styled.ul`
  margin: 0;
  padding: 0;
`

export const ContainerTask = styled.li`
  border-radius: 10px;
  margin: 10px;
  background-color: #293B5F;
  list-style: none;
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

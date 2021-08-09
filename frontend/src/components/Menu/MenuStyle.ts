import styled from "styled-components"

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
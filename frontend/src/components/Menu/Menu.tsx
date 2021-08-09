import React, { Fragment, useEffect, useState } from 'react'
import axios, { AxiosResponse } from 'axios'
import DatePicker from "react-datepicker";
import { Button, ButtonCriar, ButtonDelete} from "./MenuStyle"

import "react-datepicker/dist/react-datepicker.css";

// import { } from './MenuStyle.ts'

import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

const MenuProjetos: React.FC = () => {

    return(
        <ProSidebar>
            <Menu>
                <MenuItem >Semana</MenuItem>
                    <SubMenu title="Projetos" >
                        <MenuItem>Projeto 1 <ButtonDelete>X</ButtonDelete> </MenuItem>
                        <MenuItem>Projeto 2 <ButtonDelete>X</ButtonDelete> </MenuItem>
                        <MenuItem>Projeto 3 <ButtonDelete>X</ButtonDelete> </MenuItem>
                        <ButtonCriar>Criar Projeto</ButtonCriar>
                    </SubMenu>
            </Menu>
        </ProSidebar>
    )
}

export default MenuProjetos;
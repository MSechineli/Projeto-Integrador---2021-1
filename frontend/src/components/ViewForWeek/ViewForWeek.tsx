import React, { useEffect, useState } from 'react'
import { Title, Box, Button } from './ViewForWeekStyle'
import axios, { AxiosResponse } from 'axios'
import {Row, Col, Divider} from 'antd';
import 'antd/dist/antd.css'

interface TypeTarefa{
  id: Number;
  nome: String;
  descricao: String;
  data: String;
}

interface Day {
  id: Number;
  name: String;
  tasks: TypeTarefa[];
}

const ViewForWeek: React.FC = () => {
    // const [dados, setDados] = useState<TypeTarefa[]>([]);
    const [update, setUpdate] = useState(false);
    // const [weekDays, setWeekDays] = useState<Day[]>([]);
    const weekDays: Array<Day> = [
      {
        id: 0,
        name: 'Sanday',
        tasks: [{
          id: 0,
          nome: "Teste",
          descricao: "Teste 1234",
          data: "12/12/24",
        },],
      },
      {
        id: 1,
        name: 'Monday',
        tasks: [],
      },
      {
        id: 2,
        name: 'Tuesday',
        tasks: [],
      },
      {
        id: 3,
        name: 'Wednesday',
        tasks: [],
      },
      {
        id: 4,
        name: 'Thursday',
        tasks: [],
      },
      {
        id: 5,
        name: 'Friday',
        tasks: [],
      },
      {
        id: 6,
        name: 'Saturday',
        tasks: [],
      }
    ];
  
    useEffect(() => {
      async function getTarefas() {
        await axios.get("http://localhost:3333/tarefas").then((response: AxiosResponse) => {
          // setDados(response.data);
          // partionDate(response.data);
        }).catch((err) => console.log(err));
      }
      getTarefas()
    }, [update])
  
    async function AddTarefa() {
  
      await axios.post("http://localhost:3333/tarefas", {
        nome: "Veio do front",
        descricao: "Ihul",
        data: "2a3s1das321d"
      }).then((response: AxiosResponse) => {
        setUpdate(!update);
      })
    }
  
    return (
      <Row>
        {
        weekDays.map((Day: Day, key) => {
          return (
            <Col span={1} order={key} offset={2}>
              <Divider type="vertical" style={{color: "white"}}/>
              <Box>
                <Title>{Day.name}</Title>
                {
                  Day.tasks.map((TypeTarefa: TypeTarefa) => {
                    return (
                          <div>{TypeTarefa.data}</div>
                    )
                  })
                }
              </Box>
            </Col>
          )
        })
      }
      </Row>)
  
}

export default ViewForWeek
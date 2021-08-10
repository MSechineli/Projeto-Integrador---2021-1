import React, { useEffect, useState } from 'react';
import { Title, Box, Table, BoxInternal, CollapseWeeks } from './ViewForWeekStyle';
import axios, { AxiosResponse } from 'axios';
import 'antd/dist/antd.css';

const { Panel } = CollapseWeeks;

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
    const [update, setUpdate] = useState(false);
    const days: Array<TypeTarefa> = [
        {
          id: 0,
          nome: "Teste",
          descricao: "Teste 1234",
          data: "08/08/2021",
        },
        {
          id: 1,
          nome: "Teste",
          descricao: "Teste 1234",
          data: "09/08/2021",
        },
        {
          id: 2,
          nome: "Teste",
          descricao: "Teste 1234",
          data: "10/08/2021",
        },
        {
          id: 3,
          nome: "Teste",
          descricao: "Teste 1234",
          data: "11/08/2021",
        },
        {
          id: 4,
          nome: "Teste",
          descricao: "Teste 1234",
          data: "12/08/2021",
        },
        {
          id: 5,
          nome: "Teste",
          descricao: "Teste 1234",
          data: "13/08/2021",
        },
        {
          id: 6,
          nome: "Teste",
          descricao: "Teste 1234",
          data: "14/10/2021",
        },
    ];

    const weekDays: Array<Day> = [
      {
        id: 0,
        name: 'Sanday',
        tasks: [
          {
            id: 0,
            nome: "Teste",
            descricao: "Teste 1234",
            data: "12/12/24",
          },
          {
            id: 1,
            nome: "Teste",
            descricao: "Teste 1234",
            data: "12/12/24",
          },
          {
            id: 2,
            nome: "Teste",
            descricao: "Teste 1234",
            data: "12/12/24",
          },
          {
            id: 3,
            nome: "Teste",
            descricao: "Teste 1234",
            data: "12/12/24",
          },
          {
            id: 4,
            nome: "Teste",
            descricao: "Teste 1234",
            data: "12/12/24",
          },
        ],
      },
      {
        id: 1,
        name: 'Monday',
        tasks: [
          {
            id: 0,
            nome: "Teste",
            descricao: "Teste 1234",
            data: "12/12/24",
          },
          {
            id: 1,
            nome: "Teste",
            descricao: "Teste 1234",
            data: "12/12/24",
          },
          {
            id: 2,
            nome: "Teste",
            descricao: "Teste 1234",
            data: "12/12/24",
          },
        ],
      },
      {
        id: 2,
        name: 'Tuesday',
        tasks: [
          {
            id: 0,
            nome: "Teste",
            descricao: "Teste 1234",
            data: "12/12/24",
          },
          {
            id: 1,
            nome: "Teste",
            descricao: "Teste 1234",
            data: "12/12/24",
          },
        ],
      },
      {
        id: 3,
        name: 'Wednesday',
        tasks: [
          {
            id: 0,
            nome: "Teste",
            descricao: "Teste 1234",
            data: "12/12/24",
          },
          {
            id: 1,
            nome: "Teste",
            descricao: "Teste 1234",
            data: "12/12/24",
          },
          {
            id: 2,
            nome: "Teste",
            descricao: "Teste 1234",
            data: "12/12/24",
          },
        ],
      },
      {
        id: 4,
        name: 'Thursday',
        tasks: [
          {
            id: 0,
            nome: "Teste",
            descricao: "Teste 1234",
            data: "12/12/24",
          },
          {
            id: 1,
            nome: "Teste",
            descricao: "Teste 1234",
            data: "12/12/24",
          },
        ],
      },
      {
        id: 5,
        name: 'Friday',
        tasks: [
          {
            id: 0,
            nome: "Teste",
            descricao: "Teste 1234",
            data: "12/12/24",
          },
          {
            id: 1,
            nome: "Teste",
            descricao: "Teste 1234",
            data: "12/12/24",
          },
          {
            id: 2,
            nome: "Teste",
            descricao: "Teste 1234",
            data: "12/12/24",
          },
          {
            id: 3,
            nome: "Teste",
            descricao: "Teste 1234",
            data: "12/12/24",
          },
        ],
      },
      {
        id: 6,
        name: 'Saturday',
        tasks: [
          {
            id: 0,
            nome: "Teste",
            descricao: "Teste 1234",
            data: "12/12/24",
          },
          {
            id: 1,
            nome: "Teste",
            descricao: "Teste 1234",
            data: "12/12/24",
          },
        ],
      },
      {
        id: 6,
        name: 'Saturday',
        tasks: [
          {
            id: 0,
            nome: "Teste",
            descricao: "Teste 1234",
            data: "12/12/24",
          },
          {
            id: 1,
            nome: "Teste",
            descricao: "Teste 1234",
            data: "12/12/24",
          },
        ],
      },
    ];
  
    useEffect(() => {
      ajustWeekDays();
      async function getTarefas() {
        await axios.get("http://localhost:3333/tarefas").then((response: AxiosResponse) => {
          console.log("Teste");
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
        data: "20/08/2021"
      }).then((response: AxiosResponse) => {
        setUpdate(!update);
      })
    }

    async function tableDays(day: Number) {
      if (day == 0) {
        return 1;
      } else if (day == 1) {
        return 2;
      } else if (day == 2) {
        return 3;
      } else if (day == 3) {
        return 4;
      } else if (day == 4) {
        return 5;
      } else if (day == 5) {
        return 6;
      } else if (day == 6) {
        return 0; 
      }
    }

    async function filterDate(value: TypeTarefa) {
      var now = new Date();
      var dateRecived = new Date(String(value.data));

      var aux = tableDays(now.getDay());

      var dayMonthNow = now.getDate;
      var dayMonthRecived = dateRecived.getDate;
      
      console.log(dateRecived.getMonth() == now.getMonth() && 
      dateRecived.getFullYear() == now.getFullYear());

      return dateRecived.getMonth() == now.getMonth() && 
              dateRecived.getFullYear() == now.getFullYear();
    } 

    async function ajustWeekDays() {
      var arrayDays = days.filter(filterDate);
      console.log(arrayDays);
    }
  
    return (
        <Table>
          {
          weekDays.map((Day: Day, key) => {
            return (
              <td>
                <Box>
                  <Title>{Day.name}</Title>
                  <BoxInternal>
                  <CollapseWeeks>
                  {
                    Day.tasks.map((TypeTarefa: TypeTarefa, key) => {
                      return (
                        <Panel 
                          key={key} 
                          header={TypeTarefa.nome} 
                          style={{ 
                            borderTopLeftRadius: 20, 
                            borderTopRightRadius: 20,
                            marginBottom: 5, 
                            marginRight: 5,
                            background: 'white'
                          }}>
                          <p>
                          Data: {TypeTarefa.data}
                          </p>
                          <p>
                          Descrição: {TypeTarefa.descricao}
                          </p>
                        </Panel>
                      )
                    })
                  }
                  </CollapseWeeks>
                  </BoxInternal>
                </Box>
              </td>
            )
          })
        }
      </Table>
      )
  
}

export default ViewForWeek
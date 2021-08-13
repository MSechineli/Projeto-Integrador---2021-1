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
        tasks: [],
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

    function getIdWeekDays(day: Number) {
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
      } else {
        return 0; 
      }
    }

    function getQtdDaysMonth(month: Number) {
      switch(month) {
        case 1:
          return 31;
        case 2:
          return 28;
        case 3:
          return 31;
        case 4:
          return 30;
        case 5:
          return 31;
        case 6:
          return 30; 
        case 7:
          return 31;
        case 8:
          return 31;
        case 9:
          return 30;
        case 10:
          return 31;
        case 11:
          return 30;
        default:
          return 31;         
      }
    }

    function filterDate(value: TypeTarefa) {
      var now = new Date();
      console.log(now.getDate() - getIdWeekDays(now.getDay()-1));
      var dateRecived = new Date(String(value.data));
      var arrayTest = [{day: 0, month: 0}, {day: 0, month: 0}, {day: 0, month: 0}, {day: 0, month: 0}, {day: 0, month: 0}, {day: 0, month: 0}, {day: 0, month: 0}];

      arrayTest[getIdWeekDays(now.getDay()-1)].day = now.getDate();
      arrayTest[getIdWeekDays(now.getDay()-1)].month = now.getMonth();

      if (now.getDate() - getIdWeekDays(now.getDay()-1) >= 1) {
        if ((now.getDate() + 7 - getIdWeekDays(now.getDay()-1)) < getQtdDaysMonth(now.getMonth())) {
          var aux = now.getDate();
          for (var i = 0; i < 7; i++) {
            arrayTest[i].day = aux;
            arrayTest[i].month = now.getMonth();
            aux++;
          }
        } else {
          var aux = now.getDate();
          var aux2 = 1;
          for (var i = 0; i < 7; i++) {
            if (aux <= getQtdDaysMonth(now.getMonth())) {
              arrayTest[i].day = aux;
              arrayTest[i].month = now.getMonth();
              aux++;
            } else {
              arrayTest[i].day = aux2;
              arrayTest[i].month = now.getMonth() + 1;
              aux2++; 
            }
          }
        }
      } else {
          var aux = now.getDate();
          for (var i = 0; i <= getIdWeekDays(now.getDay()-1); i++) {
            arrayTest[i].day = aux;
            arrayTest[i].month = now.getMonth();
            aux++;
          }

          var aux2 = now.getDate();
          var aux3 = getQtdDaysMonth(now.getMonth() - 1);
          for (var i = getIdWeekDays(now.getDay()-1); i >= 0; i--) {
            if (aux2 <= getQtdDaysMonth(now.getMonth())) {
              arrayTest[i].day = aux2;
              arrayTest[i].month = now.getMonth();
              aux2--;
            } else {
              arrayTest[i].day = aux3;
              arrayTest[i].month = now.getMonth() - 1;
              aux3--; 
            }
          }
      }

      for (var i = 0; i < arrayTest.length; i++) {
        if (dateRecived.getMonth() == arrayTest[i].month && dateRecived.getDate() == arrayTest[i].day) {
          return value;
        }
      }
    } 

    function ajustWeekDays() {
      var arrayDays = days.filter(filterDate);
      
      for (var i = 0; i < arrayDays.length; i++) {
        var day = new Date(String(arrayDays[i].data));
        weekDays[getIdWeekDays(day.getDay())-1].tasks.push(arrayDays[i]);
      }

      console.log("Array de dias: ", arrayDays);
      console.log("Array de semana contendo os arrays de dias: ", weekDays);
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
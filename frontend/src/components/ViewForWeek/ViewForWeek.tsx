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

    const [weekDays, setWeekDays] = useState<Day[]>([]);
  
    useEffect(() => {
      setWeekDays([]);
      async function getTarefas() {
        await axios.get("http://localhost:3333/tarefas/nowdate").then((response: AxiosResponse) => {
          console.log("Teste");
          console.log(response.data)
          setWeekDays(response.data);
        }).catch((err) => console.log(err));
      }
      getTarefas()
    }, [update])
  
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
import { Request, Response } from 'express';
import { connection } from '../database/connection';

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

  
class Tarefas {
    async readNowDate(request: Request, response: Response){
        const dados = await connection('Tarefas');
        var weekDays = [{
            id: 0,
            name: 'Sunday',
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
            var dateRecived = new Date(String(value.data.split(' ')[0]));
            var arrayTest = [{day: 0, month: 0}, {day: 0, month: 0}, {day: 0, month: 0}, {day: 0, month: 0}, {day: 0, month: 0}, {day: 0, month: 0}, {day: 0, month: 0}];
            
            arrayTest[getIdWeekDays(now.getDay())].day = now.getDate();
            arrayTest[getIdWeekDays(now.getDay())].month = now.getMonth();
            
            if (now.getDate() - getIdWeekDays(now.getDay()) >= 1) {
                var aux = now.getDate();
                var ini = aux - now.getDay();
                var aux = 1;
                for (var i = 0; i < 7; i++) {
                    if (ini <= getQtdDaysMonth(now.getMonth() + 1)) {
                        arrayTest[i].day = ini;
                        arrayTest[i].month = now.getMonth() + 1;
                        ini++;
                    } else {
                        arrayTest[i].day = aux;
                        arrayTest[i].month = now.getMonth() + 2;
                        aux++; 
                    }
                }
            } else {
                var ini = getQtdDaysMonth(now.getMonth()) + now.getDate() - now.getDay();
                var aux = 1;

                for (var i = 0; i < 7; i++) {
                    if (ini <= getQtdDaysMonth(now.getMonth())) {
                        arrayTest[i].day = ini;
                        arrayTest[i].month = now.getMonth();
                        ini++;
                    } else {
                        arrayTest[i].day = aux;
                        arrayTest[i].month = now.getMonth() + 1;
                        aux++; 
                    }
                }
            }
            for (var i = 0; i < arrayTest.length; i++) {
                if (dateRecived.getMonth() + 1 == arrayTest[i].month && dateRecived.getDate() == arrayTest[i].day) {
                    return value;
                }
            }
        } 

        function ajustWeekDays(days: TypeTarefa[]) {
            var arrayDays = days.filter(filterDate);

            for (var i = 0; i < arrayDays.length; i++) {
                var day = new Date(String(arrayDays[i].data));
                arrayDays[i].data = formateDate(arrayDays[i].data);
                weekDays[getIdWeekDays(day.getDay())].tasks.push(arrayDays[i]);
            }
        }

        function formateDate(dayR: String) {
            var dateRecived = new Date(String(dayR));
            return dateRecived.getDate() + "/" + String(dateRecived.getMonth() + 1) + "/" + dateRecived.getFullYear();
        }

        ajustWeekDays(dados);
        return response.send(weekDays);
  }
  
  async create(request: Request, response: Response) {
    const { nome, descricao, data, id_projeto } = request.body;

    if(nome == "" || nome == undefined) response.status(400);
    if(descricao == "" || descricao == undefined) response.status(400);
    if(data == "" || data == undefined) response.status(400);
    if(id_projeto == "" || id_projeto == undefined) response.status(400);

    await connection('Tarefas').insert({
      nome,
      descricao,
      data,
      id_projeto
    }).then((dados) => {
      console.log(dados);
      return response.status(200).json(dados);
    })
    .catch((err) => {
      console.log(err);
      return response.status(400).json(err);
    });
  }
  async read(request: Request, response: Response) {
    await connection('Tarefas')
    .then((dados) => {
      console.log(dados);
      return response.json(dados);
    })
    .catch((err) => {
      console.log(err);
      return response.json(err);
    });
  }
  async update(request: Request, response: Response) {
    const { id, nome, descricao, data, id_projeto } = request.body

    if(nome == "" || nome == undefined) response.status(400);
    if(descricao == "" || descricao == undefined) response.status(400);
    if(data == "" || data == undefined) response.status(400);
    if(id == "" || id == undefined) response.status(400);
    if(id_projeto == "" || id_projeto == undefined) response.status(400);

    await connection('Tarefas')
      .where({ id }).update({ nome, descricao, data, id_projeto })
      .then((dados) => {
        if(dados){
          console.log(dados);
          return response.json(dados);
        }
        throw "Tarefa não encontrada";
      })
      .catch((err) => {
        console.log(err);
        return response.json(err);
      });
  }
  async delete(request: Request, response: Response) {
    const { idTarefa } = request.params
    if(idTarefa == "" || idTarefa == undefined) response.status(400);
    await connection('Tarefas')
      .where({ id: idTarefa }).delete()
      .then((dados) => {
        if(dados){
          console.log(dados);
          return response.json(dados);
        }
        throw "Tarefa não encontrada"
      })
      .catch((err) => {
        console.log(err);
        return response.json(err);
      });
  }
}


export { Tarefas };

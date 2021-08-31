# Projeto-Integrador---2021-1
Projeto desenvolvido para disciplina de Projeto Integrador

## Proposta do projeto

A proposta é um aplicativo web para organização de tarefas podendo ver as tarefas do dia, semana e mês.

## Propostas de funcionalidades

### Calendário, mostrar diferentes visualizações de um calendário (dia, semana, mês).
### To Do List (lista de afazeres).
### Ser possível criar tags, vincular tarefas a elas e as visualizar.
### Notificações dos eventos quando estiver próximo do horário.

## Como usar
*Utilizamos o SQLite3 então não é necessário nenhuma configura especial para o banco de dados.
*Utilize o gerenciador de pacotes Yarn para instalar:

npm install -g yarn

Na pasta backend execute:
1 - Instale as dependências:
    npx yarn install
2 - Execute o comando para criar a estrutura do banco:
    npx knex migrate:latest
3 - Executando o backend local:
    npx yarn dev

Na pasta frontend execute:
1 - Instale as dependências:
    npx yarn install
2 - Executando o frontend local:
    npx yarn start
# Projeto Cypress Automação de Teste

## Ferramentas Utilizadas:
- Cypress: Framework de automação de testes end-to-end.

- Mocha: Biblioteca de testes para JavaScript, utilizada em conjunto com o Cypress.

- Allure: Ferramenta de geração de relatórios interativos para resultados de testes.

- Faker: Biblioteca para geração de dados fictícios, utilizada para criar usuários durante os testes.

## Testes Implementados

 - Testes de API: Foram desenvolvidos testes automatizados para garantir o correto funcionamento das APIs.

- Testes de Interface Web: Foram implementados testes de interface web para verificar a integridade e o correto comportamento da aplicação.

## Instalação

1 Instalação do Node.js e npm:

```bash
  npm init -y 

```
2 Instalação do Cypress:

Instale o Cypress como uma dependência de desenvolvimento no seu projeto:

```bash
npm install --save-dev cypress

```

## Instale as dependências do projeto:
```bash
npm install

```

## Executando os Testes
Para rodar os testes, utilize os seguintes comandos:
-  Abrir o Cypress para execução interativa:

```bash
npx cypress open 
```
- Rode os testes em formato headless:
```bash
npx cypress run 
```
-  Rodar todos os testes (API e interface web) e gerar relatórios com o Allure

```bash
npm run test:allure
```
## Lint:
- Comando para identificar erros:
npm run lint

- Comando para corrigir automaticamente os problemas identificados:
npm run lint:fix

## Observação:
lembre-se de instalar todas as dependencias do projeto para que o teste rode com sucesso.

## Pasta Cenarios:
Contem os cenarios e as resposta das questoes solicitadas no case.
Porque nao foi utilizado cucumber com cenarios de testes na automacoes? Por se tratar de um teste rapido, optei por usar description onde fique claro dentro do relatório do allure para qualquer pessoa que tenha acesso.
    


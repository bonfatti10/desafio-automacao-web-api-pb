Funcionalidade: Recuperar Lista de Usuários

Cenário: Requisição GET para "/users" é bem-sucedida
    Dado que eu realizo uma requisição GET para "/users"
    Então a resposta contém um status code 200
    E a resposta é uma lista de usuários
    E cada usuário na lista contém os campos: ID, Nome, Username, Email, etc.


Cenário: Requisição GET para "/users" retorna uma resposta inválida
    Dado que eu realizo uma requisição GET para "/users"
    Então a resposta contém um status code diferente de 200
    E a resposta não é uma lista de usuários

Cenário: Requisição GET para "/users" retorna uma lista sem campos obrigatórios
    Dado que eu realizo uma requisição GET para "/users"
    E a resposta contém um status code 200
    E a resposta é uma lista de usuários
    Mas pelo menos um usuário na lista não contém os campos obrigatórios: ID, Nome, Username, Email, etc.

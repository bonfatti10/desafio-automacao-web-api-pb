Funcionalidade: Cadastro de usuários

Cenário: Cadastro com sucesso
Dado que tenho os dados de usuário:
| Nome      | Username   | Email               |
| John Doe  | johndoe123 | johndoe@example.com |
Quando realizo uma requisição POST para "/users" com esses dados
Então a resposta contém um status code 201
E a resposta contém os dados do usuário, incluindo o ID
E posso obter os detalhes do usuário usando a resposta do cadastro

Cenário: Cadastro com dados inválidos
Dado que tenho dados de usuário inválidos ou incompletos:
| Nome | Username   | Email               |
|      | johndoe123 | johndoe@example.com |
Quando realizo uma requisição POST para "/users" com esses dados
Então a resposta contém um status code 400 (Bad Request)
E a resposta contém uma mensagem de erro indicando os campos obrigatórios ausentes

Cenário Alternativo: Cadastro de usuário já existente
Dado que tenho os dados de um usuário que já está cadastrado
| Nome      | Username   | Email               |
| John Doe  | johndoe123 | johndoe@example.com |
Quando realizo uma requisição POST para "/users" com esses dados
Então a resposta contém um status code 409 (Conflict)
E a resposta contém uma mensagem de erro indicando que o usuário já existe

Cenário: Autenticação Necessária
Dado que tento realizar a requisição POST para "/users" sem autenticação
Quando realizo a requisição POST para "/users" com os dados válidos
Então a resposta contém um status code 401 (Unauthorized)
E a resposta contém uma mensagem indicando que a autenticação é necessária

Cenário: Limite de Requisições Excedido
Dado que tento cadastrar usuários em uma taxa muito alta
Quando realizo repetidas requisições POST para "/users" rapidamente
Então a resposta contém um status code 429 (Too Many Requests)
E a resposta contém uma mensagem indicando que o limite de requisições foi excedido, e há uma espera necessária

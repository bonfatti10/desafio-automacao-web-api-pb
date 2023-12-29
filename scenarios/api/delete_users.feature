Funcionalidade: Exclusão de Usuário

Cenário: Excluir usuário existente
    Dado que tenho o ID de um usuário existente
    Quando realizo uma requisição DELETE para "/users/{userID}"
    Então a resposta contém um status code 200
    E a resposta indica que o usuário foi removido com sucesso
    E quando realizo uma requisição GET para "/users/{userID}"
    Então a resposta contém um status code 404
    E a resposta indica que o usuário não foi encontrado

Cenário: Tentar excluir usuário inexistente
    Dado que tenho um ID de usuário que não existe
    Quando realizo uma requisição DELETE para "/users/{nonExistentUserID}"
    Então a resposta contém um status code 404
    E a resposta indica que o usuário não foi encontrado
    E quando realizo uma requisição GET para "/users/{nonExistentUserID}"
    Então a resposta contém um status code 404
    E a resposta indica que o usuário não foi encontrado
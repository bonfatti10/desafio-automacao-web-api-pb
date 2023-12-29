Funcionalidade: Atualização de Dados do Usuário

  Cenário: Atualizar dados de um usuário existente com sucesso
    Dado que tenho o ID de um usuário existente
    Quando realizo uma requisição PUT para "/users/{userID}" com novos dados de usuário
    Então a resposta contém um status code 200
    E a resposta contém os dados atualizados do usuário
    E posso obter os detalhes atualizados do usuário usando a resposta

  Cenário: Tentar atualizar dados de um usuário inexistente
    Dado que tenho o ID de um usuário inexistente
    Quando realizo uma requisição PUT para "/users/{userID}" com novos dados de usuário
    Então a resposta contém um status code 404
    E a resposta contém uma mensagem indicando que o usuário não foi encontrado
    E não posso obter os detalhes atualizados do usuário usando a resposta

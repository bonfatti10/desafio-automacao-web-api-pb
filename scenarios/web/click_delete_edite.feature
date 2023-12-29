Funcionalidade: Manipulação de itens na aplicação

  Cenário: Clique bem-sucedido nos botões "Edit" e "Delete"
    Dado que há uma lista de itens na aplicação
    Quando automatizo o clique nos botões "Edit" e "Delete" associados a cada item
    Então os botões são clicados com sucesso para cada item da lista
    E verifico se as mensagens de sucesso são exibidas corretamente

  Cenário: Falha ao clicar nos botões "Edit" e "Delete" para alguns itens
    Dado que há uma lista de itens na aplicação
    Quando automatizo o clique nos botões "Edit" e "Delete" associados a cada item
    E alguns itens na lista não possuem os botões "Edit" e "Delete"
    Então verifico se os botões são clicados com sucesso apenas para os itens que possuem os botões
    E verifico se as mensagens de sucesso são exibidas corretamente apenas para os itens clicados com sucesso
    E verifico se as mensagens de erro são exibidas para os itens sem os botões "Edit" e "Delete"

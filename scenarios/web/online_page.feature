Funcionalidade: Carregamento da Página Inicial

Cenário: Exibição correta da Página Inicial ao ser carregada
    Dado que estou na página inicial
    Quando a página é carregada
    Então a página inicial é exibida corretamente

Cenário: Tratamento adequado em caso de erro no carregamento da Página Inicial
    Dado que estou na página inicial
    Quando ocorre um erro durante o carregamento da página
    Então uma mensagem de erro é exibida ao usuário
    E o sistema registra detalhes sobre o erro para análise posterior

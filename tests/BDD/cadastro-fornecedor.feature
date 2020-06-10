Funcionalidade: Gestão de fornecedor
    Funcionalidade onde o fornecedor realiza a manutenção de seu cadastro

Cenario: Cadastrar fornecedor

    Dado o fornecedor não possui um cadastro
    E o fornecedor acessa a funcionalidade de cadastro do fornecedor
    Quando o fornecedor preenche os campos de cadastro
    E envia os dados
    Então o cadastro será realizado
    E uma notificação de confirmação é exibida

Cenario: Alterar fornecedor

    Dado o fornecedor possui um cadastro
    E o fornecedor acessa a funcionalidade de cadastro do fornecedor
    Quando o fornecedor altera os campos de cadastro
    E envia os dados
    Então a atualização do cadastro será realizada
    E uma notificação de confirmação é exibida

Cenario: Encerrar conta do fornecedor

    Dado o fornecedor possui um cadastro
    E o fornecedor acessa a funcionalidade de cadastro do fornecedor
    Quando clica em encerrar conta
    E clica em Confirmar
    Então a atualização do cadastro será realizada
    E uma notificação de confirmação é exibida
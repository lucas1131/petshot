# Petshop

## Grupo
* Giovanna Oliveira Guimarães	9293693
* Lucas Alexandre Soares		9293265
* Rafael Augusto Monteiro		9293095

## Aviso
Como já tinhamos começado a fazer uma página com funcionalidades, decidimos deixar ela do jeito que já estava ao invés de retirar as funcionalidades e criar outras telas. Assim, a `home.html` é uma página semi-funcional. Já a visão do administrador é apenas uma página estática. Assim, nosso mockup ficou semi-funcional (porém todo javascript que utilizamos foi feito na mão, sem usar nenhum framework e/ou biblioteca).

## Mockup
### Home Page
A página principal do site é a `home.html`. Nela se encontra opções para um usuário logar ou se cadastrar, informações sobre a loja, produtos, serviços, preços e notícias. Os campos de login são escondidos quando o usuário entra no site. No lugar aparece o nome do usuário e seu avatar, ao lado de um botão de *sair*. Esta página já suporta login de usuários (sem verificação de cadastro, ou seja, qualquer nome e senha é válido para logar (utilizar nome `admin` e senha `admin` para entrar como administrador)).

### Administrador
As visões do administrador permitem que ele gerencie clientes, produtos e serviços.	Estas telas aparecerão quando o administrador clicar em algum botão sob o menu de gerenciamento (apenas visível à usuários com permissões elevadas).

### Usuário comum
Um usuário logado pode registrar serviços ou adicionar produtos ao seu carrinho de compras clicando nos respectivos cartões. No caso dos serviços, um calendário será aberto para mostrar ao usuário os seus serviços já agendados e possíveis datas para agendar um serviço. Se o usuário clicar em um dia com serviço já agendado, informações sobre o agendamento serão mostradas. Se o usuário clicar no botão de Agendamento, o calendário com seus serviços já registrados aparecerá.

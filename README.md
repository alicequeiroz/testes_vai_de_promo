<h1>Automação de fluxos do Site Vai de Promo</h1>

<h2>Objetivo do Projeto</h2>

Automatizar os fluxos compra de passagens aéreas, compra de seguro viagem e validação de cupom de desconto no site **Vai de Promo**. Os testes foram desenvolvidos com o framework Cypress.


<h2>Pré-requisitos</h2>

- Node.js 
- NPM 

<h2>Clonar o projeto</h2>

Escolha uma opção de clone (HTTPS ou SSH), copie o link de clone do projeto, e no terminal de linha de comando, execute o comando `git clone` [cole-o-link-copiado-aqui].

Após o clone do projeto, acesse o diretório recém clonado (ex.: cd testes_vai_de_promo).

<h2>Instalação das dependências</h2>

Visto que as dependências já estão listadas no arquivo package.json, basta executar o comando `npm install` na raiz do projeto.

<h2>Testes</h2>

<h4>Foram desenvolvido os seguintes testes automatizados:</h4>

- Geração de pedido de Seguro viagem com a forma de pagamento Cartão de crédito; 
- Geração de pedido de Passagem aérea com a forma de pagamento Pix;
- Validação de cupom de desconto na tela de pagamento do produto Seguro Viagem;

<h2>Como executar os testes</h2>

Para rodar os testes os seguintes comandos devem ser executados:

- npx cypress open →  Abre o Cypress para que o usuário veja a interação no navegador de sua preferência.

- npx cypress run → Permite que o usuário execute os testes em modo headless.


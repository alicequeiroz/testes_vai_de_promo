import InformacoesPagamento from "../support/page-objects/pagamento.page"
const pessoaSeguradaInfo = require ("../fixtures/pessoa-segurada-Info.json")
const dadosContatoInfo = require ("../fixtures/dados-contato-Info.json")
const dadosCartaoInfo = require ("../fixtures/dados-cartao-Info.json")
const dadosPixInfo = require ("../fixtures/dados-pix-Info.json")

describe('Comprar seguro', () => {
  beforeEach(() => {
    cy.visit(`seguro-viagem/pesquisa/europa/2024-01-01/2024-01-10`)
    cy.get(':nth-child(2) > .RSSvLTo4mjzOcSmaSnlC > a > [data-cy="select-plan"]').click()
  });

  it('Gerar pedido com cartão de crédito com sucesso', () => {
    InformacoesPagamento.pessoaSeguradaInfo(
      pessoaSeguradaInfo[0].nome,
      pessoaSeguradaInfo[0].dataNasc,
      pessoaSeguradaInfo[0].cpf
    )

    InformacoesPagamento.dadosContato(
      dadosContatoInfo[0].nome,
      dadosContatoInfo[0].email,
      dadosContatoInfo[0].telefone,
      dadosContatoInfo[0].cep,
      dadosContatoInfo[0].numero,
      dadosContatoInfo[0].complemento,
    )

    cy.get('.jXWtu4HWAsq8CKida0vC > :nth-child(2)').click()

    InformacoesPagamento.dadosCartao(
      dadosCartaoInfo[0].nome,
      dadosCartaoInfo[0].cpf,
      dadosCartaoInfo[0].numeroCartao,
      dadosCartaoInfo[0].dataVencimento,
      dadosCartaoInfo[0].cvv,
    )


    cy.get('[data-cy="select-parcels"] > .vdp-ui-select-container-label > .vdp-ui-select-external > .vdp-ui-select-container').click()
    cy.get('.vdp-ui-select-options > :nth-child(1) > p').click()

    cy.get('[data-cy="finalizar-pagamento"]').should(`be.visible`).click()

  })

  it('Gerar pedido com pix com sucesso', () => {
    InformacoesPagamento.pessoaSeguradaInfo(
      pessoaSeguradaInfo[0].nome,
      pessoaSeguradaInfo[0].dataNasc,
      pessoaSeguradaInfo[0].cpf
    )

    InformacoesPagamento.dadosContato(
      dadosContatoInfo[0].nome,
      dadosContatoInfo[0].email,
      dadosContatoInfo[0].telefone,
      dadosContatoInfo[0].cep,
      dadosContatoInfo[0].numero,
      dadosContatoInfo[0].complemento,
    )

    cy.get('.JZ8gw8FLwQ3Rx16Y1BXR').click()

    InformacoesPagamento.dadosPix(
      dadosPixInfo[0].nome,
      dadosPixInfo[0].cpf,
    )

    cy.get('[data-cy="finalizar-pagamento"]').click()

    cy.get('.anZVpAp0FPA4ZWmpp6XV > :nth-child(1) > .tN1hSEWK6abbZ8CKozEX').should('contain', 'Pedido aguardando pagamento!')
  })
})
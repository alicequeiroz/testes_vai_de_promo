import InformacoesPagamento from "../support/page-objects/pagamento.page"
const pessoaSeguradaInfo = require ("../fixtures/pessoa-segurada-Info.json")
const dadosContatoInfo = require ("../fixtures/dados-contato-Info.json")
const dadosCartaoInfo = require ("../fixtures/dados-cartao-Info.json")
const dadosPixInfo = require ("../fixtures/dados-pix-Info.json")

describe('Validar cupom de desconto', () => {
  beforeEach(() => {
    cy.visit(`seguro-viagem/pesquisa/europa/2024-01-01/2024-01-10`)
    cy.get(':nth-child(2) > .RSSvLTo4mjzOcSmaSnlC > a > [data-cy="select-plan"]').click()
  });

  it('Inserir cupom de desconto invalido', () => {
    cy.get('[data-cy="coupon"]').type("AMOPROMO")
    cy.get('[data-cy="button-coupon"]').click()

    cy.get('.oEb2d3BhvfBbZYVjk6sQ > .vdp-ui-container-label > .vdp-ui-input-external > .vdp-ui-input-container').should('have.class', 'error')
    cy.get('.vdp-ui-input-error-label').should('contain', 'Cupom inválido... Insira outro cupom!')
  })
})
import InformacoesPassagem from "../support/page-objects/passagem.page"
const dadosEmbarqueInfo = require ("../fixtures/dados-embarque.json")

describe('Comprar passagem aérea', () => {
  beforeEach(() => {
    cy.visit(`/passagens-aereas/pesquisa/BHZGRU240101-GRUBHZ240105/1/0/0/Y`)
    cy.get('[data-cy="comprar-button"]').contains("Comprar na Promo").click()
  });

  it('Comprar passagem aérea com sucesso', () => {
    InformacoesPassagem.dadosBilhete(
      `${dadosEmbarqueInfo[0].nome} ${dadosEmbarqueInfo[0].sobrenome}`,
      dadosEmbarqueInfo[0].email,
      dadosEmbarqueInfo[0].telefone
    )

    InformacoesPassagem.dadosEmbarque(
      dadosEmbarqueInfo[0].nome,
      dadosEmbarqueInfo[0].sobrenome,
      dadosEmbarqueInfo[0].cpf,
      dadosEmbarqueInfo[0].dataNasc,
      dadosEmbarqueInfo[0].telefone,
      dadosEmbarqueInfo[0].email,
    )

    cy.get('[data-cy="paymentSelectedPix"] > .vdp-ui-box-container').click()

    InformacoesPassagem.dadosPix(
      `${dadosEmbarqueInfo[0].nome} ${dadosEmbarqueInfo[0].sobrenome}`,
      dadosEmbarqueInfo[0].cpf
    )

    cy.get('[data-cy="comprar-button"]').should('be.visible').click()
  })
})
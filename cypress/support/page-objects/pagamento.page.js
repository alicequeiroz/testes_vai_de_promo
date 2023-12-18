class InformacoesPagamento{

    pessoaSeguradaInfo(nome, dataNascimento, cpf){
        cy.get('[data-cy="insured-0-name"]').type(nome)
        cy.get('[data-cy="insured-0-birthdate"]').type(dataNascimento)
        cy.get('[data-cy="insured-0-cpf"]').type(cpf)
    }

    dadosContato(nome, email, telefone, cep, numero, complemento){
        cy.get('[data-cy="name"]').type(nome)
        cy.get('[data-cy="email"]').type(email)
        cy.get('[data-cy="phone"]').type(telefone)
        cy.get('[data-cy="cep"]').type(cep)
        cy.get('[data-cy="number"]').type(numero)
        cy.get('[data-cy="complement"]').type(complemento)

    }

    dadosCartao(nome, cpf, numeroCartao, dataVencimento, cvv){
        cy.get('[data-cy="payment-card"]').type(numeroCartao)
        cy.get('[data-cy="select-flag"] > .vdp-ui-select-container-label > .vdp-ui-select-external > .vdp-ui-select-container').click()
        cy.get('.vdp-ui-select-options > :nth-child(1) > img').click()
        cy.get('[data-cy="payment-name"]').type(nome)
        cy.get('[data-cy="payment-cpf"]').type(cpf)
        cy.get('[data-cy="payment-date"]').type(dataVencimento)
        cy.get('[data-cy="payment-cvv"]').type(cvv)

    }

    dadosPix(nome, cpf){
        cy.get('[data-cy="payment-name"]').type(nome)
        cy.get('[data-cy="payment-cpf"]').type(cpf)

    }
}

export default new InformacoesPagamento()
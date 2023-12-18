class InformacoesPassagem{

    dadosBilhete(nomeCompleto, email, telefone){
        cy.get('[data-cy="contactFullName"]').type(nomeCompleto)
        cy.get('[data-cy="contactEmail"]').type(email)
        cy.get('[data-cy="contactPhone"]').type(telefone)
    }

    dadosEmbarque(nome, sobrenome, cpf, dataNasc, telefone, email){
        cy.get('[data-cy="passenger0firstName"]').type(nome)
        cy.get('[data-cy="passenger0lastName"]').type(sobrenome)
        cy.get('[data-cy="passenger0document"]').type(cpf)
        cy.get('[data-cy="passenger0birthDate"]').type(dataNasc)
        cy.get('[data-cy="passenger0phone"]').type(telefone)
        cy.get('[data-cy="passenger0email"]').type(email)
        cy.get('.vdp-ui-select-container').click()
        cy.get('.vdp-ui-select-options > :nth-child(2)').click()
    }

    dadosPix(nomeCompleto, cpf){
        cy.get('[data-cy="paymentPixFullName"]').type(nomeCompleto)
        cy.get('[data-cy="paymentPixDocument"]').type(cpf)
    }
}

export default new InformacoesPassagem()
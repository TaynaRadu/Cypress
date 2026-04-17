describe('Página de cadastro', () => {
    beforeEach(() => {
        cy.visit('/');
    })

    context('Verifica o redirecionamento para a página de cadastro', () => {

        it('Clica no link "Cadastre-se" e redireciona para a página de cadastro da clinica', () => {
        cy.get('[href="/cadastro"]').click();
        cy.location('pathname').should('eq', '/cadastro');

        })
    })    

    context('Primeira parte da sessão de cadastro', () => {

        it('Digita dados da clinica e exibe na área para inserção de dados técnicos', () => {

            cy.get('[href="/cadastro"]').click();
            cy.get('[data-test="inputNome"]').type('Catarina P');
            cy.get('[data-test="inputCNPJ"]').type('12345678000195');
            cy.get('[data-test="inputEmail"]').type('catarina@email.com');
            cy.get('[data-test="inputSenha"]').type('Senha123');
            cy.get('[data-test="inputSenhaVerificada"]').type('Senha123');

            cy.get('.sc-bcXHqe').click();

            cy.contains('h2', 'Agora, os dados técnicos:').should('be.visible');
            cy.get('.sc-laZRCg').should('be.visible');
        })
    })
    
    context('Sessão de cadastro completa', () => {
        it('Cadastra uma clinica', () => {

        cy.get('[href="/cadastro"]').click();
        cy.get('[data-test="inputNome"]').type('Catarina P');
        cy.get('[data-test="inputCNPJ"]').type('12345678000195');
        cy.get('[data-test="inputEmail"]').type('catarina@email.com');
        cy.get('[data-test="inputSenha"]').type('Senha123');
        cy.get('[data-test="inputSenhaVerificada"]').type('Senha123');

        cy.get('.sc-bcXHqe').click();

        cy.get('[data-test="inputTelefone"]').type('9999999999');
        cy.get('[data-test="inputCEP"]').type('99999999');
        cy.get('[data-test="inputRua"]').type('Salvatori');
        cy.get('[data-test="inputNumero"]').type('999');
        cy.get('[data-test="inputComplemento"]').type('Irmãos salvatori');
        cy.get('[data-test="inputEstado"]').type('BA');

        cy.contains('Cadastrar').click();

        cy.location('pathname').should('eq', '/login');
        
        })
    })
})

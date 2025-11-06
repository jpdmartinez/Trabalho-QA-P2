describe("Funcionalidade: Carrinho", () => {

    let usuarioValido = "standard_user";
    let senha = "secret_sauce";
    beforeEach(() => {
        cy.visit("https://www.saucedemo.com/")

        cy.get('#user-name').type(usuarioValido)
        cy.get('#password').type(senha)
        cy.get('#login-button').contains("Login").click()

        cy.wait(1000)
    });

    
    it("CARRINHO - Adicionar item.", () => {
        cy.get('.btn_inventory').contains("Add").first().click()
        cy.get('.shopping_cart_badge').contains('1')
    })

    it("CARRINHO - Adicionar dois itens.", () => {
        cy.get('.btn_inventory').contains("Add").first().click()
        cy.get('.btn_inventory').eq(1).click()
        cy.get('.shopping_cart_badge').contains('2')
    })

    it("CARRINHO - Remover item.", () => {
        cy.get('.btn_inventory').first().click()
        cy.get('.btn_inventory').eq(1).click()
        cy.get('.btn_inventory').first().click()

        cy.get('.shopping_cart_badge').contains('1')
    })

    it("CARRINHO - Ver carrinho.", () => {
        cy.get('.btn_inventory').first().click()
        cy.get('.btn_inventory').eq(1).click()
        cy.get('.btn_inventory').first().click()
        cy.wait(500)
        cy.get('.shopping_cart_link').click()

        cy.contains('Checkout')
    })
})
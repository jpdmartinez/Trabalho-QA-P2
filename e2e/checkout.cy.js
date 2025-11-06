describe("Funcionalidade: Checkout", () => {

    let usuarioValido = "standard_user";
    let senha = "secret_sauce";
    beforeEach(() => {
        cy.visit("https://www.saucedemo.com/")

        cy.get('#user-name').type(usuarioValido)
        cy.get('#password').type(senha)
        cy.get('#login-button').contains("Login").click()

        cy.wait(1000)

        cy.get('.btn_inventory').first().click()
        cy.get('.btn_inventory').eq(1).click()
        cy.get('.btn_inventory').first().click()
        cy.wait(500)
        cy.get('.shopping_cart_link').click()

        cy.contains('Checkout')
    });

    it("CHECKOUT - Preencher dados válidos", () => {
        cy.get('#checkout').click()
        cy.get('#first-name').type("José")
        cy.get('#last-name').type("Da Silva")
        cy.get('#postal-code').type("123456789")
        cy.get('#continue').click()

        cy.contains('Checkout: Overview')
        cy.wait(2000)
    })

    it("CHECKOUT - Campos vazios", () => {
        cy.get('#checkout').click()
        cy.get('#continue').click()

        cy.contains('Error: First Name is required')
        cy.wait(2000)
    })

    it("CHECKOUT - Finalizar compra", () => {
        cy.get('#checkout').click()
        cy.get('#first-name').type("José")
        cy.get('#last-name').type("Da Silva")
        cy.get('#postal-code').type("123456789")
        cy.get('#continue').click()
        cy.get('#finish').click()

        cy.contains('Thank you for your order!')
        cy.wait(2000)
    })

    it("CHECKOUT - Cancelar compra", () => {
        cy.get('#checkout').click()
        cy.get('#first-name').type("José")
        cy.get('#last-name').type("Da Silva")
        cy.get('#postal-code').type("123456789")
        cy.get('#continue').click()
        cy.get('#cancel').click()

        cy.get('#item_0_img_link').should('exist')
        cy.wait(2000)
    })
    
})
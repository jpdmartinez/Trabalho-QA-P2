describe("Login", () => {

    let usuarioValido = "standard_user";
    let usuarioBloqueado = "locked_out_user";
    let senha = "secret_sauce";
    let senhaInvalida = "senha@123"
    beforeEach(() => {
        cy.visit("https://www.saucedemo.com/")
    });

    it("LOGIN - Credenciais válidas", () => {
        cy.get('#user-name').type(usuarioValido)
        cy.get('#password').type(senha)
        cy.get('#login-button').contains("Login").click()

        cy.get('.shopping_cart_link').should('exist')
        cy.wait(1000)
    })

    it("LOGIN - Credenciais inválidas", () => {
        cy.get('#user-name').type(usuarioValido)
        cy.get('#password').type(senhaInvalida)
        cy.get('#login-button').contains("Login").click()

        cy.get('.error').contains('Username and password do not match any user in this service')
        cy.wait(1000)
    })

    it("LOGIN - Usuário bloquado", () => {
        cy.get('#user-name').type(usuarioBloqueado)
        cy.get('#password').type(senha)
        cy.get('#login-button').contains("Login").click()

        cy.get('.error').contains('Sorry, this user has been locked out.')
        cy.wait(1000)
    })

    it("LOGIN - Campos vazios", () => {
        cy.get('#login-button').contains("Login").click()

        cy.get('.error').contains('Username is required')
        cy.wait(1000)
    })
})
describe("Produtos", () => {

    let usuarioValido = "standard_user";
    let senha = "secret_sauce";
    beforeEach(() => {
        cy.visit("https://www.saucedemo.com/")

        cy.get('#user-name').type(usuarioValido)
        cy.get('#password').type(senha)
        cy.get('#login-button').contains("Login").click()

        cy.wait(1000)
    });

    it("Products - Listar itens", () => {
        
        cy.get('#item_0_img_link').should('exist')
        cy.get('#item_1_img_link').should('exist')
        cy.get('#item_2_img_link').should('exist')
        cy.get('#item_3_img_link').should('exist')
        cy.get('#item_4_img_link').should('exist')
        cy.get('#item_5_img_link').should('exist')
    })

    it("Products - Ordenar A -> Z", () => {
        cy.get('.product_sort_container').select("az")
    })

    it("Products - Ordenar Z -> A", () => {
        cy.get('.product_sort_container').select("za")
    })
    
})
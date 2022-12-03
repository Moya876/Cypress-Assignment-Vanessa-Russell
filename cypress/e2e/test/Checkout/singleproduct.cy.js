describe('Single product checkout', () => {
    beforeEach(() => {
        cy.visit('/')
      })

    it('Should login & add a single product to cart and check out', () => {
        // Login with a valid user
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()

        // Add the saucelabs backpack to the cart
        cy.get('#add-to-cart-sauce-labs-backpack').click()

        //continue to checkout item
        cy.get('.shopping_cart_link').click()
        cy.get('#checkout').click()

        cy.get('#first-name').type('Vanessa')
        cy.get('#last-name').type('Russell')
        cy.get('#postal-code').type('00000')
        cy.get('#continue').click()
        cy.get('#finish').click()
    })
    
})
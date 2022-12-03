describe('Multiple Product checkout', () => {
    beforeEach(() => {
        cy.visit('/')
      })

    it('Should login & add multiple products to cart and check out', () => {
        // Login with a valid user
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()

        // Add the saucelabs backpack to the cart
        cy.get('#add-to-cart-sauce-labs-backpack').click()

        // Add the saucelabs onesie to the cart
        cy.get('#add-to-cart-sauce-labs-onesie').click()

         // Add the saucelabs bikelight to the cart
        cy.get('#add-to-cart-sauce-labs-bike-light').click()

        // Select cart Icon
        cy.get('.shopping_cart_link').click()

        //Continue to checkout
        cy.get('#checkout').click()

        //enter order details
        cy.get('#first-name').type('Vanessa')
        cy.get('#last-name').type('Russell')
        cy.get('#postal-code').type('00000')

        // Continue to checkout items
        cy.get('#continue').click()
        
        //Complete checkout
        cy.get('#finish').click()

    })
    
})
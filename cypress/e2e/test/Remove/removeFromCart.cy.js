/// <reference types="cypress"/>
import Auth from '../../page/auth.page'
import Cart from '../../page/cart.page'

describe('Remove product from cart', () => {
    beforeEach(() => {
        cy.visit('/')
    })
    it('Should add a product to cart & remove the product', () => {
        Auth.login('standard_user','secret_sauce')

        Cart.addToCart('Sauce Labs Backpack')
        Cart.navigateToCart()

        // Assert that there is 1 item in the cart then remove the item
        cy.get(Cart.cartQuantity).should('have.text', 1)
        cy.get(Cart.cartItemsName).should('have.text', 'Sauce Labs Backpack')
        cy.get(Cart.removeSauceLabBackPackBtn).click()

        // Assert that the item was removed and the cart is empty
        cy.get(Cart.cartItemsName).should('not.exist')
        cy.get(Cart.removedCartItem).should('exist')
    })
})
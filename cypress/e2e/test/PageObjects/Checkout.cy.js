/// <reference types="cypress"/>
import Auth from '../../page/auth.page'
import Cart from '../../page/cart.page'
import Checkout from '../../page/checkout.page'

describe('single product checkout & multiple products checkout', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Should add a single product to cart & proceed to checkout', () => {
        //log into application with a valid user
        Auth.login('standard_user','secret_sauce')
        //add a product to cart
        Cart.addToCart('Sauce Labs Backpack')
        Cart.navigateToCart()
        //check that item was added to cart
        cy.get(Cart.cartNotification).should('have.text', 1)
        cy.get(Cart.cartQuantity).should('have.text', 1)
        cy.get(Cart.removeSauceLabBackPackBtn).should('be.visible')
        cy.get(Cart.cartItemsName).should('have.text', 'Sauce Labs Backpack')
        //continue to checkout
        cy.get(Cart.checkOutBtn).click()
        Checkout.addInfo('Vanessa','Russell','00000')
    })

    it('Should add multiple products to cart & proceed to checkout', () => {
        Auth.login('standard_user','secret_sauce')

        Cart.addToCart('Sauce Labs Backpack')
        Cart.addToCart('Sauce Labs Bike Light')
        Cart.addToCart('Sauce Labs Bolt T-Shirt')
        
        //Cart.addToCart()
        Cart.navigateToCart()

        cy.get(Cart.cartNotification).should('have.text', 3)
        cy.get(Cart.cartQuantity).should('have.text', 111)
        cy.get(Cart.removeSauceLabBackPackBtn).should('be.visible')
        cy.get(Cart.cartItemsName).should('have.text', 'Sauce Labs BackpackSauce Labs Bike LightSauce Labs Bolt T-Shirt')
       
        //continue to checkout
        cy.get(Cart.checkOutBtn).click()
        Checkout.addInfo('Vanessa','Russell','00000')
    })
})
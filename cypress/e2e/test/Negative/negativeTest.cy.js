/// <reference types="cypress"/>
import Auth from '../../page/auth.page'

describe('Authentication Error', () => {
    beforeEach(() => {
        cy.visit('/')
      })

    it('Locked out user cannot login', () => {
        Auth.login('locked_out_user','secret_sauce')
        cy.get('.error-message-container.error').should('be.visible')
        cy.TestCommand()

        
    })
    it('Valid user should not login with invalid passsword', () => {
        Auth.login('standard_user','wrongpassword')
        cy.get('.error-message-container.error').should('be.visible')
        cy.TestCommand() 
    })
})
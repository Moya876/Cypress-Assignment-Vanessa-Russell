class Checkout{
    
    //#region Selectors
    get firstNameField() { return ('#first-name') }
    get lastNameField() { return ('#last-name') }
    get postalCode() { return ('#postal-code') }

    get contBtn() { return ('#continue') }

    get finishBtn() { return ('#finish') }
    //#endregion

    //#region Methods
        addInfo(firstName, lastName, postalCode){
        cy.get(this.firstNameField).type(firstName)
        //Firstname entered should be Vanessa
        cy.get(this.firstNameField).should('have.value', 'Vanessa')

        cy.get(this.lastNameField).type(lastName)
        //Lastname entered should be Russell
        cy.get(this.lastNameField).should('have.value', 'Russell')

        cy.get(this.postalCode).type(postalCode)
        //Postal code entered should be '00000'
        cy.get(this.postalCode).should('have.value', '00000')

        //continue to checkout
        cy.get(this.contBtn).should('exist')   
        cy.get(this.contBtn).click()
        cy.get('#cancel').should('exist')
        cy.get('.cart_desc_label').should('have.text', 'DESCRIPTION')
        cy.get(this.finishBtn).should('exist')  
        cy.get(this.finishBtn).click()
        //Checkout completed and a success page should be visible
        cy.get('.complete-header').should('have.text', 'THANK YOU FOR YOUR ORDER')
        cy.get('#back-to-products').should('exist')

    }
    //#endregion
}
export default new Checkout()
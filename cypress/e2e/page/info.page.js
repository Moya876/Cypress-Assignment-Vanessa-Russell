
class Information{
    
    //#region Selectors
    get firstNameField() { return ('#first-name') }
    get lastNameField() { return ('#last-name') }
    get Zip() { return ('#postal-code') }
    get continueBtn() { return ('#continue') }
    //#endregion

    //#region Methods
    Information(firstName, lastName, Zip){
        cy.get(this.firstNameField).type(firstName)
        cy.get(this.lastNameField).type(lastName)
        cy.get(this.Zip).type(Zip)
        cy.get(this.continueBtn).should('be visible')
        cy.get(this.continueBtn).click()
    //#endregion
    }
}
export default new Information()
class MyInfoButton{

    selectorsList() {
        const selectors = {
            firstNameField: "[name='firstName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input--active",
            dateField: "[placeholder='yyyy-dd-mm']",
            gerericComboBox: ".oxd-select-text--arrow",
            thirdItemComboBox: ":nth-child(3) > span",
            fourthItemComboBox: ".oxd-select-dropdown > :nth-child(4)",
            dateCloseButton: ".--close",
            submitButton: "[type='submit']"
        }

        return selectors
    }
fillPersonalDetails(firstName, lastName) {
    cy.get(this.selectorsList().firstNameField).clear().type(firstName)
    cy.get(this.selectorsList().lastNameField).clear().type(lastName)
    
}

fillEmployeeDetails(employeeId, otherId, driversLinceseNumber, expiryDate) {
    cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeId)
    cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId)
    cy.get(this.selectorsList().genericField).eq(5).clear().type(driversLinceseNumber)
    cy.get(this.selectorsList().genericField).eq(6).clear().type(expiryDate)
    cy.get(this.selectorsList().dateCloseButton).click()
}

saveForm() {
    cy.get(this.selectorsList().submitButton).eq(0).click({ force: true })
    cy.get('body').should('contain', 'Successfully Update')
    cy.get('.oxd-toast-close', {timeout:10000}).should('be.visible').click()

}

fillStatus() {
    cy.get(this.selectorsList().gerericComboBox).eq(0).click({ force: true })
    cy.get(this.selectorsList().thirdItemComboBox).click()
    cy.get(this.selectorsList().gerericComboBox).eq(1).click({ force: true })
    cy.get(this.selectorsList().fourthItemComboBox).click()
}

}

export default MyInfoButton
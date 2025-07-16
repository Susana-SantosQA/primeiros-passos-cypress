import userData from  '../fixtures/userData.json'
import LoginPage from '../pages/loginPage.cy'
import DashboardPage from '../pages/dashboardPage.cy'
import MenuPage from '../pages/menuPage.cy'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()

describe('Orange HRM Tests', () => {

  const selectorsList = {
    
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

  it.only('User Info UpDate - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)

    dashboardPage.checkDashboardPage()
    
    menuPage.accessMyInfo()

    cy.get(selectorsList.firstNameField).clear().type('FirstNameTest')
    cy.get(selectorsList.lastNameField).clear().type('LastNameTest')
    cy.get(selectorsList.genericField).eq(3).clear().type('Employee')
    cy.get(selectorsList.genericField).eq(4).clear().type('OtherIdTest')
    cy.get(selectorsList.genericField).eq(5).clear().type('DriversLinceseTest')
    cy.get(selectorsList.genericField).eq(6).clear().type('2025-03-10')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.submitButton).eq(0).click()
    cy.get('body').should('contain', 'Successfully Update')
    cy.get('.oxd-toast-close', {timeout:10000}).should('be.visible').click()

    cy.get(selectorsList.gerericComboBox).eq(0).click()
    cy.get(selectorsList.thirdItemComboBox).click()
    cy.get(selectorsList.gerericComboBox).eq(1).click()
    cy.get(selectorsList.fourthItemComboBox).click()

  })
  it('Login - fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})
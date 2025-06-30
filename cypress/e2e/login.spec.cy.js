describe('Orange HRM Tests', () => {

  const selectorlist = {
    usernameFiel: "[name='username']",
    passwordFiel: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    wrongCredentialAlert: "[role='alert']"
  }

  it('Login - Success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorlist.usernameFiel).type('Admin')
    cy.get(selectorlist.passwordFiel).type('admin123')
    cy.get(selectorlist.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorlist.sectionTitleTopBar).contains('Dashboard')
  })
  it('Login - fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorlist.usernameFiel).type('Test')
    cy.get(selectorlist.passwordFiel).type('test')
    cy.get(selectorlist.loginButton).click()
    cy.get(selectorlist.wrongCredentialAlert)
  })
})
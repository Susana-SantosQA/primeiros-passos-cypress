import userData from  '../fixtures/userData.json'
import LoginPage from '../pages/loginPage.cy'
import DashboardPage from '../pages/dashboardPage.cy'
import MenuPage from '../pages/menuPage.cy'
import MyInfoPage from '../pages/myInfoPage.cy'

const Chance = require('chance')

const chance = new Chance()
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM Tests', () => {

  const selectorsList = {
    
    
  }

  it('User Info UpDate - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)

    dashboardPage.checkDashboardPage()
    
    menuPage.accessMyInfo()

    myInfoPage.fillPersonalDetails(chance.first(), chance.last())
    myInfoPage.fillEmployeeDetails('employeeId', 'otherId', 'driversLinceseNumber', '2025-07-29', '123456', '0987654')
    myInfoPage.fillStatus()
    myInfoPage.saveForm()
    
  })

})
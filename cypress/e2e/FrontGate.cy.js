const { LoginPage } = require("../pages/loginPage");

let login = new LoginPage()
let loginData;

describe('data driven', () => {

  before(() => {
    cy.task('readXlsx', { file: './username and password.xlsx', sheet: "Sheet1" }).then((rows) => {
      loginData = rows;
      console.log(loginData)
    });
    cy.visit('https://www.frontgate.com/webapp/wcs/stores/servlet/ReLogonFormView?storeId=10053&langId=-1&krypto=');
  });
  

    it('Login Test', () => {
      for (var i = 0; i < loginData.length; i++) {
      login.loginTestUser(loginData[i])
      }
    });
  
})
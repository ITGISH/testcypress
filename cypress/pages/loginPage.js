export class LoginPage {
    loginEmailInput = '#logonId';
    loginPasswordInput = '#logonPassword';
    sumitButton = '#logonButton';
    loginTestUser(user) {


            cy.get(this.loginEmailInput).clear();
            cy.get(this.loginPasswordInput).clear();
            cy.get(this.loginEmailInput).type(user.Email);
            if (user.Password != undefined)
                cy.get(this.loginPasswordInput).type(user.Password);
            cy.get(this.sumitButton).click();
            cy.get(this.sumitButton).click();




            if (user.Case == 1) {
                cy.get('.gwt-Label').should('be.visible').should('contain', 'Error: Please enter Email Address in a valid format.')
                console.log("case 1");
            }
            else if (user.Case == 2 ) {
                
                cy.get('.gwt-InlineHTML').should('be.visible')
                console.log("case 2");

            }
            else if (user.Case == 3) {
                let header = cy.get('#sideBoxHeader').should('be.visible');
                console.log("case 3");

            }


    }
}
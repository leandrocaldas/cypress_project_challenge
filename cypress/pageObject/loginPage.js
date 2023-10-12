class LoginPage {
    constructor() {
      this.usernameField = '[data-test="username"]';
      this.passwordField = '[data-test="password"]';
      this.loginButton = '[data-test="login-button"]';
    }

    visit(url) {
        cy.clearAllSessionStorage();
        cy.clearAllLocalStorage();
        cy.clearCookies();
        cy.visit(url, { failOnStatusCode: false});
      }
    
    login(username, password) {
        cy.get(this.usernameField).type(username);
        cy.get(this.passwordField).type(password);
        cy.get(this.loginButton).click();
      }
}
export default new LoginPage();
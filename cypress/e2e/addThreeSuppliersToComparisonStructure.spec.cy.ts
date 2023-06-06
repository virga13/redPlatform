import login from "cypress/pages/RedPlatform/login";
import Hamburgerr from "../pages/RedPlatform/hambugerr";
import energyMarketplace from "../pages/RedPlatform/energyMarketplace";

Cypress.on('uncaught:exception', () => {
  return false;
});

describe('Energy Marketplace - Compare 2 or more suppliers', () => {
    it('Add two suppliers to compare', () => {

    cy.visit('https://vlec.redplatform-staging.com');
    

    // Type username, password and click Login

    login.inputUsername().should('be.visible')
    login.action_inputUsername('raulgocan1@gmail.com')

    login.inputPassword().should('be.visible')
    login.action_inputPassword('syvned-wyvgy2-Jotrud')

    login.loginButton().should('have.text', 'Log In')
    login.action_clickLogin()

    // Intercept Login Api
    cy.intercept('auth/realms/red_platform_dev/account').as('loginApi')

    // Wait for Login Api to load page before proceeding to the next step
    cy.wait('@loginApi').then(() =>{
      cy.get('.toolbar-title-default').should('be.visible')
    })

    Hamburgerr.action_selectHamburgerItem()

    energyMarketplace.action_clickToSelectCountry()
    energyMarketplace.action_typeCountryName('Romania')
    energyMarketplace.action_selectCountry();

    })
})
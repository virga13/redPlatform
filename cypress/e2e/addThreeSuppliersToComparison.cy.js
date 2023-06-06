import { 
  selectHamburgerItem, 
 } from "../pages/base/hamburger";

import { EnergyMarketplace } from "../pages/base/energyMarketplacePage"
import energyMarketplace from "../pages/RedPlatform/energyMarketplace";

Cypress.on('uncaught:exception', () => {
  return false;
});

describe('Energy Marketplace - Compare 2 or more suppliers', () => {
  it('Add two suppliers to compare', () => {
    cy.visit('https://vlec.redplatform-staging.com');
    

    // Type username, password and click Login
    cy.get('input#username')
      .should('be.visible')
      .clear()
      .type('raulgocan1@gmail.com');

    cy.get('input#password')
      .should('be.visible')
      .clear()
      .type('syvned-wyvgy2-Jotrud');

    cy.get('#kc-login')
      .should('be.visible')
      .click();

    // Intercept Login Api
    cy.intercept('auth/realms/red_platform_dev/account').as('loginApi')

    // Wait for Login Api to load page before proceeding to the next step
    cy.wait('@loginApi').then(() =>{
      cy.get('.toolbar-title-default').should('be.visible')
    })

    // Navigate to Energy Marketplace 
    selectHamburgerItem('Energy marketplace', {timeout: 10000})

    // Select Country, Region and City
    EnergyMarketplace.selectCountry('Romania')
    cy.wait(300)
    EnergyMarketplace.selectRegion('Cluj')
    cy.wait(300)
    EnergyMarketplace.selectCity('Cluj-napoca')
    cy.wait(300)
                            /**
                             *  [ UX Improvement ]
                             *  After selecting country, region and city, we can not remove those. 
                             *  We can just change the country so the others reset but I can not remove all of them (had to login to have no selection)
                             * 
                             *  --- [ Add a Clear Location Filters Button ] ---
                             */
    
    // Add first supplier to Comparison and Assert Pop Up text to be "Offer added to compare"
    EnergyMarketplace.selectSupplierByIndex(0)
    cy.log("First Supplier added to compare")
    cy.wait(300)
    energyMarketplace.setPopUpText()
    EnergyMarketplace.assertSuppliersInComparisonList(1)

    // Add second supplier to Comparison and Assert Pop Up text to be "Offer added to compare"
    cy.wait(300)
    EnergyMarketplace.selectSupplierByIndex(1)
    cy.log("Second Supplier added to compare")
    cy.wait(300)
    cy.get('ion-toast')
      .shadow()
      .invoke('text')
      .then((shadowRootText) => {
        expect(shadowRootText).to.contain('Offer added to compare')
    });
    cy.wait(300)
    EnergyMarketplace.assertSuppliersInComparisonList(2)
    
    // Add third supplier to Comparison and Assert pop up text to be "Already having offers [...]"
    EnergyMarketplace.selectSupplierByIndex(4)
    cy.wait(50)
    cy.get('ion-toast')
      .shadow()
      .invoke('text')
      .then((shadowRootText) => {
        const popUpText = shadowRootText.split('Offer added to compare')[2]
        expect(popUpText.toString()).to.contain('You already have offers in compare, please remove one in order to add other')

      });
      
    EnergyMarketplace.assertSuppliersInComparisonList(2)
  })
})
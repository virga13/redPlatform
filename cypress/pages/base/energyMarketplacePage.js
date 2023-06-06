export class EnergyMarketplacePage {

    selectCountry(country) {
        cy.get('[formcontrolname="country"]')
            .scrollIntoView()
            .should('be.visible')
            .within(() => {
    
                cy.get('[tabindex="1"]')
                    .scrollIntoView()
                    .should('exist')
                    .click()
                    });
    
                    cy.get('[aria-label="search text"]')
                    .should('be.visible')
                    .type(country, { delay: 0 })
    
                    cy.get('#testing_search_results')
                        .should('be.visible')
                        .click()
            
    };
    
    selectRegion(region) {
        cy.get('[formcontrolname="region"]')
            .scrollIntoView()
            .should('be.visible')
            .within(() => {
    
                cy.get('[tabindex="1"]')
                    .scrollIntoView()
                    .should('exist')
                    .click()
                    });
    
                cy.get('[aria-label="search text"]')
                    .should('be.visible')
                    .type(region, { delay: 0 })
    
                cy.get('#testing_search_results')
                    .should('be.visible')
                    .click()
            
    };
    
    selectCity(city) {
        cy.get('[formcontrolname="city"]')
            .scrollIntoView()
            .should('be.visible')
            .within(() => {
    
                cy.get('[tabindex="1"]')
                    .scrollIntoView()
                    .should('exist')
                    .click()
                    });
    
                    cy.get('[aria-label="search text"]')
                    .type(city, { delay: 0 })
    
                    cy.get('#testing_search_results')
                    .click()
            
    };
    
    selectSupplierByIndex(index) {
        cy.get('.offer-card')
            .eq(index)
            .scrollIntoView()
            .should('exist')
            .within(() => {
    
                cy.get('[color="restart-yellow"]')
                    .scrollIntoView()
                    .should('exist')
                    .click({ force:true })
            });
            
    };

    assertSuppliersInComparisonList(suppliersNumber) {
        cy.contains('.label', ' Compare ')
            .should('exist')
            .click({ force:true })
            // .click({ force:true })

        cy.get('red-platform-franchises-offers-for-connsumers-compare')
            .first()
            .within(() => {
            cy.get('ion-item').should('have.length', suppliersNumber)
        })
            
    }
    
    }
    export const EnergyMarketplace = new EnergyMarketplacePage();
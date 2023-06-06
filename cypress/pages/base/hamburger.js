export function selectHamburgerItem(hamburgerItem) {
    cy.contains('[menu-id="client-area-menu"]', hamburgerItem)
        .scrollIntoView()
        .should('be.visible')
        .within(() => {

            cy.contains('ion-item', hamburgerItem)
                .scrollIntoView()
                .should('exist')
                .click({ force:true })
        });
};
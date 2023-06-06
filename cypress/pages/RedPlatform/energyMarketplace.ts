import { factory_clickToSelectCountry, factory_selectCountry, factory_typeCountryName } from '../base/energyMarketplace';


const energyMarketplace = () => {
    
    const elements = {
        clickToSelectCountry: () => cy.get('[formcontrolname="country"]')
                                 .scrollIntoView()
                                .should('be.visible')
                                .within(() => {
                                     cy.get('[tabindex="1"]')
                                        .scrollIntoView() 
                                    }),
        typeCountry: () => cy.get('[aria-label="search text"]'),
        selectCountry: () => cy.get('#testing_search_results'),
        
    };

    const aliases = {
        setPopUpText: () => 
        cy
            .get('ion-toast')
            .shadow()
            .invoke('text')
            .then((shadowRootText) => {
            expect(shadowRootText).to.contain('Offer added to compare')
            cy.wrap(shadowRootText).as('popUpText')
    }),
        getPopUpText: () => cy.get('@popUpText')
    }

    return {
        ...elements,
        ...aliases,
        ...factory_clickToSelectCountry(elements.clickToSelectCountry),
        ...factory_typeCountryName(elements.typeCountry),
        ...factory_selectCountry(elements.selectCountry),
    };
};

export default energyMarketplace();

import { factory_selectHamburgerItem } from '../base/hamburgerr'

const Hamburgerr = () => {
    
    const elements = {
        energyMarketplace: () => cy.get('[menu-id="client-area-menu"]').contains('Energy marketplace'),
    };

    return {
        ...elements,
        ...factory_selectHamburgerItem(elements.energyMarketplace),
    };
};

export default Hamburgerr();

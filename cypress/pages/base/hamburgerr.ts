import { typeFnCyGet } from "../../interfaces/core.interfaces"

/**
 * Example:
 */
export const factory_selectHamburgerItem = (hamburgerItemLocator: typeFnCyGet) => ({

    action_selectHamburgerItem: () => {
        return hamburgerItemLocator().click()
    },
});


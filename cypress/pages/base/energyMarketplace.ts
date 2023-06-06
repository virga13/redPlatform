import { typeFnCyGet } from "../../interfaces/core.interfaces"

/**
 * Example:
 */
export const factory_clickToSelectCountry = (countryLocator: typeFnCyGet) => ({

    action_clickToSelectCountry: () => {
        return countryLocator().click()
    },
});

/**
 * Example:
 */
export const factory_typeCountryName = (countryNameLocator: typeFnCyGet) => ({

    action_typeCountryName: (countryName: string) => {
        return countryNameLocator().clear().type(countryName)
    },
});

/**
 * Example:
 */
export const factory_selectCountry = (countryLocator: typeFnCyGet) => ({

    action_selectCountry: () => {
        return countryLocator().click()
    },
});



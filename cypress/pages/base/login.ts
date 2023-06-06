import { typeFnCyGet } from "../../interfaces/core.interfaces"


/**
 * Example:
 */
export const factory_inputUsername = (usernameTextBoxLocator: typeFnCyGet) => ({

    action_inputUsername: (username: string) => {
        return usernameTextBoxLocator().clear().type(username);
    },
})

/**
 * Example:
 */
export const factory_inputPassword = (passwordTextBoxLocator: typeFnCyGet) => ({

    action_inputPassword: (password: string) => {
        return passwordTextBoxLocator().clear().type(password);
    },
})

/**
 * Example:
 */
export const factory_clickLogin = (loginLocator: typeFnCyGet) => ({

    action_clickLogin: () => {
        return loginLocator().click();
    },
})
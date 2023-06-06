import { factory_clickLogin, factory_inputPassword, factory_inputUsername  } from '../base/login'

const Login = () => {
    
    const elements = {
        inputUsername: () => cy.get('input#username'),
        inputPassword: () => cy.get('input#password'),
        loginButton: () => cy.get('#kc-login'),
    };

    return {
        ...elements,
        ...factory_inputUsername(elements.inputUsername),
        ...factory_inputPassword(elements.inputPassword),
        ...factory_clickLogin(elements.loginButton)
    };
};

export default Login();

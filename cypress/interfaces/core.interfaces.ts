import Chainable = Cypress.Chainable;

export type typeCyGet<E extends Node = HTMLElement> = Chainable<JQuery<E>>;
export type typeFnCyGet = () => typeCyGet;
"use strict";
// INTERFACES VS TYPE ALIASES
// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces
// É possível usar a interface como um type
function getUser() {
    return {
        nome: 'Vitor',
        email: 'vitor@vitor.com'
    };
}
function setUser(usuario) {
    // ...
}

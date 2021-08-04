// INTERFACES VS TYPE ALIASES
// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces

interface Usuario {
    nome: string;
    email: string;
    address?: string;
}

// É possível usar a interface como um type
function getUser(): Usuario {
    return {
        nome: 'Vitor',
        email: 'vitor@vitor.com'
    }
}

function setUser(usuario: Usuario) { // usuario é uma interface
    // ...
}
function adicionarNoFinal(array, elemento) {

    let array_nova = array;

    array_nova[array.length] = elemento;

    return array_nova;
}

function removerDoFinal(array) {

    let array_nova = array;

    array_nova.length == 0 ? null : array_nova.length = array_nova.length - 1;

    return array_nova;
}

function removerDoInicio(array) {

    let array_nova = [];

    for (let i = 1; i < array.length; i++) {
        adicionarNoFinal(array_nova, array[i]);
    }

    return array_nova;
}

function adicionarNoInicio(array, elemento) {

    let array_nova = [];

    for (let i = 0; i <= array.length; i++) {
        i == 0 ? array_nova[i] = elemento : adicionarNoFinal(array_nova, array[i - 1]);
    }

    return array_nova;
}

function alterarLista(array, index, qtd, elemento) {
    let array_nova = [];
    
    for (let i = 0; i < array.length; i++) {
        if (i == index) {
            elemento != null ? adicionarNoFinal(array_nova, elemento) : ``;
            qtd == 0 ? adicionarNoFinal(array_nova, array[i]) : i += qtd - 1;
        } else {
            adicionarNoFinal(array_nova, array[i]);
        }
    }

    return array_nova;
}
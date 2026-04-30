function contemElemento(array, elemento) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == elemento) {
            return true;
        }
    }

    return false;
}

function buscarPrimeiraPosicao(array, elemento) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == elemento) {
            return i;
        }
    }

    return -1;
}

function buscarUltimaPosicao(array, elemento) {
    for (let i = array.length - 1; i >= 0; i--) {
        if (array[i] == elemento) {
            return i;
        }
    }

    return -1;
}

function concatenar(arrayA, arrayB) {
    array_nova = arrayA;

    for (let i = 0; i < arrayB.length; i++) {
        array_nova[array_nova.length] = arrayB[i];
    }

    return array_nova;
}

function comparar(arrayA, arrayB) {
    for (let i = 0; i < arrayA.length; i++) {
        if (arrayA[i] != arrayB[i]) {
            return false;
        }
    }

    return true;
}

function adicionarNoFinal(array, elemento) {

    let array_nova = array;

    array_nova[array.length] = elemento;

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

function compararV2(arrayA, arrayB) {
    if (arrayA.length != arrayB.length) {
        return false;
    } else {
        for (let i = 0; i < arrayB.length; i++) {
            if (contemElemento(arrayA, arrayB[i])) {
                arrayA = alterarLista(arrayA, buscarPrimeiraPosicao(arrayA, arrayB[i]), 1);
                console.log(arrayA);
            } else {
                return false;
            }
        }
    }

    return true;
}
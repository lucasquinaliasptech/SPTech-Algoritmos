function validar(n) {
    if (n == undefined || n == null) {
        console.log(`Parâmetro ${n} não pode ser nulo ou indefinido`);
        return false;
    } else if (typeof n != 'number') {
        console.log(`Tipo inválido para o argumento ${n}`);
        return false;
    } else {
        return true;
    }
}

function soma(n1, n2) {
    if (!validar(n1, n2)) {
        return;
    }

    return n1 + n2;
}

function calcularDistancia(x1, y1, x2, y2) {
    if (!validar(x1) || !validar(y1) || !validar(x2) || !validar(y2)) {
        return;
    }

    return (((x2 - x1) ** 2) + ((y2 - y1) ** 2)) ** 0.5;
}

function converterParaHoraMinutoSegundo(n) {
    if (!validar(n)) {
        return;
    }

    let h = n / 3600;
    let m = (n / 60) % 60;
    let s = n % 60;

    return `${parseInt(h)}:${parseInt(m)}:${s}`;
}

function ePrimo(n) {
    if (!validar(n)) {
        return;
    }
    
    let contador = 0;

    for (i = 1; i <= n; i++) {
        n % i == 0 ? contador++ : ``;
    }

    if (contador == 2) {
        return true;
    } else {
        return false;
    }
}

function calcularFatorial(n) {
    if (!validar(n)) {
        return;
    }

    if (n == 0) {
        return 1;
    } else {
        let f = 1;
        for (let i = 1; i <= n; i++) {
            f *= i;
        }
        return f;
    }
}

function calcularMedia(v) {
    let soma = 0;

    for (let i = 0; i < v.length; i++) {
        if (!validar(v[i])) {
            return;
        } else {
            soma += v[i];
        }
    }

    return soma / v.length;
}

function calcularMediaPonderada(vm, vp) {
    let pesos = 0;
    let mediaPonderada = 0;

    for (let i = 0; i < vm.length; i++) {
        pesos += vp[i];
        if (!validar(vm[i] || !validar(vp[i]))) {
            return;
        } else {
            mediaPonderada += vm[i] * vp[i];
        }
    }

    if (pesos != 1) {
        console.log(`A soma dos pesos deve ser 1`);
        return;
    }

    return mediaPonderada;
}